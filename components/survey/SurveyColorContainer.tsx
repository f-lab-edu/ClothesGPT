import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChoiceUI, Color } from '@/types/SurveyMessage';
import HoverWrapper from '../custom/HoverWrapper';

interface SurveyColorContainerProps {
  choice: ChoiceUI;
  onClick?: (choice: ChoiceUI) => void;
  disabled: boolean;
}

const colorMapper: Record<Color, string> = {
  red: 'bg-red-600',
  yellow: 'bg-yellow-200',
  green: 'bg-green-600',
  sky: 'bg-sky-400',
  pink: 'bg-pink-400',
  purple: 'bg-purple-300',
  navy: 'bg-indigo-700',
  white: 'bg-stone-100',
  black: 'bg-stone-900',
};

function SurveyColorContainer({
  choice,
  onClick,
  disabled,
}: SurveyColorContainerProps) {
  const [isSelect, setIsSelect] = useState(false);
  return (
    <HoverWrapper
      key={choice.id}
      className={cn('rounded-full border-4', {
        disable: disabled && !isSelect,
        'rounded-full border-4 border-violet-700': isSelect,
      })}
    >
      <div
        className={cn(
          'rounded-full m-1 w-[36px] h-[36px]',
          colorMapper[choice?.color ?? 'black'],
        )}
        onClick={() => {
          setIsSelect(true);
          onClick?.(choice);
        }}
      />
    </HoverWrapper>
  );
}

export default SurveyColorContainer;
