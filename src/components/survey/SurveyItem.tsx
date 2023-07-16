'use client';
import { useEffect, useState } from 'react';
import Chat from '@/src/components/survey/Chat';
import MultipleChoices from '@/src/components/survey/MultipleChoices';
import { UseSurveyReturnType } from '@/src/components/survey/hooks/useSurvey';
import UserSelectedAnswer from '@/src/components/survey/UserSelectedAnswer';
import Trail from '@/src/components/survey/Trail';
import { SurveyWithChoice } from '@/types';

interface SurveyProps {
  survey: SurveyWithChoice;
  surveyHook: UseSurveyReturnType;
}

const SurveyItem = (props: SurveyProps) => {
  const { survey, surveyHook } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
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
