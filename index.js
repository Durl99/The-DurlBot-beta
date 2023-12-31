//BOT CREADO POR DURL 

// SIGUEME EN INSTA: imxdurl


// MODULOS 
const {default: makeWASocket, makeInMemoryStore, useMultiFileAuthState, delay, downloadContentFromMessage, DisconnectReason, templateMessage, MediaType, GroupSettingChange, isBaileys, WASocket, WAProto, getStream, relayWAMessage, Miimetype, proto, mentionedJid, processTime, MessageTypeProto, BufferJSON, GroupMetadata, getContentType} = require("@adiwajshing/baileys")

const P = require("pino")
const fs = require("fs")
const util = require("util")
const clui = require("clui")
const ms = require("ms")
const speed = require("performance-now")
const fetch = require("node-fetch")
const axios = require("axios")
const webp = require("node-webpmux")
const chalk = require("chalk")
const cfonts = require("cfonts")
const moment = require("moment-timezone")
const ffmpeg = require("fluent-ffmpeg")
const acrcloud = require("acrcloud")
const { Boom } = require("@hapi/boom")
const { exec, spawn, execSync } = require("child_process")
const { getBuffer, generateMessageTag, tempRuntime, clockString, color, fetchJson, getGroupAdmins, getRandom, parseMention, getExtension, banner, uncache, nocache, isFiltered, addFilter } = require('./archivos/herramientas')
const varping = speed()
const ping = speed() - varping
const timestamp = speed()
const latensi = speed() - timestamp



// CONSTANTES CREADAS

prefixo = "/" // Cambiar Prefijo
nomebot = "The Durl Bot MD2" // Cambiar nombre del Bot




// No borrar
nomedono = "Durl" // No cambiar
numerodono = "+50672879005" // No cambiar
nomover= `
● Creado Por Durl
● Instagram: imxdurl
● Versión 1.0
● Modulos Actualizados
`
nomober2 = "Creditos Para Durl"

//Conexión 
async function connectToWhatsApp () {
const store = makeInMemoryStore({ logger: P().child({ level: "silent", stream: "store" })})
console.log(nomober2)
console.log(banner.string)
console.log(nomover)
const { state, saveCreds } = await useMultiFileAuthState('./qr_code')

const anita = makeWASocket({
logger: P({ level: "silent" }),
printQRInTerminal: true,
browser: ['Base - anita','macOS','desktop'], auth: state })

anita.ev.on("creds.update", saveCreds)
store.bind(anita.ev)

anita.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})
anita.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})
anita.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update

if (connection === "close") {
const shouldReconnect = lastDisconnect && lastDisconnect.error && lastDisconnect.error.output && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut
console.log("Ocurrió un Error :", lastDisconnect.error, "Intentando Conectar...", shouldReconnect)

if (shouldReconnect) {
connectToWhatsApp()}
} else if (connection === "open") {
console.log("El bot está Conectado Exitosamente")
}
})

anita.ev.on("messages.upsert", async m => {
try {
const info = m.messages[0]
if (!info.message) return 
if (info.key && info.key.remoteJid == "status@broadcast") return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextInfo" ? altpdf[2] : altpdf[1] : altpdf[0]
const content = JSON.stringify(info.message)
const from = info.key.remoteJid
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''

const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

// Constantes Creadas Por Durl

const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await anita.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const nome = info.pushName ? info.pushName : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? anita.sendMessage(from, {text: teks.trim(), mentions: memberr}) : anita.sendMessage(from, {text: teks.trim(), mentions: memberr})}
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).mimetype || ""
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const pushname = info.pushName ? info.pushName : ''
const isBot = info.key.fromMe ? true : false
const isOwner = numerodono.includes(sender)
const BotNumber = anita.user.id.split(':')[0]+'@s.whatsapp.net'
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(BotNumber) || false
const isUrl = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) }
const deviceType = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web'
const options = { timeZone: 'America/Sao_Paulo', hour12: false }
const data = new Date().toLocaleDateString('pt-BR', { ...options, day: '2-digit', month: '2-digit', year: '2-digit' })
const hora = new Date().toLocaleTimeString('pt-BR', options)


// Constantes Nuevas

const enviar = (text) => {
anita.sendMessage(from, {text: text}, {quoted: info})}

