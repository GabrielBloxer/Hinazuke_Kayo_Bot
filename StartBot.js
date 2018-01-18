const Discord = require("discord.js")

const Bot = new Discord.Client()

Bot.on("ready", function() {
    console.log("Ready")
})

module.exports = Bot

Bot.login('NDAzMzU1MDkxNTkzMzMwNjg4.DUIj-A.sx_tY_95q4VE83vrRLL19399_FY')