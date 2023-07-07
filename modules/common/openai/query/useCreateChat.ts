import { openAIApi } from '@/api/openai';
import { ChatRequest } from '@/api/openai/types';
import { MutationSideEffect, useMutate } from '@/hooks/useMutate';
import { AxiosError } from 'axios';
import { CreateChatCompletionResponse } from 'openai';

function useCreateChat(
  options: MutationSideEffect<
    CreateChatCompletionResponse,
    AxiosError,
    ChatRequest
  >,
) {
  return useMutate((request: ChatRequest) => openAIApi.chat(request), {
    ...options,
  });
}

export default useCreateChat;
