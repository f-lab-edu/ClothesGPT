import { choice, PrismaClient, survey } from '@prisma/client';

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
    { value: '남자', surveyId: 1, id: 1, type: 'button', image: null },
    { value: '여자', surveyId: 1, id: 2, type: 'button', image: null },
    {
      value: '미니멀',
      surveyId: 2,
      id: 3,
      type: 'image',
      image:
        'https://m.boom-style.com/web/product/medium/202212/a80dc14f3ee0625d309a2253541581f8.jpg',
    },
    {
      value: '아메카지',
      surveyId: 2,
      id: 4,
      type: 'image',
      image:
        'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/d86D/image/bm4DuImYgBTsZYgnHAUgUVEiOIo.jpg',
    },
    {
      value: '오피스',
      surveyId: 2,
      id: 5,
      type: 'image',
      image:
        'https://post-phinf.pstatic.net/MjAxOTA1MDhfOTUg/MDAxNTU3Mjc2NDg3MzU4.eKTJDrf6GGCc24V2LBx1dhbgDS6YUl7AZGYEgj_RuWog.YJSjSPKmAogIoJ5SRg9WeUBQYuTF1mw819YDDNSBHfIg.JPEG/7.jpg?type=w1200',
    },
    {
      value: '힙합',
      surveyId: 2,
      id: 6,
      type: 'image',
      image:
        'https://openimage.interpark.com/goods_image_big/2/0/6/7/8389792067_l.jpg',
    },
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
