import prisma from '@/lib/prisma';
import SurveyContainer from '@/modules/survey/components/SurveyContainer';

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
  return <SurveyContainer surveys={surveys} />;
};

export default Page;
