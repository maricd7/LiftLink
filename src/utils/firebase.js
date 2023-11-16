import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth' ;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()

// REACT_APP_FIREBASE_AUTH_DOMAIN = liftlink-eac5f.firebaseapp.com;
// REACT_APP_FIREBASE_PROJECT_ID = liftlink-eac5f; 
// REACT_APP_FIREBASE_STORAGE_BUCKET = liftlink-eac5f.appspot.com; 
// REACT_APP_FIREBASE_MESSAGE_SENDER_ID = 1066446021792; 
// REACT_APP_FIREBASE_APP_ID = 1:1066446021792:web:1d16a147d418906bf5d5c5; 
// REACT_APP_FIREBASE_MEASUREMENT_ID = G-06ZYZMP1R6; 