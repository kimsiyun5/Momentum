const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginInput");
const username = document.querySelector("#username");

const LOGIN_KEY = "loginID";

function login(e) {
  hideLoginForm();
  
  const name = loginInput.value;

  showUserName(name)
  setLoginID(name);

  document.querySelector("#todoForm").classList.remove(HIDDEN_CLASSNAME);

  e.preventDefault();
}

loginForm.addEventListener("submit", login);

function showUserName(name) {
  username.innerText = `Hello ${name}`;
  username.classList.remove(HIDDEN_CLASSNAME);
}

function showLoginForm() {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}

function hideLoginForm() {
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

function setLoginID(name) {
  localStorage.setItem(LOGIN_KEY, name);
}

function getLoginID() {
  return localStorage.getItem(LOGIN_KEY);
}

function loginChecked() {
  if(getLoginID()) {
    showUserName(getLoginID());
    return true;
  } else {
    showLoginForm();
    return false;
  }
}