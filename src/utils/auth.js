const CHAVE_STORAGE = "usuario_logado";

export function salvarUsuarioLogado(usuario) {
  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(usuario));
}

export function getUsuarioLogado() {

  const dados = localStorage.getItem(CHAVE_STORAGE);

  if (!dados) return null;

  try {
    return JSON.parse(dados);
  } catch (err) {
    localStorage.removeItem(CHAVE_STORAGE);
    return null;
  }

}

export function getToken() {
  const usuario = getUsuarioLogado();
  return usuario?.token || null;
}

export function getAuthHeaders() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export function logout() {
  localStorage.removeItem(CHAVE_STORAGE);
}