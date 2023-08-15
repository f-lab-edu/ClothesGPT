import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Props {
  text: string;
  className?: string;
}

export function Chat({ className, text }: Props) {
  return (
    <Badge
      className={cn(
        'bg-violet-700 text-neutral-50 hover:bg-violet-500 text-[16px] rounded-[16px] break-keep max-w-[200px] ',
        className,
      )}
    >
      {text}
    </Badge>
  );
}
