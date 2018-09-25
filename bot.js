const Discord = require('discord.js');
const client = new Discord.Client();




client.on('ready', () => {
    client.user.setGame('حياتي تعيسة ما بقى لي شي اسويه')	
});





client.login(process.env.BOT_TOKEN)
