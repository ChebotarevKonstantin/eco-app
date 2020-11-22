import React from 'react';

import FindAdress from '../FindAdress';

function Glasscontainer() {
const props = {category:'glasscontainer', material:'glass'};
  return (
    <div>
       <FindAdress props={props}/>
    </div>
  );
}

export default Glasscontainer;
