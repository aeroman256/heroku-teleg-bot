const TelegramBot = require('node-telegram-bot-api');
const TOKEN = 's...U...L...Q...6..._...h...U...H...V...G...9...u...s...l...x...k...g...y...4...f...p...Z...2...M...y...y...R...L...Y...P...0...o...E...A...A...:...9...9...8...5...8...3...1...3...7';
let untkn = TOKEN.split('').reverse().filter(function(key) {if(key !=="."){return key}}).join('');
const bot = new TelegramBot(untkn, {polling: true});

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Hello from HEROKU, bot says:"Hi, ${msg.from.first_name}"`)
});
