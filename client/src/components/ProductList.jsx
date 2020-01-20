import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import DeleteButton from "./DeleteButton";

export default props => {
//   const { removeFromDom } = props;
//   const deleteProduct = productId => {
//     axios
//       .delete("http://localhost:8000/api/product/delete/" + productId)
//       .then(response => {
//         removeFromDom(productId);
//       });
//   };

const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/product")
      .then(res => setProduct(res.data));
  }, [product])

const removeFromDom = productId => {
  setProduct(product.filter(product => product._id != productId))
}

  return (
    <div>
      <h1>All Products:</h1>
      {/* {props.product.map((products, index) => {
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
      })} */}
      {product.map((product, idx) => {
        return (
          <p key={idx}>
            <Link to={"/product/" + product._id}>
              { product.title }
            </Link>     

            <Link to={"/product/" + product._id + "/edit"}>
              Edit
            </Link>

            <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} />
          
          </p>
        )
        })}
    </div>
  );
};
