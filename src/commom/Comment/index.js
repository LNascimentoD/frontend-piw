import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../App.js";
import "./styles.css";
import { getUserById } from "../../api/requests/user";

export default function Comment({ comment }) {
  const { auth } = useContext(AuthContext);

  const [userComment, setUserComment] = useState([]);

  useEffect(() => {
    getUserById(comment.id_usuario, auth.token)
      .then((response) => {
        setUserComment(response.data);
      })
      .catch((error) => alert("Ocorreu um erro! " + error));
  }, []);

  return (
    <div className="comment-content">
      <h3>{userComment.nome}</h3>
      <p>{comment.texto}</p>
    </div>
  );
}
