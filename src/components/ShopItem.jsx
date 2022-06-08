import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../redux/cart/reducer";
import Button from "./button/Button";

const ShopItem = ({ items }) => {
  const { id, title, price, description, image } = items;
  const dispatch = useDispatch();
  const { itemInCart } = useSelector((state) => state.cart);
  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(id));
    } else {
      dispatch(setItemInCart(items));
    }
  };

  const isItemInCart = itemInCart.some((item) => item.id === id);
  const text =
    description.length < 100
      ? description
      : " Lorem ipsum dolor sit animi harum fuga accusamus, placeat ea doloribus tenetur id dolore atque dicta";
  return (
    <div className="shop-item">
      <div className="shop-content">
        <div className="shop-img">
          <img src={image} alt="" />
        </div>
        <div className="shop-body">
          <h2 className="shop-title">{title}</h2>
          <div className="shop-desc">{text}</div>
          <div className="shop-price">price: {price}</div>
          <Button
            type={isItemInCart ? "secondary" : "primary"}
            onClick={handleClick}
          >
            {" "}
            {isItemInCart ? "Убрать из корзины" : "В корзину"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
