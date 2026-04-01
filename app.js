const API_BASE = "http://localhost:3002/api";

function getToken() {
  return localStorage.getItem("token");
}

function authHeaders(json = true) {
  const headers = {};

  if (json) {
    headers["Content-Type"] = "application/json";
  }

  const token = getToken();
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login.html";
}

function requireAuth() {
  const token = getToken();
  if (!token) {
    window.location.href = "/login.html";
  }
}

async function apiGet(url) {
  const response = await fetch(`${API_BASE}${url}`, {
    method: "GET",
    headers: authHeaders(false)
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Request failed.");
  }

  return data;
}

async function apiPost(url, body) {
  const response = await fetch(`${API_BASE}${url}`, {
    method: "POST",
    headers: authHeaders(true),
    body: JSON.stringify(body)
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Request failed.");
  }

  return data;
}

async function apiPut(url, body) {
  const response = await fetch(`${API_BASE}${url}`, {
    method: "PUT",
    headers: authHeaders(true),
    body: JSON.stringify(body)
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Request failed.");
  }

  return data;
}

async function apiDelete(url) {
  const response = await fetch(`${API_BASE}${url}`, {
    method: "DELETE",
    headers: authHeaders(false)
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || "Delete failed.");
  }

  return data;
}

function showBox(id, message, type = "error") {
  const box = document.getElementById(id);
  if (!box) return;

  box.className = `alert ${type}`;
  box.textContent = message;
}