// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyMoUnxnNuBH2OEfk-tUgYdcU-gRd7aw4",
  authDomain: "test-f1cb8.firebaseapp.com",
  projectId: "test-f1cb8",
  storageBucket: "test-f1cb8.appspot.com",
  messagingSenderId: "206741093434",
  appId: "1:206741093434:web:0398d29e01638a47770903"
};

// Initialize Firebase

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH=getAuth(FIREBASE_APP)
export const db=getFirestore(FIREBASE_APP)