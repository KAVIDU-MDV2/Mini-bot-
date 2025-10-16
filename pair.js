const express = require('express');
const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');
const router = express.Router();
const pino = require('pino');
const moment = require('moment-timezone');
const Jimp = require('jimp');
const crypto = require('crypto');
const axios = require('axios');
const yts = require('yt-search');
const fetch = require('node-fetch');
const os = require('os');
const ddownr = require('denethdev-ytmp3'); 
 const reply = async(teks) => {
             return await socket.sendMessage(sender, { text: teks }, { quoted: msg })
          }
const apikey = `edbcfabbca5a9750`;
const { initUserEnvIfMissing,getconfig } = require('./mongodb');
const { initEnvsettings, getSetting } = require('./settings');
const { updateSetting } = require('./settings');
/// META AI AND FAKE FOWD 
const adhimini = {
  key: {
    remoteJid: "status@broadcast",  
    participant: "0@s.whatsapp.net", 
    fromMe: false,
    id: "META_AI_FAKE_ID_001"
  },
  message: {
    contactMessage: {
      displayName: "ʙʟᴏᴏᴅ xᴍᴅ ᴍɪɴɪ",
      vcard: `BEGIN:VCARD
VERSION:3.0
N:Meta AI;;;;
FN:Meta AI
ORG:Meta Platforms
TEL;type=CELL;type=VOICE;waid=13135550002:+1 313 555 0002
END:VCARD`
    }
  }
};
const fakeForward = {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363404348971495@newsletter', 
                newsletterName: '𝙱𝙻𝙾𝙾𝙳 𝚇𝙼𝙳 𝙼𝙸𝙽𝙸 🏮',
                serverMessageId: '115'
            }
        };
//=======================================
const autoReact = getSetting('AUTO_REACT') || 'off';

//=======================================
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers,
    jidNormalizedUser,
    proto,
    downloadContentFromMessage,
    prepareWAMessageMedia,
    generateWAMessageFromContent
} = require('@whiskeysockets/baileys');
//=======================================
const config = {
    AUTO_LIKE_STATUS: 'true',
    AUTO_RECORDING: 'true',
    AUTO_LIKE_EMOJI: ['🧩', '🍉', '💜', '🌸', '🪴', '💊', '💫', '🍂', '🌟', '🎋', '😶‍🌫️', '🫀', '🧿', '👀', '🤖', '🚩', '🥰', '🗿', '💜', '💙', '🌝', '🖤', '💚'],
    PREFIX: '.',
    MAX_RETRIES: 3,
    GROUP_INVITE_LINK: 'https://chat.whatsapp.com/JUj7YfDEAxJ5LoBBeo85Ba',
    ADMIN_LIST_PATH: './admin.json',
    IMAGE_PATH: 'https://files.catbox.moe/b7gyod.jpg',
    NEWSLETTER_JID: '120363404348971495@newsletter',
    NEWSLETTER_MESSAGE_ID: '428',
    OTP_EXPIRY: 300000,
    NEWS_JSON_URL: '',
    BOT_NAME: '𝐁ʟᴏᴏᴅ 𝐗ᴍᴅ 𝐌ɪɴɪ',
    OWNER_NAME: '𝐒ᴀᴄʜɪᴛʜʀᴀ 𝐌ᴀᴅᴜꜱᴀɴᴋᴀɪ',
    OWNER_NUMBER: '94761332610',
    BOT_VERSION: '1.0.0',
    BOT_FOOTER: '> 𝐁ʟᴏᴏᴅ 𝐗ᴍᴅ 𝐌ɪɴɪ',
    CHANNEL_LINK: 'https://whatsapp.com/channel/0029Vb6rcemKwqSMwW4l5w0l',
    BUTTON_IMAGES: {
        OWNER: 'https://files.catbox.moe/b7gyod.jpg'
    }
};

const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');

const mongoUri = 'mongodb+srv://sachi:99999978666@cluster0.g0op9im.mongodb.net/';
const client = new MongoClient(mongoUri);
let db;

async function initMongo() {
    if (!db) {
        await client.connect();
        db = client.db('Podda');
        await db.collection('sessions').createIndex({ number: 1 });
    }
    return db;
}

function generateListMessage(text, buttonTitle, sections) {
    return {
        text: text,
        footer: config.BOT_FOOTER,
        title: buttonTitle,
        buttonText: "Select",
        sections: sections
    };
}
function generateButtonMessage(content, buttons, image = null) {
    const message = {
        text: content,
        footer: config.BOT_FOOTER,
        buttons: buttons,
        headerType: 1
    };
    if (image) {
        message.headerType = 4;
        message.image = typeof image === 'string' ? { url: image } : image;
    }
    return message;
}
//=======================================
const activeSockets = new Map();
const socketCreationTime = new Map();
const SESSION_BASE_PATH = './session';
const NUMBER_LIST_PATH = './numbers.json';

if (!fs.existsSync(SESSION_BASE_PATH)) {
    fs.mkdirSync(SESSION_BASE_PATH, { recursive: true });
}
//=======================================
function loadAdmins() {
    try {
        if (fs.existsSync(config.ADMIN_LIST_PATH)) {
            return JSON.parse(fs.readFileSync(config.ADMIN_LIST_PATH, 'utf8'));
        }
        return [];
    } catch (error) {
        console.error('Failed to load admin list:', error);
        return [];
    }
}
function formatMessage(title, content, footer) {
    return `${title}\n\n${content}\n\n${footer}`;
}
function getSriLankaTimestamp() {
    return moment().tz('Asia/Colombo').format('YYYY-MM-DD HH:mm:ss');
}
// Utility function for runtime formatting (used in 'system' case)
function runtime(seconds) {
    seconds = Number(seconds);
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    const dDisplay = d > 0 ? d + (d === 1 ? " day, " : " days, ") : "";
    const hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    const mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    const sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}
//=======================================
async function joinGroup(socket) {
    let retries = config.MAX_RETRIES;
    const inviteCodeMatch = config.GROUP_INVITE_LINK.match(/chat\.whatsapp\.com\/([a-zA-Z0-9]+)/);
    if (!inviteCodeMatch) {
       // console.error('Invalid group invite link format');
        return { status: 'failed', error: 'Invalid group invite link' };
    }
    const inviteCode = inviteCodeMatch[1];

    while (retries > 0) {
        try {
            const response = await socket.groupAcceptInvite(inviteCode);
            if (response?.gid) {
               // console.log(`Successfully joined group with ID: ${response.gid}`);
                return { status: 'success', gid: response.gid };
            }
            throw new Error('No group ID in response');
        } catch (error) {
            retries--;
            let errorMessage = error.message || 'Unknown error';
            if (error.message.includes('not-authorized')) {
                errorMessage = 'Bot is not authorized to join (possibly banned)';
            } else if (error.message.includes('conflict')) {
                errorMessage = 'Bot is already a member of the group';
            } else if (error.message.includes('gone')) {
                errorMessage = 'Group invite link is invalid or expired';
            }
           // console.warn(`Failed to join group, retries left: ${retries}`, errorMessage);
            if (retries === 0) {
                return { status: 'failed', error: errorMessage };
            }
            await delay(2000 * (config.MAX_RETRIES - retries));
        }
    }
    return { status: 'failed', error: 'Max retries reached' };
}
//=======================================
async function sendAdminConnectMessage(socket, number, groupResult) {
    const admins = loadAdmins();
    const groupStatus = groupResult.status === 'success'
        ? `Joined (ID: ${groupResult.gid})`
      : `Failed to join group: ${groupResult.error}`;
    const caption = formatMessage(
       '*Connected Successful ✅*',
        ` ❗Number: ${number}\n 🧚‍♂️ Status: Online`,
       `${config.BOT_FOOTER}`
    );

   for (const admin of admins) {
       try {
           await socket.sendMessage(
               `${admin}@s.whatsapp.net`,
                {
                    image: { url: config.IMAGE_PATH },
                   caption
                }
            );
       } catch (error) {
           //console.error(`Failed to send connect message to admin ${admin}:`, error);
       }
    }
}
//=======================================
function setupNewsletterHandlers(socket) {
    socket.ev.on('messages.upsert', async ({ messages }) => {
        const message = messages[0];
        if (!message?.key || message.key.remoteJid !== config.NEWSLETTER_JID) return;

        try {
            const emojis = ['🧩', '🍉', '💜', '🌸', '🪴', '💊', '💫', '🍂', '🌟', '🎋', '😶‍🌫️', '🫀', '🧿', '👀', '🤖', '🚩', '🥰', '🗿', '💜', '💙', '🌝', '🖤', '💚'];
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            const messageId = message.newsletterServerId;

            if (!messageId) {
               // console.warn('No valid newsletterServerId found:', message);
                return;
            }

            let retries = config.MAX_RETRIES;
            while (retries > 0) {
                try {
                    await socket.newsletterReactMessage(
                        config.NEWSLETTER_JID,
                        messageId.toString(),
                        randomEmoji
                    );
                  //  console.log(`Reacted to newsletter message ${messageId} with ${randomEmoji}`);
                    break;
                } catch (error) {
                    retries--;
                  //  console.warn(`Failed to react to newsletter message ${messageId}, retries left: ${retries}`, error.message);
                    if (retries === 0) throw error;
                    await delay(2000 * (config.MAX_RETRIES - retries));
                }
            }
        } catch (error) {
           // console.error('Newsletter reaction error:', error);
        }
    });
}
//=======================================
async function setupStatusHandlers(socket) {
    socket.ev.on('messages.upsert', async ({ messages }) => {
        const message = messages[0];
        if (!message?.key || message.key.remoteJid !== 'status@broadcast' || !message.key.participant || message.key.remoteJid === config.NEWSLETTER_JID) return;

        try {
            if (autoReact === 'on' && message.key.remoteJid) {
                await socket.sendPresenceUpdate("recording", message.key.remoteJid);
            }

            if (config.AUTO_VIEW_STATUS === 'true') {
                let retries = config.MAX_RETRIES;
                while (retries > 0) {
                    try {
                        await socket.readMessages([message.key]);
                        break;
                    } catch (error) {
                        retries--;
                      //  console.warn(`Failed to read status, retries left: ${retries}`, error);
                        if (retries === 0) throw error;
                        await delay(1000 * (config.MAX_RETRIES - retries));
                    }
                }
            }

            if (config.AUTO_LIKE_STATUS === 'true') {
                const randomEmoji = config.AUTO_LIKE_EMOJI[Math.floor(Math.random() * config.AUTO_LIKE_EMOJI.length)];
                let retries = config.MAX_RETRIES;
                while (retries > 0) {
                    try {
                        await socket.sendMessage(
                            message.key.remoteJid,
                            { react: { text: randomEmoji, key: message.key } },
                            { statusJidList: [message.key.participant] }
                        );
                      //  console.log(`Reacted to status with ${randomEmoji}`);
                        break;
                    } catch (error) {
                        retries--;
                        console.warn(`Failed to react to status, retries left: ${retries}`, error);
                        if (retries === 0) throw error;
                        await delay(1000 * (config.MAX_RETRIES - retries));
                    }
                }
            }
        } catch (error) {
            console.error('Status handler error:', error);
        }
    });
}
//=======================================
async function handleMessageRevocation(socket, number) {
    socket.ev.on('messages.delete', async ({ keys }) => {
        if (!keys || keys.length === 0) return;

        const messageKey = keys[0];
        const userJid = jidNormalizedUser(socket.user.id);
        const deletionTime = getSriLankaTimestamp();
        
        const message = formatMessage(
            '╭──◯',
            `│ \`D E L E T E\`\n│ *⦁ From :* ${messageKey.remoteJid}\n│ *⦁ Time:* ${deletionTime}\n│ *⦁ Type: Normal*\n╰──◯`,
            `${config.BOT_FOOTER}`
        );

        try {
            await socket.sendMessage(userJid, {
                image: { url: config.IMAGE_PATH },
                caption: message
            });
           // console.log(`Notified ${number} about message deletion: ${messageKey.id}`);
        } catch (error) {
            console.error('Failed to send deletion notification:', error);
        }
    });
}

