import React, { useState } from 'react';
import { violetButtonVariants } from '@/constant/ComponentClassNames';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function ButtonWithClickState(props: ButtonProps) {
  const [isClick, setIsClick] = useState(false);

  return (
    <Button
      {...props}
      disabled={isClick ? false : props.disabled}
      className={cn(violetButtonVariants, props.className)}
      onClick={(e) => {
        props.onClick?.(e);
        setIsClick(true);
      }}
    />
  );
}

export default ButtonWithClickState;
