import React, { useState } from 'react';
import clsx from 'clsx';
import { ChoiceVO } from '@/types/SurveyMessage';
import HoverWrapper from '../custom/HoverWrapper';

interface SurveyColorContainerProps {
  choice: ChoiceVO;
  onClick?: (choice: ChoiceVO) => void;
  disabled: boolean;
}

function SurveyColorContainer({
  choice,
  onClick,
  disabled,
}: SurveyColorContainerProps) {
  const [isSelect, setIsSelect] = useState(false);
  return (
    <HoverWrapper
      key={choice.id}
      className={`${clsx({
        disable: disabled && !isSelect,
      })} ${clsx(
        isSelect ? 'rounded-full border-4 border-violet-700' : '',
      )} rounded-full border-4`}
    >
      <div
        style={{ background: choice?.color ?? '' }}
        className={`rounded-full bg-[${choice?.color}] m-1 w-[36px] h-[36px]`}
        onClick={() => {
          setIsSelect(true);
          onClick?.(choice);
        }}
      />
    </HoverWrapper>
  );
}

export default SurveyColorContainer;