//Const is (Extras)

const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage") 
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}

//Respuestas Automaticas
respuesta = {
espere: " *💫  Querido Usuario , espere un momento Porfavor* ",
registrate: ` *💫  Hola ${pushname}*, *registrese Porfavor*: ${prefixo}rg nombre/edad`,
rg: " *💫  Querido Usuario , usted ya se encuentra registrado, no haga spam porfavor* ",
premium: " *💫  Querido Usuario , para poder usar este comando debes comprar la versión premiun* ",
bot: " *💫  Querido Usuario , este comando es exclusivo solo para el Bot* ",
dono: " *💫  Querido Usuario , este comando está bloqueado y solo puede ser usado por Durl* ",
grupo: " *💫  Querido Usuario , este comando es solo para grupos* ",
privado: " *💫  Querido Usuario , este comando es solo para chats Privados* ",
admin: " *💫  Querido Usuario , este comando es solo para Administradores* ",
botadmin: " *💫  Querido Usuario , Para usar este comando el bot debe ser Administrador* ",
error: " *💫  Querido Usuario , intentelo nuevamente, si el error persiste comuniquese con Durl* ",
link : " *💫  Querido Usuario , Porfavor coloque un Link* ",
nombre: " *💫  Querido Usuario , Porfavor indiqueme que debo buscar*",
gif: " *💫  Querido Usuario , remarque un Sticker en Movimiento Porfavor*",
especial : "*💫  Querido Usuario , está Prohibido escribir emojis o caracteres especiales*"
}

// Anti Spam

if (isCmd) {
if (isFiltered(sender)) {
return enviar('Sin spam Porfavor... Espere 5 Segundos...')
} else {
addFilter(sender)}}

//Mensage en Consola

if (isGroup) {
if (isGroup && isGroup) console.log(`${color('┏━━━━━━━━━┅┅┄┄⟞⟦ ⟝┄┄┉┉━━━━━━━━━┓', 'yellow')}\n${color('┃', 'yellow')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'yellow')} ${color('Nombre:', 'yellow')} ${color(pushname, 'white')}\n${color('┃', 'yellow')} ${color('Horário:', 'yellow')} ${color(hora, 'white')}\n${color('┃', 'yellow')} ${color('comando:', 'yellow')} ${color(comando)}\n${color('┃', 'white')} ${color('Palabras:', 'yellow')} ${color(budy.length, 'yellow')}\n${color('┃', 'yellow')} ${color('Grupo:', 'yellow')} ${color(groupName, 'white')}\n${color('┗━━━━━━━━┅┅┄┄⟞⟦⟧⟝┄┄┉┉━━━━━━━━┛', 'yellow')}`)
 if (!isGroup && isGroup) console.log(`${color('┏━━━━━━━━━┅┅┄┄⟞⟦ ⟝┄┄┉┉━━━━━━━━━┓', 'yellow')}\n${color('┃', 'yellow')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'yellow')} ${color('Nombre:', 'yellow')} ${color(pushname, 'white')}\n${color('┃', 'yellow')} ${color('Horário:', 'yellow')} ${color(time, 'white')}\n${color('┃', 'yellow')} ${color('comando:', 'yellow')} ${color('No', 'white')}\n${color('┃', 'yellow')} ${color('Palabras:', 'yellow')} ${color(budy.length, 'white')}\n${color('┃', 'yellow')} ${color('Grupo:', 'yellow')} ${color(groupName, 'white')}\n${color('┗━━━━━━━━┅┅┄┄⟞⟦⟧⟝┄┄┉┉━━━━━━━━┛', 'yellow')}`)
}

//comandos con prefixo

switch(comando) {

// Crea tus comandos Aqui
case "hola":
enviar("Hola hermano , todo funciona bien")
break
case "creador":
anita.sendMessage(from,{ text : "Mi creador es Durl"},{ quoted : info})
break









//Comandos sin prefixo
default:
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("Could not find MIME for Buffer <null>") && !e.includes("Cannot read property 'conversation' of null") && !e.includes("Cannot read property 'contextInfo' of undefined") && !e.includes("Cannot set property 'mtype' of undefined") && !e.includes("jid is not defined")) {
console.log('Error : %s', color(e, 'yellow'))
}
}

})

}
connectToWhatsApp()