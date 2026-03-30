// ---------------------- Quiz Data (Array of Objects) ----------------------
const QUESTIONS = [
  {
    id: 1,
    q: "Which method is used to attach an event handler in JavaScript?",
    options: ["addEventListener()", "appendChild()", "querySelector()", "setTimeout()"],
    answerIndex: 0,
  },
  {
    id: 2,
    q: "What does JSON.stringify() do?",
    options: ["Converts JSON to Object", "Converts Object/Array to JSON string", "Deletes JSON keys", "Sorts JSON data"],
    answerIndex: 1,
  },
  {
    id: 3,
    q: "localStorage stores data in which type?",
    options: ["Object", "Array", "String", "Number"],
    answerIndex: 2,
  },
  {
    id: 4,
    q: "Which is block-scoped?",
    options: ["var", "let", "function", "window"],
    answerIndex: 1,
  },
];

// ---------------------- State (ES6+) ----------------------
let state = {
  index: 0,
  // userAnswers[index] = selected optionIndex OR null
  userAnswers: Array(QUESTIONS.length).fill(null),
  // whether question is locked after submit
  locked: Array(QUESTIONS.length).fill(false),
  score: 0,
};

// ---------------------- DOM ----------------------
const screenEl = document.getElementById("screen");
const progressTextEl = document.getElementById("progressText");
const scoreTextEl = document.getElementById("scoreText");

// ---------------------- Helpers ----------------------
const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const calcScore = ({ userAnswers }) =>
  userAnswers.reduce((acc, selected, i) => acc + (selected === QUESTIONS[i].answerIndex ? 1 : 0), 0);

const isFinished = ({ locked }) => locked.every(Boolean);

// ---------------------- Render ----------------------
const renderHeader = () => {
  const { index, score } = state;
  progressTextEl.textContent = `Q ${index + 1} / ${QUESTIONS.length}`;
  scoreTextEl.textContent = `Score: ${score}`;
};

const renderQuestion = () => {
  const { index, userAnswers, locked } = state;
  const { q, options, answerIndex } = QUESTIONS[index];

  const selected = userAnswers[index];
  const isLocked = locked[index];

  const optionsHtml = options
    .map((opt, optIndex) => {
      const checked = selected === optIndex ? "checked" : "";
      const cls =
        isLocked && optIndex === answerIndex
          ? "option correct"
          : isLocked && selected === optIndex && selected !== answerIndex
          ? "option wrong"
          : "option";

      return `
        <label class="${cls}" data-opt="${optIndex}">
          <input type="radio" name="opt" value="${optIndex}" ${checked} ${isLocked ? "disabled" : ""} />
          <span>${opt}</span>
        </label>
      `;
    })
    .join("");

  const feedback = (() => {
    if (!isLocked) return { text: "", cls: "" };
    if (selected === answerIndex) return { text: "Correct ✅", cls: "ok" };
    return { text: "Wrong ❌", cls: "bad" };
  })();

  screenEl.innerHTML = `
    <p class="question">${q}</p>

    <div class="options" id="optionsBox">
      ${optionsHtml}
    </div>

    <p class="feedback ${feedback.cls}" id="feedback">${feedback.text}</p>

    <div class="actions">
      <button class="ghost" id="prevBtn" ${index === 0 ? "disabled" : ""}>Prev</button>
      <button class="ghost" id="nextBtn" ${index === QUESTIONS.length - 1 ? "disabled" : ""}>Next</button>
      <button class="primary" id="submitBtn" ${isLocked ? "disabled" : ""}>Submit</button>
      <button class="ghost" id="resetBtn">Restart</button>
      ${isFinished(state) ? `<button class="primary" id="resultBtn">View Result</button>` : ""}
    </div>
  `;

  renderHeader();
};

const renderResult = () => {
  const total = QUESTIONS.length;
  const score = calcScore(state);
  const percent = Math.round((score / total) * 100);

  const summaryHtml = QUESTIONS.map(({ q, options, answerIndex }, i) => {
    const selected = state.userAnswers[i];
    const ok = selected === answerIndex;
    const selectedText = selected ?? "Not answered";
    return `
      <div class="item" style="text-align:left; border:1px solid #ddd; padding:12px; border-radius:10px; margin:10px 0;">
        <div style="font-weight:700; margin-bottom:6px;">Q${i + 1}. ${q}</div>
        <div style="color:${ok ? "var(--ok)" : "var(--bad)"}; font-weight:700;">
          Your: ${selected === null ? "Not answered" : options[selected]} ${ok ? "✅" : "❌"}
        </div>
        <div style="color:#555; margin-top:4px;">
          Correct: ${options[answerIndex]}
        </div>
      </div>
    `;
  }).join("");

  screenEl.innerHTML = `
    <div class="result">
      <h2>Result</h2>
      <p><b>Score:</b> ${score} / ${total} (${percent}%)</p>
      <div style="margin-top:14px;">
        <button class="primary" id="restartFromResult">Restart</button>
        <button class="ghost" id="backToQuiz">Back</button>
      </div>
    </div>
    <div style="margin-top:16px;">
      ${summaryHtml}
    </div>
  `;

  progressTextEl.textContent = "Result";
  scoreTextEl.textContent = `Score: ${score}`;
};

// ---------------------- Logic / Events ----------------------
const setIndex = (nextIndex) => {
  state.index = clamp(nextIndex, 0, QUESTIONS.length - 1);
  renderQuestion();
};

const selectOption = (optIndex) => {
  const { index, locked } = state;
  if (locked[index]) return; // no changes after submit
  state.userAnswers[index] = optIndex;
  renderQuestion();
};

const submitAnswer = () => {
  const { index, userAnswers, locked } = state;
  if (locked[index]) return;

  if (userAnswers[index] === null) {
    // conditional DOM manipulation (show message)
    const feedbackEl = document.getElementById("feedback");
    feedbackEl.textContent = "Select an option first.";
    feedbackEl.className = "feedback bad";
    return;
  }

  state.locked[index] = true;
  state.score = calcScore(state);
  renderQuestion();
};

const resetQuiz = () => {
  state = {
    index: 0,
    userAnswers: Array(QUESTIONS.length).fill(null),
    locked: Array(QUESTIONS.length).fill(false),
    score: 0,
  };
  renderQuestion();
};

// Event delegation (modern + clean)
screenEl.addEventListener("click", (e) => {
  const optLabel = e.target.closest?.("label[data-opt]");
  if (optLabel) {
    selectOption(Number(optLabel.dataset.opt));
    return;
  }

  const id = e.target.id;

  switch (id) {
    case "prevBtn":
      setIndex(state.index - 1);
      break;
    case "nextBtn":
      setIndex(state.index + 1);
      break;
    case "submitBtn":
      submitAnswer();
      break;
    case "resetBtn":
      resetQuiz();
      break;
    case "resultBtn":
      renderResult();
      break;
    case "restartFromResult":
      resetQuiz();
      break;
    case "backToQuiz":
      renderQuestion();
      break;
    default:
      break;
  }
});

// ---------------------- Init ----------------------
document.addEventListener("DOMContentLoaded", () => {
  state.score = calcScore(state);
  renderQuestion();
});
