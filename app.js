const Discord = require('discord.js');
const client = new Discord.Client();

// Dès que la constante 'client' est initialisée (avec 'new Discord.Client()')
// on peut y accéder, on peut donc l'utiliser pour lire config.json et donc la valeur 
// de config.token
const config = require("./config.json");
client.login(config.token);



// Ffonction principale du programme. Elle écoute en permanence ce qui se passe dans la
// chatroom Discord, et répond aux messages qui correspondent aux commandes ci-dessous.
client.on("message", message => {

    // Your commands here
    // Result in: If the user's message contains "ping" then
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Le préfixe permet au bot de savoir que la commande lui est addressée
    var prefix = '.';


    ///////////////////////////////////////////////////////////////////////////
    // les commandes en tant que telles sont ci-dessous

    // PING ///////
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("Pong!");
    };


    // MP ///////
    if (message.content.startsWith(prefix + "mp")) {
        message.author.send("Here is a private message !")
    };


    // HELP ///////
    if (message.content.startsWith(prefix + "help")) {
        message.author.send("")
    };


	
    // DATE ///////
    if (message.content.startsWith(prefix + "date")) {
        var dates = ["Nous sommes le 83 Septembre 2942.", 
		     "Nous sommes le 12 Novembre 1983.", 
		     "Nous sommes le 32 Décembre sur Terre.", 
		     "Nous sommes le 57 Janvier 1773.", 
		     "Nous sommes le 30 Février 2465,7."];
     
	var date = Math.floor(Math.random() * dates.length);
        message.channel.send(dates[date]);

    };

    // MERCI ///////
    if (message.content.startsWith(prefix + "merci")) {
        message.channel.send("De rien")
    }


    // SAY ///////
    if (message.content.startsWith(prefix + "say")) {
        // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
        // To get the "message" itself we join the `args` back into a string with spaces: 
        const sayMessage = args.join(" ");
        // Then we delete the command message (sneaky, right?). 
	// The catch just ignores the error with a cute smiley thing.
        message.delete().catch(O_o => {});
        // And we get the bot to say the thing: 
        message.channel.send(sayMessage);
    }

});
