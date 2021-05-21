import firebase from 'firebase'
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDpHQMG4AyeydsP_-IL687BwpKJFi6eqv0",
  authDomain: "profile-app-48011.firebaseapp.com",
  databaseURL: "https://profile-app-48011-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "profile-app-48011",
  storageBucket: "profile-app-48011.appspot.com",
  messagingSenderId: "378355025217",
  appId: "1:378355025217:web:5995dc7a040be1cfc7cdc0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default }
