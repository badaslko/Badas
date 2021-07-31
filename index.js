//ODcwODU1NDgwNTUyMDcxMjIx.YQS1Xg.xMTz3LOkH8aEReKBdDWBCyLTJTk

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot Online :)')
})

client.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = 'b!';

    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1) 

    if(!message.content.startsWith(prefix)) return;

    if(cmd == 'oi') {
        message.channel.send("salve");
    }
})







client.login('ODcwODU1NDgwNTUyMDcxMjIx.YQS1Xg.xMTz3LOkH8aEReKBdDWBCyLTJTk');