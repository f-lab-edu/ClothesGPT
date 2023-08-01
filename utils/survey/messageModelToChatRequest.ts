import { ChatRequest } from '@/api/openai/types';
import { CustomMessageModel } from '@/types/common/Message';

export const convertMessageModelToChatRequest = (
  totalMessage: CustomMessageModel[],
): ChatRequest => {
  const result: ChatRequest = totalMessage.map((message) => {
    return { role: message.role, content: message.message ?? '' };
  });
  return result;
};
