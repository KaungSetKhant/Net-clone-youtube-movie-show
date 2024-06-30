// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_APP_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyCy23dwlfrFAlc0UpNZhzIE5mHKF5UNay8",
  authDomain: "netflix-react-npm-ecaac.firebaseapp.com",
  projectId: "netflix-react-npm-ecaac",
  storageBucket: "netflix-react-npm-ecaac.appspot.com",
  messagingSenderId: "265307789924",
  appId: "1:265307789924:web:47d22f53b8f008f05bdd71"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
