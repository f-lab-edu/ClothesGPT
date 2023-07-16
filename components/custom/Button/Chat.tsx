import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface Props {
  text: string;
  className?: string;
}

export function Chat({ className, text }: Props) {
  return (
    <Badge
      className={cn(
        'inline bg-violet-700 text-white hover:bg-violet-500 text-[16px] w-[180px] rounded-[16px]',
        className,
      )}
    >
      {text}
    </Badge>
  );
}
