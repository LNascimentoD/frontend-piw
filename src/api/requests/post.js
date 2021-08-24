import api from "../api";

export function getPosts(token) {
  return api.get("/posts", { headers: { token: token } });
}

export function createPost(data, token) {
  return api.post("/posts", data, { headers: { token: token } });
}