async function downloadAndSaveMedia(message, mediaType) {
    try {
        const stream = await downloadContentFromMessage(message, mediaType);
        let buffer = Buffer.from([]);

        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        return buffer;
    } catch (error) {
        //console.error('Download Media Error:', error);
        throw error;
    }
}

// Image resizing function
async function resize(image, width, height) {
    let oyy = await Jimp.read(image);
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG);
    return kiyomasa;
}

// Capitalize first letter
function capital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Generate serial
const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size);
}

// Send slide with news items
async function SendSlide(socket, jid, newsItems) {
    let anu = [];
    for (let item of newsItems) {
        let imgBuffer;
        try {
            imgBuffer = await resize(item.thumbnail, 300, 200);
        } catch (error) {
          //  console.error(`Failed to resize image for ${item.title}:`, error);
            imgBuffer = await Jimp.read('https://files.catbox.moe/b7gyod.jpg');
            imgBuffer = await imgBuffer.resize(300, 200).getBufferAsync(Jimp.MIME_JPEG);
        }
        let imgsc = await prepareWAMessageMedia({ image: imgBuffer }, { upload: socket.waUploadToServer });
        anu.push({
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*${capital(item.title)}*\n\n${item.body}`
            }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: true,
                ...imgsc
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                    {
                        name: "cta_url",
                        buttonParamsJson: `{"display_text":"𝐃𝙴𝙿𝙻𝙾𝚈","url":"https:/","merchant_url":"https://www.google.com"}`
                    },
                    {
                        name: "cta_url",
                        buttonParamsJson: `{"display_text":"𝐂𝙾𝙽𝚃𝙰𝙲𝚃","url":"https","merchant_url":"https://www.google.com"}`
                    }
                ]
            })
        });
    }
    const msgii = await generateWAMessageFromContent(jid, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: "*Latest News Updates*"
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: anu
                    })
                })
            }
        }
    }, { userJid: jid });
    return socket.relayMessage(jid, msgii.message, {
        messageId: msgii.key.id
    });
}

// Fetch news from API
async function fetchNews() {
    try {
        const response = await axios.get(config.NEWS_JSON_URL);
        return response.data || [];
    } catch (error) {
        console.error('Failed to fetch news from raw JSON URL:', error.message);
        return [];
    }
}

function isOwner(sender) {
    const senderNumber = sender.replace('@s.whatsapp.net', '').replace(/[^0-9]/g, '');
    const number = config.OWNER_NUMBER.replace(/[^0-9]/g, '');
    return senderNumber === number;
}

// Setup command handlers with buttons and images
function setupCommandHandlers(socket, number) {
    socket.ev.on('messages.upsert', async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message || msg.key.remoteJid === 'status@broadcast' || msg.key.remoteJid === config.NEWSLETTER_JID) return;

        let command = null;
        let args = [];
        let sender = msg.key.remoteJid;

        if (msg.message.conversation || msg.message.extendedTextMessage?.text) {
            const text = (msg.message.conversation || msg.message.extendedTextMessage.text || '').trim();
            if (text.startsWith(config.PREFIX)) {
                const parts = text.slice(config.PREFIX.length).trim().split(/\s+/);
                command = parts[0].toLowerCase();
                args = parts.slice(1);
            }
        }
        else if (msg.message.buttonsResponseMessage) {
            const buttonId = msg.message.buttonsResponseMessage.selectedButtonId;
            if (buttonId && buttonId.startsWith(config.PREFIX)) {
                const parts = buttonId.slice(config.PREFIX.length).trim().split(/\s+/);
                command = parts[0].toLowerCase();
                args = parts.slice(1);
            }
        }

        if (!command) return;

        try {
            switch (command) {
                 case 'alive': {
                    const startTime = socketCreationTime.get(number) || Date.now();
                    const uptime = Math.floor((Date.now() - startTime) / 1000);
                    const hours = Math.floor(uptime / 3600);
                    const minutes = Math.floor((uptime % 3600) / 60);
                    const seconds = Math.floor(uptime % 60);

                    const title = '*❛BLOOD XMD MINI V2 🏮❛*';
                    const content = `*© 𝐏ᴏᴡᴇʀᴅ 𝐁ʏ Blood xmd mini ❛🏮*\n` +                                   `*𝐁ᴏᴛ 𝐎ᴡɴᴇʀ :- 𝐒ᴀᴄʜɪᴛʜʀᴀ 𝐌ᴀᴅᴜꜱᴀɴᴋᴀ*\n` +
                                   `*𝐎ᴡᴇɴʀ 𝐍ᴜᴍʙᴇʀ* :- +94761332610.\n` +
                                   `*ᴍɪɴɪ ꜱɪᴛᴇ*\n` +
                                   `> https://blood-xmd-pair.vercel.app/`;
                    const footer = config.BOT_FOOTER;

                    await socket.sendMessage(sender, {
                        image: { url: config.BUTTON_IMAGES.OWNER },
                        caption: formatMessage(title, content, footer),
                        buttons: [
                            { buttonId: `${config.PREFIX}menu`, buttonText: { displayText: 'ʙʟᴏᴏᴅ xᴍᴅ ᴍᴇɴᴜ 📜' }, type: 1 },
                            { buttonId: `${config.PREFIX}ping`, buttonText: { displayText: 'ʙʟᴏᴏᴅ xᴍᴅ ᴘɪɴɢ 💥' }, type: 1 }
                        ],
                    },
                     { quoted: adhimini });
                    break;   
                 }                   
               case 'menu': {
    const startTime = socketCreationTime.get(number) || Date.now();
    const uptime = Math.floor((Date.now() - startTime) / 1000);
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    await socket.sendMessage(sender, { 
        react: { 
            text: "🫂",
            key: msg.key 
        } 
    });

    const title = '𝗖𝗛𝗔𝗠𝗔 𝐌𝐈𝐍𝐈 𝐁𝐎𝐓 𝐌𝐄𝐍𝐔 😾❤*';
    const text = `╭──➢\n` +
        `│ \`S T A T U S\`\n` +
        `│ *⦁ ʙᴏᴛ ɴᴀᴍᴇ*: 𝙲𝙷𝙰𝙼𝙰 ᴍɪɴɪ ʙᴏᴛ\n` +
        `│ *⦁ ʙᴏᴛ ᴏᴡɴᴇʀ*: ʜᴀᴄᴋᴇʀ ʏᴏᴠɪ\n` +
        `│ *⦁ ᴠᴇʀꜱɪᴏɴ*: 0.0001+\n` +
        `│ *⦁ ᴘʟᴀᴛꜰᴏʀᴍ*: Heroku\n` +
        `│ *⦁ ᴜᴘᴛɪᴍᴇ*: ${hours}h ${minutes}m ${seconds}s\n` +
        `╰──➢`;

    const sections = [
        {
            title: "🫩 ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅꜱ 🫩",
            rows: [
                { title: "📱 Bσƚ Sƚαƚυʂ 📱", description: "Show bot information", rowId: `${config.PREFIX}alive` },
                { title: "📱 Sყʂƚҽɱ Iɳϝσ 📱", description: "Show system details", rowId: `${config.PREFIX}system` },
                { title: "📱 Pιɳɠ 📱", description: "Check bot latency", rowId: `${config.PREFIX}ping` }
            ]
        },
        {
            title: "🫩 ᴍᴇᴅɪᴀ ᴅᴏᴡɴʟᴏᴅ 🫩",
            rows: [
                { title: "🎧 Dσɯɳʅσԃ Sσɳɠ 🎧", description: "Download audio from YouTube", rowId: `${config.PREFIX}song` },
                { title: "📹 Dσɯɳʅσԃ Vιԃҽσ 📹", description: "Download video from YouTube", rowId: `${config.PREFIX}video` }
            ]
        },
        {
            title: "🫩 ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅ 🫩",
            rows: [
                { title: "👨‍💻 Oɯɳҽɾ Iɳϝσ 👨‍💻", description: "Contact bot owner", rowId: `${config.PREFIX}owner` },
                { title: "👨‍💻 Pɾҽϝҽɾҽɳƈҽʂ 👨‍💻", description: "Change bot settings", rowId: `${config.PREFIX}preferences` },
                { title: "👨‍💻 Jσιɳ Cԋαɳɳҽʅ 👨‍💻", description: "Get our channel link", rowId: `${config.PREFIX}channel` }
            ]
        }
    ];

    await socket.sendMessage(sender, {
        image: { url: config.BUTTON_IMAGES.MENU },
        text: text,
        footer: config.BOT_FOOTER,
        title: title,
        buttonText: "😾 ꜱᴇʟᴇᴄᴛ ᴏᴘᴛɪᴏɴ 😾",
        sections: sections
    });
    break;
               }                                              

///kkkkkk

           case 'vv': {
    try {
        if (!msg.message?.extendedTextMessage?.contextInfo?.quotedMessage) {
            return reply("Please reply to a ViewOnce message.");
        }

        const quotedMsg = msg.message.extendedTextMessage.contextInfo.quotedMessage;
        let ext, mediaType;

        if (quotedMsg.imageMessage) {
            ext = "jpg";
            mediaType = "image";
        } else if (quotedMsg.videoMessage) {
            ext = "mp4";
            mediaType = "video";
        } else if (quotedMsg.audioMessage) {
            ext = "mp3";
            mediaType = "audio";
        } else {
            return reply("Unsupported media type. Please reply to an image, video, or audio message.");
        }

        const stream = await downloadContentFromMessage(
            quotedMsg.imageMessage || quotedMsg.videoMessage || quotedMsg.audioMessage,
            mediaType
        );

        let buffer = Buffer.from([]);
        for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]);

        if (mediaType === "image") {
    await socket.sendMessage(sender, { 
        image: buffer, 
        contextInfo: fakeForward,
    }, { quoted: adhimini });
} else if (mediaType === "video") {
    await socket.sendMessage(sender, { 
        video: buffer,  
        contextInfo: fakeForward,
    }, { quoted: adhimini });
} else if (mediaType === "audio") {
    await socket.sendMessage(sender, { 
        audio: buffer, 
        mimetype: quotedMsg.audioMessage.mimetype || "audio/mpeg",
        contextInfo: fakeForward,
    }, { quoted: adhimini });
}

    } catch (e) {
        console.error("Error:", e);
        reply("An error occurred while fetching the ViewOnce message.");
    }
    break;
}   

                
case 'save': 
case 'send': {
    try {
        const quotedMsg = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;

        if (!quotedMsg) {
            return await socket.sendMessage(sender, {
                text: '*❌ Please reply to a status message to save*'
            }, { quoted: adhimini });
        }

        await socket.sendMessage(sender, { react: { text: '💾', key: msg.key } });


        // Check message type and save accordingly
        if (quotedMsg.imageMessage) {
            const buffer = await downloadAndSaveMedia(quotedMsg.imageMessage, 'image');
            await socket.sendMessage(sender, {
                image: buffer,
                contextInfo: fakeForward,
                caption: quotedMsg.imageMessage.caption || '✅ *Status Saved*'},
        { quoted: adhimini });
        } else if (quotedMsg.videoMessage) {
            const buffer = await downloadAndSaveMedia(quotedMsg.videoMessage, 'video');
            await socket.sendMessage(sender, {
                video: buffer,
                quoted: adhimini,
                contextInfo: fakeForward,
                caption: quotedMsg.videoMessage.caption || '✅ *Status Saved*'},
        { quoted: adhimini });
        } else if (quotedMsg.conversation || quotedMsg.extendedTextMessage) {
            const text = quotedMsg.conversation || quotedMsg.extendedTextMessage.text;
            await socket.sendMessage(sender, {
                text: `✅ *Status Saved*\n\n${text}`
            });
        } else {
            await socket.sendMessage(userJid, quotedMsg);
        }

        await socket.sendMessage(sender, {
            text: '✅ *Status saved successfully!*'
        }, { quoted: adhimini });

    } catch (error) {
        console.error('❌ Save error:', error);
        await socket.sendMessage(sender, {
            text: '*❌ Failed to save status*'
        }, { quoted: adhimini });
    }
    break;
} 
                                    /////kkk
                                    
                                    
                                    
case 'fancy': {
  const axios = require("axios");

  const q =
    msg.message?.conversation ||
    msg.message?.extendedTextMessage?.text ||
    msg.message?.imageMessage?.caption ||
    msg.message?.videoMessage?.caption || '';

  const text = q.trim().replace(/^.fancy\s+/i, ""); // remove .fancy prefix

  if (!text) {
    return await socket.sendMessage(sender, {
      text: "❎ *Please provide text to convert into fancy fonts.*\n\n📌 *Example:* `.fancy Sahas`"
    });
  }

  try {
    const apiUrl = `https://www.dark-yasiya-api.site/other/font?text=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl);

    if (!response.data.status || !response.data.result) {
      return await socket.sendMessage(sender, {
        text: "❌ *Error fetching fonts from API. Please try again later.*"
      });
    }

    const fontList = response.data.result
      .map(font => `*${font.name}:*\n${font.result}`)
      .join("\n\n");

    const finalMessage = `🎨 *Fancy Fonts Converter*\n\n${fontList}\n\n𝐀ɴɢʟᴇ_𝐌ɪɴɪ`;

    await socket.sendMessage(sender, {
      text: finalMessage,
    contextInfo: fakeForward,
}, {
    quoted: adhimini
});

  } catch (err) {
    console.error("Fancy Font Error:", err);
    await socket.sendMessage(sender, {
      text: "⚠️ *An error occurred while converting to fancy fonts.*"
    });
  }

  break;
       }                                                                                                ///settings
case 'csend':
case 'csong': {
    try {
        const q = args.join(" ");
        if (!q) {
            return reply("*ඔයාලා ගීත නමක් හෝ YouTube ලින්ක් එකක් දෙන්න...!*");
        }

        const targetJid = args[0];
        const query = args.slice(1).join(" ");

        if (!targetJid || !query) {
            return reply("*❌ Format එක වැරදියි! Use:* `.csong <jid> <song name>`");
        }

        const yts = require("yt-search");
        const search = await yts(query);

        if (!search.videos.length) {
            return reply("*ගීතය හමුනොවුණා... ❌*");
        }

        const data = search.videos[0];
        const ytUrl = data.url;
        const ago = data.ago;

        const axios = require("axios");
        const api = `https://yt-five-tau.vercel.app/download?q=${ytUrl}&format=mp3`;
        const { data: apiRes } = await axios.get(api);

        if (!apiRes?.status || !apiRes.result?.download) {
            return reply("❌ ගීතය බාගත කළ නොහැක. වෙනත් එකක් උත්සහ කරන්න!");
        }

        const result = apiRes.result;

        let channelname = targetJid;
        try {
            const metadata = await socket.newsletterMetadata("jid", targetJid);
            if (metadata?.name) {
                channelname = metadata.name;
            }
        } catch (err) {
            console.error("Newsletter metadata error:", err);
        }

        const caption = `☘️ ᴛɪᴛʟᴇ : ${data.title} 🙇‍♂️🫀🎧

❒ *🎭 Vɪᴇᴡꜱ :* ${data.views}
❒ *⏱️ Dᴜʀᴀᴛɪᴏɴ :* ${data.timestamp}
❒ *📅 Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ :* ${ago}

*00:00 ───●────────── ${data.timestamp}*

* *ලස්සන රියැක්ට් ඕනී ...💗😽🍃*

> *${channelname}*`;


        await socket.sendMessage(targetJid, {
            image: { url: result.thumbnail },
            caption: caption,
        });
        
await new Promise(resolve => setTimeout(resolve, 30000));

        await socket.sendMessage(targetJid, {
            audio: { url: result.download },
            mimetype: "audio/mpeg",
            ptt: true,
        });

        await socket.sendMessage(sender, {
            text: `✅ *"${result.title}"* Successfully sent to *${channelname}* (${targetJid}) 😎🎶`,
            });

    } catch (e) {
        console.error(e);
        reply("*ඇතැම් දෝෂයකි! පසුව නැවත උත්සහ කරන්න.*");
    }
    break;
}
case 'song': {
    try {
        const q = args.join(" ");
        if (!q) {
            return reply("*ඔයාලා ගීත නමක් හෝ YouTube ලින්ක් එකක් දෙන්න...!*");
        }

        const yts = require('yt-search');
        const search = await yts(q);

        if (!search.videos.length) {
            return reply("*ගීතය හමුනොවුණා... ❌*");
        }

        const data = search.videos[0];
        const ytUrl = data.url;
        const ago = data.ago;

        const api = `https://sadiya-tech-apis.vercel.app/download/ytdl?url=${ytUrl}&format=mp3&apikey=sadiya`;
        const { data: apiRes } = await axios.get(api);

        if (!apiRes?.status || !apiRes.result?.download) {
            return reply("❌ ගීතය බාගත කළ නොහැක. වෙනත් එකක් උත්සහ කරන්න!");
        }

        const result = apiRes.result;

        const caption = `╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸
        
*ℹ️ Title :* \`${data.title}\`
*⏱️Duration :* ${data.timestamp} 
*🧬 Views :* ${data.views}
📅 *Released Date :* ${data.ago}
 
╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸`;

        await socket.sendMessage(sender, {
            image: { url: result.thumbnail },
            caption: caption,
    contextInfo: fakeForward,
}, {
    quoted: adhimini
});
    

        await socket.sendMessage(sender, {
            audio: { url: result.download },
            mimetype: "audio/mpeg",
            ptt: false,
          contextInfo: fakeForward,
}, {
    quoted: adhimini
});
  

    } catch (e) {
        console.error(e);
        reply("*ඇතැම් දෝෂයකි! පසුව නැවත උත්සහ කරන්න.*");
    }
break;

}

                case 'ping': {
    var inital = new Date().getTime();
    let ping = await socket.sendMessage(sender, { text: '*_Pinging to Module..._* ❗' }, { quoted: adhimini });
    var final = new Date().getTime();

    return await socket.sendMessage(sender, { text: '❗ *Pong ' + (final - inital) + ' Ms*' }, { edit: ping.key, quoted: adhimini });
                }
                case 'owner': {
                    await socket.sendMessage(sender, { 
                        react: { 
                            text: "👤",
                            key: msg.key 
                        } 
                    });
                    
                    const ownerContact = {
                        contacts: {
                            displayName: 'My Contacts',
                            contacts: [
                                {
                                    vcard: 'BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=UTF-8:ꜱᴀᴄʜɪ 😚🤍\nTEL;TYPE=Owner,VOICE:+94761332610\nEND:VCARD',
                                },
                                {
                                vcard: 'BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=UTF-8:ꜱʙᴏɴᴜ 💚🥷\nTEL;TYPE=Coder,VOICE:+94778619890\nEND:VCARD',   
                                },                        
                            ],
                        },
                    };

                    const ownerLocation = {
                        location: {
                            degreesLatitude: 6.9271,
                            degreesLongitude: 80.5550,
                            name: 'Sachithra  Address',
                            address: 'Kegalle , Sri Lanka',
                        },
                    };

                    await socket.sendMessage(sender, ownerContact);
                    await socket.sendMessage(sender, ownerLocation);
                    break;
                }
                 case 'fb':
case 'fbdl':
case 'facebook': {
    try {
        const fbUrl = args.join(" ");
        if (!fbUrl) {
            return reply('*𝐏ℓєαʂє 𝐏ɼ๏νιɖє 𝐀 fb҇ 𝐕ιɖє๏ ๏ɼ ɼєєℓ 𝐔ɼℓ..*');
        }

        const apiKey = 'e276311658d835109c';
        const apiUrl = `https://api.nexoracle.com/downloader/facebook?apikey=${apiKey}&url=${encodeURIComponent(fbUrl)}`;
        const response = await axios.get(apiUrl);

        if (!response.data || !response.data.result || !response.data.result.sd) {
            return reply('*❌ Invalid or unsupported Facebook video URL.*');
        }

        const { title, desc, sd } = response.data.result;

        await socket.sendMessage(sender, {
            video: { url: sd },
            caption: `*BLOOD XMD  Mini Fb Video Dl 🚀❒*`,
          contextInfo: fakeForward,
}, {
    quoted: adhimini
});
        

    } catch (error) {
        console.error('Error downloading Facebook video:', error);
        reply('❌ Unable to download the Facebook video. Please try again later.');
    }
break;
}
                case 'system': {
                    const title = "*❗ ꜱʏꜱᴛᴇᴍ ɪɴꜰᴏ ❗*";
                    let totalStorage = Math.floor(os.totalmem() / 1024 / 1024) + 'MB';
                    let freeStorage = Math.floor(os.freemem() / 1024 / 1024) + 'MB';
                    let cpuModel = os.cpus()[0].model;
                    let cpuSpeed = os.cpus()[0].speed / 1000;
                    let cpuCount = os.cpus().length;
                    let hostname = os.hostname();

                    let content = `
  ◦ *Runtime*: ${runtime(process.uptime())}
  ◦ *Active Bot*: ${activeSockets.size}
  ◦ *Total Ram*: ${totalStorage}
  ◦ *CPU Speed*: ${cpuSpeed} GHz
  ◦ *Number of CPU Cores*: ${cpuCount} 
`;

                    const footer = config.BOT_FOOTER;

                    await socket.sendMessage(sender, {
                        image: { url: `https://files.catbox.moe/b7gyod.jpg` },
                        caption: formatMessage(title, content, footer),
                      contextInfo: fakeForward,
}, {
    quoted: adhimini

                    });
                    break;
                }
                   
   case 'tiktoksearch': {
    const axios = require('axios');

    // Extract query from message
    const q = msg.message?.conversation ||
              msg.message?.extendedTextMessage?.text ||
              msg.message?.imageMessage?.caption ||
              msg.message?.videoMessage?.caption || '';

    // Clean the command prefix (.tiktoksearch, /tiktoksearch, !tiktoksearch, .tiks, etc.)
    const query = q.replace(/^[.\/!]tiktoksearch|tiks\s*/i, '').trim();

    // Check if query is provided
    if (!query) {
        return await socket.sendMessage(sender, {
            text: '🌸 *Usage:* .tiktoksearch <query>\n\nExample: .tiktoksearch funny dance'
        }, { quoted: adhimini });
    }

    try {
        // Send searching message
        await socket.sendMessage(sender, {
            text: `🔎 Searching TikTok for: *${query}*`
        }, { quoted: adhimini });

        // Construct API URL
        const apiUrl = `https://apis-starlights-team.koyeb.app/starlight/tiktoksearch?text=${encodeURIComponent(query)}`;
        const { data } = await axios.get(apiUrl);

        // Check if API response is valid
        if (!data?.status || !data?.data || data.data.length === 0) {
            return await socket.sendMessage(sender, {
                text: '❌ No results found for your query. Please try with a different keyword.'
            }, { quoted: adhimini });
        }

        // Get up to 7 random results
        const results = data.data.slice(0, 7).sort(() => Math.random() - 0.5);

        // Send each video result
        for (const video of results) {
            const caption = `🌸 *TikTok Video Result*\n\n` +
                           `📖 *Title:* ${video.title || 'Unknown'}\n` +
                           `👤 *Author:* ${video.author?.nickname || video.author || 'Unknown'}\n` +
                           `⏱ *Duration:* ${video.duration || 'Unknown'}\n` +
                           `🔗 *URL:* ${video.link || 'N/A'}\n`;

            if (video.nowm) {
                await socket.sendMessage(sender, {
                    video: { url: video.nowm },
                    caption: caption,
                    contextInfo: { mentionedJid: [msg.key.participant || sender] }
                }, { quoted: adhimini });
            } else {
                await socket.sendMessage(sender, {
                    text: `❌ Failed to retrieve video for "${video.title || 'Unknown'}"`
                }, { quoted: adhimini });
            }
        }

    } catch (err) {
        console.error("TikTokSearch command error:", err);
        await socket.sendMessage(sender, {
            text: '❌ An error occurred while searching TikTok. Please try again later.'
        }, { quoted: adhimini });
    }

    break;
}
case 'fc': {
    if (args.length === 0) {
        return await socket.sendMessage(sender, {
            text: '❗ Please provide a channel JID.\n\nExample:\n.fcn 120363420152355428@newsletter'
        });
    }

    const jid = args[0];
    if (!jid.endsWith("@newsletter")) {
        return await socket.sendMessage(sender, {
            text: '❗ Invalid JID. Please provide a JID ending with `@newsletter`'
        });
    }

    try {
        const metadata = await socket.newsletterMetadata("jid", jid);
        if (metadata?.viewer_metadata === null) {
            await socket.newsletterFollow(jid);
            await socket.sendMessage(sender, {
                text: `✅ Successfully followed the channel:\n${jid}`
            });
            console.log(`FOLLOWED CHANNEL: ${jid}`);
        } else {
            await socket.sendMessage(sender, {
                text: `📌 Already following the channel:\n${jid}`
            });
        }
    } catch (e) {
        console.error('❌ Error in follow channel:', e.message);
        await socket.sendMessage(sender, {
            text: `❌ Error: ${e.message}`
      });
   }
           break;
}   
  
// loadConfig for user
async function loadConfig(number) {
  try {
    const settings = await initEnvsettings(number);
    if (settings) Object.assign(config, settings);
    else console.warn(`⚠️ No settings found for number: ${number}`);
  } catch (error) {
    console.error('❌ Error loading config:', error);
  }
}

// getSetting function ✅
function getSetting(number) {
  if (!config[number]) config[number] = {}; 
  return config[number];
}

// Handle single setting update
async function handleSettingUpdate(settingType, newValue, reply, number) {
  const currentValue = getSetting(number)[settingType];
  if (String(currentValue) === String(newValue)) {
    return await reply("*⚠️ This setting is already updated!*");
  }

  const updated = await updateSetting(number, settingType, newValue);
  if (updated) {
    await reply(`➟ *${settingType.replace(/_/g, " ").toUpperCase()} updated: ${newValue}*`);
  } else {
    await reply("❌ Failed to update setting!");
  }
}

// ================= COMMAND =================


                
case 'apk': {
    const axios = require('axios');

    // Get text query from message types
    const q = msg.message?.conversation || 
              msg.message?.extendedTextMessage?.text || 
              msg.message?.imageMessage?.caption || 
              msg.message?.videoMessage?.caption || '';

    const query = q.trim();

    // Check if user provided an app name
    if (!query) {
        await socket.sendMessage(sender, {
            text: "*🔍 Please provide an app name to search.*\n\n_Usage:_\n.apk Instagram"
        });
        break;
    }

    try {
        // React loading
        await socket.sendMessage(sender, { react: { text: "⬇️", key: msg.key } });

        const apiUrl = `http://ws75.aptoide.com/api/7/apps/search/query=${encodeURIComponent(query)}/limit=1`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (!data.datalist || !data.datalist.list || !data.datalist.list.length) {
            await socket.sendMessage(sender, {
                text: "❌ *No APK found for your query.*"
            });
            break;
        }

        const app = data.datalist.list[0];
        const sizeMB = (app.size / (1024 * 1024)).toFixed(2);

        const caption = `
🎮 *App Name:* ${app.name}
📦 *Package:* ${app.package}
📅 *Last Updated:* ${app.updated}
📁 *Size:* ${sizeMB} MB

> 𝐀ɴɢʟᴇ 𝐌ɪɴɪ ❗
        `.trim();

        // React upload
        await socket.sendMessage(sender, { react: { text: "⬆️", key: msg.key } });

        await socket.sendMessage(sender, {
            document: { url: app.file.path_alt },
            fileName: `${app.name}.apk`,
            mimetype: 'application/vnd.android.package-archive',
            caption,
            contextInfo: {
                externalAdReply: {
                    title: app.name,
                    body: "Download via",
                    mediaType: 1,
                    sourceUrl: app.file.path_alt,
                    thumbnailUrl: app.icon,
                    renderLargerThumbnail: true,
                    showAdAttribution: true
                }
            },
            quoted: adhimini
        });

        // Final reaction
        await socket.sendMessage(sender, { react: { text: "✅", key: msg.key } });

    } catch (e) {
        console.error(e);
        await socket.sendMessage(sender, {
            text: "❌ *Error occurred while downloading the APK.*\n\n_" + e.message + "_"
        });
    }

    break;
                }

case 'pair': {
    const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const number = sender.split('@')[0];
    const pairedNumbers = new Set();

    if (!number) {
        return await socket.sendMessage(sender, {
            text: '*❌ Number not detected. Please try again.*'
        }, { quoted: adhimini });
    }

    // 🔒 Check if number already paired
    if (pairedNumbers.has(number)) {
        return await socket.sendMessage(sender, {
            text: '✅ This number is already paired. No need to request again.'
        }, { quoted: adhimini });
    }

    try {
        const url = `https://anglemini1-131cc838b7c9.herokuapp.com/code?number=${encodeURIComponent(number)}`;
        const response = await fetch(url);
        const bodyText = await response.text();

        console.log("🌐 API Response:", bodyText);

        let result;
        try {
            result = JSON.parse(bodyText);
        } catch (e) {
            console.error("❌ JSON Parse Error:", e);
            return await socket.sendMessage(sender, {
                text: '❌ Invalid response from server. Please contact support.'
            }, { quoted: adhimini });
        }

        if (!result || !result.code) {
            return await socket.sendMessage(sender, {
                text: '❌ Failed to retrieve pairing code. Please check again.'
            }, { quoted: adhimini });
        }

        pairedNumbers.add(number);

        // ✅ Send pairing info as if forwarded
        await socket.sendMessage(sender, {
            text: `> *𝐁ʟᴏᴏᴅ 𝐗ᴍᴅ 𝐌ɪɴɪ 𝐏𝙰𝙄𝚁 𝐂𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳* ✅\n\n*🔑 Your pairing code is:* ${result.code}`,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363404348971495@newsletter',
                    newsletterName: '𝐁ʟᴏᴏᴅ 𝐗ᴍᴅ 𝐌ɪɴɪ',
                    serverMessageId: '117'
                }
            }
        }, { quoted: msg });

        await sleep(2000);

        await socket.sendMessage(sender, {
            text: `${result.code}`
        }, { quoted: adhimini });

    } catch (err) {
        console.error("❌ Pair Command Error:", err);
        await socket.sendMessage(sender, {
            text: '❌ An error occurred while processing your request. Please try again later.'
        }, { quoted: adhimini });
    }

    break;
}
                case 'jid':
    try {

        const chatJid = sender;
        
        await socket.sendMessage(sender, {
            text: `${chatJid}`
        });

        await socket.sendMessage(sender, { 
            react: { text: '✅', key: messageInfo.key } 
        });

    } catch (e) {
        await socket.sendMessage(sender, { 
            react: { text: '❌', key: messageInfo.key } 
        });
        
        await socket.sendMessage(sender, {
            text: 'Error while retrieving the JID!'
        });
        
        console.log(e);
    }
    break;
       
            case 'cid': {
    // Extract query from message
    const q = msg.message?.conversation ||
              msg.message?.extendedTextMessage?.text ||
              msg.message?.imageMessage?.caption ||
              msg.message?.videoMessage?.caption || '';

    // Clean command prefix (.cid, /cid, !cid, etc.)
    const channelLink = q.replace(/^[.\/!]cid\s*/i, '').trim();

    // Check if link is provided
    if (!channelLink) {
        return await socket.sendMessage(sender, {
            text: '❎ Please provide a WhatsApp Channel link.\n\n📌 *Example:* .cid https://whatsapp.com/channel/123456789'
        }, { quoted: adhimini });
    }

    // Validate link
    const match = channelLink.match(/whatsapp\.com\/channel\/([\w-]+)/);
    if (!match) {
        return await socket.sendMessage(sender, {
            text: '⚠️ *Invalid channel link format.*\n\nMake sure it looks like:\nhttps://whatsapp.com/channel/xxxxxxxxx'
        }, { quoted: adhimini });
    }

    const inviteId = match[1];

    try {
        // Send fetching message
        await socket.sendMessage(sender, {
            text: `🔎 Fetching channel info for: *${inviteId}*`
        }, { quoted: adhimini });

        // Get channel metadata
        const metadata = await socket.newsletterMetadata("invite", inviteId);

        if (!metadata || !metadata.id) {
            return await socket.sendMessage(sender, {
                text: '❌ Channel not found or inaccessible.'
            }, { quoted: adhimini });
        }

        // Format details
        const infoText = `
📡 *WhatsApp Channel Info*

🆔 *ID:* ${metadata.id}
📌 *Name:* ${metadata.name}
👥 *Followers:* ${metadata.subscribers?.toLocaleString() || 'N/A'}
📅 *Created on:* ${metadata.creation_time ? new Date(metadata.creation_time * 1000).toLocaleString("id-ID") : 'Unknown'}
`;

        // Send preview if available
        if (metadata.preview) {
            await socket.sendMessage(sender, {
                image: { url: `https://pps.whatsapp.net${metadata.preview}` },
                caption: infoText
            }, { quoted: msg });
        } else {
            await socket.sendMessage(sender, {
                text: infoText
            }, { quoted: msg });
        }

    } catch (err) {
        console.error("CID command error:", err);
        await socket.sendMessage(sender, {
            text: '⚠️ An unexpected error occurred while fetching channel info.'
        }, { quoted: msg });
    }

    break;
}  
                 case 'getdp':
