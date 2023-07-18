import { SurveyMessage, SurveyVO } from '@/modules/common/types/SurveyMessage';

export function getSurveyMessageMock(survey: SurveyVO) {
  return new SurveyMessage(survey.question, survey, { direction: 'incoming' });
}
