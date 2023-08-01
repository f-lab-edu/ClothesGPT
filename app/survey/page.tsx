import SurveyContainer from '@/components/survey/SurveyContainer';
import prisma from '@/lib/prisma';

// TODO : 설문 api 연동하기
const Page = async () => {
  // const surveys = await prisma.survey.findMany({
  //   where: {
  //     active: true,
  //   },
  //   include: {
  //     choices: {
  //       select: {
  //         id: true,
  //         value: true,
  //         survey: true,
  //         type: true,
  //         image: true,
  //       },
  //     },
  //   },
  // });
  return <SurveyContainer surveys={[]} />;
};

export default Page;
