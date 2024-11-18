// Noakhali button
document
  .getElementById("noakhali_donate_button")
  .addEventListener("click", function () {
    const inputValue = donateInputBalance("noakhali-input-field");
    const mainBalance = donateCurrentBalanceAmount("current-main-balance");
    if (inputValue > 0 && mainBalance >= inputValue) {
      // show a succes modal notification

      document.getElementById("my_modal").showModal();

      // update current Value after input

      const currentBalance = donateCurrentBalanceAmount(
        "current-Noakhali-balance"
      );
      // update the donation amount (eg: noakhali)
      updateDonationValue(
        "current-Noakhali-balance",
        inputValue,
        currentBalance
      );

      // Decrease the amount from main balance
      UpdateMainBalance("current-main-balance", mainBalance, inputValue);

      //added  transaction History
      const campaignName = document.getElementById(
        "noakhali_campaign_name"
      ).innerText;

      transactionHistory(campaignName, inputValue);
    } else {
      alert("invalid donation amount!!");
    }
  });

// Feni Button
document
  .getElementById("feni_donate_button")
  .addEventListener("click", function () {
    const inputValue = donateInputBalance("feni-input-field");
    const mainBalance = donateCurrentBalanceAmount("current-main-balance");
    if (inputValue > 0 && mainBalance >= inputValue) {
      // show a succes modal notification

      document.getElementById("my_modal").showModal();

      // update current Value after input

      const currentBalance = donateCurrentBalanceAmount("current-feni-balance");
      // update the donation amount (eg: noakhali)
      updateDonationValue("current-feni-balance", inputValue, currentBalance);

      // Decrease the amount from main balance
      UpdateMainBalance("current-main-balance", mainBalance, inputValue);

      //added  transaction History
      const campaignName =
        document.getElementById("feni_campaign_name").innerText;

      transactionHistory(campaignName, inputValue);
    } else {
      alert("invalid donation amount!!");
    }
  });

//  quota button
document
  .getElementById("quota_donate_button")
  .addEventListener("click", function () {
    const inputValue = donateInputBalance("quota-input-field");
    const mainBalance = donateCurrentBalanceAmount("current-main-balance");
    if (inputValue > 0 && mainBalance >= inputValue) {
      // show a succes modal notification

      document.getElementById("my_modal").showModal();

      // update current Value after input

      const currentBalance = donateCurrentBalanceAmount(
        "current-quota-balance"
      );
      // update the donation amount (eg: noakhali)
      updateDonationValue("current-quota-balance", inputValue, currentBalance);

      // Decrease the amount from main balance
      UpdateMainBalance("current-main-balance", mainBalance, inputValue);
      //added  transaction History
      const campaignName = document.getElementById(
        "quota_campaign_name"
      ).innerText;

      transactionHistory(campaignName, inputValue);
    } else {
      alert("invalid donation amount!!");
    }
  });
