const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('checkbox');
const submitBtn = document.getElementById('submit');
const existingBtn = document.getElementById('existing');

// Check on page load if credentials exist
window.onload = () => {
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    existingBtn.style.display = 'inline-block';
  }
};

// Submit handler
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (rememberCheckbox.checked) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    existingBtn.style.display = 'inline-block';
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    existingBtn.style.display = 'none';
  }

  usernameInput.value = '';
  passwordInput.value = '';
  rememberCheckbox.checked = false;
});

// Existing user login
existingBtn.addEventListener('click', () => {
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});
