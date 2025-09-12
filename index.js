const { Client, GatewayIntentBits, Collection, MessageActionRow, MessageButton } = require("discord.js");
const fs = require('fs');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const token = process.env.TOKEN;
client.commands = new Collection();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

(async () => {
    for (file of functions) {
        require(`./src/functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, ".src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.login(token);
})();