// SAY ///////=
module.exports = {
    name: 'say',
    description: 'say',
    execute(message) {


         const {
             prefix,
             token
         } = require('./config.json');
        
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
        // To get the "message" itself we join the `args` back into a string with spaces: 
        const sayMessage = args.join(" ");
        // Then we delete the command message (sneaky, right?). 
        // The catch just ignores the error with a cute smiley thing.
        message.delete().catch(O_o => {});
        // And we get the bot to say the thing: 
        message.channel.send(sayMessage);
    },
};