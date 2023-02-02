// import firebase from 'firebase/app'
// import 'firebase/auth'
// const firebaseConfig = {
//     apiKey: "AIzaSyDogq8yGJWl3dyfoGMMI7X8xVLD_J5QGfc",
//     authDomain: "b-tube-c3.firebaseapp.com",
//     projectId: "b-tube-c3",
//     storageBucket: "b-tube-c3.appspot.com",
//     messagingSenderId: "1086884190945",
//     appId: "1:1086884190945:web:c17e0d37b9320f4ce075a0"
//   };
//   firebase.initializeApp(firebaseConfig)

//   export default firebase.auth()



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,  } from "firebase/auth";
const firebaseConfig = {
   apiKey: "AIzaSyDogq8yGJWl3dyfoGMMI7X8xVLD_J5QGfc",
   authDomain: "b-tube-c3.firebaseapp.com",
   projectId: "b-tube-c3",
   storageBucket: "b-tube-c3.appspot.com",
   messagingSenderId: "1086884190945",
   appId: "1:1086884190945:web:c17e0d37b9320f4ce075a0"
};
const app = initializeApp(firebaseConfig);
export const Verify = getAuth(app);
export const Provider = new GoogleAuthProvider();
Provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')


// export const GooglSingIn = () => {
//    signInWithPopup(Verify, Provider)
//       .then((result) => {
//          const name=result.user.displayName;
//          const email=result.user.email;
//          const profilePic=result.user.photoURL
//          console.log(result);
//          localStorage.setItem("name",name)
//          localStorage.setItem("email",email)
//          localStorage.setItem("profilePictures",profilePic)

//       })
//       .catch((error) => console.log(error))
// }