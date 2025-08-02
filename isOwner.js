const settings = require('../settings');

function isOwner(senderId) {
    // Get owner number from settings
    const ownerJid = settings.ownerNumber +94 763329583 "@s.whatsapp.net";
    return senderId === ownerJid;
}

module.exports = isOwner;Leo
