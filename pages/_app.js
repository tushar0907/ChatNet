import {react, useEffect} from 'react';
import { UserProvider } from '@/context/authContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
