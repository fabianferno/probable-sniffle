import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const configuration = new Configuration({
  organization: "org-piAaL36399pq23Wu1Gk9sq1s",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
  // model: "gpt-4-32k-0314",
  // model: "gpt-4",
  model: "gpt-3.5-turbo",
  messages: [{ role: "user", content: "Hello world" }],
});

// Create an Image
// const response = await openai.createImage({
//   prompt: "A cute baby sea otter",
//   n: 2,
//   size: "1024x1024",
// });

// Create Image Variations
// const response = await openai.createImageVariation(
//   fs.createReadStream("monochrome-dp.png"),
//   2,
//   "1024x1024"
// );

// Create Image Edits
// const response = await openai.createImageEdit(
//   fs.createReadStream("monochrome-dp.png"),
//   fs.createReadStream("mask.png"),
//   "A cute baby sea otter wearing a beret",
//   2,
//   "1024x1024"
// );

// let data = response.data;
let data = completion.data.choices[0].message;

// const response = (await openai.listModels()).data;

console.log(data);
