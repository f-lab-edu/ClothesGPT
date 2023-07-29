import React, { useState } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function ButtonWithClickState(props: ButtonProps) {
  const [isClick, setIsClick] = useState(false);

  return (
    <Button
      {...props}
      className={cn(
        props.className,
        'bg-violet-700 text-white rounded-[10px] hover:bg-violet-500',
        `disabled:${isClick ? 'opacity-75' : 'opacity-25'}`,
      )}
      onClick={(e) => {
        props.onClick?.(e);
        setIsClick(true);
      }}
    />
  );
}

export default ButtonWithClickState;
