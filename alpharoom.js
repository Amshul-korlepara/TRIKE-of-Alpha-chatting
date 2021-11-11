const firebaseConfig = {
  apiKey: "AIzaSyBQRUim3-ndf-57ZGL0GgXW2azw3jqUCbM",
  authDomain: "chat-app-2-ec404.firebaseapp.com",
  databaseURL: "https://chat-app-2-ec404-default-rtdb.firebaseio.com",
  projectId: "chat-app-2-ec404",
  storageBucket: "chat-app-2-ec404.appspot.com",
  messagingSenderId: "858168261460",
  appId: "1:858168261460:web:e48f01638c8ee538c426c1",
  measurementId: "G-BGBZ8Z1PGZ"
};

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  localStoragesvalue=localStorage.getItem("user_name");

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
row="<div class='room_name' id="+Room_names+" onclick='redirect_to_roomname(this.id)'> #"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
});});}
getData();
document.getElementById("welcome").innerHTML="Welcome "+localStorage_value+"!";
function add_room(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room_name"
  });
  localStorage.setItem("Roomname",room_name);
  window.location="kwitter_page.html";
  }

function redirect_to_roomname(roomname){
  localStorage.setItem("Roomname",roomname);
  window.location="ALPHA_page.html";
  }

  function logout(){
    localStorage.removeItem("userName");
    localStorage.removeItem("Roomname");
    window.location="index.html";
    }
  


  