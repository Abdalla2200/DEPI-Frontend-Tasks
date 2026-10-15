function validateInputs() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  var confirmPassword = document.getElementById("confirmPass").value;

  var errorMessage = document.getElementById("errorMsg");

  errorMessage.setAttribute("class", "alert theme-danger d-block text-center");

  if (
    username == "" &&
    email == "" &&
    password == "" &&
    confirmPassword == ""
  ) {
    errorMessage.innerHTML = "You Have To Enter Data";
    return false;
  } else if (username.length < 5 || username.length > 15) {
    errorMessage.innerHTML = "Enter from 5 to 15 characters";
    return false;
  } else if (email.indexOf("@", 1) == -1 || email.indexOf(".com", 5) == -1) {
    errorMessage.innerHTML = "Enter a Valid Email";
    return false;
  } else if (password.length < 8) {
    errorMessage.innerHTML = "Weak Password";
    return false;
  } else if (password != confirmPassword) {
    errorMessage.innerHTML = "Enter Matched Password";
    return false;
  }
}
