// firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCkgtGJtaeOKseekjnZB7Ebth2DIkYa4f8",
  authDomain: "instagram-login-react.firebaseapp.com",
  projectId: "instagram-login-react",
  storageBucket: "instagram-login-react.appspot.com",
  messagingSenderId: "443924135213",
  appId: "1:443924135213:web:752cac8618113f1d1ba7a4",
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Export Firebase Auth
export const auth = getAuth(app);