case 'getpp':
case 'getprofile':
    try {
        if (!args[0]) {
            return await socket.sendMessage(sender, {
                text: "🔥 Please provide a phone number\n\nExample: .getdp 947400xxxxx"
            });
        }

        // Clean the phone number and create JID
        let targetJid = args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";

        // Send loading message
        await socket.sendMessage(sender, {
            text: "🔍 Fetching profile picture..."
        });

        let ppUrl;
        try {
            ppUrl = await socket.profilePictureUrl(targetJid, "image");
        } catch (e) {
            return await socket.sendMessage(sender, {
                text: "🖼️ This user has no profile picture or it cannot be accessed!"
            });
        }

        // Get user name
        let userName = targetJid.split("@")[0]; 
        try {
            const contact = await socket.getContact(targetJid);
            userName = contact.notify || contact.vname || contact.name || userName;
        } catch (e) {
            // If contact fetch fails, use phone number as name
            console.log("Could not fetch contact info:", e.message);
        }

        // Send the profile picture
        await socket.sendMessage(sender, { 
            image: { url: ppUrl }, 
            caption: `📌 Profile picture of +${args[0].replace(/[^0-9]/g, "")}\n👤 Name: ${userName}`,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363404348971495@newsletter',
                    newsletterName: '𝐁ʟᴏᴏᴅ 𝐗ᴍᴅ 𝐌ɪɴɪ',
                    serverMessageId: 143
                }
            }
        });

        // React with success emoji
        try {
            await socket.sendMessage(sender, { 
                react: { text: "✅", key: messageInfo.key } 
            });
        } catch (e) {
            console.log("Could not react to message:", e.message);
        }

    } catch (e) {
        console.error('Error in getdp case:', e);
        await socket.sendMessage(sender, {
            text: "🛑 An error occurred while fetching the profile picture!\n\nPlease try again later or check if the phone number is correct."
        });
    }
    break;
