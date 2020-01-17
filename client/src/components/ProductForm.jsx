import React, { useState } from 'react';
import axios from 'axios';

export default props => { //rather change this to Product or productForm
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {  //this could also be the error 
            title,
            price,
            description
        })
            .then(res=>console.log("Response: ", res))
            .catch(err=>console.log("!!!!!!!!!!!!!!!There is an Error: ", err))
    }

    return(
        <div>
            <h3>Product Manager</h3>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label>
                    <br/>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price</label>
                    <br/>
                    <input type="number" onChange={(e)=>setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description</label>
                    <br/>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} />
                </p>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}