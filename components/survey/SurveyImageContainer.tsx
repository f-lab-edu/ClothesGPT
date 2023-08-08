import React, { useState } from 'react';
import HoverWrapper from '@/components/custom/HoverWrapper';
import { cn } from '@/lib/utils';
import { ChoiceUI } from '@/types/SurveyMessage';
import ImageItem from './ImageItem';

interface SurveyImageContainerProps {
  choice: ChoiceUI;
  value: string;
  disabled: boolean;
  onClick?: (choice: ChoiceUI) => void;
}

function SurveyImageContainer({
  choice,
  value,
  onClick,
  disabled,
}: SurveyImageContainerProps) {
  const [isSelect, setIsSelect] = useState<boolean>(false);
  return (
    <HoverWrapper
      className={cn({
        disable: disabled && !isSelect,
        'border-solid border-4 border-violet-700': isSelect,
      })}
    >
      <ImageItem
        onClick={() => {
          onClick?.(choice);
          setIsSelect(true);
        }}
        imageSrc={choice.imageSrc ?? ''}
        value={value}
      />
    </HoverWrapper>
  );
}

export default SurveyImageContainer;
