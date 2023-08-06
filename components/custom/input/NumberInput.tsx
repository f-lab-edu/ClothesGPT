import React from 'react';
import { Input, InputProps } from '@/components/ui/input';
import { RangeMinMax, rangeNumber } from '@/utils/number/rangeNumber';

type NumberInputProps = Omit<InputProps, 'onChange' | 'value'> & {
  onChange: (value: number) => void;
  value: number;
  range?: RangeMinMax;
};

function NumberInput(props: NumberInputProps) {
  const { max, min } = props.range ?? { max: Infinity, min: Infinity };

  return (
    <Input
      {...props}
      onChange={(e) => {
        const number = Number(rangeNumber(e.target.value, { max, min }));
        props?.onChange(number);
      }}
    />
  );
}

export default NumberInput;
