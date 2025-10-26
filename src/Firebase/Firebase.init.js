import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };



const firebaseConfig = {
  apiKey: "AIzaSyDwr4cnsvUFAGTGegl7jiDhJoZKH9JAo-o",
  authDomain: "food-sharing-platform-3f385.firebaseapp.com",
  projectId: "food-sharing-platform-3f385",
  storageBucket: "food-sharing-platform-3f385.firebasestorage.app",
  messagingSenderId: "892686228891",
  appId: "1:892686228891:web:e9da2448a6b336e588d53e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);