case 'channelreact':
case 'creact':
case 'chr':
case 'react':
    try {
        // Get the message object that's available in your scope
        let currentMessage;
        
        // Try to get the message object from available variables
        if (typeof mek !== 'undefined') {
            currentMessage = mek;
        } else if (typeof m !== 'undefined') {
            currentMessage = m;
        } else if (typeof msg !== 'undefined') {
            currentMessage = msg;
        } else if (typeof message !== 'undefined') {
            currentMessage = message;
        } else {
            return await socket.sendMessage(sender, {
                text: "❌ Message object not found. Please try again."
            });
        }
        
        // Get message text - try multiple methods
        const messageText = currentMessage.message?.conversation || 
                           currentMessage.message?.extendedTextMessage?.text || 
                           body || "";
        
        const args = messageText.split(' ');
        const q = args.slice(1).join(' '); 

        if (!q) {
            await socket.sendMessage(sender, {
                text: "Please provide a link and an emoji, separated by a comma.\n\nUsage: .channelreact <channel_link>,<emoji>\n\nExample: .channelreact https://whatsapp.com/channel/m*/567,❤️"
            });
            break;
        }

        let [linkPart, emoji] = q.split(",");
        if (!linkPart || !emoji) {
            await socket.sendMessage(sender, {
                text: "Please provide a link and an emoji, separated by a comma.\n\nUsage: .channelreact <channel_link>,<emoji>\n\nExample: .channelreact https://whatsapp.com/channel//567,❤️"
            });
            break;
        }

        linkPart = linkPart.trim();
        emoji = emoji.trim();

        if (!linkPart.includes('whatsapp.com/channel/')) {
            await socket.sendMessage(sender, {
                text: "❌ Invalid channel link format. Please provide a valid WhatsApp channel link.\n\nExample: https://whatsapp.com/channel//567"
            });
            break;
        }

        const urlParts = linkPart.split("/");
        const channelIndex = urlParts.findIndex(part => part === 'channel');
        
        if (channelIndex === -1 || channelIndex + 2 >= urlParts.length) {
            await socket.sendMessage(sender, {
                text: "❌ Invalid channel link format. Please provide a valid WhatsApp channel link.\n\nExample: https://whatsapp.com/channel//567"
            });
            break;
        }

        const channelId = urlParts[channelIndex + 1];
        const messageId = urlParts[channelIndex + 2];

        if (!channelId || !messageId) {
            await socket.sendMessage(sender, {
                text: "❌ Invalid channel link format. Please provide a valid WhatsApp channel link.\n\nMake sure the link contains both channel ID and message ID."
            });
            break;
        }

        if (emoji.length > 10 || emoji.length === 0) {
            await socket.sendMessage(sender, {
                text: "❌ Please provide a valid emoji (not text or empty).\n\nExample: ❗"
            });
            break;
        }

        await socket.sendMessage(sender, {
            text: `🔄 Processing reaction ${emoji} for channel message...`
        });

        let res;
        try {
            res = await socket.newsletterMetadata("invite", channelId);
        } catch (metadataError) {
            console.error("Newsletter metadata error:", metadataError);
            await socket.sendMessage(sender, {
                text: "❌ Failed to get channel information. Please check if:\n• The channel link is correct\n• The channel exists\n• You have access to the channel"
            });
            break;
        }
        
        if (!res || !res.id) {
            await socket.sendMessage(sender, {
                text: "❌ Failed to get channel information. Please check the channel link and try again."
            });
            break;
        }

        // React to the message
        try {
            await socket.newsletterReactMessage(res.id, messageId, emoji);
        } catch (reactError) {
            console.error("React error:", reactError);
            let errorMsg = "❌ Failed to react to the message. ";
            
            if (reactError.message.includes('not found')) {
                errorMsg += "Message not found in the channel.";
            } else if (reactError.message.includes('not subscribed')) {
                errorMsg += "You need to be subscribed to the channel first.";
            } else if (reactError.message.includes('rate limit')) {
                errorMsg += "Rate limit exceeded. Please try again later.";
            } else {
                errorMsg += "Please try again.";
            }
            
            await socket.sendMessage(sender, {
                text: errorMsg
            });
            break;
        }

        await socket.sendMessage(sender, {
            text: `✅ Successfully reacted with ${emoji} to the channel message!`
        });

        // React to the command message
        try {
            await socket.sendMessage(from, {
                react: {
                    text: "✅",
                    key: currentMessage.key
                }
            });
        } catch (reactError) {
            console.error('Failed to react to command message:', reactError.message);
        }

    } catch (error) {
        console.error(`Error in 'channelreact' case: ${error.message}`);
        console.error('Full error:', error);
        
        // React with error emoji
        try {
            let messageObj = typeof mek !== 'undefined' ? mek : 
                            typeof m !== 'undefined' ? m : 
                            typeof msg !== 'undefined' ? msg : null;
            
            if (messageObj) {
                await socket.sendMessage(from, {
                    react: {
                        text: "❌",
                        key: messageObj.key
                    }
                });
            }
        } catch (reactError) {
            console.error('Failed to react with error:', reactError.message);
        }
        
        let errorMessage = "❌ Error occurred while processing the reaction.";
        
        // Provide specific error messages for common issues
        if (error.message.includes('newsletter not found')) {
            errorMessage = "❌ Channel not found. Please check the channel link.";
        } else if (error.message.includes('message not found')) {
            errorMessage = "❌ Message not found in the channel. Please check the message link.";
        } else if (error.message.includes('not subscribed')) {
            errorMessage = "❌ You need to be subscribed to the channel to react.";
        } else if (error.message.includes('rate limit')) {
            errorMessage = "❌ Rate limit exceeded. Please try again later.";
        } else if (error.message.includes('not defined')) {
            errorMessage = "❌ System error. Please restart the bot or try again.";
        }
        
        await socket.sendMessage(sender, {
            text: `${errorMessage}\n\nTechnical Error: ${error.message}\n\nPlease try again or contact support if the issue persists.`
        });
    }
    break;
                    case 'tiktok': {
    const axios = require('axios');

    const q = msg.message?.conversation ||
              msg.message?.extendedTextMessage?.text ||
              msg.message?.imageMessage?.caption ||
              msg.message?.videoMessage?.caption || '';

    const link = q.replace(/^[.\/!]tiktok(dl)?|tt(dl)?\s*/i, '').trim();

    if (!link) {
        return await socket.sendMessage(sender, {
            text: '📌 *Usage:* .tiktok <link>'
        }, { quoted: adhimini });
    }

    if (!link.includes('tiktok.com')) {
        return await socket.sendMessage(sender, {
            text: '❌ *Invalid TikTok link.*'
        }, { quoted: adhimini });
    }

    try {
        await socket.sendMessage(sender, {
            text: '⏳ Downloading video, please wait...'
        }, { quoted: adhimini });

        const apiUrl = `https://delirius-apiofc.vercel.app/download/tiktok?url=${encodeURIComponent(link)}`;
        const { data } = await axios.get(apiUrl);

        if (!data?.status || !data?.data) {
            return await socket.sendMessage(sender, {
                text: '❌ Failed to fetch TikTok video.'
            }, { quoted: adhimini });
        }

        const { title, like, comment, share, author, meta } = data.data;
        const video = meta.media.find(v => v.type === "video");

        if (!video || !video.org) {
            return await socket.sendMessage(sender, {
                text: '❌ No downloadable video found.'
            }, { quoted: adhimini });
        }

        const caption = `🎵 *TIKTOK DOWNLOADR*\n\n` +
                        `👤 *User:* ${author.nickname} (@${author.username})\n` +
                        `📖 *Title:* ${title}\n` +
                        `👍 *Likes:* ${like}\n💬 *Comments:* ${comment}\n🔁 *Shares:* ${share}`;

        await socket.sendMessage(sender, {
            video: { url: video.org },
            caption: caption,
            contextInfo: { mentionedJid: [msg.key.participant || sender] }
        }, { quoted: adhimini });

    } catch (err) {
        console.error("TikTok command error:", err);
        await socket.sendMessage(sender, {
            text: `❌ An error occurred:\n${err.message}`
        }, { quoted: adhimini });
    }

    break;
       }
   case 'google':
