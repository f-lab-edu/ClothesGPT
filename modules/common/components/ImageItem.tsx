import { cn } from '@/lib/utils';
import React from 'react';

interface ImageItemProps {
  imageSrc: string;
  value: string;
  className?: string;
  onClick?: (...args: any) => void;
}

function ImageItem({ imageSrc, value, onClick, className }: ImageItemProps) {
  return (
    <div
      className={cn('flex flex-col w-[80px] items-center', className)}
      onClick={onClick}
    >
      <img
        className="flex-1 w-[100%] h-[70px]"
        src={imageSrc}
        alt={value}
        height={70}
      />
      <span className="text-center font-bold">{value}</span>
    </div>
  );
}

export default ImageItem;
