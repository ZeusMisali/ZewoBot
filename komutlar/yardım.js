const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Zewo v12 sürümüyle sizlerle.")
.setTitle("<:hypesquad:797544284986409002> Zewo Bot Yardım Menüsü <:hypesquad:797544284986409002> ")
 .setTimestamp()
.setDescription(" <a:saok:797820262426476544> **z!diğer** = __Diğer sistem komutlarını görüntülersiniz.__ \n <a:saok:797820262426476544> **z!eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n <a:saok:797820262426476544> **z!gif** = __GIF komutlarını görüntülersiniz.__  \n <a:saok:797820262426476544> **z!koruma** = __Koruma komutlarını görüntülersiniz.__ \n <a:saok:797820262426476544> **z!kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n <a:saok:797820262426476544> **z!logo** = __Logo komutlarını görüntülersiniz.__ \n <a:saok:797820262426476544> **z!moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ ")
.setImage("https://cdn.discordapp.com/attachments/692621292414828554/777829395288031232/350kb.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'z!yardım'
}