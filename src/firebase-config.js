import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAIixZ2WtXKT4ari3h0sjR6hgR-ZYFCiOI",
    authDomain: "auth-github-demo.firebaseapp.com",
    projectId: "auth-github-demo",
    storageBucket: "auth-github-demo.appspot.com",
    messagingSenderId: "1052624450259",
    appId: "1:1052624450259:web:1261b141e03a5402a51a26"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);