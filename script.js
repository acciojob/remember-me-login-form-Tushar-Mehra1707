//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberMeCheckbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit");
  const existingBtn = document.getElementById("existing");

  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  // Show the existing user button if credentials are stored
  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline-block";
  }

  // Handle login form submission
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    const remember = rememberMeCheckbox.checked;

    alert(`Logged in as ${username}`);

    if (remember) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    // Toggle existing user button visibility
    existingBtn.style.display = remember ? "inline-block" : "none";
  });

  // Handle "Login as existing user"
  existingBtn.addEventListener("click", () => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      alert(`Logged in as ${savedUsername}`);
    }
  });
});

