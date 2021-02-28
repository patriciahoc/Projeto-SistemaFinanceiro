import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import {
  postLoginRequest,
  postUserRequest,
} from "../../../store/ducks/user/actions";
import { TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const Login = () => {
  let registerEmail = useRef<HTMLInputElement>(null);
  let registerSenha = useRef<HTMLInputElement>(null);
  let loginEmail = useRef<HTMLInputElement>(null);
  let loginSenha = useRef<HTMLInputElement>(null);

  const user = useSelector((state: any) => state.usersReducer);

  const dispatch = useDispatch();

  const register = () => {
    let email = registerEmail?.current?.value;
    let password = registerSenha?.current?.value;

    dispatch(postUserRequest({ email, password }));
  };

  const login = () => {
    let email = loginEmail?.current?.value;
    let password = loginSenha?.current?.value;

    dispatch(postLoginRequest({ email, password }));
  };

  return (
    <>
      {user.accessToken && <Redirect to="/" />}

      <div className="login-container">
        <div className="formulario">
          <h2>Já estou cadastrado</h2>
          <TextField type="email" placeholder="Email" inputRef={loginEmail} />
          <TextField
            type="password"
            placeholder="Senha"
            inputRef={loginSenha}
          />
          <button onClick={() => login()}> Entrar </button>
        </div>

        <div className="formulario">
          <h2>Ainda não tenho cadastro</h2>
          <TextField
            type="email"
            placeholder="Email"
            inputRef={registerEmail}
          />
          <TextField
            type="password"
            placeholder="Senha"
            inputRef={registerSenha}
          />
          <button onClick={() => register()}> Cadastrar </button>
        </div>
      </div>
      <div className="login-container">
        {user.error && (
          <Alert severity="error">
            Ocorreu um erro. Verique seus dados e tente novamente.
          </Alert>
        )}
      </div>
    </>
  );
};
export default Login;
