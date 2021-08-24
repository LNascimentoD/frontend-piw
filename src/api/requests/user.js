import api from "../api";

export function getUserById(id, token) {
  return api.get(`/users/${id}`, { headers: { token: token } });
}
