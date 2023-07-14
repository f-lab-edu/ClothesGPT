'use client';
import React, { useEffect, useState } from 'react';
import Chat from '@/src/components/survey/Chat';
import MultipleChoices from '@/src/components/survey/MultipleChoices';
import { choice, survey } from '@prisma/client';
import { UseSurveyReturnType } from '@/src/components/survey/hooks/useSurvey';
import UserSelectedAnswer from '@/src/components/survey/UserSelectedAnswer';
import Trail from '@/src/components/survey/Trail';

export type SurveyWithChoice = survey & { choices: choice[] };

interface SurveyProps {
  survey: SurveyWithChoice;
  surveyHook: UseSurveyReturnType;
}

const SurveyItem: React.FC<SurveyProps> = (props) => {
  const { survey, surveyHook } = props;
  const [open, set] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      set(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Trail open={open}>
        <Chat content={survey.question} />
        <MultipleChoices
          choices={survey.choices}
          surveyHook={surveyHook}
          surveyId={survey.id}
        />
        <UserSelectedAnswer surveyHook={surveyHook} surveyId={survey.id} />
      </Trail>
    </>
  );
};

export default SurveyItem;
