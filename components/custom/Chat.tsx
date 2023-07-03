import React from 'react';
import { Badge } from '../ui/badge';
import { twMerge } from 'tailwind-merge';

interface Props {
  text: string;
  className?: string;
}

export function SpeechBubble({ className, text }: Props) {
  return (
    <Badge
      className={twMerge(
        `inline bg-violet-700 text-white hover:bg-violet-500 text-[16px] w-[140px] ${
          className ?? ''
        }`,
      )}
    >
      {text}
    </Badge>
  );
}
