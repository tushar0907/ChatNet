import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/router';


const Home = () => {
  const { signOut, currentUser, isLoading } = useAuth();
  const router = useRouter();



  useEffect(() => {
    if (!isLoading && !currentUser) {
        router.push("/login");
    }
}, [currentUser, isLoading]);



  return (
    <div className='flex w-full bg-black text-white'>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default Home;
