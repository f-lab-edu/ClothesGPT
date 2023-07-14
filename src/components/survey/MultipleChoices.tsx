'use client';
import React from 'react';
import BlankBlock from '@/src/components/survey/BlankBlock';
import { choice } from '@prisma/client';
import { UseSurveyReturnType } from '@/src/components/survey/hooks/useSurvey';
import { choice as choiceType, survey } from '.prisma/client';

interface MultipleChoicesInterface {
  choices: choice[];
  surveyHook: UseSurveyReturnType;
  surveyId: number;
}

const MultipleChoices: React.FC<MultipleChoicesInterface> = (props) => {
  const { choices, surveyHook, surveyId } = props;
  const isDisabled = surveyHook.isButtonDisabled(surveyId);
  const answer = surveyHook.getUserAnswerBySurveyId(surveyId)?.choiceValue;
  const onChoiceClick = (choice: choice) => {
    if (isDisabled) return;

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
              className={
                isDisabled
                  ? choice.value === answer
                    ? 'mr-2 bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 rounded'
                    : 'mr-2 bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded'
                  : 'mr-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4' +
                    ' border border-blue-500 hover:border-transparent rounded'
              }
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
                  className="rounded-2xl mr-2"
                  style={{ width: 150, height: 180 }}
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
