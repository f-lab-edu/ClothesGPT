import { removeEscape } from '@/utils/json/removeEscape';
import useSendUserFavoriteSurveyResult, {
  UserFavoriteSurveyResult,
} from '../command/useSendUserFavoriteSurveyResult';

interface UseUserFavoriteSurveyResult {
  sendSurvey: (request: UserFavoriteSurveyResult) => void;
}

export const useUserFavoriteSurveyResult = (): UseUserFavoriteSurveyResult => {
  const convertSurveyResultToJSON = (surveyResult: string): JSON[] => {
    return JSON.parse(removeEscape(surveyResult));
  };

  const { mutate: sendSurvey } = useSendUserFavoriteSurveyResult({
    onSuccess: (data) => {
      console.log(
        'data',
        convertSurveyResultToJSON(data?.choices?.[0]?.message?.content ?? ''),
      );
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  return {
    sendSurvey,
  };
};
