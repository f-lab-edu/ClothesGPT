'use client';
import { answer, survey, users } from '@prisma/client';
import useSurvey from '@/modules/survey/hooks/useSurvey';
import {
  ChatContainer,
  MainContainer,
  Message,
  MessageList,
} from '@chatscope/chat-ui-kit-react';
import { data } from '../hooks/tests/surveyMock.json';
import { convertSurveyComponent } from '@/modules/common/utils/convertSurveyComponent';
import { SurveyVO } from '@/modules/common/types/SurveyMessage';
import { useEffect, useState } from 'react';
import Trail from './Trail';
export type UserWithAnswersType = users & { answers: answer[] };

interface SurveyPageProps {
  surveys: survey[];
}

const SurveyPage = (props: SurveyPageProps) => {
  const { surveys } = props;
  const [isSSR, setIsSSR] = useState(true);
  const [open, setOpen] = useState(false);
  const { messages, onClickSurveyChoice, isDisable } = useSurvey({
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
                    <Trail key={i} open={open}>
                      <Message model={message}>
                        <Message.CustomContent>
                          {convertSurveyComponent({
                            survey: message.survey,
                            disabled: isDisable(i),
                            onClick: onClickSurveyChoice,
                          })}
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

export default SurveyPage;
