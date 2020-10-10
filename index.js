const discord = require('discord.js');
const bot = new discord.Client();
const { token, prefix } = process.env;




const server = require('./server.js');
bot.login(token);
