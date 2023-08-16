import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRcc4_3fXrzEdh_2p6VenSdiI1CyoproY",
  authDomain: "robotrix-3594c.firebaseapp.com",
  databaseURL:
    "https://robotrix-3594c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "robotrix-3594c",
  storageBucket: "robotrix-3594c.appspot.com",
  messagingSenderId: "733685370110",
  appId: "1:733685370110:web:df6fd77621f4a815a729af",
  measurementId: "G-3Z2CEKTBDN",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
