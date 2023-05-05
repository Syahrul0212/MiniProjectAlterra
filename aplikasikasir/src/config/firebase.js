import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-4P8PqlTVwBcrUz7rFOyxbbIlvicXxlA",
  authDomain: "projectauth-f396d.firebaseapp.com",
  projectId: "projectauth-f396d",
  storageBucket: "projectauth-f396d.appspot.com",
  messagingSenderId: "1022960314656",
  appId: "1:1022960314656:web:ff6f4de9f88bb7557e0f45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export default storage;