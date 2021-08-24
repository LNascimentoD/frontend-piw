import api from "../api";

export function login(data) {
  return api.post("/users/signin", data);
}

export function cadastrar(user) {
  return api.post("/users", user);
}
