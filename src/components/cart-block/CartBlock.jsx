import React, { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import CartMenu from "../cart-menu/CartMenu";
import ItemsInCart from "../items-in-cart/ItemsInCart";
import { calcTotalPrice } from "../utils";
import "./cart-block.css";

const CartBlock = () => {
  const { itemInCart } = useSelector((state) => state.cart);
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const totalPrice = calcTotalPrice(itemInCart);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={itemInCart.length} />
      <BsFillCartFill
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
        size={30}
        className="cart-block__icon"
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} сом </span>
      ) : null}
      {isCartMenuVisible && (
        <CartMenu items={itemInCart} onClick={() => null} />
      )}
    </div>
  );
};

export default CartBlock;
