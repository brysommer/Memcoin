import TelegramBot from "node-telegram-bot-api";
import { dataBot } from "./values.js";
import { saveUser } from "./users.js";
import { sendAItoUsers } from "./getMessage.js";

export const bot = new TelegramBot(dataBot.token, { polling: true });


bot.onText(/\/start/, async (msg) => {

    const chatId = msg.chat.id;

    const welcomeMessage = `Привіт! Я InvestFlow AI 🚀

Твій персональний помічник у світі криптовалютних інвестицій.

Я тут, щоб допомогти тобі орієнтуватися на ринку, аналізувати потенціал та ризики, а також знаходити перспективні можливості для спекулятивних покупок.

Моя мета – надавати тобі чіткі, об'єктивні та засновані на даних рекомендації, щоб ти міг приймати обґрунтовані рішення.`;

    await saveUser(chatId);



});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

});

setInterval(sendAItoUsers, dataBot.timeOut * 60 * 60 * 1000);