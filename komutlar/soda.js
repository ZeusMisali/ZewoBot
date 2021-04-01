const Discord = require('discord.js');
const funnyWords = require("funny-words");

exports.run = async (client, message, args) => {
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`İkram edeceğin istediğin kişiyi etiketlemelisin.`)).then(a => a.delete({timeout: 10000}))
var gifler = [
  "https://cdn.discordapp.com/attachments/765956003728326677/766078940606365766/8e70d198-9ddc-40aa-b0c6-ccb4573f14a42F200w.gif",
  "https://cdn.discordapp.com/attachments/765956003728326677/766079130604142592/8e70d198-9ddc-40aa-b0c6-ccb4573f14a42Fsource.gif",
  "https://cdn.discordapp.com/attachments/765956003728326677/766079137583595551/8e70d198-9ddc-40aa-b0c6-ccb4573f14a42Fezgif.com-crop2011.gif",
  "https://cdn.discordapp.com/attachments/765956003728326677/766079126783393833/8e70d198-9ddc-40aa-b0c6-ccb4573f14a42F63da2a34e508e0dfb4a1ac59e602488f.gif",
];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];
if(message.author.id === message.mentions.members.first().id) return message.channel.send(new Discord.MessageEmbed().setColor('#00567e').setTitle('Dur Orda!').setDescription('Aç gözlü olma oğlum ikram ediceksin.')).then(a => a.delete({timeout: 10000}))
message.channel.send(`> ${message.author} ${message.mentions.members.first()} **kişisine soda ikram ediyor..**`, new Discord.MessageAttachment(resimler));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'soda'
};