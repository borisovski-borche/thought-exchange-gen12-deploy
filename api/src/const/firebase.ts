import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: "thought-exchange-gen12.firebaseapp.com",
  projectId: "thought-exchange-gen12",
  storageBucket: "thought-exchange-gen12.appspot.com",
  messagingSenderId: process.env.FB_MSG_ID,
  appId: process.env.FB_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
