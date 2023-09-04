import { useState } from 'react';
import { useImmer } from 'use-immer';
import { hasAllKey } from '@/types/object/hasAllKey';
import { Question } from '@/types/Survey';
import { ChoiceUI, QuestionUI } from '@/types/SurveyMessage';

export interface UseAnswer {
  select: (choice: ChoiceUI) => void;
  next: () => QuestionUI | null;
  submit: () => Record<string, string>;
  deleteAll: () => void;
}

interface Answer {
  tags: Record<string, string>;
  value: Record<string, string>;
}

export const useAnswer = (surveys: Question[]): UseAnswer => {
  const [order, setOrder] = useState(0);
  const [answer, updateAnswer] = useImmer<Answer>({
    tags: {},
    value: {},
  });

  const select = (choice: ChoiceUI) => {
    updateAnswer((draft) => {
      draft.tags = { ...draft.tags, ...choice.tag };
      draft.value = { ...draft.value, ...choice.value };
    });
    setOrder((prev) => prev + 1);
  };

  const tagFilter = (surveys: Question[]): Question[] => {
    return surveys.filter((survey) => {
      return hasAllKey(
        (survey?.tag as Record<string, string>) ?? {},
        answer.tags,
      );
    });
  };

  const next = (): QuestionUI | null => {
    const filteringSurveys = tagFilter(surveys ?? []);
    if (filteringSurveys.length <= order) {
      return null;
    }
    return new QuestionUI(filteringSurveys[order]);
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
