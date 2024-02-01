function login(){
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    var userData = JSON.parse(localStorage.getItem(email));

    if (userData && pass === userData.password) {
      window.location.href = "../todolist/todolist.html";
    }
    else{
        alert("Email or Password incorrect. Please try Again");
    }
}
function togglePasswordVisibility() {
  var passwordField = document.getElementById("password");
  var toggleButton = document.getElementById("togglePassword");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleButton.textContent = "👁️";
  } else {
    passwordField.type = "password";
    toggleButton.textContent = "👁️";
  }
}