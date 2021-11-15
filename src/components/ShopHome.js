import React from "react";
import "../css/Shop.css";
import img from "../Assets/shop1.jpg";
import img1 from "../Assets/shop2.jpg";
import img2 from "../Assets/shop3.jpg";

export const ShopHome = () => {
  return (
    <div>
      <div className="intro-content">
        <h2>Welcome To The StuTea Shop!</h2>
      </div>

      <div className="product-content">
        <div className="product">
          <h1>SHOP NEW MERCHANDISE!</h1>
        </div>
        <div className="product-img class-img">
          <div className="w3-card">
            <img src={img} alt="img" className="image" />
            <div className="middle"></div>
            <div className="product-container">
            
              <h4>
                <b>StuTea Hoodie</b>
              </h4>
              <p>40 Credits</p>
              <i class="fas fa-cart-plus"></i>
            </div>
          </div>
          <div className="w3-card">
            <img src={img1} alt="img" className="image" />
            <div className="middle"></div>
            <div className="product-container">
              <h4>
                <b>StuTea Mug</b>
              </h4>
              <p>25 Credits </p>
              <i class="fas fa-cart-plus"></i>
              
            </div>
          </div>
          <div className="w3-card">
            <img src={img2} alt="img" className="image" />
            <div className="middle"></div>
            <div className="product-container">
              <h4>
                <b>StuTea BackPack</b>
              </h4>
              <p>35 Credits</p>
              <i class="fas fa-cart-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
