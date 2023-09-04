import { ChoiceUI, QuestionMessage } from '@/types/SurveyMessage';
import { UserFavoriteSurveyResult } from '../command/useSendUserFavoriteSurveyResult';
import { useGetSurvey } from './useGetSurvey';
import useQuestion from './useQuestion';
import { useUserFavoriteSurveyResult } from './useUserFavoriteSurveyResult';

export interface UseUserInfoSurvey {
  messages: QuestionMessage[];
  isDisable: (index: number) => boolean;
  onClickQuestionChoice: (choices: ChoiceUI) => void;
}

export default function useUserInfoSurvey(): UseUserInfoSurvey {
  const { data: surveys } = useGetSurvey();
  const { sendSurvey } = useUserFavoriteSurveyResult();

  const { messages, onClickQuestionChoice, isDisable } = useQuestion({
    surveys,
    submit: (answer) => {
      sendSurvey(answer as Record<keyof UserFavoriteSurveyResult, string>);
    },
  });

  return {
    messages,
    onClickQuestionChoice,
    isDisable,
  };
}
