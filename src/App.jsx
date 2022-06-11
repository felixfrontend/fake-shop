import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Header from "./components/header/Header";
import ProductPage from "./pages/product-page/ProductPage";
import OrderPage from "./pages/order-page/OrderPage";
import NotFound from "./pages/not-found/NotFound";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app/:title" element={<ProductPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
