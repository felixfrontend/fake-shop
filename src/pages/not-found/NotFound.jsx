import React from "react";
import "./not-found.css";

const NotFound = () => {
  return (
    <div>
      <h2>Страница не найдена</h2>
      <div className="not-found__bg">
        <img src={process.env.PUBLIC_URL + "/img/maxresdefault.jpg"} alt="ds" />
      </div>
    </div>
  );
};

export default NotFound;
