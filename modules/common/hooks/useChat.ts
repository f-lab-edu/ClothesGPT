import {
  ChatGptMessageRole,
  ChatMessage,
  ChatRequest,
} from '@/api/openai/types';
import { MessageModel } from '@chatscope/chat-ui-kit-react';
import { useEffect, useState } from 'react';
import { useSendChat } from '../command/useSendChat';

export interface UseChat {
  typing: boolean;
  messages: MessageModel[];
  send: (message: string) => void;
}

const systemMessage: ChatMessage = {
  role: 'system',
  content: 'You are a coordinator who knows fashion trends well.',
};

export const useChat = (): UseChat => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<MessageModel[]>([
    {
      direction: 'incoming',
      position: 'first',
      message: '안녕하세요',
      sender: 'chatGPT',
    },
  ]);
  const { mutate, data, isSuccess } = useSendChat();

  useEffect(() => {
    if (isSuccess) {
      setMessages((prev) => [
        ...prev,
        {
          direction: 'incoming',
          position: 'first',
          message: data.choices[0].message?.content,
          sender: 'chatGPT',
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const handleSend = async (message: string) => {
    const newMessage: MessageModel = {
      direction: 'outgoing',
      position: 'first',
      message,
    };

    const newMessages: MessageModel[] = [...messages, newMessage];
    setMessages(newMessages);
    setTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages: MessageModel[]) {
    const apiMessages: ChatRequest = chatMessages.map((messageObject) => {
      let role: ChatGptMessageRole = 'assistant';
      if (messageObject.sender === 'ChatGPT') {
        role = 'assistant';
      } else {
        role = 'user';
      }
      return { role, content: messageObject.message ?? '' };
    });
    mutate([systemMessage, ...apiMessages]);

    // await openAIApi.chat([systemMessage, ...apiMessages]).then((data) => {
    //   setMessages([
    //     ...chatMessages,
    //     {
    //       message: data.choices[0].message?.content,
    //       direction: 'incoming',
    //       position: 'last',
    //       sender: 'ChatGPT',
    //     },
    //   ]);
    setTyping(false);
    // });
  }
  return { messages, typing, send: handleSend };
};
