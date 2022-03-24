import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBX1vNIMwtvqS7Md_tJGgHVrZ32dIYvCpo",
  authDomain: "disney-clone-12179.firebaseapp.com",
  projectId: "disney-clone-12179",
  storageBucket: "disney-clone-12179.appspot.com",
  messagingSenderId: "23319513180",
  appId: "1:23319513180:web:632210d57cd52a5ad6be99",
  measurementId: "G-RHH2P3YQQY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
