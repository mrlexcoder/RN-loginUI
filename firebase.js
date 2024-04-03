// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { auth, getAuth } from "firebase/auth"; // Import the auth function from Firebase

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGLx1ZT3O0pTUMpB0uQV7MzMNjfiwPKvE",
  authDomain: "rn-loginui.firebaseapp.com",
  projectId: "rn-loginui",
  storageBucket: "rn-loginui.appspot.com",
  messagingSenderId: "1036151162181",
  appId: "1:1036151162181:web:49b4b4b5f1266d6e43ea2c",
  measurementId: "G-QW71M710JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app); // Initialize the auth module using getAuth from Firebase

export { auth };
// import {
//   FIREBASE_API_KEY,
//   FIREBASE_APP_ID,
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_MESSAGING_SENDER_ID,
//   FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET,
// } from '@env';
// import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: FIREBASE_API_KEY,
//   authDomain: FIREBASE_AUTH_DOMAIN,
//   projectId: FIREBASE_PROJECT_ID,
//   storageBucket: FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
//   appId: FIREBASE_APP_ID,
// };

// firebase.initializeApp(firebaseConfig);