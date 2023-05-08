import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCU6bRdwllahKCw1_JGA-PbqhCXLWGFh-0",
  authDomain: "cars-ee05d.firebaseapp.com",
  projectId: "cars-ee05d",
  storageBucket: "cars-ee05d.appspot.com",
  messagingSenderId: "566991063162",
  appId: "1:566991063162:web:fc3f06fef53ca13022d3c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);