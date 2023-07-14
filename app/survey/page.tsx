import React from 'react';
import prisma from '@/lib/prisma';
import SurveyPage from '@/src/components/survey/SurveyPage';

const Page = async () => {
  const surveys = await prisma.survey.findMany({
    where: {
      active: true,
    },
    include: {
      choices: {
        select: {
          id: true,
          value: true,
          survey: true,
          type: true,
          image: true,
        },
      },
    },
  });
  return <SurveyPage surveys={surveys} />;
};

export default Page;
