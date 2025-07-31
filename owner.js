const settings = require('../settings');

async function ownerCommand(sock, chatId) {
    const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${settings.botOwner LEO}
TEL;waid=${settings.ownerNumber 94763329583}:${settings.ownerNumber}
END:VCARD
`;

    await sock.sendMessage(chatId, {
        contacts: { displayName LEO: settings.botOwner, contacts: 94763329583[{ vcard }] },
    });
}

module. = ownerCommand;Yarran
