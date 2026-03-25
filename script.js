const button = document.querySelector("#testBtn");
const statusMsg = document.querySelector("#status-msg");

button.addEventListener("click", () => {
  statusMsg.textContent = "JavaScript is loaded and functioning correctly!";
  statusMsg.style.color = "#28a745";
});
