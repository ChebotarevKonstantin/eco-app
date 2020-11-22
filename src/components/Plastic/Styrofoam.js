import React from 'react';
import FindAdress from '../FindAdress';

function Styrofoam() {
  
const props = {category:'styrofoam', material:'plastic'};

  return (
    <div>
    <FindAdress props={props}/>
      <br/>
    Мотивация + инфо о вреде неутилизированной шины.
  </div>
  );
}

export default Styrofoam;
