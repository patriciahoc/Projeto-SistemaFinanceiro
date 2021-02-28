import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { postUserRequest } from "../../../store/ducks/user/actions";

const Login = () => {
  let InputEmail = useRef<HTMLInputElement>(null);
  let InputPassWord = useRef<HTMLInputElement>(null);
  let emailInput = useRef<HTMLInputElement>(null);
  let senhaInput = useRef<HTMLInputElement>(null);

  const user = useSelector((state: any) => state.usersReducer);

  const dispatch = useDispatch();

  const postUsers = () => {
    let email = InputEmail?.current?.value;
    let password = InputPassWord?.current?.value;

    dispatch(postUserRequest({ email, password }));
  };

  return (
    <>
      <div>
        <h1>Já tenho cadastro...</h1>
      </div>
      <div>
        <input type="email" placeholder="Email" ref={emailInput} />
        <input type="password" placeholder="Senha" ref={senhaInput} />
      </div>

      <div>
        <h1>Faça seu cadastro</h1>
      </div>
      <div>
        <input type="email" placeholder="Email" ref={InputEmail} />
        <input type="password" placeholder="Senha" ref={InputPassWord} />
      </div>
      <button onClick={() => postUsers()}> Cadastrar </button>

      {user.accessToken && <Redirect to="/" />}
    </>
  );
};
export default Login;
