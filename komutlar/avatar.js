const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
const embed = message.mentions.users.first()
let user;
if (message.mentions.users.first())  {user = message.mentions.users.first();}
  
else {user = message.author;}

return message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription (`Buyrun Avatarınız;`)
                            
.setImage(user.avatarURL({ dynamic: true, format: 'png', size: 1024 })))

};

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["pp"],
permLevel: 0
  
};
  
exports.help = {
name: 'avatar'
};