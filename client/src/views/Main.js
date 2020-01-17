import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
export default () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => setProduct(res.data))
            .catch(err => console.log("!!!5!!Error: ", err))
    }, [])
    return (
        <>
            <ProductForm />
            <ProductList product={product} />
        </>
    )
}