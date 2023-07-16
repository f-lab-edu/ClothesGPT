import { UseSurveyReturnType } from '@/src/components/survey/hooks/useSurvey';

interface UserSelectedAnswerProps {
  surveyHook: UseSurveyReturnType;
  surveyId: number;
}

const UserSelectedAnswer = (props: UserSelectedAnswerProps) => {
  const { surveyHook, surveyId } = props;
  const answer = surveyHook.getUserAnswerBySurveyId(surveyId);
  if (!answer) {
    return null;
  }
  return (
    <div className="flex justify-end">
      <button
        className="mr-2 bg-transparent text-blue-700 font-semibold
         py-2 px-4 border border-blue500 rounded"
        disabled
      >
        {answer.choiceValue}
      </button>
    </div>
  );
};

export default UserSelectedAnswer;
