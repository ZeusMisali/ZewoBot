const Discord = require ("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setAuthor("Zewo v12 sürümüyle sizlerle.")
.setTitle("<:hypesquad:797544284986409002> **Zewo Koruma Komutları** <:hypesquad:797544284986409002>")
.setDescription(`

  <a:saok:797820262426476544> **z!botizni id** = __Sunucuya giren botlara izin verirsiniz.__
  <a:saok:797820262426476544> **z!bot-koruma #kanal** = __Sunucuya bot girmesini önlersiniz.__
  <a:saok:797820262426476544> **z!kanal-koruma #kanal** = __Kanalların silinmesini önlersiniz.__
  <a:saok:797820262426476544> **z!kanal-koruma-sıfırla** = __Kanal korumasını devredışı bırakırsınız.__
  <a:saok:797820262426476544> **z!rol-koruma #kanal** = __Rollerin silinmesini önlersiniz.__
  <a:saok:797820262426476544> **z!rol-koruma-sıfırla** = __Rol korumasını devredışı bırakırsınız.__

 
`)
.setImage("https://cdn.discordapp.com/attachments/692621292414828554/777829395288031232/350kb.gif")

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};

  exports.help = {
    name: 'koruma', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardım'
};