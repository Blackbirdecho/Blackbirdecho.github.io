
  var firebaseConfig = {
    apiKey: "AIzaSyDwtFVxMv3YHWxJ4DojOTjBLIlir83PfpQ",
    authDomain: "dixit-8fb8b.firebaseapp.com",
    databaseURL: "https://dixit-8fb8b.firebaseio.com",
    projectId: "dixit-8fb8b",
    storageBucket: "dixit-8fb8b.appspot.com",
    messagingSenderId: "171032869939",
    appId: "1:171032869939:web:9226a04417544f5b87b746",
    measurementId: "G-RWH2SWKYWG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();

	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}

 
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		

		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}

   
    
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			
            
			//Take user to a different or home page
           $("#target").text(email);
            
              
			
		}else{
			
			
            window.location = ("index.html");
            
			//no user is signed in
		}
		
		
		
	});



var database = firebase.database();

function pushData(){
  var name = document.getElementById("name").value;
  var company = document.getElementById("company").value;
  var address1 = document.getElementById("address1").value; 
    var address2 = document.getElementById("address2").value; 
    var address3 = document.getElementById("address3").value; 
  var dataRef = database.ref('/Users').child(name).set({
    name: name,
    company : company,
      address1 : address1,
      address2 : address2,
      address3 : address3
      
  });
}



