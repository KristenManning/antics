$(document).ready(function() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAEOczSaNFhg7_eZNN7G_rCUWRkVLaokPc",
    authDomain: "antics-538ac.firebaseapp.com",
    databaseURL: "https://antics-538ac.firebaseio.com",
    projectId: "antics-538ac",
    storageBucket: "antics-538ac.appspot.com",
    messagingSenderId: "821866993390",
    appId: "1:821866993390:web:d63dc636041fe4859005ff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.database()

  db.ref().on("value", function(snapshot) {
    const data = snapshot.val()["test-data"]
    console.log(data)
    $("#test-data").html(data["test-word"])
  });
 });