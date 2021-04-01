const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Zewo v12 sürümüyle sizlerle.")
.setTitle("<:hypesquad:797544284986409002>  Zewo Moderasyon Komutları <:hypesquad:797544284986409002> ")
 .setTimestamp()
.setDescription("<a:saok:797820262426476544> **z!anket** = __Anket yaparsınız.__  \n <a:saok:797820262426476544> **z!ban** = __Etiketlediğiniz kişiyi banlarsınız.__  \n <a:saok:797820262426476544> **z!çek** = __Etiketlediğiniz kişiyi yanınıza çekersiniz.__  \n  <a:saok:797820262426476544> **z!forceban** = __Etiketlediğiniz kişiye ID ban atarsınız.__  \n <a:saok:797820262426476544> **z!kes** = __Etiketlediğiniz kişinin bağlantısını kesersiniz.__  \n <a:saok:797820262426476544> **z!kick** = __Etikletlediğiniz kişiyi atarsınız.__  \n <a:saok:797820262426476544> **z!küfür-engel aç** = __Küfür korumasını etkin hale getirirsiniz.__  \n <a:saok:797820262426476544> **z!nuke** = __Kanaldaki tüm mesajları tamamen temizler.__  \n <a:saok:797820262426476544> **z!sa-as aç** = __Bot, kişi ''sa'' dediğinde cevap verir.__  \n <a:saok:797820262426476544> **z!sil** = __Belirlediğiniz miktarda mesaj silersiniz. (Max 100)__  \n <a:saok:797820262426476544> **z!slowmode** = __Yavaş modu etkin hale getirirsiniz.__ \n <a:saok:797820262426476544> **z!sunucubilgi** = __Sunucu bilgilerini görürsünüz.__ \n <a:saok:797820262426476544> **z!reklam-engel aç** = __Reklam korumasını etkin hale getirirsiniz.__ \n <a:saok:797820262426476544> **z!unban** = __Etiketlediğiniz kişinin banını kaldırırsınız.__ \n <a:saok:797820262426476544> **z!üyedurum** = __Üyelerin durumlarını görürsünüz.__ ")
.setImage("https://cdn.discordapp.com/attachments/692621292414828554/777829395288031232/350kb.gif")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}