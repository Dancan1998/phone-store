import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Buttons";
class Details extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            img,
            price,
            company,
            info,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-3">
              {/* title  */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-2">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title  */}
              {/* product  */}
              <div className="row">
                {/* product image */}
                <div className="col-10 mx-auto col-md-6 my-2">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text  */}
                <div className="col-10 mx-auto col-md-6 my-2 text-capitalize">
                  <h2>model : {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mb-2 mt-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    {" "}
                    <strong>
                      price : <span>$</span> {price}
                    </strong>{" "}
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* end of product text  */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
              {/* end product*/}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
