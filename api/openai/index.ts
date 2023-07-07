import { OpenAIApi as OpenAI } from 'openai';
import { ChatRequest, OpenAIApi } from './types';
import { openAIConfiguration } from './config';

const api = new OpenAI(openAIConfiguration);

export const openAIApi: OpenAIApi = {
  chat: async (request: ChatRequest) => {
    const response = await api.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [...request],
    });
    return response.data;
  },
};
