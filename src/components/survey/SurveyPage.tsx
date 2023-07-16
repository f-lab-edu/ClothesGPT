'use client';
import Chat from '@/src/components/survey/Chat';
import { answer, survey, users } from '@prisma/client';
import useSurvey from '@/src/components/survey/hooks/useSurvey';
import { SurveyWithChoice } from '@/types';
import SurveyItem from '@/src/components/survey/SurveyItem';

export type UserWithAnswersType = users & { answers: answer[] };

interface SurveyPageProps {
  surveys: survey[];
}

const SurveyPage = (props: SurveyPageProps) => {
  const { surveys } = props;
  const surveyHook = useSurvey({ surveys });

  return (
    <div className="relative flex min-h-screen flex-col m-auto max-w-md	mt-2 p-2">
      <Chat
        image="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        content="안녕하세요. 저는 ClothesGPT에요. 저는 당신의 옷취향을 분석해서 그에 맞게추천해주는 AI 입니다."
      />
      {surveyHook.showSurveys.map((survey, idx) => (
        <SurveyItem
          surveyHook={surveyHook}
          key={survey.id}
          survey={survey as SurveyWithChoice}
        />
      ))}
    </div>
  );
};

export default SurveyPage;
