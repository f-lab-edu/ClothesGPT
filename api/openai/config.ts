import { Configuration } from 'openai';

export const openAIConfiguration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
