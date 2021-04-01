const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let kişi = message.mentions.members.first() || message.author;
  message.channel.send(`**İstediğiniz Kişinin ID Numarası:** **${kişi.id}**`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:['id'],
  permlevel:0
}

exports.help = {
  name : "id",
  description:"Birisinin İD Sini Alırsınız",
  usage:"!id"
}