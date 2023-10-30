'use client';
import Image from 'next/image';
import Login from '@/components/oauth';
export default function Home() {
  return (
    <main className='flex w-screen h-screen'>
      <div className=''>
        <Login platform='google' />
      </div>
    </main>
  );
}
