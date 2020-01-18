import React, { useState } from "react";
import axios from "axios";
import faker from "faker";

export default props => {
  //rather change this to Product or productForm
  const [title, setTitle] = useState(faker.commerce.productName());
  const [price, setPrice] = useState(faker.commerce.price());
  const [description, setDescription] = useState(faker.commerce.productAdjective());

  const onSubmitHandler = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/product", {
        //this could also be the error
        title,
        price,
        description
      })
      .then(res => console.log("Response: ", res))
      .catch(err => console.log("!!!!!!!!!!!!!!!There is an Error: ", err));
      document.getElementById("InputTitle").value = "";
      document.getElementById("InputPrice").value = null;
      document.getElementById("InputDesc").value = "";
  };

  return (
    <div>
      <h3>Product Manager</h3>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Title</label>
          <br />
          <input type="text" id="InputTitle" onChange={e => setTitle(e.target.value)} />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input type="number" id="InputPrice" onChange={e => setPrice(e.target.value)} />
        </p>
        <p>
          <label>Description</label>
          <br />
          <input type="text" id="InputDesc" onChange={e => setDescription(e.target.value)} />
        </p>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
