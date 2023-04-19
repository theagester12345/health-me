import { initializeApp } from 'firebase/app';
import {getDatabase,ref,set} from "firebase/database"
import { firebaseConfig } from './FirebaseConfig';
import Toast from 'react-native-root-toast';

// Initialize Firebase 
const app = initializeApp(firebaseConfig);

//Get Reference 
const db = getDatabase(app);

export const signUpUser = (userId,userData,navigation)=>{
  // Save the data to Firebase Realtime Database with the unique key
  set(ref(db, 'users/' + userId), userData).then(() => {
    console.log("Data saved successfully");
    // Handle success logic here
    // Show success toast
    Toast.show("User saved successfully", {
      duration: Toast.durations.SHORT,
      shadow:true,
      animation: true,
      backgroundColor:'green'
    });

    // Navigate back to previous screen after 3 seconds
  setTimeout(() => {
    navigation.goBack();
  }, 2000);

  })
  .catch((error) => {
    console.error("Error saving data: ", error);
    // Handle error logic here
    Toast.show(`Failed to save user: ${error.message}`, {
      duration: Toast.durations.SHORT,
      shadow:true,
      animation: true,
      backgroundColor:'red'
    });
  });

};

// export const checkUserExistence = (email, username) => {
//   const usersRef = db.ref('users');
//   const queryRefEmail = orderByChild(usersRef, 'email').equalTo(email);
//   const queryRefUsername = orderByChild(usersRef, 'username').equalTo(username);

//   let usernamePresent = false ;
//   let emailPresent = false;

//   return Promise.all([get(queryRefEmail), get(queryRefUsername)]).then(([emailSnapshot, usernameSnapshot]) => {
//     if (emailSnapshot.exists()) {
//       emailPresent = true;
//     }

//     if (usernameSnapshot.exists()) {
//       usernamePresent = true;
//     }

//     if (usernamePresent || emailPresent){
//       Toast.show("Username or Email already exists", {
//         duration: Toast.durations.SHORT,
//         shadow: true,
//         animation: true,
//         backgroundColor: 'red'
//       });
//     };

//     return usernamePresent || emailPresent;
//   }).catch((error) => {
//     console.error("Error checking user existence: ", error);
//     Toast.show(`Failed to check user existence: ${error.message}`, {
//       duration: Toast.durations.SHORT,
//       shadow: true,
//       animation: true,
//       backgroundColor: 'red'
//     });
//     return false;
//   });
// };

