import React from 'react';
import axios from 'axios';

export default props => {
  const { productId, successCallback } = props;
  const deleteProduct = e => {
    axios.delete("http://localhost:8000/api/product/delete/" + productId) //this might need tp change//
      .then(res => { 
        successCallback();
      })
  }
  return (
    <button onClick={deleteProduct}>
      Delete
    </button>
  )
}