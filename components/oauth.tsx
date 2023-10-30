'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
interface Props {
  platform: string;
}

const OauthLogin: React.FC<Props> = ({ platform }) => {
  async function signInWith() {
    await signIn(platform);
  }
  return (
    <button className='border-2 px-4 py-4' onClick={signInWith}>
      {platform}
    </button>
  );
};

export default OauthLogin;
