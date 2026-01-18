const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const container = document.getElementById("container");
const goLogin = document.getElementById("goLogin");
const title = document.getElementById("switchTitle");

/* Switch to login */
goLogin.addEventListener("click", () => {
  signupForm.style.display = "none";
  loginForm.style.display = "flex";
  title.innerText = "Welcome Back";
});

/* Success message */
function showSuccess(text) {
  const msg = document.createElement("div");
  msg.className = "success-msg";
  msg.innerHTML = `${text}<span>Please wait...</span>`;
  container.appendChild(msg);
  
  setTimeout(() => {
    msg.remove();
  }, 2000);
}

/* Error message (simple alert style) */
function showError(text) {
  alert(text);
}

/* ======================
   SIGNUP
====================== */
signupForm.addEventListener("submit", e => {
  e.preventDefault();
  
  const name = signupForm.querySelector('input[type="text"]').value.trim();
  const email = signupForm.querySelector('input[type="email"]').value.trim();
  const password = signupForm.querySelector('input[type="password"]').value;
  
  if (!name || !email || !password) {
    showError("All fields are required");
    return;
  }
  
  /* Save data (demo purpose only) */
  const userData = {
    name: name,
    email: email,
    password: password
  };
  
  localStorage.setItem("authUser", JSON.stringify(userData));
  
  showSuccess("Signup Successful");
  
  setTimeout(() => {
    signupForm.style.display = "none";
    loginForm.style.display = "flex";
    title.innerText = "Welcome Back";
    signupForm.reset();
  }, 2000);
});

/* ======================
   LOGIN
====================== */
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  
  const email = loginForm.querySelector('input[type="email"]').value.trim();
  const password = loginForm.querySelector('input[type="password"]').value;
  
  const savedUser = JSON.parse(localStorage.getItem("authUser"));
  
  if (!savedUser) {
    showError("No account found. Please signup first.");
    return;
  }
  
  if (email === savedUser.email && password === savedUser.password) {
    showSuccess("Login Successful");
    
    setTimeout(() => {
      /* Redirect to new page */
      window.location.href = "samoo1.html";
    }, 2000);
    
  } else {
    showError("Incorrect email or password");
  }
});