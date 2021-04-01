const Discord = require("discord.js");

exports.run = (client, message) => {

const FwhyCode = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**Çok pahalısın ulan mutluluk.** \n**Efkarınız:** **%${FwhyCode}** **Efkar :champagne_glass:** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "efkarım",
  description: "Zewo Bot | Efkarınızı ölçer",
  usage: "efkar Ölçer"
};
