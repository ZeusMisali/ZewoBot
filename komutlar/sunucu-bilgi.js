const Discord = require('discord.js');
//nst ayarlar = require('../ayarlar.json')
const prefix = "a/"
const moment = require('moment');
require('moment-duration-format');
exports.run = async(client, message, args) => {
  
  //if (!message.member.hasPermission("MANAGE_GUILD")){
   /* const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RED')
    .setDescription(`Bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisi gerekmektedir!`)
    .setFooter(`${client.user.tag} | ${prefix}yardım`)
    .setTimestamp()
        
    message.channel.send(embed)
 */
  {
  
    var aylar = {
      "01": "Ocak",
      "02": "Şubat",
      "03": "Mart",
      "04": "Nisan",
      "05": "Mayıs",
      "06": "Haziran",
      "07": "Temmuz",
      "08": "Ağustos",
      "09": "Eylül",
      "10": "Ekim",
      "11": "Kasım",
      "12": "Aralık"
    }
    
    let region = {
        "us-central": "Amerika :flag_us:",
        "us-east": "Doğu Amerika :flag_us:",
        "us-south": "Güney Amerika :flag_us:",
        "us-west": "Batı Amerika :flag_us:",
        "eu-west": "Batı Avrupa :flag_eu:",
        "eu-central": "Orta Avrupa :flag_eu:",
        "europe": "Avrupa :flag_eu:",
        "singapore": "Singapur :flag_sg:",
        "london": "Londra :flag_gb:",
        "japan": "Japonya :flag_jp:",
        "russia": "Rusya :flag_ru:",
        "hongkong": "Hong Kong :flag_hk:",
        "brazil": "Brezilya :flag_br:",
        "singapore": "Singapur :flag_sg:",
        "sydney": "Sidney :flag_au:",
        "india": "Hindistan :flag_in:",
        "dubai": "Dubai :flag_ae:",
        "amsterdam": "Amsterdam :flag_nl:",
        "frankfurt": "Frankfurt :flag_de:",
        "southafrica": "Güney Afrika :flag_za:"
    }
    let dogru = {
      "NONE": "Sunucu Doğrulaması Yok.",
      "LOW": "Düşük (E-posta Doğrulaması)",
      "MEDIUM": "Orta (5 Dk Üyelik)",
      "HIGH": "Yüksek (10 Dk Üyelik)",
      "VERY_HIGH": "Çok Yüksek (Telefon Doğrulamalı)"
    }
    
    let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
    
    
    const memberss = message.guild.members.cache.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
    
     
    var duration = moment.duration(client.uptime).format(" D [gün] H [saat] m [dakika] s [saniye]")
    
    
    
        var embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('Zewo Bot Sunucu Bilgi Sistemi')
            .setThumbnail(message.guild.iconURL())
            .addField('Genel Bilgiler', `**Sunucu Sahibi**: ${message.guild.owner} \n**Sunucu Sahibi ID**: ${message.guild.ownerID}\n**Sunucu ID:** ${message.guild.id}\n**Bölgesi:** ${region[message.guild.region]}\n**Doğrulama Seviyesi: ** ${dogru[message.guild.verificationLevel]}` )
            .addField('Diğer Bilgiler', `**Sunucu Oluşturulma Tarihi: ** ${moment(message.guild.createdAt).format('DD')} ${aylar[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY')}\n**Sunucuya Katılım Tarihi: ** ${moment(message.guild.joinedAt).format('DD')} ${aylar[moment(message.guild.joinedAt).format('MM')]} ${moment(message.guild.joinedAt).format('YYYY')}\n**Kısaltması: ** ${message.guild.nameAcronym}\n**Varsayılan Kanal: ** ${message.guild.defaultChannel ? message.guild.defaultChannel : 'Varsayılan Kanal Yok'}`)
            .addField('Üye Bilgileri', `\n**Toplam Üye:** ${üyesayi}\n**Kullanıcılar: ** ${kullanıcılar} \n**Bot Sayısı:** ${botlar}\n**Banlı Sayısı:** ${await message.guild.fetchBans().then(b => b.size)}`)      
            .addField('Emojiler', `**Emoji Sayısı: **${message.guild.emojis.cache.size}`)
            .addField('Roller', `**Rol Sayısı: ** ${message.guild.roles.cache.map(a => a.name), message.guild.roles.cache.size}`)
            .addField('Kanallar', `**Kanal Sayısı: ** ${message.guild.channels.cache.map(a => a.name), message.guild.channels.cache.size}\n**AFK Kanalı: ** ${message.guild.afkChannel ? message.guild.afkChannel : 'AFK Kanalı Yok'}\n**AFK Zaman Aşımı:** ${message.guild.afkTimeout ? message.guild.afkTimeout : 'AFK Kanalı Yok'}`)
            .addField(`Boost Bilgi`, `Takviyesi ${message.guild.premiumSubscriptionCount} Seviyesi ${message.guild.premiumTier}`)
            .setFooter(`${client.user.tag} | z!yardım`)
            .setTimestamp()
        
             message.channel.send(embed);
      
    
    
  }
 };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu", "sunucu-bilgi", "sbilgi", "sb"],
  permLevel: 0,
}
exports.help = {
  name: 'sunucubilgi',
  description: 'Etiketlediğiniz rol hakkında bilgi alırsınız.',
  usage: 'rol-bilgi [rol]'
};