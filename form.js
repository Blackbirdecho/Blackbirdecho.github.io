
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
			alert("Active User " + email);
			window.location = ("test.html");
            
			//Take user to a different or home page
            
              
			
		}else{
			
			alert("No Active User");
            
            
			//no user is signed in
		}
		
		
		
	});
