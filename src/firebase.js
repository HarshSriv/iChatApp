// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCavJMBi4qrj51qvAxfr3OxkGA0Oox0xKQ",
  authDomain: "ichatapp-e2783.firebaseapp.com",
  projectId: "ichatapp-e2783",
  storageBucket: "ichatapp-e2783.appspot.com",
  messagingSenderId: "315465435614",
  appId: "1:315465435614:web:55458b2befc3ac2ee5b54f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db=getFirestore(app)