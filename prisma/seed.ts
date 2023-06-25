import { PrismaClient, survey, choice } from '@prisma/client';

const prisma = new PrismaClient();

const seed = async () => {
  const surveysData: survey[] = [
    {
      question: '자신의 성별을 선택해주세요.',
      gender: 'all',
      active: true,
      order: 1,
      id: 1,
    },
    {
      question: '본인이 찾고 계신 옷의 스타일을 클릭하세요!',
      gender: 'female',
      active: true,
      order: 2,
      id: 2,
    },
    // Add more survey data as needed
  ];

  const choicesData: choice[] = [
    { value: '남자', surveyId: 1, id: 1 },
    { value: '여자', surveyId: 1, id: 2 },
    { value: '미니멀', surveyId: 2, id: 3 },
    { value: '아메카지', surveyId: 2, id: 4 },
    { value: '오피스', surveyId: 2, id: 5 },
    { value: '힙합', surveyId: 2, id: 6 },
    // Add more choice data as needed
  ];

  // Seed surveys
  await prisma.survey.createMany({ data: surveysData });

  // Seed choices
  await prisma.choice.createMany({ data: choicesData });
};

seed()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
