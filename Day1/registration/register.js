function signup() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    if (localStorage.getItem(email)) {
      alert("Email already exists. Choose a different one.");
      return;
    }

    if (password.length < 8) {
      alert("Password should be at least 8 characters long.");
      return;
    }
    var user = {
      name: name,
      age: age,
      email: email,
      password: pass,
    };
    localStorage.setItem(email, JSON.stringify(user));

    alert("Signup successful! Check your email for authentication.");
    window.location.href = "../user/user.html";
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