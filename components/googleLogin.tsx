'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
interface Props {}
export async function signinWithGoogle() {
  await signIn('google');
}
const GoogleLogin: React.FC<Props> = () => {
  return (
    <button className='border-2 px-4 py-4' onClick={signinWithGoogle}>
      Google
    </button>
  );
};

export default GoogleLogin;
