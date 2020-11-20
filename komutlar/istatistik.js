const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const istatistikler = new Discord.MessageEmbed()
.setColor('#ffd348')
  .addField(`:scroll: »  Pingim` ,`${client.ws.ping}ms`,true)
  .addField(`:incoming_envelope: » Yapımcım` ,`Merdin#4784`,true)
  .addField(`:label: » Node.js`, `${process.version}`, true)
 .addField(`:bar_chart: » Kanal Sayısı`, `${client.channels.cache.size  }`, true)
 .addField(`:postbox: » Kullanıcı Sayısı`, `${client.users.cache.size}`, true)
 .addField(`:envelope: » Sunucu Sayısı`, `${client.guilds.cache.size}`, true)
 .addField(`» Linkler`, `[Destek Sunucusu](https://discord.gg/Y3hgeuZDQy) | [Davet Linki](https://discord.com/oauth2/authorize?client_id=776553918301601843&scope=bot&permissions=8)`, true)
  message.channel.send(istatistikler)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'Otorol sistemini ayarlamaya yarar.',
  usage: '-otorol-ayarla @rol #kanal'
}; 