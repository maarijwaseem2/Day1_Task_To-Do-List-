function admin(){
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    if (email === "admin@gmail.com" && pass === "admin123") {
        alert("Welcome to Login Admin!...")
      window.location.href = "showTask.html";
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