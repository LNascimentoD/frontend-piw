import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../api/requests/auth.js";
import { AuthContext } from "../../App.js";

import "./styles.css";
export default function Login() {
  const history = useHistory();

  const { register, handleSubmit } = useForm();
  const auth = useContext(AuthContext);

  useEffect(() => {
    auth.setAuth({
      token: auth.token,
      nome: auth.nome,
      path: "login",
    });
  }, []);

  const onSubmit = (data) => {
    login(data)
      .then((response) => {
        auth.setAuth({
          token: response.data.token,
          nome: response.data.nome,
        });
        history.push("/");
      })
      .catch((error) => {
        alert("Ocorreu um erro! " + error);
        history.push("/login");
      });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} type="text" placeholder="email"></input>
        <input
          {...register("senha")}
          type="password"
          placeholder="senha"
        ></input>
        <button type="submit" className="login-button">
          Entrar
        </button>
      </form>
      <Link className="link" to="/cadastro">
        Cadastre-se já!
      </Link>
    </div>
  );
}
