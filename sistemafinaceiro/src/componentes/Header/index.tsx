import React from "react";
import { useSelector } from "react-redux";

import Logo from "../../img/logo.png";

const Header = () => {
  const user = useSelector((state: any) => state.usersReducer);

  return (
    <div className="container-header">
      <div className="image">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="navbar">
        <div>
          <a href="/">Home</a>
        </div>
        <div className="">
          <a href="/coins">Moedas</a>
        </div>
        <div className="">
          <a href="/accountant">Financeiro</a>
        </div>
        {!user.accessToken && (
          <div className="">
            <a href="/acessar">Login</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
