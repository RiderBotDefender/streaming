const Discord = require('discord.js');
const client = new Discord.Client();




client.on('ready', () => {
    client.user.setGame(`حياتي تعس, في نحس`, "http://twitch.tv/Streammingg")	
});





client.login(process.env.BOT_TOKEN)
