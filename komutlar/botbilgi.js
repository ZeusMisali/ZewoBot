require("moment-duration-format");
const moment = require("moment");
const Discord = require("discord.js");


exports.run = async (client, message, args) => {
const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

  
const istatistikler = new Discord.MessageEmbed()
.setColor("RANDOM")
  .addField(` »  Pingim` ,`${client.ws.ping}ms`) 

   .addField(` <a:discord:797863831274651669> » Çalışma Süresi`, `${duration}`)

  .addField(` <a:discord:797863831274651669> » Yapımcılarım` ,`<@580370436626317323> <@692411581572841544> `)

  .addField(` <a:discord:797863831274651669> » Node.js`, `${process.version}`, true)

  .addField(` <a:discord:797863831274651669> » Discord.js Sürümü `, `${Discord.version}`, true)  

 .addField(`<a:discord:797863831274651669> » Kanal Sayısı`, `${client.channels.cache.size}`)

 .addField(` <a:discord:797863831274651669> » Kullanıcı Sayısı`, client.guilds.cache.reduce((a, b) => a + b.memberCount, 0))

 .addField(` <a:discord:797863831274651669> » Sunucu Sayısı`, `${client.guilds.cache.size}`)

 .addField(`» Linkler`, `[Destek Sunucusu](https://discord.gg/qV72rxcwMU) **|** [Botu Davet Et](https://zewobot-website.glitch.me/)`, true)
  message.channel.send(istatistikler)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'i',
  usage: 'i'
};