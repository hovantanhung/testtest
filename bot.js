
const TelegramBot = require('node-telegram-bot-api');
const token = '7448678149:AAEthKdIf5URnNhTbdtlCG1YCNPSyhvzBvc';
const bot = new TelegramBot(token, { polling: true });



bot.onText(/\/start|play/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'bắt đầu', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Play ', web_app: { url: webAppUrl } }]
      ]
    }
  });
});
