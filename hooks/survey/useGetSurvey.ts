import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { surveyApi } from '@/api/survey';
import { Question } from '@/types/Survey';

export const useGetSurvey = () => {
  return useSuspenseQuery<Question[], AxiosError, Question[]>({
    queryKey: ['survey'],
    queryFn: surveyApi.getSurvey,
    staleTime: 0,
  });
};
