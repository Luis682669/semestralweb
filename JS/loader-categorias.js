// JS/loader-categorias.js
import { obtenerArticulos } from "./api.js";
import { CATEGORY_MAP, IMAGE_MAP, IMG_PLACEHOLDER } from "./catalogo.js";
import { addToCart, updateCartBadge, money } from "./carrito.js";

function render(grid, items) {
  grid.innerHTML = "";
  if (!items || items.length === 0) {
    const msg = document.createElement("div");
    msg.className = "no-results";
    msg.textContent = "No hay productos en esta categoría (revisa nombres en JS/catalogo.js).";
    grid.parentElement.appendChild(msg);
    return;
  }

  items.forEach(a => {
    const img = IMAGE_MAP[a.nombre] || IMG_PLACEHOLDER;
    const stockOk = (a.stock ?? 0) > 0;

    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card__media"><img src="${img}" alt="${a.nombre}"></div>
      <h4 class="card__title">${a.nombre}</h4>
      <p class="card__desc">${a.descripcion || ""}</p>
      <div class="card__price">
        <span class="price__now">${money(a.precio)}</span>
        <span class="badge-stock ${stockOk ? "" : "badge-out"}">${stockOk ? "En stock" : "Agotado"}</span>
      </div>
      <div class="card__actions">
        <button class="btn btn--primary js-add" ${stockOk ? "" : "disabled"}>${stockOk ? "Añadir" : "Sin stock"}</button>
        <a class="btn btn--ghost" href="carrito.html">Ver carrito</a>
      </div>
    `;

    card.querySelector(".js-add")?.addEventListener("click", () => {
      addToCart({ id: a.id, nombre: a.nombre, precio: a.precio, imagen: img });
      alert("Producto agregado ✅");
    });

    grid.appendChild(card);
  });

  updateCartBadge();
}

document.addEventListener("DOMContentLoaded", async () => {
  updateCartBadge();

  const cat = document.body.dataset.category;
  const grid = document.querySelector(".grid");
  if (!cat || !grid) return;

  try {
    const data = await obtenerArticulos();
    const all = data.articulos || [];

    const allowedNames = new Set(CATEGORY_MAP[cat] || []);
    const filtered = all.filter(a => allowedNames.has(a.nombre));

    render(grid, filtered);
  } catch (err) {
    alert(err.message || "Error cargando productos");
  }
});
