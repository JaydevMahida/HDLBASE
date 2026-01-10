
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// Fix: Import getFirestore from the standard firestore package as it was not found in the lite version.
import { getFirestore } from 'firebase/firestore';

// Note: In a production environment, these would be populated from environment variables.
const firebaseConfig = {
  apiKey: "AIzaSyBSUJ3y6PFrdN7QF2kPgPX95BjJtZ0hrws",
  authDomain: "hdlbase-4098c.firebaseapp.com",
  projectId: "hdlbase-4098c",
  storageBucket: "hdlbase-4098c.firebasestorage.app",
  messagingSenderId: "90007737592",
  appId: "1:90007737592:web:301578908a7fcb55ae570d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();