/**
 *  Calculate factorial
 */
function factorial(n) {
  if (n < 0) {
    return "Undefined for negative numbers";
  }
  if (n == 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

document.getElementById("calculateBtn").addEventListener("click", () => {
  const inputVal = document.getElementById("numberInput").value;
  const num = parseInt(inputVal);
  const resultScreen = document.getElementById("resultScreen");

  if (isNaN(num)) {
    resultScreen.textContent = "Please enter a valid number.";
  } else {
    const fact = factorial(num);
    resultScreen.textContent = `${num}! = ${fact}`;
  }
});

// Dark mode function
function setDarkMode() {
  document.body.style.backgroundColor = "#4D4D4D";
  document.body.style.color = "#F2F2F2";

  // Navbar
  document.querySelector("header nav").style.backgroundColor = "#333";
  // Buttons
  const navButtons = document.querySelectorAll(".nav-right button");
  navButtons.forEach((btn) => {
    btn.style.backgroundColor = "#666";
    btn.style.color = "#fff";
  });
  // Footer
  document.querySelector("footer").style.backgroundColor = "#333";
  document.querySelector("footer").style.color = "#F2F2F2";
}

// Light mode function
function setLightMode() {
  document.body.style.backgroundColor = "#ffffff";
  document.body.style.color = "#000000";

  // Navbar
  document.querySelector("header nav").style.backgroundColor = "#e0e0e0";
  // Buttons
  const navButtons = document.querySelectorAll(".nav-right button");
  navButtons.forEach((btn) => {
    btn.style.backgroundColor = "#ccc";
    btn.style.color = "#000";
  });
  // Footer
  document.querySelector("footer").style.backgroundColor = "#e0e0e0";
  document.querySelector("footer").style.color = "#000000";
}
