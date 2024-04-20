import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoKGylF9SKPJoaNkHD76zoxIzFsN16Dj0",
  authDomain: "final-silver.firebaseapp.com",
  projectId: "final-silver",
  storageBucket: "final-silver.appspot.com",
  messagingSenderId: "68867065002",
  appId: "1:68867065002:web:8d71822df35a6cf0cabcd3",
  measurementId: "G-DMPZLBL05L"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.querySelector('.form-container.sign-up-container form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email-signup').value;
  const password = document.getElementById('password-signup').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
       
      const user = userCredential.user;
      console.log("Account created successfully: ", user);
      alert("Account created successfully!");
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error: ", errorCode, errorMessage);
      alert("Failed to create account: " + errorMessage);
    });
});

document.querySelector('.form-container.sign-in-container form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email-signin').value;
  const password = document.getElementById('password-signin').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    
      const user = userCredential.user;
      console.log("Signed in successfully: ", user);
      alert("Signed in successfully!");

       window.location.href = 'https://htmlpreview.github.io./?https://github.com/Dakshagain/silvercare/blob/main/welcome.html'
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error: ", errorCode, errorMessage);
      alert("Failed to sign in: " + errorMessage);
    });
});
