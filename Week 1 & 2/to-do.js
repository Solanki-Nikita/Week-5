// -------------------- Storage --------------------
const STORAGE_KEY = "todos_v1";

function loadTodos() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// -------------------- State --------------------
let todos = [];

// todo shape:
// { id: string, title: string, dueDate: "YYYY-MM-DD" | "", completed: boolean, createdAt: number }

// -------------------- DOM --------------------
const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const dueInput = document.getElementById("dueInput");
const statusMsg = document.getElementById("statusMsg");

const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

// -------------------- Helpers --------------------
function setMsg(msg) {
  statusMsg.textContent = msg || "";
}

function createId() {
  // simple unique id (good enough for beginner app)
  return String(Date.now()) + "_" + Math.random().toString(16).slice(2);
}

function isOverdue(dueDate, completed) {
  if (!dueDate || completed) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const due = new Date(dueDate);
  due.setHours(0, 0, 0, 0);

  return due < today;
}

// -------------------- Render (separate) --------------------
function render() {
  // clear lists
  pendingList.innerHTML = "";
  completedList.innerHTML = "";

  const pending = todos.filter(t => !t.completed);
  const completed = todos.filter(t => t.completed);

  if (pending.length === 0) {
    pendingList.innerHTML = `<li class="item"><div class="item-left">No pending tasks.</div></li>`;
  } else {
    pending.forEach(t => pendingList.appendChild(renderItem(t)));
  }

  if (completed.length === 0) {
    completedList.innerHTML = `<li class="item"><div class="item-left">No completed tasks.</div></li>`;
  } else {
    completed.forEach(t => completedList.appendChild(renderItem(t)));
  }
}

function renderItem(todo) {
  const li = document.createElement("li");
  li.className = "item";

  const overdue = isOverdue(todo.dueDate, todo.completed);

  const left = document.createElement("div");
  left.className = "item-left";

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = todo.title;

  const meta = document.createElement("div");
  meta.className = "meta";

  const dueText = todo.dueDate ? `Due: ${todo.dueDate}` : "No due date";
  meta.innerHTML = `
    <span class="badge ${overdue ? "overdue" : ""}">
      ${overdue ? "Overdue" : (todo.completed ? "Done" : "Pending")}
    </span>
    <span style="margin-left:8px;">${dueText}</span>
  `;

  left.appendChild(title);
  left.appendChild(meta);

  const actions = document.createElement("div");
  actions.className = "actions";

  const toggleBtn = document.createElement("button");
  toggleBtn.type = "button";
  toggleBtn.textContent = todo.completed ? "Mark Pending" : "Mark Done";
  toggleBtn.addEventListener("click", () => toggleTodo(todo.id));

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

  actions.appendChild(toggleBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(left);
  li.appendChild(actions);

  return li;
}

// -------------------- Actions / Logic --------------------
function addTodo(title, dueDate) {
  const trimmed = title.trim();

  if (!trimmed) {
    setMsg("Task title cannot be empty.");
    return;
  }

  const todo = {
    id: createId(),
    title: trimmed,
    dueDate: dueDate || "",
    completed: false,
    createdAt: Date.now()
  };

  todos.unshift(todo);
  saveTodos(todos);
  render();
  setMsg("");
}

function toggleTodo(id) {
  todos = todos.map(t => (t.id === id ? { ...t, completed: !t.completed } : t));
  saveTodos(todos);
  render();
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  saveTodos(todos);
  render();
}

// -------------------- Events --------------------
function setupEvents() {
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo(taskInput.value, dueInput.value);
    taskInput.value = "";
    dueInput.value = "";
    taskInput.focus();
  });
}

// -------------------- Init (load from localStorage) --------------------
document.addEventListener("DOMContentLoaded", () => {
  todos = loadTodos();
  render();
  setupEvents();
});