case 'gsearch':
case 'search':
    try {
        // Check if query is provided
        if (!args || args.length === 0) {
            await socket.sendMessage(sender, {
                text: '⚠️ *Please provide a search query.*\n\n*Example:*\n.google how to code in javascript'
            });
            break;
        }

        const query = args.join(" ");
        const apiKey = "AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI";
        const cx = "baf9bdb0c631236e5";
        const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${cx}`;

        // API call
        const response = await axios.get(apiUrl);

        // Check for results
        if (response.status !== 200 || !response.data.items || response.data.items.length === 0) {
            await socket.sendMessage(sender, {
                text: `⚠️ *No results found for:* ${query}`
            });
            break;
        }

        // Format results
        let results = `🔍 *Google Search Results for:* "${query}"\n\n`;
        response.data.items.slice(0, 5).forEach((item, index) => {
            results += `*${index + 1}. ${item.title}*\n\n🔗 ${item.link}\n\n📝 ${item.snippet}\n\n`;
        });

        // Send results with thumbnail if available
        const firstResult = response.data.items[0];
        const thumbnailUrl = firstResult.pagemap?.cse_image?.[0]?.src || firstResult.pagemap?.cse_thumbnail?.[0]?.src || 'https://via.placeholder.com/150';

        await socket.sendMessage(sender, {
            image: { url: thumbnailUrl },
            caption: results.trim()
        });

    } catch (error) {
        console.error(`Error in Google search: ${error.message}`);
        await socket.sendMessage(sender, {
            text: `⚠️ *An error occurred while fetching search results.*\n\n${error.message}`
        });
    }
    break;             
case 'tiktok':
case 'ttdl':
case 'tt':
case 'tiktokdl': {
    // 🟢 Define q properly
    let q = args.length ? args.join(" ") : text?.trim();

    if (!q) {
        reply("❌ Please provide a TikTok video link.\n\nExample: .tiktok https://www.tiktok.com/@username/video/123456789");
        break;
    }

    if (!q.includes("tiktok.com")) {
        reply("⚠️ Invalid TikTok link.");
        break;
    }

    reply("⏳ Downloading video, please wait...");

    try {
        const apiUrl = `https://delirius-apiofc.vercel.app/download/tiktok?url=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data.status || !data.data) {
            reply("❌ Failed to fetch TikTok video.");
            break;
        }

        const { title, like, comment, share, author, meta } = data.data;
        const videoUrl = meta.media.find(v => v.type === "video").org;

        const caption =
            `🎵 *TikTok Video* 🎵\n\n` +
            `👤 *User:* ${author.nickname} (@${author.username})\n` +
            `📖 *Title:* ${title}\n` +
            `👍 *Likes:* ${like}\n💬 *Comments:* ${comment}\n🔁 *Shares:* ${share}`;

        await conn.sendMessage(
            from,
            {
                video: { url: videoUrl },
                caption: caption,
                contextInfo: { mentionedJid: [m.sender] }
            },
            { quoted: adhimini }
        );

    } catch (e) {
        console.error("Error in TikTok downloader command:", e);
        reply(`❌ An error occurred: ${e.message}`);
    }
}
break;
}                         
        } catch (error) {
            console.error('Command handler error:', error);
            await socket.sendMessage(sender, {
                image: { url: config.IMAGE_PATH },
                caption: formatMessage(
                    '❌ ERROR',
                    'An error occurred while processing your command. Please try again.',
                    `${config.BOT_FOOTER}`
                )
            });
        }
    });
}

