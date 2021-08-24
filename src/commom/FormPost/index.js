import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { createPost } from "../../api/requests/post.js";

import { useHistory } from "react-router-dom";
import { AuthContext } from "../../App.js";
import "./styles.css";

export default function FormPost() {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { auth } = useContext(AuthContext);

  const onSubmit = (data) => {
    const post = { texto: data.texto, likes: 0 };
    createPost(post, auth.token)
      .then((response) => {
        history.push("/");
      })
      .catch((error) => alert("Ocorreu um erro! " + error));
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("texto")}
          placeholder="escreva seu post aqui!"
        ></input>
        <button type="submit" className="button">
          postar
        </button>
      </form>
    </div>
  );
}
