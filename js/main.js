function donateInputBalance(id) {
  const inputValue = document.getElementById(id).value;
  const inputValueConvert = parseFloat(inputValue) || 0; //take 0 if parsefloat can't convert
  return inputValueConvert;
}

function donateCurrentBalanceAmount(id) {
  const currentBalance = document.getElementById(id).innerText;
  const CurrentBalanceConvert = parseFloat(currentBalance) || 0; //take 0 if parsefloat can't convert
  return CurrentBalanceConvert;
}

function updateDonationValue(id, inputValue, currentBalance) {
  const updateBalance = inputValue + currentBalance;
  document.getElementById(id).innerText = updateBalance;
  return updateBalance;
}
function UpdateMainBalance(id, mainBalance, inputValue) {
  const UpdateMainBalance = mainBalance - inputValue;
  document.getElementById(id).innerText = UpdateMainBalance;
}

function toggleButton(id) {
  // hide all
  document.getElementById("donation").classList.add("hidden");
  document.getElementById("history").classList.add("hidden");
  //show the clicked one
  document.getElementById(id).classList.remove("hidden");
}
