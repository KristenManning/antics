$(document).ready(function() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
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

  const create_player = (id, name) => {
    return {
      "id": id, 
      "name": name, 
      "score": 0, 
    }
  }
  const create_room = (id, name, room_leader) => { 
    return {
      "id": id, 
      "name": name,
      "current_question": null,
      "time_remaining": null, 
      "state": "waiting_to_begin",
      "players": [room_leader],
      "room_leader": room_leader, 
    }
  };

  const db = firebase.database()

  // function 
  // const test_room = {
  //   "name": "kristen_and_tara",
  //   "id": 1,
  //   "current_question": 4,
  //   "time_remaining": 34,
  //   "state": "playing",
  //   "players": [
  //     {"name": "kristen",
  //      "id": 2,
  //      "score": 10,
  //     }, 
  //     {"name": "tara",
  //      "id": 3,
  //      "score": 11,
  //     },],
  // }
  //Name from input in html
  //ID - generate automatically
  //Current question - init to none, grab questions from API based on game state and time remaining
  //Time remaining - function
  //State - function
  //Players - name: input, id: generate, score: generate 

  db.ref().child('rooms').set([create_room(1, "Test Room", create_player(1, "Test Player"))])

  db.ref().on("value", function(snapshot) {
    const data = snapshot.val()["test-data"]
    console.log(data)
    $("#test-data").html(data["test-word"]) 
   
  });

  function get_signup_data_from_form(form_name){
      const form = $(form_name)
      const player_name = form.find(".player_name").val()
      const room_name = form.find(".room_name").val()
      return {
          'player_name': player_name, 
          'room_name': room_name, 
      }
  }

  $(".submit-create-room").click(function() {
    const form_data = get_signup_data_from_form(".create-form");
    const player_name = form_data["player_name"]
    const room_name = form_data["room_name"]
    db.ref().child('rooms').push(create_room(1, room_name, create_player(1, player_name)))
  });
  
  $(".submit-join-room").keyup(function() {
    const form_data = get_signup_data_from_form(".join-form");
    const player_name = form_data["player_name"]
    const room_name = form_data["room_name"]
    // find this room 
    // error handling if the room doesn't exist
  });
 });