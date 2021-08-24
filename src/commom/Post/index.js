import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

import Comment from "../Comment";
import { AuthContext } from "../../App.js";

import { createComment, getCommentsByPost } from "../../api/requests/comment";
import { getUserById } from "../../api/requests/user";

export default function Post({ post }) {
  const { auth } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const [comments, setComments] = useState([]);

  function getComments() {
    getCommentsByPost(post.id, auth.token)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => alert("Ocorreu um erro! " + error));
  }

  function getUser() {
    getUserById(post.id_usuario, auth.token)
      .then((response) => {
        setUserComment(response.data);
      })
      .catch((error) => alert("Ocorreu um erro! " + error));
  }

  useEffect(() => {
    getComments();

    getUser();
  }, []);

  const [userComment, setUserComment] = useState([]);

  const onSubmit = (data) => {
    const comment = { texto: data.texto, id_post: post.id };
    createComment(comment, auth.token)
      .then((response) => getComments())
      .catch((error) => alert("Ocorreu um erro! " + error));
  };

  return (
    <div className="post">
      <h1>{userComment.nome}</h1>
      <p>{post.texto}</p>

      <div className="likes">
        <h3>{post.likes} curtidas</h3>

        <button className="button">curtir</button>
      </div>

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment}></Comment>
      ))}

      <div className="comment">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("texto")}
            type="text"
            placeholder="Comente aqui!"
          ></input>
          <button type="submit" className="button">
            comentar
          </button>
        </form>
      </div>
    </div>
  );
}
