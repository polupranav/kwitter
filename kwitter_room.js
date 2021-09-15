//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC7rvhJUPj-96m387rh8220wAPX1kpvqaw",
      authDomain: "jsdbtest.firebaseapp.com",
      databaseURL: "https://jsdbtest.firebaseio.com",
      projectId: "jsdbtest",
      storageBucket: "jsdbtest.appspot.com",
      messagingSenderId: "557097620929",
      appId: "1:557097620929:web:d549209de61a48b20b8b40"
}; // Initialize Firebase 
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function Addroom() {
      Room_names = document.getElementById("Room_names").value;
      firebase.database().ref("/").child("Room_names").update({
            purpose: "adding room name"
      });
      localStorage.setItem("Room_names", Room_names);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name - " + Room_names);
                  row = "<div class = 'Room_names' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'>  #" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();



function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_names");
      window.location = "index.html";
}

