import api from "../api";

export function getCommentsByPost(id, token) {
  return api.get(`/posts/${id}/comments`, { headers: { token: token } });
}

export function createComment(data, token) {
  return api.post("/comments", data, { headers: { token: token } });
}
