import React from 'react';
import FindAdress from '../FindAdress';

function Products() {
  const props = {category:'category', material:'products'};

  return (
    <div>
      <FindAdress props={props}/>
        <br/>
      Мотивация + инфо о вреде неутилизированной шины.
    </div>
  );
}

export default Products;
