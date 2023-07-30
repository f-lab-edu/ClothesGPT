import React from 'react';
import { cn } from '@/lib/utils';

interface HoverWrapperProps {
  children: React.ReactNode;
  className?: string;
}

function HoverWrapper({ children, className }: HoverWrapperProps) {
  return (
    <div
      className={cn(
        'cursor-pointer rounded-[16px] border-solid border-4 border-transparent hover:border-violet-700',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default HoverWrapper;
