'use client';
import React from 'react';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { useChat } from '@/modules/common/hooks/useChat';

const ChatBot = () => {
  const { messages, send, typing } = useChat();
  console.log('typing', typing);

  return (
    <div className="relative h-[800px] w-[700px]">
      <MainContainer>
        <ChatContainer>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={
              typing ? <TypingIndicator content="ChatGPT is typing" /> : null
            }
          >
            {messages.map((message, i) => {
              return <Message key={i} model={message} />;
            })}
          </MessageList>
          <MessageInput
            placeholder="Type Message here"
            onSend={send}
            disabled={typing}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatBot;