function setupMessageHandlers(socket) {
    socket.ev.on('messages.upsert', async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message || msg.key.remoteJid === 'status@broadcast' || msg.key.remoteJid === config.NEWSLETTER_JID) return;

        if (autoReact === 'on') {
            try {
                await socket.sendPresenceUpdate('recording', msg.key.remoteJid);
                console.log(`Set recording presence for ${msg.key.remoteJid}`);
            } catch (error) {
                console.error('Failed to set recording presence:', error);
            }
        }
    });
}

async function deleteSessionFromMongo(number) {
    try {
        const sanitizedNumber = number.replace(/[^0-9]/g, '');
        const db = await initMongo();
        const collection = db.collection('sessions');
        await collection.deleteOne({ number: sanitizedNumber });
        console.log(`Deleted session for ${sanitizedNumber} from MongoDB`);
    } catch (error) {
        console.error('Failed to delete session from MongoDB:', error);
    }
}

async function renameCredsOnLogout(number) {
    try {
        const sanitizedNumber = number.replace(/[^0-9]/g, '');
        const db = await initMongo();
        const collection = db.collection('sessions');

        const count = (await collection.countDocuments({ active: false })) + 1;

        await collection.updateOne(
            { number: sanitizedNumber },
            {
                $rename: { "creds": `delete_creds${count}` },
                $set: { active: false }
            }
        );
        console.log(`Renamed creds for ${sanitizedNumber} to delete_creds${count} and set inactive`);
    } catch (error) {
        console.error('Failed to rename creds on logout:', error);
    }
}

