import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/router';
import LeftNav from '@/components/LeftNav';


const Home = () => {
  const { signOut, currentUser, isLoading } = useAuth();
  const router = useRouter();



  useEffect(() => {
    if (!isLoading && !currentUser) {
        router.push("/login");
    }
}, [currentUser, isLoading]);

  return (
    // <div className='flex w-full bg-black text-white'>
    //   <button onClick={signOut}>Sign Out</button>
    // </div>
    <div className="bg-c1 flex h-[100vh]">
    <div className="flex w-full shrink-0">
        <LeftNav />
        <div className="flex bg-c2 grow">
            <div className="w-[400px] p-5 overflow-auto scrollbar shrink-0 border-r border-white/[0.05]">
                <div className="flex flex-col h-full">
                    {/* <Chats /> */}
                    side
                </div>
            </div>
            <div>Chat</div>
        </div>
    </div>
</div>
  );
}

export default Home;
