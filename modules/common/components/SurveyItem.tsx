import { Chat } from '@/components/custom/Button/Chat';
import React from 'react';

function SurveyItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <Chat text={question} className="mb-[10px]" />
      <div className="flex gap-[6px]">{children}</div>
    </div>
  );
}

export default SurveyItem;
