import React, { useState } from 'react';
import { violetButtonVariants } from '@/constant/ComponentClassNames';
import { cn } from '@/lib/utils';
import { ChoiceUI } from '@/types/SurveyMessage';
import NumberInput from '../custom/input/NumberInput';
import { Button } from '../ui/button';

interface SurveyNumberInputContainerProps {
  disabled: boolean;
  onClick?: (choice: ChoiceUI) => void;
  _key: string;
  choice: ChoiceUI;
  type: HTMLInputElement['type'];
}
function SurveyNumberInputContainer({
  onClick,
  disabled,
  _key,
  type,
}: SurveyNumberInputContainerProps) {
  const [value, setValue] = useState(0);
  return (
    <>
      <NumberInput
        type={type}
        disabled={disabled}
        value={value}
        onChange={(value) => setValue(value)}
        range={{ max: 300, min: 0 }}
        autoFocus
      />
      <Button
        className={cn(violetButtonVariants, 'w-[70px]')}
        onClick={() =>
          onClick?.({ id: _key, value: { [_key]: value.toString() } })
        }
        disabled={disabled}
      >
        제출
      </Button>
    </>
  );
}

export default SurveyNumberInputContainer;
