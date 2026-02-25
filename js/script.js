    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
    import {
      getAuth,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
      onAuthStateChanged
    } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBGOli76rds9ZibeOYpzM0XI8cVPvkFUUg",
  authDomain: "a-list-e9555.firebaseapp.com",
  projectId: "a-list-e9555",
  storageBucket: "a-list-e9555.firebasestorage.app",
  messagingSenderId: "505819658918",
  appId: "1:505819658918:web:8a3afd305e9401efbb9267",
  measurementId: "G-VFZGRCMGVV"
};

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const authSection = document.getElementById("auth-section");
    const appSection = document.getElementById("app-section");

    window.register = async function () {
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Bruker registrert!");
      } catch (error) {
        alert(error.message);
      }
    };

    window.login = async function () {
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Innlogget!");
      } catch (error) {
        alert(error.message);
      }
    };

    window.logout = async function () {
      await signOut(auth);
    };

    onAuthStateChanged(auth, (user) => {
      if (user) {
        authSection.style.display = "none";
        appSection.style.display = "block";
      } else {
        authSection.style.display = "block";
        appSection.style.display = "none";
      }
    });