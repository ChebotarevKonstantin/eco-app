import React from 'react';

import FindAdress from '../FindAdress';

function Clothing() {
const props = {category:'category', material:'clothing'};

  return (
    <div>
          <FindAdress props={props}/>
          <br/>
      <p4>Спасибо!</p4>
    </div>
  );
}

export default Clothing;
