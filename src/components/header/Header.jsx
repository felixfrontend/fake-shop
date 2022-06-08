import React from "react";
import { Link } from "react-router-dom";
import CartBlock from "../cart-block/CartBlock";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__title">
        Fake Shop
      </Link>
      <div className="header__cart-btn">
        <CartBlock />
      </div>
    </header>
  );
};

export default Header;
