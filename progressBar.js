(function(){

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAXsKdX0hsepsa9L_t6Ziql1Ae5VDxv2Q4",
    authDomain: "web-quickstart-a295e.firebaseapp.com",
    databaseURL: "https://web-quickstart-a295e.firebaseio.com",
    storageBucket: "web-quickstart-a295e.appspot.com",
    messagingSenderId: "326687382522"
  };
  firebase.initializeApp(config);

  var uploader = document.getElementById("uploader");
  var fileButton = document.getElementById("fileButton");

 	// Listen for file selection
	fileButton.addEventListener("change", function(event){

  	// Get file
  	var file = event.target.files[0];

  	// Create a storage ref
  	var storageRef = firebase.storage().ref("pictures/" + file.name);

  	// Upload file
  	var task = storageRef.put(file);/*Put method returns a TASK*/

  	// Update progress bar
  	task.on("state_changed", 

  	function progress(snapshot){
  		var percentage = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
  		uploader.value = percentage;
  	},

  	function error(err){

  	},

  	function complete() {

  	}/*Kan ikke ha komma her*/

  	);

  });

}());

