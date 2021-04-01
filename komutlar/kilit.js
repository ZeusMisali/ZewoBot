const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return 
  let everyone = message.guild.roles.cache.find(a => a.name === "@everyone");
  let permObjesi = {};
  let everPermleri = message.channel.permissionOverwrites.get(everyone.id);
  everPermleri.allow.toArray().forEach(p => {
    permObjesi[p] = true;
  });
  everPermleri.deny.toArray().forEach(p => {
    permObjesi[p] = false;
  });
  if(message.channel.permissionsFor(everyone).has('SEND_MESSAGES')) {
   
    let kilitle = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
    .setDescription('<a:kilit:797837872413278239> **Kanal Başarıyla Kitlendi.** <a:blob_tick:797837802599219250>')
    .setColor('#7289DA')
    permObjesi["SEND_MESSAGES"] = false;
    message.channel.createOverwrite(everyone, permObjesi);
    message.channel.send({embed:kilitle})
  } else {
    let kilit = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
    .setDescription('**Kanal kilidi Başarıyla açıldı.** <a:blob_tick:797837802599219250> ')
    .setColor('#7289DA')
    permObjesi["SEND_MESSAGES"] = null;
    message.channel.createOverwrite(everyone, permObjesi);
    message.channel.send({embed:kilit});
  };
};
exports.conf = {
 enabled: true, 
  guildOnly: true, 
  aliases: ["kilit"], 
  permLevel: 0 
};

exports.help = {
  name: "kilit" 
};
