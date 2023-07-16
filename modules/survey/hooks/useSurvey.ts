import { useEffect, useState } from 'react';
import { useUserAnswer } from './useUserAnswer';
import {
  ChoiceVO,
  SurveyMessage,
  SurveyVO,
} from '@/modules/common/types/SurveyMessage';
import { isEmpty } from '@/modules/common/utils/object/isEmpty';

interface Props {
  surveys: SurveyVO[];
}

export interface UseSurvey {
  messages: SurveyMessage[];
  isDisable: (index: number) => boolean;
  onClickSurveyChoice: (choices: ChoiceVO) => void;
  replay: () => void;
}

const useSurvey = (props: Props) => {
  const { surveys } = props;
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<SurveyMessage[]>([]);
  const userAnswer = useUserAnswer(surveys);

  useEffect(() => {
    nextStep();
  }, [step]);

  const nextStep = () => {
    const nextSurvey = userAnswer.next();
    if (!isEmpty(nextSurvey)) {
      setMessages((prev) => [
        ...prev,
        new SurveyMessage(nextSurvey.question, nextSurvey, {
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

  const onClickSurveyChoice = (choices: ChoiceVO) => {
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
    onClickSurveyChoice,
    replay,
  };
};

export default useSurvey;
