const Discord = require('discord.js');
const client = new Discord.Client();




client.on('ready', function(){	
    var ms = 40000 ;	
    var setGame = ['اتمنى افرح من قلبي ولو مره وحدة','حياتي تعيسة مره'];	
    var i = -1;	
    var j = 0;	
    setInterval(function (){	
        if( i == -1 ){	
j = 1;	
       }	
        if( i == (setGame.length)-1 ){	
            j = -1;	
      }	
       i = i+j;	
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);	
}, ms);	
	
});



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.login(process.env.BOT_TOKEN)
