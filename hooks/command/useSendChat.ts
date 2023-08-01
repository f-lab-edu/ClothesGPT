import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { CreateChatCompletionResponse } from 'openai';
import { openAIApi } from '@/api/openai';
import { ChatRequest } from '@/api/openai/types';

export const useSendChat = ({
  onSuccess,
  onError,
}: UseMutationOptions<
  CreateChatCompletionResponse,
  AxiosError,
  ChatRequest
>) => {
  return useMutation<CreateChatCompletionResponse, AxiosError, ChatRequest>({
    mutationFn: (chatRequest: ChatRequest) => openAIApi.chat(chatRequest),
    onSuccess: (data, variables, context) =>
      onSuccess && onSuccess(data, variables, context),
    onError: (error, variables, context) =>
      onError && onError(error, variables, context),
  });
};
