'use client';

import { Suspense } from 'react';
import SurveyContainer from '@/components/survey/SurveyContainer';

const Page = async () => {
  return (
    <Suspense>
      <SurveyContainer />
    </Suspense>
  );
};

export default Page;
