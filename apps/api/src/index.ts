import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ],
});

client.on("messageCreate", async (message) => {
  console.log(message);

  if (!message?.author.bot) {
    message.author.send(`Echo ${message.content}`);
  }
});

(async () => {
  await client.login(process.env.TOKEN);
})();