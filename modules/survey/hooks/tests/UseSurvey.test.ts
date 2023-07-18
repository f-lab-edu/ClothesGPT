import { act } from '@testing-library/react-hooks';
import { renderHook, RenderHookResult } from '@testing-library/react';
import { data } from './surveyMock.json';
import {
  ChoiceVO,
  SurveyMessage,
  SurveyVO,
} from '@/modules/common/types/SurveyMessage';
import useSurvey, { UseSurvey } from '../useSurvey';
import { getSurveyMessageMock } from '@/__tests__/mock/survey/types/surveyMessageMock';
// TODO : 설문이 완료되었을 때의 동작 테스트 필요
describe('Given : UseSurvey ', () => {
  const surveyMessageMock: SurveyMessage[] = data.map((_) => {
    return getSurveyMessageMock(_ as SurveyVO);
  });

  let renderResult: RenderHookResult<UseSurvey, null>['result'];
  beforeEach(() => {
    const { result } = renderHook(() =>
      useSurvey({ surveys: data as SurveyVO[] }),
    );
    renderResult = result;
  });

  test('Then : 초깃값 검증', () => {
    expect(renderResult.current.messages).toEqual([surveyMessageMock[0]]);
    expect(renderResult.current.isDisable(0)).toBeFalsy();
  });
  describe('When : 사용자가 한 번 설문을 선택하면', () => {
    const userSelectedChoice: ChoiceVO = {
      id: '',
      value: { gender: 'male' },
      tag: { gender: 'male' },
    };
    beforeEach(() => {
      act(() => {
        renderResult.current.onClickSurveyChoice(userSelectedChoice);
      });
    });
    test('Then : 다음 설문이 나온다.', () => {
      expect(renderResult.current.messages).toEqual([
        surveyMessageMock[0],
        surveyMessageMock[1],
      ]);
    });
    test('Then : 이전 설문은 선택되지 않으며 다음 설문을 선택할 수 있다.', () => {
      expect(renderResult.current.isDisable(0)).toBeTruthy();
      expect(renderResult.current.isDisable(1)).toBeFalsy();
    });
    describe('When : replay 함수를 호출하면', () => {
      beforeEach(() => {
        act(() => {
          renderResult.current.replay();
        });
      });
      test('Then : 초기 상태로 돌아간다.', () => {
        expect(renderResult.current.messages).toEqual([surveyMessageMock[0]]);
        expect(renderResult.current.isDisable(0)).toBeFalsy();
      });
    });
  });
});
