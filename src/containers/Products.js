import React from "react";
import iphone6Img from "../images/iphone-6.jpg";
import iphone7Img from "../images/iphone-7.jpg";
import iphone8Img from "../images/iphone-8.jpg";
const Products = () => (
  <div className="container products">
    <div className="product">
      <div className="product-image">
        <img alt="iphone 6 black" src={iphone6Img} />
      </div>
      <h5 className="product-title">iPhone 6 black</h5>
      <p className="product-price">AED 1000</p>
    </div>
    <div className="product">
      <div className="product-image">
        <img alt="iphone 7 black" src={iphone7Img} />
      </div>
      <h5 className="product-title">iPhone 7 black</h5>
      <p className="product-price">AED 2000</p>
    </div>
    <div className="product">
      <div className="product-image">
        <img alt="iphone 8 black" src={iphone8Img} />
      </div>
      <h5 className="product-title">iPhone 8 black</h5>
      <p className="product-price">AED 3000</p>
    </div>
  </div>
);

export default Products;
