import { OpenAIApi as OpenAI } from 'openai';
import { openAIConfiguration } from './config';
import { ChatMessage, ChatRequest, OpenAIApi } from './types';

const api = new OpenAI(openAIConfiguration);

const systemMessage: ChatMessage = {
  role: 'system',
  content: 'You are a coordinator who knows fashion trends well.',
};

export const openAIApi: OpenAIApi = {
  chat: async (request: ChatRequest) => {
    const response = await api.createChatCompletion(
      {
        model: 'gpt-3.5-turbo',
        messages: [systemMessage, ...request],
      },
      {
        timeout: 7000,
      },
    );
    return response.data;
  },
};
