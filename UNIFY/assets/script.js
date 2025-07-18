
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("loginMessage");
  const adminEmail = "admin@lycee.fr";
  const adminPass = "admin123";
  if (email === adminEmail && password === adminPass) {
    localStorage.setItem("loggedIn", "true");
    message.textContent = "Connexion réussie. Redirection...";
    message.style.color = "green";
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    message.textContent = "Email ou mot de passe incorrect.";
    message.style.color = "red";
  }
});
