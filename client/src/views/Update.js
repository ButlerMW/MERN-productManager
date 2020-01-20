import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm'
import DeleteButton from '../components/DeleteButton'

// export default props => {
//     const { id } = props;
//     const [title, setTitle] = useState();
//     const [price, setPrice] = useState();
//     const [description, setDescription] = useState();

export default props => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false); //added all


    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)  //  prop.id????
        //     .then(response => {
        //         setTitle(response.data.title);
        //         setPrice(response.data.price);                  
        //         setDescription(response.data.description);
        // })
                .then(res => {
                    setProduct(res.data);
                    setLoaded(true); //added all in then
                })
    }, [])

    // const updateProduct = e => {
    //     e.preventDefault();
    //     axios.put("http://localhost:8000/api/product/update/" + id, {
    //         title,
    //         price,
    //         description
    //     })
    //         .then(response => console.log(response))
    //         .then( navigate(`/product`) );
    //         console.log("UPDATED!!!!!!!!");
    // }

    const updateProduct = product => {
        axios.put("http://localhost:8000/api/product/update/" + id, product)
            .then(res => {
                console.log(res);
                navigate(`/product/${id}`);
    })}

    return (
        <div>
            <h1>Update Product</h1>
            {/* <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label>
                    <br />
                    <input type="text" 
                        name="title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} 
                    />
                </p>
                <p>
                    <label>Price</label>
                    <br />
                    <input type="text" 
                        name="price"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }} 
                    />
                </p>
                <p>
                    <label>description</label>
                    <br />
                    <input type="text" 
                        name="description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} 
                    />
                </p>
                <input type="submit" />
            </form> */}
            {loaded && (
                <>
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                    />
                    <DeleteButton productId={product._id} successCallback={ () => navigate("/product")} />
                </>
            )}
        </div>
    )
}