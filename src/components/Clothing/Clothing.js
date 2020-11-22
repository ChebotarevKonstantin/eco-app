import React from 'react';

import FindAdress from '../FindAdress';

function Clothing() {
const props = {category:'category', material:'clothing'};

  return (
    <div>
          <FindAdress props={props}/>
    </div>
  );
}

export default Clothing;
