import {getFirestore} from "@firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyByRGAfmTO10MViTo_obbPglJoOkCKSYUs",
  authDomain: "prueba-21f16.firebaseapp.com",
  projectId: "prueba-21f16",
  storageBucket: "prueba-21f16.appspot.com",
  messagingSenderId: "494149158112",
  appId: "1:494149158112:web:54d30d9849a7e209dd3c85"
};

const app = initializeApp(firebaseConfig);
export const dbFirebase=getFirestore(app);

