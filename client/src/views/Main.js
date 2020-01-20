import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
    const [product, setProduct] = useState([]); //[]
    const [loaded, setLoaded] = useState(false); /// just added***********************************************************************************

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
    //         .then(res => setProduct(res.data))
    //         .catch(err => console.log("!!!5!!Error: ", err))
    // }, [product])
                .then(res => {
                    setProduct(res.data) // Added ***********************************************************************************
                    setLoaded(true);
                });
            }, [])

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId))
    }

    const createProduct = product1 => {
        axios.post("http://localhost:8000/api/product/new", product1) /// this entire 'const' added
            .then(res => {
                setProduct([...product, res.data]);  
            })
    }

    return (
        <div>
            <h3>Project Manager</h3>
            <ProductForm onSubmitProp={createProduct} initialTitle={""} initialPrice={null} initialDescription={""} />
            {loaded && <ProductList product={product} removeFromDom={removeFromDom} />}
        </div>
    )
}