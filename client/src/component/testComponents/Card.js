import React from 'react';
import ProductInfo from '../../index';  

const Card = () => {
	return (
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Our Products</h5>
        <p class="card-text"></p>
      </div>
      {ProductInfo()}
    </div>
</div>
</div>
)}

	


export default Card;