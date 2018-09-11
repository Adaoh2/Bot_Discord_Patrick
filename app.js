const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", message => {

    // Your commands here
    // Result in: If the user's message contains "ping" then
    const config = require("./config.json");
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // We declare the prefix
    var prefix = '.';

    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("Pong!");



    };

    if (message.content.startsWith(prefix + "mp")) {
        message.author.send("Here is a private message !")
    };


    // The robot will answer this if a user does ?Help
    if (message.content.startsWith(prefix + "help")) {
        message.author.send("")
    };

    if (message.content.startsWith(prefix + "date")) {
        var dates = ["Nous sommes le 83 Septembre 2942.", "Nous sommes le 12 Novembre 1983.", "Nous sommes le 57 Janvier 1773.", "Nous sommes le 30 Février 2465,7."];
        var date = Math.floor(Math.random() * dates.length);
        message.channel.send(dates[date]);

    };

    if(message.content == "merci") {
        message.channel.send("De rien")
        var mercis = ["De rien", "C'est normal", "Merci qui ?? ;)", "Alors, on dit merci, mais pas s'il vous plaît ? Rhololo les jeunes aujourd'hui :O"];
        var merci = Math.floor(Math.random() * mercis.length);
        message.channel.send(mercis[merci]);

    }


    if (message.content.startsWith(prefix + "say")) {
        // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
        // To get the "message" itself we join the `args` back into a string with spaces: 
        const sayMessage = args.join(" ");
        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
        message.delete().catch(O_o => {});
        // And we get the bot to say the thing: 
        message.channel.send(sayMessage);
    }



});

client.login("TOKEN");
