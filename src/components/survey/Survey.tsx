'use client';
import React from 'react';
import Chat from '@/src/components/survey/Chat';
import MultipleChoices from '@/src/components/survey/MultipleChoices';
import { choice, survey } from '@prisma/client';

export type SurveyWithChoice = survey & { choices: choice[] };

interface SurveyProps {
  survey: SurveyWithChoice;
}

const Survey: React.FC<SurveyProps> = (props) => {
  const { survey } = props;
  return (
    <>
      <Chat content={survey.question} />
      <MultipleChoices choices={survey.choices} />
    </>
  );
};

export default Survey;
