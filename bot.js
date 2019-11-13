const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("644251254637461537")
setInterval(function() {
channel.send(`7aSoni_Was_Here 7aSoni_Was_Here 7aSoni_Was_Here 7aSoni_Was_Here`);
}, 30)
})

client.login(process.env.BOT_TOKEN);