'use client';
import React from 'react';
import Chat from '@/src/components/survey/Chat';
import Survey from '@/src/components/survey/Survey';
import { survey } from '@prisma/client';

interface SurveyPageProps {
  surveys: survey[];
}

const SurveyPage: React.FC<SurveyPageProps> = (props) => {
  const { surveys } = props;
  return (
    <div className="relative flex min-h-screen flex-col m-auto max-w-md	mt-2 p-2">
      <Chat
        image="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        content="안녕하세요. 저는 ClothesGPT에요. 저는 당신의 옷취향을 분석해서 그에 맞게추천해주는 AI 입니다."
      />
      {surveys.map((survey) => (
        <Survey key={survey.id} survey={survey} />
      ))}
      {/*<ServerSurvey />*/}
    </div>
  );
};

export default SurveyPage;