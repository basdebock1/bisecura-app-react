import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let db = false;

export const getDb = () => {
  if (!db) {
    const firebaseConfig = {
      // FIREBASE CONFIG CODE
    };
    // init firebase app
    initializeApp(firebaseConfig);
    // init services
    db = getFirestore();
  }
  return db;
};
