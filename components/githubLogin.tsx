'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
interface Props {}

export async function signinWithGithub() {
  await signIn('github').then((res) => {
    alert;
  });
}
async function GithubLogin() {
  return (
    <button className='border-2 px-4 py-4' onClick={signinWithGithub}>
      Github
    </button>
  );
}
export default GithubLogin;
