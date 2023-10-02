// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAr5Bqbzp1MTD6IUT07-CfjXEF9Zbmhmzs",
  authDomain: "netflix-clone-2ccf4.firebaseapp.com",
  projectId: "netflix-clone-2ccf4",
  storageBucket: "netflix-clone-2ccf4.appspot.com",
  messagingSenderId: "368231753201",
  appId: "1:368231753201:web:559c7a18a9edcf4a371050",
  measurementId: "G-D75HF1QKW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)