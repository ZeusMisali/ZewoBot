const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Zewo v12 sürümüyle yeniden sizlerle.")
.setTitle("<:hypesquad:797544284986409002> Zewo Eğlence Komutları <:hypesquad:797544284986409002>")
 .setTimestamp()
.setDescription("<a:saok:797820262426476544> **z!aşk** = __Etiketlediğiniz kişi ile aşk seviyenizi ölçer.__  \n <a:saok:797820262426476544> **z!atatürk** = __Dene ve gör... (1881-1938)__  \n <a:saok:797820262426476544> **z!düello** = __Etiketlediğiniz kişi ile düello atarsınız.__  \n <a:saok:797820262426476544> **z!efkarım** = __Efkarınızı ölçer.__  \n <a:saok:797820262426476544> **z!espri** = __Rastgele bir espri patlatır.__  \n <a:saok:797820262426476544> **z!fal** = __Falınıza bakar.__  \n <a:saok:797820262426476544> **z!fbi** = __FBI GIF'i paylaşır.__ \n <a:saok:797820262426476544> **z!kaçcm** = __Kaç santimetre olduğunu ölçer.__ \n <a:saok:797820262426476544> **z!kare** = __Yazdığınız sayının karesini hesaplar. (x²)__ \n <a:saok:797820262426476544> **z!karıştır** = __Yazdığınız kelimenin harflerini karıştırır.__ \n <a:saok:797820262426476544> **z!mcskin** = __Yazdığınız kullanıcı adının Minecraft cildini gösterir.__ \n <a:saok:797820262426476544> **z!öp** = __Etiketlediğiniz kişiyi öpersiniz.__ \n <a:saok:797820262426476544> **z!slots** = __Slots oyununu oynarsınız.__ \n <a:saok:797820262426476544> **z!soda** = __Etiketlediğiniz kişiye soda ısmarlarsınız.__ \n <a:saok:797820262426476544> **z!tokat** = __Etiketlediğiniz kişiye tokat atarsınız.__ \n <a:saok:797820262426476544> **z!token** = __Botun Tokenini görürsünüz.__ \n <a:saok:797820262426476544> **z!wasted** = __Profil resminize wasted efekti verir.__ ")
.setImage("https://cdn.discordapp.com/attachments/692621292414828554/777829395288031232/350kb.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}