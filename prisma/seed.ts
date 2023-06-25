import { PrismaClient, survey, choice } from '@prisma/client';

const prisma = new PrismaClient();

const seed = async () => {
  const surveysData: survey[] = [
    { question: '자신의 성별을 선택해주세요.', active: true, order: 1, id: 1 },
    // Add more survey data as needed
  ];

  const choicesData: choice[] = [
    { value: '남자', surveyId: 1, id: 1 },
    { value: '여자', surveyId: 1, id: 2 },
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
