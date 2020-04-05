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
  const roomname = "name"
  const test_room = {
    "name": "kristen_and_tara",
    "id": 1,
    "current_question": 4,
    "time_remaining": 34,
    "state": "playing",
    "players": [
      {"name": "kristen",
       "id": 2,
       "score": 10,
      }, 
      {"name": "tara",
       "id": 3,
       "score": 11,
      },],
  }
  //Name from input in html
  //ID - generate automatically
  //Current question - init to none, grab questions from API based on game state and time remaining
  //Time remaining - function
  //State - function
  //Players - name: input, id: generate, score: generate 

  db.ref().child('rooms').set([test_room])

  db.ref().on("value", function(snapshot) {
    const data = snapshot.val()["test-data"]
    console.log(data)
    $("#test-data").html(data["test-word"]) 
   
  });
 });