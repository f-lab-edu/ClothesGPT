import { useEffect, useState } from 'react';
import { Question } from '@/types/Survey';
import { ChoiceUI, QuestionMessage } from '@/types/SurveyMessage';
import { isEmpty } from '@/utils/survey/object/isEmpty';
import { useAnswer } from './useAnswer';

interface UseQuestionPrarams {
  surveys: Question[];
  submit: (answer: Record<string, string>) => void;
}
export interface UseQuestion {
  messages: QuestionMessage[];
  isDisable: (index: number) => boolean;
  onClickQuestionChoice: (choices: ChoiceUI) => void;
  replay: () => void;
}

const useQuestion = ({ surveys, submit }: UseQuestionPrarams) => {
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<QuestionMessage[]>([]);
  const userAnswer = useAnswer(surveys);

  useEffect(() => {
    nextStep();
  }, [step]);

  const nextStep = () => {
    const nextSurvey = userAnswer.next();
    if (nextSurvey && !isEmpty(nextSurvey)) {
      setMessages((prev) => [
        ...prev,
        new QuestionMessage(nextSurvey.question, nextSurvey, {
          direction: 'incoming',
        }),
      ]);
    } else {
      // TODO : 설문이 모두 끝난 후의 동작 구현
      const answer = userAnswer.submit();
      submit(answer);
    }
  };

  const isDisable = (index: number): boolean => {
    return step > index;
  };

  const onClickQuestionChoice = (choices: ChoiceUI) => {
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
