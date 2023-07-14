import { OpenAIApi as OpenAI } from 'openai';
import { ChatMessage, ChatRequest, OpenAIApi } from './types';
import { openAIConfiguration } from './config';

const api = new OpenAI(openAIConfiguration);

const systemMessage: ChatMessage = {
  role: 'system',
  content: 'You are a coordinator who knows fashion trends well.',
};

export const openAIApi: OpenAIApi = {
  chat: async (request: ChatRequest) => {
    const response = await api.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [systemMessage, ...request],
    });
    return response.data;
  },
};
