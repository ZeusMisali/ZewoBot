const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Zewo v12 sürümüyle sizlerle.")
.setTitle("<:hypesquad:797544284986409002> Zewo Diğer Sistem Komutları <:hypesquad:797544284986409002>")
 .setTimestamp()
.setDescription("<a:saok:797820262426476544> **z!giftema** = __#YAKINDA__  \n <a:saok:797820262426476544> **z!j4jtema** = __#YAKINDA__  \n <a:saok:797820262426476544> **z!nitrotema** = __#YAKINDA__  \n <a:saok:797820262426476544> **z!oyuntema** = __#YAKINDA__  \n <a:saok:797820262426476544> **z!publictema** = __#YAKINDA__ ")
.setImage("https://cdn.discordapp.com/attachments/692621292414828554/777829395288031232/350kb.gif")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'diğer',
  category: 'diğer',
  description: 'Yardım Menüsü.',
   usage:'z!diğer'
}