import React from 'react';
import { SpeechBubble } from '@/components/custom/Chat';
import { Button } from '@/components/ui/button';
import { DarkModeButton } from '@/components/custom/button/DarkModeButton';

const User = () => {
  return (
    <>
      <SpeechBubble
        text="안녕하세요. 저는 ClothesGPT에요. 저는 당신의 옷취향을 분석해서 그에 맞게추천해주는 AI 입니다."
        className="w-[120px]"
      />
      <Button variant="default" size="default" asChild>
        <span>자식</span>
      </Button>
      <Button variant="default" size="default">
        <span>자식</span>
      </Button>
      <DarkModeButton />
    </>
  );
};

export default User;
