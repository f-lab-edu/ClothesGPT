import React from 'react';
import { Chat } from '@/components/custom/Badge/Chat';

interface SurveyItemProps {
  question: string;
  children: React.ReactNode;
}

function SurveyItem({ question, children }: SurveyItemProps) {
  return (
    <div className="flex flex-col">
      <Chat text={question} className="mb-[10px]" />
      <div className="flex gap-[6px]">{children}</div>
    </div>
  );
}

export default SurveyItem;
