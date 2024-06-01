import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDgadp3sYZPqHft-7cVXTKG75Jf6dnlNL8",
  authDomain: "fileshere-a8a8d.firebaseapp.com",
  projectId: "fileshere-a8a8d",
  storageBucket: "fileshere-a8a8d.appspot.com",
  messagingSenderId: "520519441377",
  appId: "1:520519441377:web:4eb7de1384d6fa3e98d0a0",
  measurementId: "G-SX9297X4HT",
};

const app = initializeApp(firebaseConfig);
export { app };
