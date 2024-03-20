import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: "AIzaSyC-h7ZkhoAj-JWuOOSVAe1HMsq0PofquNY",
    authDomain: "prorecovery-14180.firebaseapp.com",
    projectId: "prorecovery-14180",
    storageBucket: "prorecovery-14180.appspot.com",
    messagingSenderId: "622830039044",
    appId: "1:622830039044:web:80266c1bf532afad1b0551",
    measurementId: "G-5VJK8J2J8T"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const firestore = getFirestore(app);

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);

  nuxtApp.vueApp.provide("firestore", firestore);
  nuxtApp.provide("firestore", firestore);
});
