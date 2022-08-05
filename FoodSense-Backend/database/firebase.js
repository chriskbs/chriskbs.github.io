import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXRfdt-x5ELzjkrqglXtaeF2sOE5PrTTk",
  authDomain: "projectfoodsense2022.firebaseapp.com",
  projectId: "projectfoodsense2022",
  storageBucket: "projectfoodsense2022.appspot.com",
  messagingSenderId: "1038779041485",
  appId: "1:1038779041485:web:edf8094edcf01362008b84",
  measurementId: "G-DXT69W7PHQ",
  databaseURL: "https://projectfoodsense2022-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);

export {firebaseApp, database, auth};