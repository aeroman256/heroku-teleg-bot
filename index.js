const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '731385899:AAEo0PYLRyyM2Zpf4ygkxlsu9GVHUh_6QLUs';
let untkn = TOKEN.split('').reverse().filter(function(key) {if(key !=="."){return key}}).join('');
const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Hello from HEROKU, bot says:"Hi, ${msg.from.first_name}"`)
});
