// installer npm ytdl-core et opusscript avec FFMPEG ////////////////////////////////

const ytdl = require('ytdl-core');

exports.run = async (client, message, args, ops) => {

	//verifie si la personne est dans un salon vocal
	if (!message.member.voiceChannel) return message.channel.send("ERREUR ! : Toi ne pas etre dans vocal salon ! !");
	// si il nest pas connecte ca envoie un message derreur

	// verifie si le bot est deja connecte au salon
	if (message.guild.me.voiceChannel) return message.channel.send("ERREUR ! : Rodrick deja etre connecte dans salon !");

	// verifie si il y a une url 
	if (!args[0]) return message.channel.send(" ERREUR ! : Toi pas me donner de url pour musique ! Toi etre tres tres tres con! ");

	// valider linfo
	let validate = await ytdl.validateURL(args[0]);

	// verifier validation lol

	if (!validate) return message.channel.send("ERREUR ! : Toi devoir mettre bonne URL sinon moi pas mettre musique !");

	//info de la video
	let info = await ytdl.GetInfo(args[0]);

	let connection = await message.member.voiceChannel.join();

	//jouer la musique
	let dispatcher = await connection.play(ytdl(args[0], { filter: "audioonly"}));

	//musique qui joue
	message.channel.send("Musique qui joue en ce moment: ${info.title}");

}
