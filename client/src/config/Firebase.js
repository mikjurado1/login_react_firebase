// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-qkIDOumusbgDkynGsDBf1jrFQ7kdHYU",
  authDomain: "fir-react-crud-ddb88.firebaseapp.com",
  projectId: "fir-react-crud-ddb88",
  storageBucket: "fir-react-crud-ddb88.appspot.com",
  messagingSenderId: "515365381999",
  appId: "1:515365381999:web:ae033cb2dc35e79b5b6a9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase()
export const auth = getAuth()