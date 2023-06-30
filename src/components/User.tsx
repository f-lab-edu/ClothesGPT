import React from 'react';
import prisma from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

const User = () => {
  // const users = await prisma.users.findMany();

  return (
    <>
      <Button variant={'default'} className="bg-purple-main">
        {'purple button'}
      </Button>
      <Button variant={'destructive'} className="bg-black-100">
        {'black button'}
      </Button>
      <Button variant={'destructive'} className="bg-white-100 text-black-100">
        {'white button'}
      </Button>
      <Button variant={'ghost'}>{'ghost button'}</Button>
      <Button variant={'link'}>{'link button'}</Button>
      <Button variant={'outline'}>{'outline button'}</Button>
      <Button variant={'secondary'}>{'secondary button'}</Button>
      <Avatar />
      <Label>{'label'}</Label>
      <Card className="h-6 w-6 border-[#eeeeee]" />
      {/* {users.map((user) => (
        <div key={user.name} className="flex items-center justify-between py-3">
          {user.name}
        </div>
      ))} */}
    </>
  );
};

export default User;
