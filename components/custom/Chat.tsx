import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';

interface Props {
  text: string;
  className?: string;
}

export function SpeechBubble({ className, text }: Props) {
  return (
    <Badge
      className={cn(
        'inline bg-violet-700 text-white hover:bg-violet-500 text-[16px] w-[140px]',
        className,
      )}
    >
      {text}
    </Badge>
  );
}
