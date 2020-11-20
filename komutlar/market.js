const Discord = require("discord.js");
const coindb = require("quick.db")
exports.run = async (client, message, args) => {
let fcbakiye = await coindb.fetch(`Bakiye_CoinmanagerCode.${message.author.id}`) || 0
  

let ürün = args[0]
if(!ürün) return message.reply('Markette `Coin Manager Premium` Bulunmakta Almak İçin **!market premium** Satın Alırsan Coin Manager Premium`u Kullanabilirsin')



//AŞAĞIDA VERDİĞİM SADECE 1 ÖRNEK BUNU ÇOĞALTARAK VERİLERİ DEĞİŞEREK SİZE BİR TANE YAPABİLİRSİNİZ KULLANIM : !market silah gibi  
if(ürün === "premium") { 
let kaçtanevar = 99999999999
let fiyat = 10000
let kullanım = 2
let ürünadı = 'Coin Manager Premium'

let kaç_tane_var = await coindb.fetch(`CoinManagerPre_`)

if(fcbakiye < fiyat) {
message.reply('Almak istediğiniz ürün '+fiyat+' TLye satılıyor. Senin de paran yetmiyor.')
return
}
if(kaç_tane_var <= 0) {
message.reply('Bu ürün hiç kalmamış')
return
}
coindb.add(`Bakiye_CoinmanagerCode.${message.author.id}`,-fiyat)

if(!kaç_tane_var) coindb.add(`SilahStokFC_`,3-1)
else coindb.add(`SilahStokFC_`,-1)
message.reply(`Merhaba ${ürünadı} ürününü aldın. ${fiyat} TL Ödedin.`)
}
//YUKARIDA VERDİĞİM SADECE 1 ÖRNEK BUNU ÇOĞALTARAK VERİLERİ DEĞİŞEREK SİZE BİR TANE YAPABİLİRSİNİZ KULLANIM : !market silah gibi  
  
  
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['market'],
  permLevel: 0,
}
exports.help = {
    name: 'market'
}