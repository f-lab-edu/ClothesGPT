import { useState } from 'react';
import { AxiosError } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { CustomMessageModel, MessageOptions } from '@/types/Message';
import { useChatGPT } from './useChatGPT';

export interface UseChat {
  typing: boolean;
  messages: CustomMessageModel[];
  send: (message: string) => void;
}

interface Parameter {
  initMessage?: CustomMessageModel[];
}

export const useChatWithChatGPT = ({ initMessage }: Parameter): UseChat => {
  const chatGPT = useChatGPT({
    onSuccess: onReceive,
    onError: onError,
  });
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<CustomMessageModel[]>(
    initMessage ?? [
      {
        direction: 'incoming',
        position: 'first',
        message: '반갑습니다.',
        role: 'assistant',
        id: uuidv4(),
      },
    ],
  );
  const userOptions: MessageOptions = {
    direction: 'outgoing',
    position: 'last',
    sender: 'user',
  };

  const onSend = async (message: string) => {
    const userMessage: CustomMessageModel = {
      ...userOptions,
      message,
      role: 'user',
      id: uuidv4(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setTyping(true);
    chatGPT.send([...messages, userMessage]);
  };

  function onReceive(message: CustomMessageModel) {
    if (message) {
      setMessages((prev) => [...prev, message]);
      setTyping(false);
    }
  }
  function onError(error: AxiosError) {
    setTyping(false);
    console.log(error);
  }

  return { messages, typing, send: onSend };
};
