import React from "react";
import { useDispatch } from "react-redux";
import { kgzPrice } from "../utils";
import "./cart-item.css";

const CartItem = ({ items }) => {
  const { title, price } = items;

  return (
    <div className="cart-item">
      <div className="cart-item__title">
        <span> {title}</span>
      </div>
      <div className="cart-item__price">
        <span>{kgzPrice(price)} сом.</span>
      </div>
    </div>
  );
};

export default CartItem;
