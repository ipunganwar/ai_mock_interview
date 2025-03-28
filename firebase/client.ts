import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwHNUzWHbUZgB3rYVAGgjY-hA0ivlqv-I",
  authDomain: "prepwise-c5ddd.firebaseapp.com",
  projectId: "prepwise-c5ddd",
  storageBucket: "prepwise-c5ddd.firebasestorage.app",
  messagingSenderId: "994820068939",
  appId: "1:994820068939:web:0143ec819c65e866591fce",
  measurementId: "G-4R8HC86QWJ",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
