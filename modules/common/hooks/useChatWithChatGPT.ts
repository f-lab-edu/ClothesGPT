import { useState } from 'react';
import { AxiosError } from 'axios';
import { CustomMessageModel, MessageOptions } from '../types/Message';
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
    onSuccess: handleReceive,
    onError: handleError,
  });
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<CustomMessageModel[]>(
    initMessage ?? [
      {
        direction: 'incoming',
        position: 'first',
        message: '반갑습니다.',
        role: 'assistant',
      },
    ],
  );
  const userOptions: MessageOptions = {
    direction: 'outgoing',
    position: 'last',
    sender: 'user',
  };

  const handleSend = async (message: string) => {
    const userMessage: CustomMessageModel = {
      ...userOptions,
      message,
      role: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);
    setTyping(true);
    chatGPT.send([...messages, userMessage]);
  };

  function handleReceive(message: CustomMessageModel) {
    if (message) {
      setMessages((prev) => [...prev, message]);
      setTyping(false);
    }
  }
  function handleError(error: AxiosError) {
    setTyping(false);
    console.log(error);
  }

  return { messages, typing, send: handleSend };
};
