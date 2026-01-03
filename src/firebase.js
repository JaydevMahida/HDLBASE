// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOEflJFK81--wZ-6dRKBk13JJTWoRTBRg",
  authDomain: "hdlbase-e1756.firebaseapp.com",
  projectId: "hdlbase-e1756",
  storageBucket: "hdlbase-e1756.firebasestorage.app",
  messagingSenderId: "284985440526",
  appId: "1:284985440526:web:781913e4898eac9cb2ff5f",
  measurementId: "G-6FGEL9XHRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);