import React from "react";
import axios from "axios";
import ErrorBoundary from "./ErrorBoundary";

export default props => {
  const { removeFromDom } = props;
  const deleteProduct = productId => {
    axios
      .delete("http://localhost:8000/api/product/delete/" + productId)
      .then(response => {
        removeFromDom(productId);
      });
  };

  return (
    <div>
      <h1>All Products:</h1>
      {props.product.map((products, index) => {
        return (
          <p key={index}>
            <a href={`/product/${products._id}`}>{products.title}</a>
            <button
              onClick={e => {
                deleteProduct(products._id);
              }}
            >
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
};
