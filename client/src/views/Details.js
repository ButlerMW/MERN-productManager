import React, { useEffect, useState } from "react";
import { navigate, Link } from "@reach/router";
import axios from "axios";

export default props => {
  const [product, setProduct] = useState({});
  const [redir, setYesORNo] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + props.id)
      .then(response => setProduct(response.data));
  }, []);

  // const { removeFromDom } = props;
  const deleteProduct = productId => {
    axios
      .delete(`http://localhost:8000/api/product/delete/${productId}`)
      .then(response => {
        navigate("/product");
        // setYesORNo(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <Link to={"/product/" + product._id + "/edit"}>Edit</Link>
      <button onClick={e => deleteProduct(product._id)}>Delete</button>
    </div>
  );
};
