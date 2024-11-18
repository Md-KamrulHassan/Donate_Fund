document.getElementById("donation-btn").addEventListener("click", function () {
  toggleButton("donation");
  document.getElementById("donation-btn").classList.add("bg-primary_color");
  document.getElementById("history-btn").classList.remove("bg-primary_color");
});

document.getElementById("history-btn").addEventListener("click", function () {
  toggleButton("history");
  document.getElementById("history-btn").classList.add("bg-primary_color");
  document.getElementById("donation-btn").classList.remove("bg-primary_color");
});
