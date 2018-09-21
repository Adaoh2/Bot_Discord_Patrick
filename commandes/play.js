// installer npm ytdl-core et opusscript avec FFMPEG ////////////////////////////////
module.exports = {
    name: 'play',
    description: 'play',
    execute(message) {

        const { prefix, token } = require('./config.json');
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        const ytdl = require('ytdl-core');

        //verifie si la personne est dans un salon vocal
        if (!message.member.voiceChannel) {
        	// si il nest pas connecte ca envoie un message derreur
    		return message.channel.send("ERREUR ! : Toi ne pas etre dans vocal salon ! !");
        }

        // verifie si le bot est deja connecte au salon
        if (message.guild.me.voiceChannel) {
        	return message.channel.send("ERREUR ! : Rodrick deja etre connecte dans salon !");
       	}

        // verifie si il y a une url 
        if (!args[0]) {
        	return message.channel.send(" ERREUR ! : Toi pas me donner de url pour musique ! Toi etre tres tres tres con! ");
		}

        // valider linfo
        let validate = ytdl.validateURL(args[0]);

        // verifier validation lol

        if (!validate) {
        	return message.channel.send("ERREUR ! : Toi devoir mettre bonne URL sinon moi pas mettre musique !");
        }

        //info de la video
        let info = ytdl.getInfo(args[0]);

        let connection = message.member.voiceChannel.join();

        //jouer la musique
        let dispatcher = connection.play(ytdl(args[0], {
            filter: "audioonly"
        }));

        //musique qui joue
        message.channel.send("Musique qui joue en ce moment: ${info.title}")

    },
};