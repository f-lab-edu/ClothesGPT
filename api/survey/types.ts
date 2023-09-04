import { Question } from '@/types/Survey';

export interface SurveyApi {
  getSurvey: () => Promise<Question[]>;
}
