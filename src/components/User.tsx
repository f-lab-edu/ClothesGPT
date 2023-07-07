import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

const User = () => {
  return (
    <>
      {/* shadcn component usage example */}
      <Button variant="default" className="bg-violet-700">
        purple button
      </Button>
      <Button variant="destructive" className="bg-black">
        black button
      </Button>
      <Button variant="destructive" className="bg-white text-black">
        white button
      </Button>
      <Button variant="ghost">ghost button</Button>
      <Button variant="link">link button</Button>
      <Button variant="outline">outline button</Button>
      <Button variant="secondary">secondary button</Button>
      <Avatar />
      <Label>label</Label>
      <Card className="h-6 w-6 border-[#eeeeee]" />
    </>
  );
};

export default User;
