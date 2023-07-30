import { useState } from 'react';
import { useImmer } from 'use-immer';
import { hasAllKey } from '@/types/object/hasAllKey';
import { ChoiceVO, QuestionVO } from '@/types/SurveyMessage';

export interface UseAnswer {
  select: (choice: ChoiceVO) => void;
  next: () => QuestionVO;
  submit: () => Record<string, string>;
  deleteAll: () => void;
}

interface Answer {
  tags: Record<string, string>;
  value: Record<string, string>;
}

export const useAnswer = (surveys: QuestionVO[]): UseAnswer => {
  const [order, setOrder] = useState(0);
  const [answer, updateAnswer] = useImmer<Answer>({
    tags: {},
    value: {},
  });

  const select = (choice: ChoiceVO) => {
    updateAnswer((draft) => {
      draft.tags = { ...draft.tags, ...choice.tag };
      draft.value = { ...draft.value, ...choice.value };
    });
    setOrder((prev) => prev + 1);
  };

  const tagFilter = (surveys: QuestionVO[]): QuestionVO[] => {
    return surveys.filter((survey) => {
      return hasAllKey(survey?.tag ?? {}, answer.tags);
    });
  };

  const next = (): QuestionVO => {
    return { ...tagFilter(surveys)[order] };
  };

  const submit = (): Record<string, string> => {
    return answer.value;
  };

  const deleteAll = () => {
    updateAnswer({ tags: {}, value: {} });
    setOrder(0);
  };

  return {
    select,
    next,
    submit,
    deleteAll,
  };
};
