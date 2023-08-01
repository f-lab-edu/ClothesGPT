import { AxiosError } from 'axios';
import { CreateChatCompletionResponse } from 'openai';
import { ChatRequest } from '@/api/openai/types';
import { convertMessageModelToChatRequest } from '@/utils/survey/messageModelToChatRequest';
import { CustomMessageModel, MessageOptions } from '../types/common/Message';
import { useSendChat } from './command/useSendChat';

export interface UseChatGPT {
  send: (totalMessage: CustomMessageModel[]) => void;
}

export function useChatGPT({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: CustomMessageModel) => void;
  onError?: (error: AxiosError) => void;
}): UseChatGPT {
  const options: MessageOptions = {
    direction: 'incoming',
    position: 'last',
    sender: 'assistant',
  };

  const getData = (data: CreateChatCompletionResponse): CustomMessageModel => {
    return {
      ...options,
      message: data?.choices[0].message?.content,
      role: 'assistant',
    };
  };

  const { mutate } = useSendChat({
    onSuccess: (data) => onSuccess?.(getData(data)),
    onError: (error) => onError?.(error),
  });

  const send = (totalMessage: CustomMessageModel[]) => {
    const requestBody: ChatRequest =
      convertMessageModelToChatRequest(totalMessage);
    mutate(requestBody);
  };

  return { send };
}
