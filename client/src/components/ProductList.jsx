import React from 'react';

export default props => {
    return(
        <div>
            <h1>All Products:</h1>
            {props.product.map((products, index)=>{
                return(
                    <p key={index}><a href={`/product/${products._id}`}>{products.title}</a></p>
                )
            })}
        </div>
    )
}