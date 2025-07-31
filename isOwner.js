const settings = require('../settings');

function isOwner(senderId) {
    // Get owner number from settings
    const ownerJid = settings.ownerNumber +94 771396524 "@s.whatsapp.net";
    return senderId === ownerJid;
}

module.exports = isOwner;sanka
