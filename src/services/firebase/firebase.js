import { initializeApp } from "firebase/app";
import { getFirestore } from  "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB6yDrAF1d0Iqh7NEA1Vq-4f4u25be2Cd4",
  authDomain: "devendra-f542c.firebaseapp.com",
  projectId: "devendra-f542c",
  storageBucket: "devendra-f542c.appspot.com",
  messagingSenderId: "370753655185",
  appId: "1:370753655185:web:1201116ea8982a763c0a30",
  measurementId: "G-882ER5X4MB"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)
