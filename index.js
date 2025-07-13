const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const passwordDisplay = document.getElementById('passwordDisplay');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const strengthIndicator = document.getElementById('strengthIndicator');
const generateBtn = document.getElementById('generateBtn');

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+=-{}[]|:;<>?,./";

lengthSlider.addEventListener('input', () => {
  lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener('click', () => {
  let characters = "";
  if (uppercase.checked) characters += upperChars;
  if (lowercase.checked) characters += lowerChars;
  if (numbers.checked) characters += numberChars;
  if (symbols.checked) characters += symbolChars;

  if (characters.length === 0) {
    passwordDisplay.value = "Select at least 1 option!";
    return;
  }

  let password = "";
  for (let i = 0; i < lengthSlider.value; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  passwordDisplay.value = password;
  updateStrength(password);
});

function updateStrength(password) {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  const colors = ["red", "orange", "yellow", "lightgreen", "green"];
  strengthIndicator.style.background = colors[strength - 1] || "gray";
}

function copyPassword() {
  passwordDisplay.select();
  document.execCommand("copy");
}
