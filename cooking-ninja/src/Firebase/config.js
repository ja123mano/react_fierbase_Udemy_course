import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAV2JDG-7wUcF-l5U7vVQCQjm7MM-Q2rb4",
  authDomain: "cocinando-con-kaiko.firebaseapp.com",
  projectId: "cocinando-con-kaiko",
  storageBucket: "cocinando-con-kaiko.appspot.com",
  messagingSenderId: "1082732962418",
  appId: "1:1082732962418:web:d486afbb67440e347e98eb"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }