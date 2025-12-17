// JS/cuenta.js

document.addEventListener("DOMContentLoaded", () => {
  function updateBtn() {
    const usuario = localStorage.getItem("usuario");
    const btn = document.getElementById("btnLogin");
    if (btn) btn.textContent = usuario ? usuario.split("@")[0] : "Mi cuenta";
  }

  updateBtn();
  window.addEventListener('header-included', updateBtn);
});
