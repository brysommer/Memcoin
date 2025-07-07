import { bot } from "./app.js";
import { requestAI } from "./deepseak.js";
import { loadUsers } from "./users.js";
import { dataBot } from "./values.js";


export const sendAItoUsers = async () => {

    const description = await requestAI(dataBot.prompt);
    const users = await loadUsers();
  

    const escapeMarkdown = (text) => {
        return text
          .replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
      };

    for (const chatId of users) {
        try {
            await bot.sendMessage(chatId, escapeMarkdown(description), {
                parse_mode: "MarkdownV2",
              });
        } catch (error) {
            console.log('TG msgerror')
        }
      
    }
  };
  
  
  

