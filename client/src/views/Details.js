import React, { useEffect , useState } from 'react';
import axios from 'axios';
// import { response } from 'express';
// import { Product } from ""

export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(response => setProduct({
                ...response.data
            }))
    }, [])
    return (
        <div>
            <h1>{ product.title }</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
};