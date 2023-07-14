import { useEffect, useState } from 'react';
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
  const chatGPT = useChatGPT();
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
  useEffect(() => {
    if (chatGPT.getData.message) {
      setMessages((prev) => [...prev, chatGPT.getData]);
      setTyping(false);
    }
  }, [chatGPT.getData]);

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

  return { messages, typing, send: handleSend };
};