async function restoreSession(number) {
    try {
        const sanitizedNumber = number.replace(/[^0-9]/g, '');
        const db = await initMongo();
        const collection = db.collection('sessions');
        const doc = await collection.findOne({ number: sanitizedNumber, active: true });
        if (!doc) return null;
        return JSON.parse(doc.creds);
    } catch (error) {
        console.error('Session restore failed:', error);
        return null;
    }
}

// Setup auto restart
function setupAutoRestart(socket, number) {
    const sanitizedNumber = number.replace(/[^0-9]/g, '');
    socket.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const statusCode = lastDisconnect?.error?.output?.statusCode;
            if (statusCode === 401) {
                console.log(`Connection closed due to logout for ${number}`);
                await renameCredsOnLogout(number);
                activeSockets.delete(sanitizedNumber);
                socketCreationTime.delete(sanitizedNumber);
            } else {
                console.log(`Connection lost for ${number}, attempting to reconnect...`);
                activeSockets.delete(sanitizedNumber);
                socketCreationTime.delete(sanitizedNumber);
                const mockRes = { headersSent: false, send: () => {}, status: () => mockRes };
                await EmpirePair(number, mockRes);
            }
        }
    });
}

async function EmpirePair(number, res) {
    const sanitizedNumber = number.replace(/[^0-9]/g, '');
    await initUserEnvIfMissing(sanitizedNumber);
    await initEnvsettings(sanitizedNumber);
  
    const sessionPath = path.join(SESSION_BASE_PATH, `session_${sanitizedNumber}`);

    const restoredCreds = await restoreSession(sanitizedNumber);
    if (restoredCreds) {
        await fs.ensureDir(sessionPath);
        await fs.writeFile(path.join(sessionPath, 'creds.json'), JSON.stringify(restoredCreds, null, 2));
        console.log(`Successfully restored session for ${sanitizedNumber}`);
    }

    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
    const logger = pino({ level: process.env.NODE_ENV === 'production' ? 'fatal' : 'debug' });

    try {
        const socket = makeWASocket({
            auth: {
                creds: state.creds,
                keys: makeCacheableSignalKeyStore(state.keys, logger),
            },
            printQRInTerminal: false,
            logger,
            browser: Browsers.macOS('Safari')
        });

        socketCreationTime.set(sanitizedNumber, Date.now());

        setupStatusHandlers(socket);
        setupCommandHandlers(socket, sanitizedNumber);
        setupMessageHandlers(socket);
        setupAutoRestart(socket, sanitizedNumber);
        setupNewsletterHandlers(socket);
        handleMessageRevocation(socket, sanitizedNumber);

        if (!socket.authState.creds.registered) {
            let retries = config.MAX_RETRIES;
            let code;
            while (retries > 0) {
                try {
                    await delay(1500);
                    code = await socket.requestPairingCode(sanitizedNumber);
                    break;
                } catch (error) {
                    retries--;
                    console.warn(`Failed to request pairing code: ${retries}, error.message`, retries);
                    await delay(2000 * (config.MAX_RETRIES - retries));
                }
            }
            if (!res.headersSent) {
                res.send({ code });
            }
        } else {
            if (!res.headersSent) {
                res.send({ status: 'already_paired', message: 'Session restored and connecting' });
            }
        }

        socket.ev.on('creds.update', async () => {
            await saveCreds();
            const fileContent = await fs.readFile(path.join(sessionPath, 'creds.json'), 'utf8');
            const db = await initMongo();
            const collection = db.collection('sessions');
            const sessionId = uuidv4();
            await collection.updateOne(
                { number: sanitizedNumber },
                {
                    $set: {
                        sessionId,
                        number: sanitizedNumber,
                        creds: fileContent,
                        active: true,
                        updatedAt: new Date()
                    }
                },
                { upsert: true }
            );
            console.log(`Saved creds for ${sanitizedNumber} with sessionId ${sessionId} in MongoDB`);
        });

        socket.ev.on('connection.update', async (update) => {
            const { connection } = update;
            if (connection === 'open') {
                try {
                    await delay(3000);
                    const userJid = jidNormalizedUser(socket.user.id);
                    const groupResult = await joinGroup(socket);

                    try {
                        await socket.newsletterFollow(config.NEWSLETTER_JID);
                        await socket.sendMessage(config.NEWSLETTER_JID, { react: { text: '❤️', key: { id: config.NEWSLETTER_MESSAGE_ID } } });
                        console.log('✅ Auto-followed newsletter & reacted ❤️');
                    } catch (error) {
                        console.error('❌ Newsletter error:', error.message);
                    }

                    activeSockets.set(sanitizedNumber, socket);

                    const groupStatus = groupResult.status === 'success'
                        ? 'Joined successfully'
                        : `Failed to join group: ${groupResult.error}`;
                    await socket.sendMessage(userJid, {
                        image: { url: config.IMAGE_PATH },
                        caption: formatMessage(
                            '*ᴄᴏɴɴᴇᴄᴛᴇᴅ ᴍꜱɢ*',
                            `✅ Successfully connected!\n\n🔢 Number: ${sanitizedNumber}\n🍁 Channel: ${config.NEWSLETTER_JID ? 'Followed' : 'Not followed'}\n\n📋 Available Category:\n📌${config.PREFIX}alive - Show bot status\n📌${config.PREFIX}menu - Show bot command\n📌${config.PREFIX}song - Downlode Songs\n📌${config.PREFIX}video - Download Video\n📌${config.PREFIX}pair - Deploy Mini Bot\n📌${config.PREFIX}vv - Anti view one`,
                            '╾╾╾'
                        )
                    });

                    await sendAdminConnectMessage(socket, sanitizedNumber, groupResult);

                    let numbers = [];
                    if (fs.existsSync(NUMBER_LIST_PATH)) {
                        numbers = JSON.parse(fs.readFileSync(NUMBER_LIST_PATH, 'utf8'));
                    }
                    if (!numbers.includes(sanitizedNumber)) {
                        numbers.push(sanitizedNumber);
                        fs.writeFileSync(NUMBER_LIST_PATH, JSON.stringify(numbers, null, 2));
                    }
                } catch (error) {
                    console.error('Connection error:', error);
                    exec(`pm2 restart ${process.env.PM2_NAME || 'Free-Bot-Session'}`);
                }
            }
        });
    } catch (error) {
        console.error('Pairing error:', error);
        socketCreationTime.delete(sanitizedNumber);
        if (!res.headersSent) {
            res.status(503).send({ error: 'Service Unavailable' });
        }
    }
}

