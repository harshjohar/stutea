import React from "react";
import "../css/Shop.css";
import img from "../Assets/shop1.jpg";
import img1 from "../Assets/shop2.jpg";
import img2 from "../Assets/shop3.jpg";
import { ShopCard } from "./ShopCard";
export const ShopHome = () => {
  return (
    <div className="parent-shop dark-text">
      <h1>Welcome To The StuTea Shop!</h1>
      <div className="product-content">
        <div className="product-cards">
          <ShopCard imageUrl={img} product={"StuTea Hoodie"} credits={"3000"} color={"purple"} />
          <ShopCard imageUrl={img1} product={"StuTea Mug"} credits={"3500"} color={"blue"} />
          <ShopCard imageUrl={img2} product={"StuTea Backpack"} credits={"5000"} color={"yellow"} />
        </div>
      </div>
    </div>
  );
};
