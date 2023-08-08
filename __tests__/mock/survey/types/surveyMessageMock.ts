import { QuestionMessage, QuestionUI } from '@/types/SurveyMessage';

export function getSurveyMessageMock(survey: QuestionUI) {
  return new QuestionMessage(survey.question, survey, {
    direction: 'incoming',
  });
}
