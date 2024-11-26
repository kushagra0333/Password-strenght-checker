function checkStrength() {
  const password = document.getElementById("password").value;
  const strengthBar = document.getElementById("strength-bar").firstElementChild;
  const strengthText = document.getElementById("strength-text");
  let strength = 0;

  if (password.length >= 8) strength += 1;
  if (/\d/.test(password)) strength += 1;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
  if (password.length >= 12) strength += 1;

  strengthBar.className = "";
  strengthBar.style.width = `${strength * 20}%`;

  if (strength === 0) {
    strengthBar.style.width = "0%";
    strengthText.textContent = "";
  } else if (strength === 1) {
    strengthBar.className = "weak";
    strengthText.textContent = "Weak";
  } else if (strength === 2) {
    strengthBar.className = "weak";
    strengthText.textContent = "Fair";
  } else if (strength === 3) {
    strengthBar.className = "medium";
    strengthText.textContent = "Good";
  } else if (strength === 4) {
    strengthBar.className = "strong";
    strengthText.textContent = "Strong";
  } else if (strength === 5) {
    strengthBar.className = "very-strong";
    strengthText.textContent = "Very Strong";
  }
}
