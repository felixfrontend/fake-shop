import React, { useEffect } from "react";
import Skeleton from "../components/Skeleton";
import ShopItem from "../components/ShopItem";
import { useDispatch, useSelector } from "react-redux";
import { productsFetched, productsFetching } from "../redux/product/reducer";

import "./home-page.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const { productItems, productsLoadingStatus } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(productsFetched(data));
        dispatch(productsFetching());
      });
  }, []);
  return (
    <div>
      {" "}
      <div className="shop-list">
        {productsLoadingStatus === "idle"
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : productItems.map((item) => <ShopItem key={item.id} items={item} />)}
      </div>
    </div>
  );
};

export default HomePage;
