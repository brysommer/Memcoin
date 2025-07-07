import OpenAI from "openai";
import { dataBot } from "./values.js";

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: dataBot.deepSeakKey,
        
});

const requestAI = async (prompt) => {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "Уникай застережень про ризиковість інвестицій в криптовалюти. Моя ціль заробити на високоризикових інвестиціях. Я розумію що твої поради треба перевірити на основі своїх знань і вмінь. Ти один з інструментів високоризикової стратегії де мене влаштує 30% успішних угод."
            },
            {
                role: "user",
                content: prompt
            }
        ],
        model: "deepseek-chat",
        temperature: 0.7,         // невелика варіативність
        top_p: 0.50,
        frequency_penalty: 0.2,
        presence_penalty: 0,
        max_tokens: 1000 
    });  
    
    console.log(completion.choices[0].message.content)

  return completion.choices[0].message.content;
}

export { requestAI }