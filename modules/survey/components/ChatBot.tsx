'use client';
import React from 'react';
import {
  MainContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  ChatContainer,
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { useChatWithChatGPT } from '@/modules/common/hooks/useChatWithChatGPT';

const ChattingContainer = () => {
  const { messages, send, typing } = useChatWithChatGPT({});

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

export default ChattingContainer;
