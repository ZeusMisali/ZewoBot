const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Zewo v12 sürümüyle sizlerle.")
.setTitle("<:hypesquad:797544284986409002> Zewo GIF Komutları <:hypesquad:797544284986409002>")
 .setTimestamp()
.setDescription("<a:saok:797820262426476544> **z!gifanimal** = __Hayvan GIF'i atar.__  \n <a:saok:797820262426476544> **z!gifanime** = __Anime GIF'i atar.__  \n <a:saok:797820262426476544> **z!gifara** = __İsmini yazdığınız GIF'i arar.__  \n <a:saok:797820262426476544> **z!gifbaby** = __Bebek GIF'i atar.__  \n <a:saok:797820262426476544> **z!gifcouple** = __Sevgili GIF'i atar.__  \n <a:saok:797820262426476544> **z!gifman** = __Erkek GIF'i atar.__ \n <a:saok:797820262426476544> **z!gifwoman** = __Kadın GIF'i atar.__ ")
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
  name: 'gif',
  category: 'gif',
  description: 'Yardım Menüsü.',
   usage:'z!gif'
}