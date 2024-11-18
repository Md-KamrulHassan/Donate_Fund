document.getElementById("blog_btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

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

function transactionHistory(campaignName, inputValue) {
  const section = document.createElement("section");
  section.innerHTML = `
       <section class="border border-gray-300 rounded-xl p-6">
          <p class = "font-bold text-xl py-3">${inputValue} Taka is Donated for ${campaignName}</p>
          <p class="text-gray-500">Date: ${new Date()}</p>
        </section>
      `;
  document.getElementById("history").appendChild(section);
}
