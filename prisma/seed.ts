import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seed = async () => {
  await prisma.question.create({
    data: {
      question: '자신의 성별을 선택해주세요.',
      choiceType: 'Button',
      choices: {
        create: [
          {
            value: { gender: '남자' },
            tag: { gender: 'male' },
          },
          {
            value: { gender: '여자' },
            tag: { gender: 'female' },
          },
        ],
      },
    },
  });

  await prisma.question.create({
    data: {
      question: '본인이 찾고 계신 옷의 스타일을 클릭하세요!',
      choiceType: 'Image',
      tag: {
        gender: 'male',
      },
      choices: {
        create: [
          {
            value: { style: '미니멀' },
            imageSrc:
              'https://m.boom-style.com/web/product/medium/202212/a80dc14f3ee0625d309a2253541581f8.jpg',
          },
          {
            value: { style: '아메카지' },
            imageSrc:
              'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/d86D/image/bm4DuImYgBTsZYgnHAUgUVEiOIo.jpg',
          },
          {
            value: { style: '오피스' },
            imageSrc:
              'https://post-phinf.pstatic.net/MjAxOTA1MDhfOTUg/MDAxNTU3Mjc2NDg3MzU4.eKTJDrf6GGCc24V2LBx1dhbgDS6YUl7AZGYEgj_RuWog.YJSjSPKmAogIoJ5SRg9WeUBQYuTF1mw819YDDNSBHfIg.JPEG/7.jpg',
          },
          {
            value: { style: '힙합' },
            imageSrc:
              'https://openimage.interpark.com/goods_image_big/2/0/6/7/8389792067_l.jpg',
          },
          {
            value: { style: '스트릿' },
            imageSrc:
              'https://blak12.com/web/product/extra/big/20210812/72535b838b272fb3a345cfa1b0061ed8.jpg',
          },
          {
            value: { style: '캐주얼' },
            imageSrc:
              'https://mi2mi.co.kr/data/item/2022101469/thumb-A97_1000x1000.jpg',
          },
        ],
      },
    },
  });

  await prisma.question.create({
    data: {
      question: '본인이 찾고 계신 옷의 스타일을 클릭하세요!',
      choiceType: 'Image',
      tag: {
        gender: 'female',
      },
      choices: {
        create: [
          {
            value: { style: '미니멀' },
            imageSrc:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGSFyO-2Kzieq8BBXM4WNZ0647QnjSPy2SIQ&usqp=CAU',
          },
          {
            value: { style: '아메카지' },
            imageSrc:
              'https://thumbnail.10x10.co.kr/webimage/image/basic600/421/B004210085.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false',
          },
          {
            value: { style: '오피스' },
            imageSrc:
              'https://image.babosarang.co.kr/product/detail/UBT/3/2102231534039465/_600.jpg',
          },
          {
            value: { style: '힙합' },
            imageSrc:
              'https://openimage.interpark.com/goods_image_big/2/0/6/7/8389792067_l.jpg',
          },
          {
            value: { style: '스트릿' },
            imageSrc:
              'https://img3.tmon.kr/cdn4/deals/2023/05/20/20354612514/front_f0bd0_lqjrx.jpg',
          },
          {
            value: { style: '캐주얼' },
            imageSrc:
              'https://image.hmall.com/static/6/9/90/35/2135909676_0.jpg?RS=600x600&AR=0',
          },
        ],
      },
    },
  });

  await prisma.question.create({
    data: {
      question: '본인의 체형을 선택하세요!',
      choiceType: 'Image',
      tag: {
        gender: 'male',
      },
      choices: {
        create: [
          {
            value: { body: '역삼각형 체형' },
            imageSrc:
              'https://firebasestorage.googleapis.com/v0/b/mystorage-40c43.appspot.com/o/clothesGPT%2FmanInvertedTriangle.svg?alt=media&token=8861e2e5-3e2b-41da-92e2-a30698a58584',
          },
          {
            value: { body: '다이아몬드 체형' },
            imageSrc:
              'https://firebasestorage.googleapis.com/v0/b/mystorage-40c43.appspot.com/o/clothesGPT%2FmanDiamond.svg?alt=media&token=74595864-a408-4123-b808-61a9830007f0',
          },
          {
            value: { body: '원형 체형' },
            imageSrc:
              'https://firebasestorage.googleapis.com/v0/b/mystorage-40c43.appspot.com/o/clothesGPT%2FmanRound.svg?alt=media&token=f56a5dbb-7628-40b8-ae46-52603ca8b621',
          },
        ],
      },
    },
  });

  await prisma.question.create({
    data: {
      question: '본인의 체형을 선택하세요!',
      choiceType: 'Image',
      tag: {
        gender: 'female',
      },
      choices: {
        create: [
          {
            value: { body: '역삼각형 체형' },
            imageSrc:
              'https://firebasestorage.googleapis.com/v0/b/mystorage-40c43.appspot.com/o/clothesGPT%2FwomanInvertedTriangle.svg?alt=media&token=2ef0a377-979f-4f4e-b09b-e53ffb5366f4',
          },
          {
            value: { body: '삼각형 체형' },
            imageSrc:
              'https://firebasestorage.googleapis.com/v0/b/mystorage-40c43.appspot.com/o/clothesGPT%2FwomanTriangle.svg?alt=media&token=57af5b6b-37b0-41b0-8e42-2a1c4b300be9',
          },
          {
            value: { body: '사각형 체형' },
            imageSrc:
              'https://firebasestorage.googleapis.com/v0/b/mystorage-40c43.appspot.com/o/clothesGPT%2FwomanRectangle.svg?alt=media&token=b504106c-8913-47ad-93b9-c5db476bbb29',
          },
          {
            value: { body: '원형 체형' },
            imageSrc:
              'https://firebasestorage.googleapis.com/v0/b/mystorage-40c43.appspot.com/o/clothesGPT%2FwomanRound.svg?alt=media&token=99b4f365-f49a-45fd-aee9-ffa70d978b8a',
          },
          {
            value: { body: '모래시계 체형' },
            imageSrc:
              'https://firebasestorage.googleapis.com/v0/b/mystorage-40c43.appspot.com/o/clothesGPT%2FwomanSandglass.svg?alt=media&token=f896a492-8613-4aed-968d-45200e794c49',
          },
        ],
      },
    },
  });

  await prisma.question.create({
    data: {
      question: '본인의 키를 적어주세요!',
      choiceType: 'Input',
      choices: {
        create: [
          {
            value: { height: null },
            inputType: 'Number',
          },
        ],
      },
    },
  });
  await prisma.question.create({
    data: {
      question: '본인의 몸무게를 적어주세요!',
      choiceType: 'Input',
      choices: {
        create: [
          {
            value: { weight: null },
            inputType: 'Number',
          },
        ],
      },
    },
  });

  await prisma.question.create({
    data: {
      question: '본인의 좋아하는 색깔을 선택하세요!',
      choiceType: 'Color',
      choices: {
        create: [
          {
            value: { color: '빨간색' },
            color: 'red',
          },
          {
            value: { color: '노란색' },
            color: 'yellow',
          },
          {
            value: { color: '초록색' },
            color: 'green',
          },
          {
            value: { color: '하늘색' },
            color: 'sky',
          },
          {
            value: { color: '분홍색' },
            color: 'pink',
          },
          {
            value: { color: '보라색' },
            color: 'purple',
          },
          {
            value: { color: '남색' },
            color: 'navy',
          },
          {
            value: { color: '흰색' },
            color: 'white',
          },
          {
            value: { color: '검은색' },
            color: 'black',
          },
        ],
      },
    },
  });
};

seed()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
