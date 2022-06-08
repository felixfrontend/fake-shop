import React from "react";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { calcTotalPrice } from "../utils";
import "./cart-menu.css";

const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__product-list">
        {items.length > 0
          ? items.map((item) => <CartItem key={item.title} items={item} />)
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} сом.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;
