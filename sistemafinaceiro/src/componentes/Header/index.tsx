import React from "react";

import Logo from "../../img/logo.png";

const Header = () => {
  return (
    <div className="container-header">
      <div className="image">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="navbar">
        <div>
          <a href="/acessar"> Login</a>
        </div>
        <div className="">
          <a href="/coins">Moedas</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
