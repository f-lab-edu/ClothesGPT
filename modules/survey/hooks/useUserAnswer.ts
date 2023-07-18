import { ChoiceVO, SurveyVO } from '@/modules/common/types/SurveyMessage';
import { haveAllKey } from '@/types/object/compareObject';
import { useState } from 'react';

export interface UseUserAnswer {
  select: (choice: ChoiceVO) => void;
  next: () => SurveyVO;
  submit: () => Record<string, string>;
  deleteAll: () => void;
}

export const useUserAnswer = (surveys: SurveyVO[]): UseUserAnswer => {
  const [order, setOrder] = useState(0);
  const [userSelectedTag, setUserSelectedTag] = useState({});
  const [userSelectedValue, setUserSelectedValue] = useState({});

  const select = (choice: ChoiceVO) => {
    if (choice.tag) {
      setUserSelectedTag((prev) => ({ ...prev, ...choice.tag }));
    }
    setUserSelectedValue((prev) => ({ ...prev, ...choice.value }));
    setOrder((prev) => prev + 1);
  };

  const tagFilter = (surveys: SurveyVO[]): SurveyVO[] => {
    return surveys.filter((survey) => {
      return haveAllKey(survey?.tag ?? {}, userSelectedTag);
    });
  };

  const next = (): SurveyVO => {
    return { ...tagFilter(surveys)[order] };
  };

  const submit = (): Record<string, string> => {
    return userSelectedValue;
  };

  const deleteAll = () => {
    setUserSelectedTag({});
    setUserSelectedValue({});
    setOrder(0);
  };

  return {
    select,
    next,
    submit,
    deleteAll,
  };
};
