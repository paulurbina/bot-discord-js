const { Client, RichEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`Bot is ready as ${client.user.tag}`);
    client.user.setStatus('dnd');
});

client.on('message', async message => {
    console.log(message.content);

    if(message.content === 'ping') {
        message.reply('pong');
    }
    if(message.content === 'hello') {
        message.channel.send(`Hello ${message.author}`);
    }
    if(message.content.includes('pregunta')) {
        message.channel.send('Aqui sacaremos todas tus dudas!');
    }
    if(message.content === 'tonypera!') {
        message.channel.send('http://github.com/tonypera');
    }
    if(message.content === 'pretty') {
        const embed = new RichEmbed()
            .setTitle('message pretty')
            .setColor('RED')
            .setAuthor('tonypera', 
            'https://st2.depositphotos.com/1742172/10198/v/950/depositphotos_101984682-stock-illustration-cartoon-half-pear.jpg')
        message.channel.send(embed);
    }
    if(message.content === '!clear') {
        const fetched = await message.channel.fetchMessages({limit: 100});
        message.channel.bulkDelete(fetched);
        console.log('Messages Deleted!');
    }
});

client.login('NTQzMDkyNzUxMjQ4NjU0MzU2.Dz3kBw.bVEpMRLiSkku0a1bsZo2GIDR8l4');