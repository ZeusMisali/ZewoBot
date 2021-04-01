const Discord = require('discord.js')
const db = require('quick.db')
exports.conf = {
    enabled:false,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
}

exports.help = {
    name: 'bot-koruma', 
    description: '',
    usage: ''
}

exports.run = async (client, message, args) => { 

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.");


let kanal = message.mentions.channels.first()
if(kanal) {
db.set(`antiraid_${message.guild.id}`, kanal.id)
const embed = new Discord.MessageEmbed()
embed.setDescription(`Bot-Koruma Aktif Edildi! \n Log Kanalı İse <#${kanal.id}> Olarak Ayarlandı.`)
 return message.channel.send(embed)
}
  
  if(args[0] === "kapat") {
    db.delete(`antiraid_${message.guild.id}`)
const embed = new Discord.MessageEmbed()
embed.setDescription(`Bot-Koruma Başarıyla Deaktif Edildi!`)
     return message.channel.send(embed)
  }
  
}
 