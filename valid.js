const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const submitBtn = document.querySelector(".login-btn");

username.addEventListener('keyup', () => {
  usernameError.style.display = username.value === '' ? 'block' : 'none';
});

password.addEventListener('keyup', () => {
  passwordError.style.display = password.value === '' ? 'block' : 'none';
});

submitBtn.addEventListener('click', () => {
  const evt = new Event('keyup');
  username.dispatchEvent(evt);
  password.dispatchEvent(evt);
  if (usernameError.style.display !== 'none' || passwordError.style.display !== 'none') return;

  const cred = {
      username: `${username.value}`,
      password: `${password.value}`
  }
  console.log(cred);

  location = 'dashboard.html';
});