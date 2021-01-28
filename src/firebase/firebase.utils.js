import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAyoFn80mZRHr4kKqiddxOuOtuHLghKYrY",
  authDomain: "e-com-db-222b4.firebaseapp.com",
  projectId: "e-com-db-222b4",
  storageBucket: "e-com-db-222b4.appspot.com",
  messagingSenderId: "193991560737",
  appId: "1:193991560737:web:d2574a61715eb4fc831d60",
  measurementId: "G-HE4RT1FXDS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
