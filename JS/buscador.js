// JS/buscador.js
import { buscarArticulos, obtenerArticulos } from "./api.js";
import { IMAGE_MAP, IMG_PLACEHOLDER } from "./catalogo.js";
import { addToCart, updateCartBadge, money } from "./carrito.js";

function renderGrid(grid, items) {
  if (!grid) return;
  grid.innerHTML = "";

  if (!items || items.length === 0) {
    const msg = document.createElement("div");
    msg.className = "no-results";
    msg.textContent = "No se encontraron productos.";
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
      addToCart({
        id: a.id,
        nombre: a.nombre,
        precio: a.precio,
        imagen: img
      });
      alert("Producto agregado ✅");
    });

    grid.appendChild(card);
  });

  updateCartBadge();
}

document.addEventListener("DOMContentLoaded", async () => {
  updateCartBadge();

  const form = document.querySelector(".site-search");
  const input = document.getElementById("buscador");
  if (!form || !input) return;

  const onIndex = document.body.dataset.page === "index";
  const grid = document.querySelector(".grid");

  async function doSearch(q) {
    // si está vacío: traer todos
    if (!q) {
      const all = await obtenerArticulos();
      renderGrid(grid, all.articulos || []);
      return;
    }
    const res = await buscarArticulos(q);
    renderGrid(grid, res.articulos || []);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const q = input.value.trim();

    if (!onIndex) {
      window.location.href = `index.html?q=${encodeURIComponent(q)}`;
      return;
    }

    try {
      await doSearch(q);
    } catch (err) {
      alert(err.message || "Error buscando productos");
    }
  });

  // si llega con ?q=
  if (onIndex) {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q) input.value = q;

    try {
      await doSearch(q || "");
    } catch (err) {
      alert(err.message || "Error cargando productos");
    }
  }
});
