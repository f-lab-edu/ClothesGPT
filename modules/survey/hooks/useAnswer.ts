import { useState } from 'react';
import { ChoiceVO, SurveyVO } from '@/modules/common/types/SurveyMessage';
import { useImmer } from 'use-immer';
import { hasAllKey } from '@/types/object/hasAllKey';

export interface UseAnswer {
  select: (choice: ChoiceVO) => void;
  next: () => SurveyVO;
  submit: () => Record<string, string>;
  deleteAll: () => void;
}

interface Answer {
  tags: Record<string, string>;
  value: Record<string, string>;
}

export const useAnswer = (surveys: SurveyVO[]): UseAnswer => {
  const [order, setOrder] = useState(0);
  const [answer, updateAnswer] = useImmer<Answer>({
    tags: {},
    value: {},
  });

  const select = (choice: ChoiceVO) => {
    if (choice.tag) {
      updateAnswer((draft) => {
        draft.tags = { ...draft.tags, ...choice.tag };
      });
    } else {
      updateAnswer((draft) => {
        draft = {
          tags: { ...draft.tags, ...choice.tag },
          value: { ...draft.value, ...choice.value },
        };
      });
    }
    setOrder((prev) => prev + 1);
  };

  const tagFilter = (surveys: SurveyVO[]): SurveyVO[] => {
    return surveys.filter((survey) => {
      return hasAllKey(survey?.tag ?? {}, answer.tags);
    });
  };

  const next = (): SurveyVO => {
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
