import { initializeApp } from "firebase/app";
import {
  equalTo,
  getDatabase,
  onValue,
  orderByChild,
  query,
  ref,
  set,
} from "firebase/database";
import { firebaseConfig } from "./FirebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Get Reference
const db = getDatabase(app);

export const signUpUser = (userId, userData) => {
  // Save the data to Firebase Realtime Database with the unique key
  return new Promise((resolve, reject) => {
    const userRef = ref(db, "users/" + userId);
    set(userRef, userData)
      .then(() => resolve(true))
      .catch((error) => reject(error));
  });
};

export const checkUserExistence = (email, username) => {
  return new Promise((resolve) => {
    const usersRef = ref(db, "users");
    const queryRefEmail = query(
      usersRef,
      orderByChild("email"),
      equalTo(email)
    );

    onValue(queryRefEmail, (snapshot) => {
      if (!snapshot.exists()) {
        resolve(false);
        return;
      }

      const data = snapshot.toJSON();
      const userId = Object.keys(data)[0];
      const hasUsername = data[userId].username === username;

      resolve(hasUsername);
    });
  });
};

export const updateUserBMI = (userId, bmi) => {
  return new Promise((resolve, reject) => {
    const userRef = ref(db, `users/${userId}`);
    set(userRef, { bmi }, { merge: true })
      .then(() => resolve(true))
      .catch((error) => reject(error));
  });
};

export const loginUser = (username, password) => {
  return new Promise((resolve, reject) => {
    const usersRef = ref(db, "users");
    const queryRefUsername = query(
      usersRef,
      orderByChild("username"),
      equalTo(username)
    );

    onValue(queryRefUsername, (snapshot) => {
      if (!snapshot.exists()) {
        reject("Username does not exist.");
        return;
      }

      const data = snapshot.toJSON();
      const id = Object.keys(data)[0];
      const user = { ...data[id], id };

      if (user.password !== password) {
        reject("Password is incorrect.");
        return;
      }

      resolve(user);
    });
  });
};
