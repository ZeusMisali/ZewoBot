const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Zewo v12 sürümüyle sizlerle.")
.setTitle("<:hypesquad:797544284986409002> Zewo Logo Komutları <:hypesquad:797544284986409002>")
 .setTimestamp()
.setDescription("<a:saok:797820262426476544>  **z!alev** = __Alevli logo oluşturur.__  \n <a:saok:797820262426476544>  **z!anime** = __Anime yazı tipinde logo oluşturur.__ \n <a:saok:797820262426476544>  **z!altın** = __Altın logo oluşturur.__  \n <a:saok:797820262426476544> **z!arrow** = __Ok işaretli logo oluşturur.__ \n <a:saok:797820262426476544>  **z!banner** = __Banner logo oluşturur.__  \n <a:saok:797820262426476544>  **z!basit** = __Basit logo oluşturur.__  \n <a:saok:797820262426476544>  **z!dinamik** = __Dinamik logo oluşturur.__  \n <a:saok:797820262426476544>  **z!ejderha** = __Ejderha logosu yaparsınız.__  \n <a:saok:797820262426476544>  **z!elmas** = __Elmas logo oluşturur.__  \n <a:saok:797820262426476544>  **z!graffiti** = __Graffiti logo oluşturur.__  \n <a:saok:797820262426476544>  **z!green** = __Yeşil logo oluşturur.__   \n <a:saok:797820262426476544>  **z!habbo** = __Habbo yazı tipinde logo oluşturur.__  \n <a:saok:797820262426476544>  **z!kalın** = __Kalın logo oluşturur.__ \n <a:saok:797820262426476544>  **z!neonmavi** = __Neon Mavi logo oluşturur.__ \n <a:saok:797820262426476544>  **z!red** = __Kırmızı logo oluşturur.__ \n <a:saok:797820262426476544>  **z!sarı** = __Sarı logo oluşturur.__ ")
.setImage("https://cdn.discordapp.com/attachments/692621292414828554/777829395288031232/350kb.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}