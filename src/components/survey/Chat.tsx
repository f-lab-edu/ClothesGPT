import React from 'react';
import BlankBlock from '@/src/components/survey/BlankBlock';

interface ChatProps {
  image?: string;
  content: string;
}

const Chat: React.FC<ChatProps> = (props: ChatProps) => {
  const { image, content } = props;
  return (
    <div className="flex flex-row w-60 mb-3">
      {image && (
        <img
          className="mr-3 inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src={image}
          alt=""
        />
      )}
      {!image && <BlankBlock />}
      <div className="flex bg-violet-500 text-white p-3 rounded-lg">
        {content}
      </div>
    </div>
  );
};

export default Chat;
