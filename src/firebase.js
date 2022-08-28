// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd9TfMEszgC-zFpyy-c1E8sjGX2vOEPQc",
  authDomain: "react-messanger-a92bc.firebaseapp.com",
  databaseURL:"http://react-messanger-a92bc.firebaseio.com",
  projectId: "react-messanger-a92bc",
  storageBucket: "react-messanger-a92bc.appspot.com",
  messagingSenderId: "410244709053",
  appId: "1:410244709053:web:236b05e2f405a204dc95d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export {auth, db, storage}