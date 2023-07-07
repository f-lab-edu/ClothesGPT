import { CreateChatCompletionResponse } from 'openai';

export type ChatRequest = Message[];

type Message = { role: ChatGptMessageRole; content: string };
type ChatGptMessageRole = 'user' | 'assistant';

export interface OpenAIApi {
  chat: (request: ChatRequest) => Promise<CreateChatCompletionResponse>;
}
