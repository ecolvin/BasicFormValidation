function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if(userEntered.length < 6)
  {
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else
  {
    document.getElementById("usernameError").innerHTML="";
    document.getElementById("usernameError").classList.add("hidden-message");
    document.getElementById("usernameError").classList.remove("shown-message");
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameGroup").classList.remove("has-error");
  }

  if(passEntered.toLowerCase() == "password")
  {
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
  }
  else
  {
    document.getElementById("passwordError").innerHTML="";
    document.getElementById("passwordError").classList.add("hidden-message");
    document.getElementById("passwordError").classList.remove("shown-message");
    document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("passwordGroup").classList.remove("has-error")
  }
}
