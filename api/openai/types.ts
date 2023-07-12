import { CreateChatCompletionResponse } from 'openai';

export type ChatRequest = ChatMessage[];

export type ChatMessage = { role: ChatGptMessageRole; content: string };
export type ChatGptMessageRole = 'user' | 'assistant' | 'system';

export interface OpenAIApi {
  chat: (request: ChatRequest) => Promise<CreateChatCompletionResponse>;
}
