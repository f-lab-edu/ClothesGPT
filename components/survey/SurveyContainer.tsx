'use client';

import { useEffect, useState } from 'react';
import {
  ChatContainer,
  MainContainer,
  Message,
  MessageList,
} from '@chatscope/chat-ui-kit-react';
import { answer, survey, users } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { data } from '@/hooks/survey/tests/surveyMock.json';
import useQuestion from '@/hooks/survey/useQuestion';
import { QuestionVO } from '@/types/SurveyMessage';
import { Survey } from '@/utils/survey/convertSurveyComponent';
import Trail from './Trail';

export type UserWithAnswersType = users & { answers: answer[] };

const SurveyContainer = ({ surveys }: { surveys: survey[] }) => {
  // const [isSSR, setIsSSR] = useState(true);
  const [open, setOpen] = useState(false);
  const { messages, onClickQuestionChoice, isDisable } = useQuestion({
    surveys: data as QuestionVO[],
  });

  // useEffect(() => {
  //   setIsSSR(false);
  // }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  // if (!isSSR) {
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
                        <Survey
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
  // }

  return null;
};

export default SurveyContainer;
