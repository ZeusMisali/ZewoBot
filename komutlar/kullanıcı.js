const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Zewo v12 sürümüyle sizlerle.")
.setTitle("<:hypesquad:797544284986409002> Zewo Kullanıcı Komutları <:hypesquad:797544284986409002>")
 .setTimestamp()
.setDescription("<a:saok:797820262426476544> **z!avatar** = __Etiketlediğiniz kişinin avatarını görürsünüz.__  \n <a:saok:797820262426476544> **z!davet** = __Beni sunucuna ekle.__  \n <a:saok:797820262426476544> **z!id** = __Etiketlediğiniz kişinin ID'sini görürsünüz.__  \n <a:saok:797820262426476544> **z!isimdeğiştir** = __Kullanıcı adınızı değiştirirsiniz.__  \n <a:saok:797820262426476544> **z!istatistik** = __Bot istatistiklerini görürsünüz.__  \n <a:saok:797820262426476544> **z!ping** = __Botun pingini görürsünüz.__  \n <a:saok:797820262426476544> **z!profil** = __Etiketlediğiniz kişinin profilini görürsünüz.__  \n <a:saok:797820262426476544> **z!yetkilerim** = __Yetkilerinizi görürsünüz.__ \n <a:saok:797820262426476544> **z!yılbaşı** = __Yılbaşının kutlanmasına kaç gün, saat ve dakikası kaldığını gösterir.__ \n <a:saok:797820262426476544> **z!sunucuresmi** = __Sunucu resmini gösterir.__ ")
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
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}