const loginForm = document.getElementById("loginForm");
const loginCard = document.getElementById("loginCard");
const homeScreen = document.getElementById("homeScreen");
const welcomeMessage = document.getElementById("welcomeMessage");
const logoutButton = document.getElementById("logoutButton");
const formMessage = document.getElementById("formMessage");
const quizForm = document.getElementById("quizForm");
const resultScreen = document.getElementById("resultScreen");
const logoutScreen = document.getElementById("logoutScreen");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    formMessage.textContent = "Please enter both your username and password.";
    return;
  }

  welcomeMessage.textContent = "Hãy Trả Lời Đúng";
  loginCard.hidden = true;
  homeScreen.hidden = false;
});

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  homeScreen.hidden = true;
  resultScreen.hidden = false;
});

logoutButton.addEventListener("click", () => {
  homeScreen.hidden = true;
  logoutScreen.hidden = false;
});
