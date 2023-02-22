import React from "react";

export const ShopCard = (props)=>{
    let { credits, product, imageUrl, color } = props;
    return(
        <>
        <div className={`card ${color}`}>
            <div className="innerCard">
              <img src={imageUrl} className="card-img-top" alt="img"/>
              <div className="card-body">
                <h5 className="card-title">{product}</h5>
                <p className="card-text">
                  Credits: {credits}
                </p>
              </div>
            </div>
              <a href="/" className="btn btn-primary">
                <img src="/iconmonstr-shopping-cart-thin.svg" class="w-5 mx-2" alt=""/>
                Buy
              </a>
          </div>
          </>
    )
    
}