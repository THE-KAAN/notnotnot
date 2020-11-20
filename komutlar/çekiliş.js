const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('#ffd348')
    .addField('<:cekilismanager:779329979014971412>','`çekliş-başlat` : **Belirtilen Kanalda Çekiliş Başlatırsınız**')
    .addField('<:cekilismanager:779329979014971412>','`çekiliş-yenile` : **Belirtilen İd deki Çekilişi Yeniler** ')
    .addField('<:cekilismanager:779329979014971412>','`çekiliş-liste` : **Sunucudaki Aktif Çekilişleri Listeler**')
    .addField('<:cekilismanager:779329979014971412>','`çekiliş-bitir` : **Belirtilen İd deki Çekilişi Sonlandırır**')
    .addField('<:cekilismanager:779329979014971412>','`çekiliş-düzenle` : **Çekilişi Düzeltmenizi Sagalar**')
    .addField('<:cekilismanager:779329979014971412>','`istatistik` : **Botunuzun İstatistiklerini Gösterir**')
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/emojis/779329979014971412.png?v=1')
    .setImage('https://cdn.discordapp.com/attachments/778568300619628574/779332232699576390/cekilismanager.png')
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['çekiliş'],
 permLevel: 0
};

exports.help = {
 name: 'yardım-çekiliş'
};