import SurveyContainer from '@/components/survey/SurveyContainer';
import prisma from '@/lib/prisma';
import { Question } from '@/types/Survey';

const Page = async () => {
  const surveys = (await prisma.question.findMany({
    select: {
      choices: true,
      choiceType: true,
      question: true,
      tag: true,
      id: true,
    },
  })) as Question[];

  return <SurveyContainer surveys={surveys} />;
};

export default Page;
