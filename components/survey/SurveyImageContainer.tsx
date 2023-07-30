import React, { useState } from 'react';
import clsx from 'clsx';
import HoverWrapper from '@/components/custom/HoverWrapper';
import { ChoiceVO } from '@/types/SurveyMessage';
import ImageItem from './ImageItem';

interface SurveyImageContainerProps {
  choice: ChoiceVO;
  value: string;
  disabled: boolean;
  onClick?: (choice: ChoiceVO) => void;
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
      className={`${clsx({ disable: disabled && !isSelect })} ${clsx(
        isSelect ? ' border-solid border-4 border-violet-700' : '',
      )}`}
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
