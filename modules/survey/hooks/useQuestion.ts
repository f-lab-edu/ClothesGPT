import { useEffect, useState } from 'react';
import {
  ChoiceVO,
  SurveyMessage as QuestionMessage,
  SurveyVO as QuestionVO,
} from '@/modules/common/types/SurveyMessage';
import { isEmpty } from '@/modules/common/utils/object/isEmpty';
import { useAnswer } from './useAnswer';

export interface UseQuestion {
  messages: QuestionMessage[];
  isDisable: (index: number) => boolean;
  onClickQuestionChoice: (choices: ChoiceVO) => void;
  replay: () => void;
}

const useQuestion = ({ surveys }: { surveys: QuestionVO[] }) => {
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<QuestionMessage[]>([]);
  const userAnswer = useAnswer(surveys);

  useEffect(() => {
    nextStep();
  }, [step]);

  const nextStep = () => {
    const nextSurvey = userAnswer.next();
    if (!isEmpty(nextSurvey)) {
      setMessages((prev) => [
        ...prev,
        new QuestionMessage(nextSurvey.question, nextSurvey, {
          direction: 'incoming',
        }),
      ]);
    } else {
      // TODO : 설문이 모두 끝난 후의 동작 구현
    }
  };

  const isDisable = (index: number): boolean => {
    return messages.length - 1 !== index;
  };

  const onClickQuestionChoice = (choices: ChoiceVO) => {
    userAnswer.select(choices);
    setStep((prev) => prev + 1);
  };

  const replay = () => {
    userAnswer.deleteAll();
    setMessages([]);
    setStep(0);
  };

  return {
    messages,
    isDisable,
    onClickQuestionChoice,
    replay,
  };
};

export default useQuestion;
