const fs = require('fs');

function isBanned(userId) {
    try {
        const bannedUsers = JSON.parse(fs.readFileSync('./data/banned.json', 'utf8'));
        return bannedUsers.includes(userId);
    } catch (error) {
        console.('Error checking banned status:', );
        return false;
    }
}

module.exports = { 94763329583 }; 
