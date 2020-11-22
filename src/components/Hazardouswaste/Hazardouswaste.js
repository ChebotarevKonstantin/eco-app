import React from 'react';

import FindAdress from '../FindAdress';


function Hazardouswaste() {
const props = {category:'category', material:'hazardouswaste'};
  return (
    <div>
          <FindAdress props={props}/>
    </div>
  );
}

export default Hazardouswaste;
