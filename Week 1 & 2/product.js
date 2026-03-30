// ------------------- Data: array of objects -------------------
const products = [
  { id: 1, name: "Wireless Mouse", price: 799, category: "Electronics" },
  { id: 2, name: "Bluetooth Headphones", price: 2499, category: "Electronics" },
  { id: 3, name: "Cotton T-Shirt", price: 499, category: "Clothing" },
  { id: 4, name: "Running Shoes", price: 2999, category: "Clothing" },
  { id: 5, name: "Coffee Mug", price: 299, category: "Home" },
  { id: 6, name: "Desk Lamp", price: 1299, category: "Home" },
  { id: 7, name: "Notebook", price: 149, category: "Stationery" },
  { id: 8, name: "Gel Pen Pack", price: 199, category: "Stationery" },
];

// ------------------- DOM -------------------
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");
const sortSelect = document.getElementById("sortSelect");
const toggleViewBtn = document.getElementById("toggleViewBtn");
const resetBtn = document.getElementById("resetBtn");
const productContainer = document.getElementById("productContainer");
const metaText = document.getElementById("metaText");

// view state
let currentView = "list"; // "list" or "grid"

// ------------------- Render (separate function as asked) -------------------
function renderProducts(list) {
  productContainer.innerHTML = "";

  if (list.length === 0) {
    productContainer.innerHTML = `<div class="card">No products found.</div>`;
    metaText.textContent = "Showing 0 products";
    return;
  }

  const fragment = document.createDocumentFragment();

  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="name">${escapeHtml(p.name)}</div>
      <div class="info">
        <span class="badge">${escapeHtml(p.category)}</span>
        <span><b>₹${p.price}</b></span>
      </div>
    `;

    fragment.appendChild(card);
  });

  productContainer.appendChild(fragment);
  metaText.textContent = `Showing ${list.length} product(s)`;
}

// Small safety helper (prevents HTML injection if names come from external sources)
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ------------------- Filtering + Sorting + Searching pipeline -------------------
function applyFilters() {
  const search = searchInput.value.trim().toLowerCase();
  const selectedCategory = categorySelect.value;
  const min = minPriceInput.value === "" ? null : Number(minPriceInput.value);
  const max = maxPriceInput.value === "" ? null : Number(maxPriceInput.value);
  const sortMode = sortSelect.value;

  // start with original array (copy for safe sorting)
  let result = [...products];

  // Search by product name
  if (search) {
    result = result.filter((p) => p.name.toLowerCase().includes(search));
  }

  // Category filter
  if (selectedCategory !== "all") {
    result = result.filter((p) => p.category === selectedCategory);
  }

  // Price filter (prevent invalid values)
  // If min/max is NaN (bad input), ignore that bound
  if (min !== null && !Number.isNaN(min)) {
    result = result.filter((p) => p.price >= min);
  }
  if (max !== null && !Number.isNaN(max)) {
    result = result.filter((p) => p.price <= max);
  }

  // Sort by price using switch-case (as you asked earlier pattern)
  switch (sortMode) {
    case "low":
      result.sort((a, b) => a.price - b.price);
      break;
    case "high":
      result.sort((a, b) => b.price - a.price);
      break;
    default:
      // none
      break;
  }

  renderProducts(result);
}

// ------------------- Populate categories dropdown -------------------
function initCategories() {
  const uniqueCategories = [...new Set(products.map((p) => p.category))].sort();

  uniqueCategories.forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categorySelect.appendChild(opt);
  });
}

// ------------------- View toggle -------------------
function setView(view) {
  currentView = view;

  productContainer.classList.remove("list", "grid");
  productContainer.classList.add(view);

  toggleViewBtn.textContent = view === "list" ? "Switch to Grid" : "Switch to List";
}

function toggleView() {
  setView(currentView === "list" ? "grid" : "list");
}

// ------------------- Reset -------------------
function resetControls() {
  searchInput.value = "";
  categorySelect.value = "all";
  minPriceInput.value = "";
  maxPriceInput.value = "";
  sortSelect.value = "none";
  applyFilters();
}

// ------------------- Events -------------------
function setupEvents() {
  searchInput.addEventListener("input", applyFilters);
  categorySelect.addEventListener("change", applyFilters);
  minPriceInput.addEventListener("input", applyFilters);
  maxPriceInput.addEventListener("input", applyFilters);
  sortSelect.addEventListener("change", applyFilters);

  toggleViewBtn.addEventListener("click", () => {
    toggleView();
  });

  resetBtn.addEventListener("click", resetControls);
}

// ------------------- Init -------------------
document.addEventListener("DOMContentLoaded", () => {
  initCategories();
  setView("list");
  setupEvents();
  applyFilters();
});
