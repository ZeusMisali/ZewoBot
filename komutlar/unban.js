const Discord = module.require("discord.js");
 
module.exports.run = async (client, message, args) => {
 
  const permError = new Discord.MessageEmbed()
    .setColor('#ed455a')
      .setTitle('• Hata: 01 •')
        .setDescription('```Bu Komutu Kullanmak İçin "Üyeleri Yasakla" Yetkisine Sahip Olmalısın```')
   
  const userError = new Discord.MessageEmbed()
    .setColor('#ed455a')
      .setTitle('• Hata: 02 •')
        .setDescription('```Yasağı kaldırmak için bir kullanıcı kimliği girmelisiniz g!unban İD```')
 
  const userError2 = new Discord.MessageEmbed()
    .setColor('#ed455a')
      .setTitle('• Hata: 03 •')
        .setDescription("```ID'de Harf Kullanılanamaz```")
 
  const userError3 = new Discord.MessageEmbed()
    .setColor('#ed455a')
      .setTitle('• Hata: 04 •')
        .setDescription('```Bu Kullanıcı Yasaklanmamış```')
   
  const levelError = new Discord.MessageEmbed()
    .setColor('#ed455a')
      .setTitle('• Hata: 05 •')
        .setDescription('```Sizinle aynı veya daha yüksek bir role sahip bir üyenin yasağını kaldırmazsınız```')
 
 
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send
        (permError).then
          (message.delete()).then
            (msg => msg.delete({timeout: 5000, reason: "xD"}));
 
  let user = args[0];
    if  (!user) return message.channel.send
          (userError).catch(console.error).then
            (message.delete()).then
              (msg => msg.delete({timeout: 5000, reason: "xD"}));
 
  if  (isNaN(args[0])) return message.channel.send
        (userError2).catch(console.error).then
          (message.delete()).then
            (msg => msg.delete({timeout: 5000, reason: "xD"}));
 
  if  (user.highestRole >= message.author.highestRole) return message.channel.send
          (levelError).then
            (message.delete()).then
              (msg => msg.delete({timeout: 5000, reason: "xD"}));
 
 
  const banList = await message.guild.fetchBans();
 
 // console.log(banList.map(s => s.users.id))
 
  if (!user.id === banList) return message.channel.send
      (userError3).then
        (message.delete()).then
          (msg => msg.delete({timeout: 5000, reason: "xD"}));
 
  message.guild.members.unban(user);
message.channel.send(`<@!${user}> Adlı Kullanıcının Yasağı Başarıyla Kaldırıldı.`)
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
        kategori: "Yetkili"
 
  };
 
  exports.help = {
    name: 'unban',
    description: 'İstediğiniz kişinin banını kaldırır.',
    usage: 'unban [kullanıcı] [sebep]'
  };
