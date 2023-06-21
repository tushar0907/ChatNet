import {react, useEffect} from 'react';
import { UserProvider } from '@/context/authContext';
import '@/styles/globals.css';
import { ChatContextProvider } from '@/context/chatContext';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <UserProvider>
      <ChatContextProvider>
          <Component {...pageProps} />
      </ChatContextProvider> 
    </UserProvider>
  );
}
