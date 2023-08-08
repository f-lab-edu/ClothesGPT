'use client';

import { useEffect, useState } from 'react';
import {
  ChatContainer,
  MainContainer,
  Message,
  MessageList,
} from '@chatscope/chat-ui-kit-react';
import useQuestion from '@/hooks/survey/useQuestion';
import { Question } from '@/types/Survey';
import { SurveyComponent } from '@/utils/survey/convertSurveyComponent';
import Trail from './Trail';

const SurveyContainer = ({ surveys }: { surveys: Question[] }) => {
  const [open, setOpen] = useState(false);
  const { messages, onClickQuestionChoice, isDisable } = useQuestion({
    surveys,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="relative h-[800px] w-[700px]">
        <MainContainer className="!border-transparent cs-message-list__scroll-wrapper">
          <ChatContainer>
            <MessageList scrollBehavior="smooth">
              {messages.map((message, i) => {
                return (
                  <Trail key={message.survey.id} open={open}>
                    <Message
                      model={message}
                      type="custom"
                      className="cs-message cs-message--incoming cs-message__content"
                    >
                      <Message.CustomContent>
                        <SurveyComponent
                          survey={message.survey}
                          disabled={isDisable(i)}
                          onClick={onClickQuestionChoice}
                        />
                      </Message.CustomContent>
                    </Message>
                  </Trail>
                );
              })}
            </MessageList>
          </ChatContainer>
        </MainContainer>
      </div>
    </main>
  );
};

export default SurveyContainer;
