// ---------- Reusable operation functions (logic) ----------
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

// ---------- DOM references ----------
const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const resultEl = document.getElementById("result");
const messageEl = document.getElementById("message");
const clearBtn = document.getElementById("clear");

// ---------- UI render helpers ----------
function setResult(value) {
  resultEl.textContent = value;
}

function setMessage(msg) {
  messageEl.textContent = msg;
}

// ---------- Input validation ----------
function getValidatedNumbers() {
  const a = Number(num1El.value);
  const b = Number(num2El.value);

  // Empty input check
  if (num1El.value === "" || num2El.value === "") {
    return { ok: false, error: "Please enter both numbers." };
  }

  // NaN check
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return { ok: false, error: "Invalid input. Enter valid numbers." };
  }

  return { ok: true, a, b };
}

// ---------- Switch-case handler ----------
function calculate(operation) {
  const data = getValidatedNumbers();
  if (!data.ok) {
    setResult("-");
    setMessage(data.error);
    return;
  }

  const { a, b } = data;

  // Divide by zero check
  if (operation === "div" && b === 0) {
    setResult("-");
    setMessage("Cannot divide by zero.");
    return;
  }

  let answer;

  switch (operation) {
    case "add":
      answer = add(a, b);
      break;

    case "sub":
      answer = subtract(a, b);
      break;

    case "mul":
      answer = multiply(a, b);
      break;

    case "div":
      answer = divide(a, b);
      break;

    default:
      setResult("-");
      setMessage("Unknown operation.");
      return;
  }

  // Success
  setResult(answer);
  setMessage("");
}

// ---------- Event logic ----------
function setupEvents() {
  // One event listener for all operation buttons (event delegation)
  document.querySelector(".buttons").addEventListener("click", (e) => {
    const op = e.target.dataset.op;
    if (op) calculate(op);
  });

  // Clear button
  clearBtn.addEventListener("click", () => {
    num1El.value = "";
    num2El.value = "";
    setResult("-");
    setMessage("");
    num1El.focus();
  });
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  setResult("-");
  setMessage("");
  setupEvents();
});