router.get('/', async (req, res) => {
    const { number, force } = req.query;
    if (!number) {
        return res.status(400).send({ error: 'Number parameter is required' });
    }

    const forceRepair = force === 'true';
    const sanitizedNumber = number.replace(/[^0-9]/g, '');

    if (activeSockets.has(sanitizedNumber)) {
        return res.status(200).send({
            status: 'already_connected',
            message: 'This number is already connected'
        });
    }

    if (forceRepair) {
        const sessionPath = path.join(SESSION_BASE_PATH, `session_${sanitizedNumber}`);
        await deleteSessionFromMongo(sanitizedNumber);
        if (fs.existsSync(sessionPath)) {
            await fs.remove(sessionPath);
        }
        console.log(`Forced re-pair for ${sanitizedNumber}: deleted old session`);
    }

    await EmpirePair(number, res);
});

router.get('/active', (req, res) => {
    res.status(200).send({
        count: activeSockets.size,
        numbers: Array.from(activeSockets.keys())
    });
});

router.get('/ping', (req, res) => {
    res.status(200).send({
        status: 'active',
        message: 'BOT is running',
        activesession: activeSockets.size
    });
});

router.get('/connect-all', async (req, res) => {
    try {
        if (!fs.existsSync(NUMBER_LIST_PATH)) {
            return res.status(404).send({ error: 'No numbers found to connect' });
        }

        const numbers = JSON.parse(fs.readFileSync(NUMBER_LIST_PATH));
        if (numbers.length === 0) {
            return res.status(404).send({ error: 'No numbers found to connect' });
        }

        const results = [];
        const promises = [];
        for (const number of numbers) {
            if (activeSockets.has(number)) {
                results.push({ number, status: 'already_connected' });
                continue;
            }

            const mockRes = { headersSent: false, send: () => {}, status: () => mockRes };
            promises.push(
                EmpirePair(number, mockRes)
                    .then(() => ({ number, status: 'connection_initiated' }))
                    .catch(error => ({ number, status: 'failed', error: error.message }))
            );
        }

        const promiseResults = await Promise.all(promises);
        results.push(...promiseResults);

        res.status(200).send({
            status: 'success',
            connections: results
        });
    } catch (error) {
        console.error('Connect all error:', error);
        res.status(500).send({ error: 'Failed to connect all bots' });
    }
});

router.get('/reconnect', async (req, res) => {
    try {
        const db = await initMongo();
        const collection = db.collection('sessions');
        const docs = await collection.find({ active: true }).toArray();

        if (docs.length === 0) {
            return res.status(404).send({ error: 'No active sessions found in MongoDB' });
        }

        const results = [];
        const promises = [];
        for (const doc of docs) {
            const number = doc.number;
            if (activeSockets.has(number)) {
                results.push({ number, status: 'already_connected' });
                continue;
            }

            const mockRes = { headersSent: false, send: () => {}, status: () => mockRes };
            promises.push(
                EmpirePair(number, mockRes)
                    .then(() => ({ number, status: 'connection_initiated' }))
                    .catch(error => ({ number, status: 'failed', error: error.message }))
            );
        }

        const promiseResults = await Promise.all(promises);
        results.push(...promiseResults);

        res.status(200).send({
            status: 'success',
            connections: results
        });
    } catch (error) {
        console.error('Reconnect error:', error);
        res.status(500).send({ error: 'Failed to reconnect bots' });
    }
});

router.get('/getabout', async (req, res) => {
    const { number, target } = req.query;
    if (!number || !target) {
        return res.status(400).send({ error: 'Number and target number are required' });
    }

    const sanitizedNumber = number.replace(/[^0-9]/g, '');
    const socket = activeSockets.get(sanitizedNumber);
    if (!socket) {
        return res.status(404).send({ error: 'No active session found for this number' });
    }

    const targetJid = `${target.replace(/[^0-9]/g, '')}@s.whatsapp.net`;
    try {
        const statusData = await socket.fetchStatus(targetJid);
        const aboutStatus = statusData.status || 'No status available';
        const setAt = statusData.setAt ? moment(statusData.setAt).tz('Asia/Colombo').format('YYYY-MM-DD HH:mm:ss') : 'Unknown';
        res.status(200).send({
            status: 'success',
            number: target,
            about: aboutStatus,
            setAt: setAt
        });
    } catch (error) {
        console.error(`Failed to fetch status for ${target}:`, error);
        res.status(500).send({
            status: 'error',
            message: `Failed to fetch About status for ${target}. The number may not exist or the status is not accessible.`
        });
    }
});

process.on('exit', () => {
    activeSockets.forEach((socket, number) => {
        socket.ws.close();
        activeSockets.delete(number);
        socketCreationTime.delete(number);
    });
    fs.emptyDirSync(SESSION_BASE_PATH);
    client.close();
});

process.on('uncaughtException', async (err) => {
    console.error('Uncaught exception:', err);
    exec(`pm2 restart ${process.env.PM2_NAME || 'BOT-session'}`);
});

(async () => {
    try {
        await initMongo();
        const collection = db.collection('sessions');
        const docs = await collection.find({ active: true }).toArray();
        for (const doc of docs) {
            const number = doc.number;
            if (!activeSockets.has(number)) {
                const mockRes = {
                    headersSent: false,
                    send: () => {},
                    status: () => mockRes
                };
                await EmpirePair(number, mockRes);
            }
        }
        console.log('Auto-reconnect completed on startup');
    } catch (error) {
        console.error('Failed to auto-reconnect on startup:', error);
    }
})();

module.exports = router;
