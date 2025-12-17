// JS/categorias.js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-categorias");
  const dropdown = document.getElementById("dropdown-categorias");
  if (!btn || !dropdown) return;

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.style.display = dropdown.style.display === "grid" ? "none" : "grid";
  });

  document.addEventListener("click", () => {
    dropdown.style.display = "none";
  });

  dropdown.addEventListener("click", (e) => e.stopPropagation());
});
// JS/carrito.js
export const CART_KEY = "mi_carrito";