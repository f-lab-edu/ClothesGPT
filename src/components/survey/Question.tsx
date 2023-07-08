import React from 'react';
import Chat from '@/src/components/survey/Chat';

interface QuestionProps {
  question: string;
}

const Question: React.FC<QuestionProps> = (props: QuestionProps) => {
  return <Chat content={props.question} />;
};

export default Question;
