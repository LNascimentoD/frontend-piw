import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { cadastrar } from "../../api/requests/auth.js";
import { AuthContext } from "../../App.js";

import "./styles.css";
export default function Login() {
  const { setAuth } = useContext(AuthContext);
  const history = useHistory();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    cadastrar(data)
      .then(history.push("/login"))
      .catch((error) => {
        alert("Ocorreu um erro! " + error);
        history.push("/cadastro");
      });
  };

  useEffect(() => {
    setAuth({
      token: "null",
      nome: "null",
      path: "cadastro",
    });
  }, []);

  return (
    <div className="register">
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("nome")} type="text" placeholder="nome"></input>
        <input {...register("email")} type="text" placeholder="email"></input>
        <input
          {...register("senha")}
          type="password"
          placeholder="senha"
        ></input>
        <button type="submit" className="register-button">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
