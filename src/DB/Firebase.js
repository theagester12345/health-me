import { initializeApp } from 'firebase/app';
import {
  equalTo,
  getDatabase,
  onValue,
  orderByChild,
  orderByKey,
  query,
  ref,
  set,
  update,
} from 'firebase/database';
import { firebaseConfig } from './FirebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Get Reference
const db = getDatabase(app);

export const signUpUser = (userId, userData) => {
  // Save the data to Firebase Realtime Database with the unique key
  return new Promise((resolve, reject) => {
    const userRef = ref(db, 'users/' + userId);
    set(userRef, userData)
      .then(() => resolve(true))
      .catch((error) => reject(error));
  });
};

export const checkUserExistence = (email, username) => {
  return new Promise((resolve) => {
    const usersRef = ref(db, 'users');
    const queryRefEmail = query(usersRef, orderByChild('email'), equalTo(email));

    onValue(queryRefEmail, (snapshot) => {
      if (!snapshot.exists()) {
        resolve(false);
      }else{
        resolve(true);
      }
    });
  });
};

export const updateUserBMI = (userId, bmi) => {
  return new Promise((resolve, reject) => {
    const userRef = ref(db, `users/${userId}`);
    update(userRef, { bmi })
      .then(() => resolve(true))
      .catch((error) => reject(error));
  });
};

export const updateUserPassword = (userId, password) => {
  return new Promise((resolve, reject)=> {
    const userRef = ref(db, `users/${userId}`);
    update(userRef, { password })
      .then(() => resolve(true))
      .catch((error) => reject(error));
  })
}

export const loginUser = (username, password) => {
  return new Promise((resolve, reject) => {
    const usersRef = ref(db, 'users');
    const queryRefUsername = query(usersRef, orderByChild('username'), equalTo(username));

    onValue(queryRefUsername, (snapshot) => {
      if (!snapshot.exists()) {
        reject('Username does not exist.');
        return;
      }

      const data = snapshot.toJSON();
      const id = Object.keys(data)[0];
      const user = { ...data[id], id };

      if (user.password !== password) {
        reject('Password is incorrect.');
        return;
      }

      resolve(user);
    });
  });
};

export const fetchDietarySuggestion = (key) => {
  return new Promise((resolve, reject) => {
    const programsRef = ref(db, 'program');
    const suggestionRef = query(programsRef, orderByKey(), equalTo(key));

    onValue(suggestionRef, (snapshot) => {
      if (!snapshot.exists()) {
        reject('Program does not exist.');
        return;
      }

      const data = snapshot.toJSON();
      resolve(data);
    });
  });
};

export const getUserData = (userId) => {
  return new Promise((resolve, reject) => {
    const userRef = ref(db, `users/${userId}`);
    onValue(userRef, (snapshot) => {
      if (!snapshot.exists()) {
        reject('User does not exist.');
        return;
      }
      const data = snapshot.toJSON();
      resolve({ ...data, id: userId });
    });
  });
};

