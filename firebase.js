var app_fireBase = {};
(function(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAJqqvZ8A3OdWN_c2qZ8d6eFP3k3r_CJz8",
    authDomain: "light-s-project.firebaseapp.com",
    databaseURL: "https://light-s-project-default-rtdb.firebaseio.com",
    projectId: "light-s-project",
    storageBucket: "light-s-project.appspot.com",
    messagingSenderId: "1070130977027",
    appId: "1:1070130977027:web:7c0bc4577c5e87d4c13136"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  app_fireBase = firebase;
})()