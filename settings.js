/*
???????? = ?????????????
?????? ?? ?????????????
*/
const fs = require('fs')

global.botname = "KahfiTzyy"
global.version = "11"
global.owner = "6288287577173"
global.footer = "KahfiMoodTzyy"
global.idch = "120363349717663797@newsletter"
global.packname = "KahfiMoodTzyy"

//Global Thumb
global.thumb = {
menu: "https://img1.pixhost.to/images/6900/617474113_lexcz.jpg",
bug: "https://img1.pixhost.to/images/6900/617474838_lexcz.jpg"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
