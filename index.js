function checkStrength() {
    const password = document.getElementById("password").value;
    const strengthBar = document.getElementById("strength-bar");
    const strengthText = document.getElementById("strength-text");
    let strength = 0;
    if (password.length >= 8) {
      strength += 1;
    }
    if (/\d/.test(password)) {
      strength += 1;
    }
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
      strength += 1;
    }
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      strength += 1;
    }
    if (strength === 0) {
      strengthBar.className = "";
      strengthBar.style.width = "0%";
      strengthText.textContent = "";
    } else if (strength === 1) {
      strengthBar.className = "weak";
      strengthBar.style.width = "25%";
      strengthText.textContent = "Weak";
    } else if (strength === 2) {
      strengthBar.className = "medium";
      strengthBar.style.width = "50%";
      strengthText.textContent = "Medium";
    } else if (strength === 3) {
      strengthBar.className = "strong";
      strengthBar.style.width = "75%";
      strengthText.textContent = "Strong";
    } else if (strength === 4) {
      strengthBar.className = "strong";
      strengthBar.style.width = "100%";
      strengthText.textContent = "Very Strong";
    }
  }