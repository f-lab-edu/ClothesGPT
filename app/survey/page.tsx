import { fireStore } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import SurveyContainer from '@/components/survey/SurveyContainer';

const Page = async () => {
  const docRef = doc(fireStore, 'survey', 'userInfoSurvey');
  const surveys = (await getDoc(docRef)).data();

  return <SurveyContainer surveys={surveys?.data} />;
};

export default Page;
