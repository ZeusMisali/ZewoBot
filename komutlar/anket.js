const Discord = require('discord.js');
exports.run = async (client, message, args) => {

let anket = args.slice(0).join(" ")
if(!anket) return message.channel.send("Ne Anketi Yapacağım?")
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
let Kexpert = new Discord.MessageEmbed()
.setFooter(message.author.username, message.author.avatarURL)
.setColor("RANDOM")
.setTitle(message.guild.name +" Anket")
.setDescription(`
${anket}

✅ → Anketi Kabul Edersiniz.
❌ → Anketi Kabul Etmezsiniz.
`)
message.channel.send(Kexpert).then(async m => {
await m.react("✅")
await m.react("❌")
})
}
// CrewCode
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama"],
  permLevel: 0
}

exports.help = {
  name: 'anket',
  description: "Discord Code Share Anket Komutu",
  usage: '-anket <ahnketyapılcakmesaj>'
}