const Discord = require('discord.js');
const funnyWords = require("funny-words");

exports.run = async (client, message, args) => {

  if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`${message.author} Neyi karıştırmak istiyorsan onu yaz!`)).then(a => a.delete({timeout: 10000}))
  let çıktı = [];
  args.forEach(a => {
  çıktı.push(funnyWords(a));
  });
  message.channel.send(new Discord.MessageEmbed().setColor('#00567e').setThumbnail('https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2Fa2c7bad51bf0fb1ccdcada8916d08774.gif')
  .addField(message.author.username, `\`\`\`${args.slice(0).join(' ')}\`\`\``)
  .addField(`(Oldu sana);`, `\`\`\`${çıktı.join(' ')}\`\`\``)
  )
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'karıştır'
};