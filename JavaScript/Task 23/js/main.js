function convertMoney() {
  var value = document.getElementById("valueInput").value;
  var egyptResult = document.getElementById("egyptResult");
  var saudiResult = document.getElementById("saudiResult");

  if (value == "") {
    egyptResult.innerHTML = "You have to enter a value";
  } else if (isNaN(value)) {
    egyptResult.innerHTML = "The value should be a number";
  } else if (value < 0) {
    egyptResult.innerHTML = "Enter a postive number";
  } else if (value == 0) {
    egyptResult.innerHTML = "Enter a value higher than zero";
  } else {
    egyptResult.innerHTML =
      "Your Amount in Egyptian Pound is " + value * 50 + " EGP";
    saudiResult.innerHTML =
      "Your Amount in Saudi Riyal is " + value * 3.75 + " SAR";
  }
  return false;
}
