import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-h7ZkhoAj-JWuOOSVAe1HMsq0PofquNY",
  authDomain: "prorecovery-14180.firebaseapp.com",
  projectId: "prorecovery-14180",
  storageBucket: "prorecovery-14180.appspot.com",
  messagingSenderId: "622830039044",
  appId: "1:622830039044:web:80266c1bf532afad1b0551",
  measurementId: "G-5VJK8J2J8T"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};
