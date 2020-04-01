import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDXDQXtYsb1fU4vAWFF9VvNiu6z2EGePSY",
    authDomain: "crown-clothing-f332d.firebaseapp.com",
    databaseURL: "https://crown-clothing-f332d.firebaseio.com",
    projectId: "crown-clothing-f332d",
    storageBucket: "crown-clothing-f332d.appspot.com",
    messagingSenderId: "188305215586",
    appId: "1:188305215586:web:f88b8833e87db9e6e9813b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
