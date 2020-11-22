import React from 'react';
import FindAdress from '../FindAdress';

function Products() {
  const props = {category:'category', material:'products'};

  return (
    <div>
      <FindAdress props={props}/>
        <br/>
        <p4>Спасибо!</p4>
    </div>
  );
}

export default Products;
