import React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/button/Button";
import "./product-page.css";

const ProductPage = () => {
  const { currentProduct } = useSelector((state) => state.product);
  console.log(currentProduct);
  return (
    <div className="product-page">
      <div className="product-page__content">
        <div className="product-page__left">
          <div className="product-page__title">{currentProduct.title}</div>
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed?v=oe5WzVf1kq4&list=RDcfLKu6oHhps&index=2"
            title="Youtube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="product-page__right">
        <div className="product-page__img">
          <img src={currentProduct.image} alt="" />
        </div>
        <p className="product-page__desc">{currentProduct.description}</p>
        <div className="product-page__buy-game">
          <Button type="primary">Оформить</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
