'use client';

import { useEffect, useState } from 'react';
import { SurveyVO } from '@/modules/common/types/SurveyMessage';
import { Survey } from '@/modules/common/utils/convertSurveyComponent';
import {
  ChatContainer,
  MainContainer,
  Message,
  MessageList,
} from '@chatscope/chat-ui-kit-react';
import { answer, survey, users } from '@prisma/client';
import { data } from '../hooks/tests/surveyMock.json';
import useQuestion from '../hooks/useSurvey';
import Trail from './Trail';

export type UserWithAnswersType = users & { answers: answer[] };

const SurveyContainer = ({ surveys }: { surveys: survey[] }) => {
  const [isSSR, setIsSSR] = useState(true);
  const [open, setOpen] = useState(false);
  const { messages, onClickSurveyChoice, isDisable } = useQuestion({
    surveys: data as SurveyVO[],
  });

  useEffect(() => {
    setIsSSR(false);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  if (!isSSR) {
    return (
      <main className="relative flex min-h-screen flex-col items-center justify-center">
        <div className="relative h-[800px] w-[700px]">
          <MainContainer>
            <ChatContainer>
              <MessageList scrollBehavior="smooth">
                {messages.map((message, i) => {
                  return (
                    <Trail key={message.survey.id} open={open}>
                      <Message model={message}>
                        <Message.CustomContent>
                          <Survey
                            survey={message.survey}
                            disabled={isDisable(i)}
                            onClick={onClickSurveyChoice}
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
  }

  return null;
};

export default SurveyContainer;
