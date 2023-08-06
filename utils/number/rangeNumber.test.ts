import { rangeNumber } from './rangeNumber';

type TestCase = {
  text: string;
  value: string;
  expected: string;
};

describe('Given : rangeNumber', () => {
  describe.each([
    {
      text: '입력값이 없는 경우',
      value: '',
      expected: '1',
    },
    {
      text: '숫자가 아닌 경우',
      value: '-',
      expected: '',
    },
    {
      text: '음수인 경우',
      value: '-1',
      expected: '1',
    },
    {
      text: '소수점인 경우 소수점 제거',
      value: '15.',
      expected: '15',
    },
    {
      text: '1보다 작으면 1로 강제 설정',
      value: '0',
      expected: '1',
    },
    {
      text: '365보다 크면 365로 강제 설정',
      value: '366',
      expected: '365',
    },
  ])('조건 일치', ({ text, value, expected }: TestCase) => {
    test(text, () => {
      expect(rangeNumber(value, { min: 1, max: 365 })).toBe(expected);
    });
  });
});
