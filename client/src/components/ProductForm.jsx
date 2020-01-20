import React, { useState } from "react";
import axios from "axios";
import faker from "faker"; //dont really need but it's tits

export default props => {
  //rather change this to Product or productForm
  const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props; // added
  const [title, setTitle] = useState(initialTitle);  //initial is added
  const [price, setPrice] = useState(initialPrice);  //initial is added
  const [description, setDescription] = useState(initialDescription); //initial is added

  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmitProp({ title, price, description }); // added
    // axios
    //   .post("http://localhost:8000/api/product", {
    //     //this could also be the error
    //     title,
    //     price,
    //     description
    //   })
    //   .then(res => console.log("Response: ", res))
    //   .catch(err => console.log("!!!!!!!!!!!!!!!There is an Error: ", err));
    //   document.getElementById("InputTitle").value = "";
    //   document.getElementById("InputPrice").value = null;
    //   document.getElementById("InputDesc").value = "";
  };

  return (
    <div>
      
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Title</label>
          <br />
          <input 
            type="text"
            name="title" // added
            value={title} // added
            id="InputTitle" 
            onChange={e => setTitle(e.target.value)} /> 
        </p>
        <p>
          <label>Price</label>
          <br />
          <input 
            type="number" 
            name="price" //added 
            value={price}  //added 
            id="InputPrice" 
            onChange={e => setPrice(e.target.value)} />
        </p>
        <p>
          <label>Description</label>
          <br />
          <input 
            type="text" 
            name="description" //added
            value={description} //added
            id="InputDesc" 
            onChange={e => setDescription(e.target.value)} />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};
