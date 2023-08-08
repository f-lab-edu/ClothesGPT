import { MessageModel } from '@chatscope/chat-ui-kit-react';
import { ChatGptMessageRole } from '@/api/openai/types';

export type MessageOptions = Pick<MessageModel, 'direction' | 'position'> & {
  sender: ChatGptMessageRole;
};

export type CustomMessageModel = MessageModel & {
  role: ChatGptMessageRole;
  id: string;
};
