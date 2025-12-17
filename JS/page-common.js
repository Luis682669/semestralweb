// JS/page-common.js
import { updateCartBadge } from "./carrito.js";

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();

  const btn = document.getElementById("btnLogin");
  if (!btn) return;

  const email = localStorage.getItem("usuario_email");
  btn.textContent = email ? email.split("@")[0] : "Mi cuenta";
});
