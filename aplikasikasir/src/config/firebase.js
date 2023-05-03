import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA-4P8PqlTVwBcrUz7rFOyxbbIlvicXxlA",
    authDomain: "projectauth-f396d.firebaseapp.com",
    projectId: "projectauth-f396d",
    storageBucket: "projectauth-f396d.appspot.com",
    messagingSenderId: "1022960314656",
    appId: "1:1022960314656:web:ff6f4de9f88bb7557e0f45"
  };
  
  // Initialize Firebase
  const firebaseAuthentication = firebase.initializeApp(firebaseConfig);

  export default firebaseAuthentication;