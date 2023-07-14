import { ChatGptMessageRole } from '@/api/openai/types';
import { MessageModel } from '@chatscope/chat-ui-kit-react';

export type MessageOptions = Pick<MessageModel, 'direction' | 'position'> & {
  sender: ChatGptMessageRole;
};

export type CustomMessageModel = MessageModel & { role: ChatGptMessageRole };
