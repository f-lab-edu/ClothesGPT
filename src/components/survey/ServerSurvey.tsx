import React from 'react';
import Question from '@/src/components/survey/Question';
import { PrismaClient } from '@prisma/client';

const ServerSurvey = async () => {
  const prisma = new PrismaClient();
  const surveys = await prisma.survey.findMany({
    select: {
      id: true,
      question: true,
      active: true,
      order: true,
      gender: true,
    },
  });
  return (
    <>
      {surveys.map((survey) => (
        <div key={survey.id}>
          <Question question={survey.question} />
          {/*<MultipleChoices surveyId={survey.id} />*/}
        </div>
      ))}
    </>
  );
};

export default ServerSurvey;
