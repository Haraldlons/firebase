(function(){

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAXsKdX0hsepsa9L_t6Ziql1Ae5VDxv2Q4",
    authDomain: "web-quickstart-a295e.firebaseapp.com",
    databaseURL: "https://web-quickstart-a295e.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "326687382522"
  };
  firebase.initializeApp(config);

	// Authentication
	// Get elements
	const txtEmail = document.getElementById("txtEmail");
	const txtPassword = document.getElementById("txtPassword");
	const btnLogin = document.getElementById("btnLogin");
	const btnSignUp = document.getElementById("btnSignUp");
	const btnlogout = document.getElementById("btnLogout");

	// Add login event
	btnLogin.addEventListener('click', e=> {
		// Get email and password
		// TODO: Check if email
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		// Sign in
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e=>console.log(e.message));

	});

	btnSignUp.addEventListener('click', e=> {
		// Get email and password
		// TODO: Check if email
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();

		// Create user
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		promise
			.catch(e=>console.log(e.message));

	});

	btnLogout.addEventListener('click', e=>{
		firebase.auth().signOut();
		console.log("Logget out");
	});


	// Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser=>{
		if(firebaseUser){
			console.log("Logged in");
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');

		}else {
			console.log("Not logged in");
			btnLogout.classList.add('hide');
		}
	});

// ERROR: auth is not defined JS: 28





//   // Get elements
//   const preObject = document.getElementById("object");
//   const ulList = document.getElementById("list");


//   // Create references
//   const dbRefObject = firebase.database().ref().child("object");
//   const dbRefList = dbRefObject.child("hobbies");

//   // Sync object changes
//   // Snap blir itemet som blir endret, siden value "hører" etter endringer
//   dbRefObject.on('value', snap => {
//   	preObject.innerText = JSON.stringify(snap.val(), null,3); //3 noe med tablengden
//   });

//   // Sync list changes (Child events)
//   dbRefList.on('child_added', snap=> {
//   	const li = document.createElement("li");
//   	li.innerText = snap.val();
//   	li.id = snap.key;
//   	ulList.appendChild(li);
//   });

//   dbRefList.on("child_changed", snap=>{
// // https://www.youtube.com/watch?v=dBscwaqNPuk&index=3&list=PLl-K7zZEsYLmnJ_FpMOZgyg6XcIGBu2OX

//   	const liChanged = document.getElementById(snap.key);
//   	liChanged.innerText = snap.val();

//   });
//   dbRefList.on("child_removed", snap=>{//Det snap wil be the item that has been removed

//   	// Key vil være coffee etc.
//   	const liToRemove = document.getElementById(snap.key);
//   	liToRemove.remove();

//   });



}());


/*
// Sync list changes (Child events)
  dbRefList.on('child_added', snap=> {
  	const li = document.createElement("li");
  	li.innerText = snap.val();
  	li.id = snap.key;
  	ulList.appendChild(li);
  });

  dbRefList.on("child_changed", snap=>{
// https://www.youtube.com/watch?v=dBscwaqNPuk&index=3&list=PLl-K7zZEsYLmnJ_FpMOZgyg6XcIGBu2OX

  	const liChanged = document.getElementById(snap.key);
  	liChanged.innerText = snap.val();

  });
  dbRefList.on("child_removed", snap=>{//Det snap wil be the item that has been removed

  	const liToRemove = document.getElementById(snap.key);
  	liToRemove.remove();
  });


*/