import firebase from "firebase";
require("@firebase/firestore");

//Pega tu configuración de firebase aquí
const firebaseConfig = {
    apiKey: "AIzaSyA60TECd4an4BRsCdTL-C2MTC5dT6i4BA4",
    authDomain: "foro-de-quejas-37128.firebaseapp.com",
    projectId: "foro-de-quejas-37128",
    storageBucket: "foro-de-quejas-37128.appspot.com",
    messagingSenderId: "490928821795",
    appId: "1:490928821795:web:89bca68bab8d8047224396"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


