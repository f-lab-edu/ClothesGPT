import React from 'react';
import prisma from '@/lib/prisma';
import BlankBlock from '@/src/components/survey/BlankBlock';

interface MultipleChoicesInterface {
  surveyId: number;
}

const MultipleChoices: React.FC<MultipleChoicesInterface> = async (
  props: MultipleChoices,
) => {
  const { surveyId } = props;
  const choices = await prisma.choice.findMany({
    where: {
      surveyId: surveyId,
    },
    select: {
      id: true,
      value: true,
      survey: true,
      type: true,
      image: true,
    },
  });

  return (
    <div className="flex flex-row mb-2 flex-wrap">
      <BlankBlock />
      {choices.map((choice, idx) => {
        if (choice.type === 'button') {
          return (
            <button
              key={choice.value}
              className="mr-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              {choice.value}
            </button>
          );
        } else if (choice.type === 'image' && choice.image) {
          return (
            <>
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
            </>
          );
        }
      })}
    </div>
  );
};

export default MultipleChoices;
