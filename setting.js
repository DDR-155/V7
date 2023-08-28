const fs = require('fs')
const chalk = require('chalk')

// BOT SETTING
global.AutoRead = true // true jika ingin mengaktifkan bot autoread
global.AutoMengetik = true  // true jika ingin mengaktifkan bot mengetik
global.ModePublic = true  // false jika ingin mematikan bot mode public
global.WaktuDelayBug = 2000 // berarti delay nya 2 detik buat ngirim bug
global.Max_Bug_Emoji = 40 // berarti batas maksimal 30× spam bug emoji
global.Max_Bug_Attack = 25 // berarti batas maksimal 20× spam bug attack

// OWNER SETTING
global.BotName = ' DRAS - MD'
global.OwnerName = 'DDR-505'
global.OwnerNumber = '6280844381740'
global.DeveloperBot = ['6280844381740']

// MESSAGES
global.mess = {
DeveloperOnly: 'Fitur ini Khusus Developer Bot',
OwnerOnly: 'Fitur ini Khusus Owner Bot',
AdminOnly: 'Fitur ini Khusus Admin Group',
GroupOnly: 'Gunakan Fitur Nya Digroup',
PmOnly: 'Gunakan Fitur Nya Dichat Pribadi',
BotAdmin: 'Jadikan Bot Admin Grup Terlebih Dahulu',
AksesOnly: 'Kamu Belum Bisa Akses Fitur Ini. Hubungi Owner Bot Jika Mau Akses Fiturnya',
NotNumber: 'Nomor Tersebut Tidak Terdaftar Di WhatsApp',
AutoReadAktif: '*Auto Read : Hidup*',
AutoReadMati: '*Auto Read : Mati*',
PesanBugDikirim: '*Tunggu Sebentar Bug Sedang Dikirim Ke Target*',
PesanBotKirimKontak: 'Tuh Kontak Owner Saya, Jangan Di Spam Ya Kak ^_^',
}

// DATABASE
global.myOwner = JSON.parse(fs.readFileSync('./connect/database/owner.json'))
global.murBug = JSON.parse(fs.readFileSync('./connect/database/murbug.json'))
global.dbCmd = JSON.parse(fs.readFileSync('./connect/database/allcmd.json'))
global.dbHit = JSON.parse(fs.readFileSync('./connect/database/reqhit.json'))

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})