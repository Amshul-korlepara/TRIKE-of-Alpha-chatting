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
  firebase.initializeApp(firebaseConfig);  

  username=localStorage.getItem("userName");
  room_name=localStorage.getItem("Roomname");

  function send(){
    MSG=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    Name:username,
    message:MSG,
    like:0
    });
    document.getElementById("msg").value="";
}
  function leave(){
    localStorage.removeItem("userName");
    localStorage.removeItem("Roomname");
    window.location="index.html";
  }