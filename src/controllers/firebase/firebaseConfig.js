// src/firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAFxGrCNVNCZiMbiSbJdI1OlcaaC7VsB4A",
    authDomain: "ecommerce-2596b.firebaseapp.com",
    projectId: "ecommerce-2596b",
    storageBucket: "ecommerce-2596b.appspot.com",
    messagingSenderId: "597986412881",
    appId: "1:597986412881:web:56d9d8e630bc31618dab70"
};

const app = initializeApp(firebaseConfig);

export default app;
