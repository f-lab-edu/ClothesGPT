import React, { useState } from 'react';
import { cn } from '@/lib/utils';
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
      className={`${cn({
        disable: disabled && !isSelect,
      })} ${cn(
        isSelect ? 'rounded-full border-4 border-violet-700' : '',
      )} rounded-full border-4`}
    >
      <div
        style={{ background: choice?.color ?? '' }}
        className="rounded-full m-1 w-[36px] h-[36px]"
        onClick={() => {
          setIsSelect(true);
          onClick?.(choice);
        }}
      />
    </HoverWrapper>
  );
}

export default SurveyColorContainer;
