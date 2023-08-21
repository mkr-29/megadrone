import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDherAnfWpvvLNqJ2fa1dOMKHrn_w8cgcA",
  authDomain: "megadrone-686f7.firebaseapp.com",
  databaseURL:
    "https://megadrone-686f7-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "megadrone-686f7",
  storageBucket: "megadrone-686f7.appspot.com",
  messagingSenderId: "694157731077",
  appId: "1:694157731077:web:d6e62d843a62a21502436c",
  measurementId: "G-B6DLC3EMTW",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default app;
