'use client';
import Image from 'next/image';
import GoogleLogin from '@/components/googleLogin';
import GithubLogin from '@/components/githubLogin';
export default function Home() {
  return (
    <main className='flex w-screen h-screen'>
      <div className=''>
        <GoogleLogin />
        <GithubLogin />
      </div>
    </main>
  );
}
