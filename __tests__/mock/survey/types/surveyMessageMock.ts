import { QuestionMessage, QuestionVO } from '@/types/common/SurveyMessage';

export function getSurveyMessageMock(survey: QuestionVO) {
  return new QuestionMessage(survey.question, survey, {
    direction: 'incoming',
  });
}
