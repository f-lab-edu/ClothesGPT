import { fireStore } from '@/firebase/index';
import { doc, getDoc } from 'firebase/firestore';
import { Question } from '@/types/Survey';
import { SurveyApi } from './types';

export const surveyApi: SurveyApi = {
  getSurvey: async () => {
    const docRef = doc(fireStore, 'survey', 'userInfoSurvey');
    const surveys = (await getDoc(docRef)).data();
    return surveys?.data as Question[];
  },
};
