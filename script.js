
var navLinks = document.getElementById("navLinks");

function hideMenu(){
    navLinks.style.right ="-200px";
}
function showMenu(){
    navLinks.style.right="0";
}


const firebaseConfig = {
    apiKey: "AIzaSyBx8ucoEupa666EstDrC5qlCDGJ-zE6ILE",
    authDomain: "contact-form-2d426.firebaseapp.com",
    databaseURL: "https://contact-form-2d426-default-rtdb.firebaseio.com",
    projectId: "contact-form-2d426",
    storageBucket: "contact-form-2d426.appspot.com",
    messagingSenderId: "642369817854",
    appId: "1:642369817854:web:f84873350f66ae6cf6e9af",
    measurementId: "G-RFJ8XRLLWS"
  };



firebase.initializeApp(firebaseConfig);

  var messagesref = firebase.database().ref('messages')


document.getElementById('ContactForm').addEventListener("submit", submitform);


function submitform(e){
    e.preventDefault();

    var name = getElementVal("name");
    var phone = getElementVal("phone");
    var email = getElementVal("email");

    saveMessages(name, phone, email);

    document.querySelector('.alert').style.display = "block";

    
}
const getElementVal = (id) => {
    return document.getElementById(id).value;
};


function saveMessages(name,phone,email){
    var newMessageRef = messagesref.push();
    newMessageRef.set({
        name: name,
        phone:phone,
        email:email
    });
}



var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right="0";
}
function hideMenu(){
    navLinks.style.right ="-200px";
}
