import React from 'react';
import prisma from '@lib/prisma';

export interface UserProps {
}

const User: React.FC<UserProps> = async (props) => {
  const users = await prisma.users.findMany();

  return <>
    {users.map((user) => (
      <div
        key={user.name}
        className='flex items-center justify-between py-3'
      >
        {user.name}
      </div>
    ))}
  </>;
};

export default User;
