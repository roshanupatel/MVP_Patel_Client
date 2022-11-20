import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB1Qr1-TlD2j1obFqDAFXxQRo4cJu9EIho",
  authDomain: "hr-mvp-patel.firebaseapp.com",
  projectId: "hr-mvp-patel",
  storageBucket: "hr-mvp-patel.appspot.com",
  messagingSenderId: "807344220471",
  appId: "1:807344220471:web:0ae44a5a3476e01bdb92b2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);