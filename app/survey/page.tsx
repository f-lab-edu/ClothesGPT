import React from 'react';
import Chat from '@/src/components/survey/Chat';
import Question from '@/src/components/survey/Question';
import prisma from '@/lib/prisma';
import MultipleChoices from '@/src/components/survey/MultipleChoices';

const Page = async () => {
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
    <div className="relative flex min-h-screen flex-col m-auto max-w-md	mt-2 p-2">
      <Chat
        image="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        content="안녕하세요. 저는 ClothesGPT에요. 저는 당신의 옷취향을 분석해서 그에 맞게추천해주는 AI 입니다."
      />
      {surveys.map((survey) => (
        <div key={survey.id}>
          <Question question={survey.question} />
          <MultipleChoices surveyId={survey.id} />
        </div>
      ))}
    </div>
  );
};

export default Page;
