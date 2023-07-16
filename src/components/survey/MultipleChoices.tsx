'use client';
import BlankBlock from '@/src/components/survey/BlankBlock';
import { choice } from '@prisma/client';
import { UseSurveyReturnType } from '@/src/components/survey/hooks/useSurvey';
import { choice as choiceType, survey } from '.prisma/client';
import { cn } from '@/lib/utils';

interface MultipleChoicesInterface {
  choices: choice[];
  surveyHook: UseSurveyReturnType;
  surveyId: number;
}

const MultipleChoices = (props: MultipleChoicesInterface) => {
  const { choices, surveyHook, surveyId } = props;
  const isDisabled = surveyHook.isButtonDisabled(surveyId);
  const answer = surveyHook.getUserAnswerBySurveyId(surveyId)?.choiceValue;
  const onChoiceClick = (choice: choice) => {
    if (isDisabled) {
      return;
    }

    if (surveyId === 1) {
      surveyHook.setGender(choice.value === '여자' ? 'female' : 'male');
    }
    surveyHook.onClickSurveyChoice(choice as choiceType & { survey: survey });
  };
  return (
    <div className="flex flex-row mb-2 flex-wrap">
      <BlankBlock />
      {choices.map((choice, idx) => {
        if (choice.type === 'button') {
          return (
            <button
              disabled={isDisabled}
              onClick={() => onChoiceClick(choice)}
              key={choice.value}
              className={cn(
                'mr-2 py-2 px-4 border border-blue-500 rounded font-semibold', // 공통 스타일링
                {
                  'bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white hover:border-transparent':
                    !isDisabled, // 유저가 선택하기전의 choice
                  'bg-blue-500 text-white ':
                    isDisabled && choice.value === answer, // 유저가 선택한 choice
                  'bg-transparent text-blue-700 ':
                    isDisabled && choice.value !== answer, // 유저가 선택하지 않은 choice
                },
              )}
            >
              {choice.value}
            </button>
          );
        } else if (choice.type === 'image' && choice.image) {
          return (
            <div
              onClick={() => onChoiceClick(choice)}
              className="flex"
              key={choice.value}
            >
              {idx % 2 === 0 && idx > 1 && <BlankBlock />}
              <div key={choice.value}>
                <img
                  className="rounded-2xl mr-2 w-[150px] h-[180px]"
                  src={choice.image}
                  alt={choice.value}
                />
                <div className="text-center">{choice.value}</div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default MultipleChoices;
