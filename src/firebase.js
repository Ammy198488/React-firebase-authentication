// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBT0ND2P8FPjOtFEUJt0vY2IQfcCmBLsM",
  authDomain: "first-project-2e393.firebaseapp.com",
  databaseURL: "https://first-project-2e393-default-rtdb.firebaseio.com",
  projectId: "first-project-2e393",
  storageBucket: "first-project-2e393.appspot.com",
  messagingSenderId: "988131114560",
  appId: "1:988131114560:web:3843108c1aeefa12c1a9a5"
  // apiKey: `${process.env.REACT_APP_API_KEY}`,
  // authDomain: `${process.env.REACT_AUTH_DOMAIN}`,
  // databaseURL: `${process.env.REACT_DATABASE_URL}`,
  // projectId: `${process.env.REACT_PROJECT_ID}`,
  // storageBucket: `${process.env.REACT_STORAGE_BUCKET}`,
  // messagingSenderId: `${process.env.REACT_MESSAGING_SENDER_ID}`,
  // appId: `${process.env.REACT_APP_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;