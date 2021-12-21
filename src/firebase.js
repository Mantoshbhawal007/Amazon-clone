// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBCzs99s_uDnUmL9W_B0WtVhSolaMfp1_o",
    authDomain: "clone-eac19.firebaseapp.com",
    projectId: "clone-eac19",
    storageBucket: "clone-eac19.appspot.com",
    messagingSenderId: "8437403719",
    appId: "1:8437403719:web:5128073dc1dce7bf4ce162",
    measurementId: "G-8GWGJYXL6V"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export{db,auth};