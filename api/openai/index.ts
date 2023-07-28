import { OpenAIApi as OpenAI } from 'openai';
import { openAIConfiguration } from './config';
import { ChatMessage, ChatRequest, OpenAIApi } from './types';

const api = new OpenAI(openAIConfiguration);

const systemMessage: ChatMessage = {
  role: 'system',
  content: 'You are a coordinator who knows fashion trends well.',
};

// TODO : timeout 설정. 현재 응답을 받지 못하면 error로 가지 않고 무한정 기다리게 됨
export const openAIApi: OpenAIApi = {
  chat: async (request: ChatRequest) => {
    const response = await api.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [systemMessage, ...request],
    });
    return response.data;
  },
};
