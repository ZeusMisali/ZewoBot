const Discord = require('discord.js');
const funnyWords = require("funny-words");

exports.run = async (client, message, args) => {
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription('Sarılmak istediğin kişiyi etiketlemelisin')).then(a => a.delete({timeout: 10000}))
var gifler = [
  'https://cdn.discordapp.com/attachments/767145493822046229/767156810796498954/BJF5_uXvZ.gif',
  'https://cdn.discordapp.com/attachments/767145493822046229/767156815381135380/BkBs2uk_b.gif',
  'https://cdn.discordapp.com/attachments/767145493822046229/767156818103107585/H1ui__XDW.gif',
  'https://cdn.discordapp.com/attachments/767145493822046229/767156823790452776/SywetdQvZ.gif',
  'https://cdn.discordapp.com/attachments/767145493822046229/767156853250719784/BkBs2uk_b.gif',
  'https://cdn.discordapp.com/attachments/767145493822046229/767156865829306419/8e70d198-9ddc-40aa-b0c6-ccb4573f14a42FHJU2OdmwW.gif',
  'https://cdn.discordapp.com/attachments/767145493822046229/767156871458455592/BJ0UovdUM.gif',
  'https://cdn.discordapp.com/attachments/767145493822046229/767156876198019082/ByPGRkFVz.gif'
];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];
if(message.author.id === message.mentions.members.first().id) return message.channel.send(new Discord.MessageEmbed().setColor('#9c5cb2').setTitle('Agaa beeeeeeeee!').setDescription('O kadar yoklukta mısın la kendine sarılıyorsun, Yıkıksın oğlum. 🙄')).then(a => a.delete({timeout: 10000}))
message.channel.send(`> ${message.author} ${message.mentions.members.first()} **adlı kişiye sarıldı.**`, new Discord.MessageAttachment(resimler));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sarıl'
};