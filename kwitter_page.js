//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAt7wO6qzhwTbzicMe1tXfXsvNDMxLZWpc",
    authDomain: "kwitter-c6279.firebaseapp.com",
    databaseURL: "https://kwitter-c6279-default-rtdb.firebaseio.com",
    projectId: "kwitter-c6279",
    storageBucket: "kwitter-c6279.appspot.com",
    messagingSenderId: "122499284027",
    appId: "1:122499284027:web:7ca24ebe345d81d057b01e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send(){

    msg=document.getElementById("msg").ariaValueMax;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0

    });

    document.getElementById("msg").value="";
}
