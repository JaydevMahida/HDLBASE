
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// Fix: Import getFirestore from the standard firestore package as it was not found in the lite version.
import { getFirestore } from 'firebase/firestore';

// Note: In a production environment, these would be populated from environment variables.
const firebaseConfig = {
  apiKey: "AIzaSy_fake_key_for_demo_purposes",
  authDomain: "hdlbase-chipcrafters.firebaseapp.com",
  projectId: "hdlbase-chipcrafters",
  storageBucket: "hdlbase-chipcrafters.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();