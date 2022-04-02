import React from 'react';
import ProductInfo from '../../index';  
import "./../testComponents/Cards.css"
const Card = () => {
	return (
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">

      <div class="card-body" id="cardbody">
        <h5 class="card-title">Our Products</h5>
        <p class="card-text"></p>
      </div>
      {ProductInfo()}
    </div>
</div>
</div>
)}

	


export default Card;