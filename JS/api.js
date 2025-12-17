// JS/api.js
const API_BASE = "http://localhost:5203";

async function request(path, options = {}) {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });

  const text = await res.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }

  if (!res.ok) {
    const msg = (data && data.message) ? data.message : (typeof data === "string" ? data : "Error en la API");
    throw new Error(msg);
  }

  return data;
}

export async function obtenerArticulos() {
  // Tu API devuelve { articulos: [...] }
  return request("/api/articulos");
}

export async function buscarArticulos(nombre) {
  return request("/api/articulos/buscar", {
    method: "POST",
    body: JSON.stringify({ nombre })
  });
}

export async function login(user, contrasena) {
  return request("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ user, contrasena })
  });
}

export async function registrarCliente(payload) {
  // payload: { user, contrasena, nombre, apellido, direccion, correo, telefono }
  return request("/api/auth/register/cliente", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export async function obtenerFacturas() {
  return request("/api/facturas");
}
export async function obtenerFactura(id) {
  return request(`/api/facturas/${id}`);
}