const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '731385899:AAEo0PYLRyyM2Zpf4ygkxlsu9GVHUh_6QLU';
const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Hello from HEROKU, bot says:"Hi, ${msg.from.first_name}"`)
});
