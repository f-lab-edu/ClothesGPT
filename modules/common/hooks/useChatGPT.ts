import { CustomMessageModel, MessageOptions } from '../types/Message';
import { ChatRequest } from '@/api/openai/types';
import { useSendChat } from '../command/useSendChat';
import { useMemo } from 'react';
import { messageModelToChatRequest } from '../utils/messageModelToChatRequest';

export interface UseChatGPT {
  getData: CustomMessageModel;
  send: (totalMessage: CustomMessageModel[]) => void;
}

export function useChatGPT(): UseChatGPT {
  const options: MessageOptions = {
    direction: 'incoming',
    position: 'last',
    sender: 'assistant',
  };
  const { mutate, data } = useSendChat();

  const send = (totalMessage: CustomMessageModel[]) => {
    const requestBody: ChatRequest = messageModelToChatRequest(totalMessage);
    mutate(requestBody);
  };

  const getData = useMemo((): CustomMessageModel => {
    return {
      ...options,
      message: data?.choices[0].message?.content,
      role: 'assistant',
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return { getData, send };
}
