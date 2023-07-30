import React, { useState } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function ButtonWithClickState(props: ButtonProps) {
  const [isClick, setIsClick] = useState(false);

  return (
    <Button
      {...props}
      disabled={isClick ? false : props.disabled}
      className={cn(
        'bg-violet-700 hover:bg-violet-500 disabled:bg-neutral-200',
        props.className,
      )}
      onClick={(e) => {
        props.onClick?.(e);
        setIsClick(true);
      }}
    />
  );
}

export default ButtonWithClickState;
