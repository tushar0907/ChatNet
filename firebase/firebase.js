
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsjcQhIc39-oo1al4hnonQ2SrNf-N8k9s",
  authDomain: "chatnet27.firebaseapp.com",
  projectId: "chatnet27",
  storageBucket: "chatnet27.appspot.com",
  messagingSenderId: "816491614148",
  appId: "1:816491614148:web:c156c432a84d1fd24f9e91"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
