var firebaseConfig = {
  apiKey: xxxxxxxxxxxxxxxx,
  authDomain: xxxxxxxxxxxxxxxxx,
  databaseURL: xxxxxxxxxxxxxxx,
  projectId: xxxxxxxxxxxxxxxx,
  storageBucket: xxxxxxxxxx,
  messagingSenderId: xxxxxxxxxxx,
  appId: xxxxxxxxxxx,
  measurementId: xxxx
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



var db = firebase.firestore();

function registrarUser() {
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var email = document.getElementById('email').value;
  var contrasena = document.getElementById('contrasena').value;
  var direccion = document.getElementById('direccion').value;
  var telefono = document.getElementById('telefono').value;
  var i = "3";
  // Add a new document in collection "cities"
  db.collection("clientes").doc().set({
    nombre: nombre,
    apellido: apellido,
    email: email,
    direccion: direccion,
    telefono: telefono
    //mapa:{x:2,y:3},
    //array:[1,2,3]

  });
  console.log('ya grabó');
}

function mostrarData() {
  db.collection("clientes").doc("3")
    .get()
    .then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
}

function query() {
  var clientesRef = db.collection("clientes");
  var condicion= document.getElementById('bName').value;
  var c = clientesRef.where("nombre", "==", condicion).get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }

      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  // console.log(c);
}

function obtenerInfo(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user);
    } else {
      // No user is signed in.
    }
  });
  
}