import { openAIApi } from '@/api/openai';
import { ChatRequest } from '@/api/openai/types';
import { useMutation } from '@tanstack/react-query';

export const useSendChat = () => {
  return useMutation({
    mutationFn: (chatRequest: ChatRequest) => openAIApi.chat(chatRequest),
  });
};
