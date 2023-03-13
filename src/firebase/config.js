import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBjroM--Tb5iNmgHieghAPg5CvcoZJu0iE",
  authDomain: "olxclone-7f773.firebaseapp.com",
  projectId: "olxclone-7f773",
  storageBucket: "olxclone-7f773.appspot.com",
  messagingSenderId: "1053459151537",
  appId: "1:1053459151537:web:d87137b6edd599205d4090",
  measurementId: "G-KP3L26EKHK",
};

export default firebase.initializeApp(firebaseConfig);
