import { useEffect, useState } from 'react';
import { choice as choiceType, survey } from '@prisma/client';

interface Props {
  surveys: survey[];
}

interface userSelectedAnswer {
  surveyId: number;
  choiceId: number;
  choiceValue: string;
}

const useSurvey = (props: Props) => {
  const { surveys } = props;
  // recoil
  // global hooks
  // local hooks
  // local states
  const [step, setStep] = useState(1);
  const [userSelectedAnswers, setUserSelectedAnswers] = useState<
    userSelectedAnswer[]
  >([]);
  const [showSurveys, setShowSurveys] = useState<survey[]>([]);
  const [gender, setGender] = useState('all');

  // refs
  // variables
  const currentSurvey = showSurveys.find((survey) => survey.order === step);

  // functions
  const onClickSurveyChoice = (choice: choiceType & { survey: survey }) => {
    const answer = {
      surveyId: choice.survey.id,
      choiceId: choice.id,
      choiceValue: choice.value,
      order: choice.survey.order,
    };
    setUserSelectedAnswers((prevState) => [...prevState, answer]);
    if (step === surveys.length) return;
    setStep((prevState) => prevState + 1);
  };
  const getUserAnswerBySurveyId = (surveyId: number) => {
    const userAnswer = userSelectedAnswers.find(
      (answer) => answer.surveyId === surveyId,
    );
    return userAnswer;
  };

  const isButtonDisabled = (surveyId: number) => {
    const userAnswer = getUserAnswerBySurveyId(surveyId);
    return !!userAnswer;
  };
  // useEffects
  useEffect(() => {
    const filteredSurveys = surveys.filter(
      (survey) =>
        survey.order <= step &&
        (survey.gender === gender || survey.gender === 'all'),
    );
    setShowSurveys(filteredSurveys);
  }, [step, gender]);

  return {
    showSurveys,
    onClickSurveyChoice,
    getUserAnswerBySurveyId,
    isButtonDisabled,
    setGender,
  };
};
export type UseSurveyReturnType = ReturnType<typeof useSurvey>;

export default useSurvey;