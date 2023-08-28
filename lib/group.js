const fs = require('fs')

exports.groupResponse_Remove = async (conn, update) => {
try {
ppuser = await conn.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await conn.groupMetadata(update.id)
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'remove'){
await conn.sendMessage(update.id, {text: `*Sayonara @${num.split("@")[0]}*\n*kalo mau balik lagi ke group ini, wajib bawa gorengan 1 truk😊*`, mentions: [num] })
}}} catch (err) {
console.log(err)
}}}
  
exports.groupResponse_Welcome = async (conn, update) => {
try {
ppuser = await conn.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await conn.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'add') {
await conn.sendMessage(update.id, { text: `*Hello @${num.split("@")[0]}*\n*Welcome to ${metadata.subject}* \n\n*Jangan Lupa Intro*\n*Nama:*\n*Umur:*\n*Hobi:*\n*Askot:*\n\n*Sering² Baca Deskripsi Ya Kak🙏*`, mentions: [num] })
}}} catch (err) {
console.log(err)
}}}
  
exports.groupResponse_Promote = async (conn, update) => {  
const metadata = await conn.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'promote') {
await conn.sendMessage(update.id, { text: `*@${num.split("@")[0]} Naik jabatan jadi admin grup*`, mentions: [num] })
}}} catch (err) {
console.log(err)
}}}

exports.groupResponse_Demote = async (conn, update) => {  
const metadata = await conn.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await conn.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'demote') {
await conn.sendMessage(update.id, { text: `*@${num.split("@")[0]} Turun jabatan jadi admin grup*`, mentions: [num] })
}}} catch (err) {
console.log(err)
}}}