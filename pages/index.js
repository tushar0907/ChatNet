import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/router';


const Home = () => {
  const router = useRouter();
  const { signOut, currentUser, isLoading } = useAuth();

  // Check if the user is logged in
  const isLoggedIn = currentUser !== null;

  // Redirect to the login page if the user is not logged in
  // if (!isLoggedIn) {
  //   router.push("/login");
  // }

  // Handle the sign out event
  const handleSignOut = () => {
    signOut();
    router.push("/login");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome,</h1>
          <button onClick={handleSignOut} className='bg-black text-white'>
            Sign Out
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Home;
