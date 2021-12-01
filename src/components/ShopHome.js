import React from "react";
import "../css/Shop.css";
import img from "../Assets/shop1.jpg";
import img1 from "../Assets/shop2.jpg";
import img2 from "../Assets/shop3.jpg";
export const ShopHome = () => {
  return (
    <div className="parent-shop">
      <h1>Welcome To The StuTea Shop!</h1>
      <div className="product-content">
        <div className="product-cards d-flex">
          <div className="card">
            <img src={img} className="card-img-top" alt="img"/>
            <div className="card-body">
              <h5 className="card-title">StuTea Hoodie</h5>
              <p className="card-text">
                Credits: 3000
              </p>
              <a href="/" className="btn btn-primary">
                Buy
              </a>
            </div>
          </div>
          <div className="card">
            <img src={img1} className="card-img-top" alt="img"/>
            <div className="card-body">
              <h5 className="card-title">StuTea Mug</h5>
              <p className="card-text">
                Credits: 3500
              </p>
              <a href="/" className="btn btn-primary">
                Buy
              </a>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="card-img-top" alt="img"/>
            <div className="card-body">
              <h5 className="card-title">StuTea Backpack</h5>
              <p className="card-text">
                Credits: 5000
              </p>
              <a href="/" className="btn btn-primary">
                Buy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
