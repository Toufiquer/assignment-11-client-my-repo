// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
// };

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDTFmnTqlboBO7rOgFg4f75brVXY1Ftzs",
    authDomain: "assignment-11-c2cc1.firebaseapp.com",
    projectId: "assignment-11-c2cc1",
    storageBucket: "assignment-11-c2cc1.appspot.com",
    messagingSenderId: "171906770605",
    appId: "1:171906770605:web:8ea4781c1df9ddbef94824",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
