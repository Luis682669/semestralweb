// JS/login.js
import { login } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email")?.value.trim();
    const pass = document.getElementById("password")?.value.trim();

    if (!email || !pass) {
      alert("Completa todos los campos");
      return;
    }

    try {
      const res = await login(email, pass);
      // Tu API devuelve string JSON (Ok(json)), lo guardamos tal cual
      localStorage.setItem("usuario_json", res);
      localStorage.setItem("usuario_email", email);
      window.location.href = "index.html";
    } catch (err) {
      alert(err.message || "No se pudo iniciar sesión");
    }
  });
});
// JS/login.js
