import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCoLzHDE7U8K6WW_aWlsxWPxzPZPJVL3jk",
  authDomain: "tugerentetest.firebaseapp.com",
  projectId: "tugerentetest",
  storageBucket: "tugerentetest.appspot.com",
  messagingSenderId: "985408113706",
  appId: '1:985408113706:web:79cd4a4e5f92b7f6fb8753'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db

