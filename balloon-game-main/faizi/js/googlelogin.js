const firebaseConfig = {
  apiKey: "AIzaSyBrhqp07BCcRASpNQUYnhSkuNnruGN7f3A",
  authDomain: "muzzmilballon.firebaseapp.com",
  projectId: "muzzmilballon",
  storageBucket: "muzzmilballon.appspot.com",
  messagingSenderId: "445441914574",
  appId: "1:445441914574:web:dade8fe6b8e0fbda69829f",
  measurementId: "G-VY7KT6M7WE"
};


// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
function login(){
    firebase.auth()
    .signInWithPopup(provider)
    .then(() => {
      window.location.href="./index.html"
  console.log("success!");
    }).catch((error) => {
      console.log(error);
    });
}
