import firebase from 'firebase/app'; 
import "firebase/firestore"; 
import "firebase/auth"; 


var firebaseConfig = {
    apiKey: "AIzaSyCXk1XIddjOg2bEEsxG-Xk9Qp9rAaxlW8k",
    authDomain: "geo-ninja-4bd67.firebaseapp.com",
    databaseURL: "https://geo-ninja-4bd67.firebaseio.com",
    projectId: "geo-ninja-4bd67",
    storageBucket: "geo-ninja-4bd67.appspot.com",
    messagingSenderId: "563974549599",
    appId: "1:563974549599:web:aff2f7e0f6b59a6be7ebea"
  };
  // Initialize Firebase
  var firebaseApp = firebase.initializeApp(firebaseConfig);

export var db = firebaseApp.firestore(); 
export var auth = firebaseApp.auth(); 
