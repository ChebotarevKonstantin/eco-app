import React from 'react';
import FindAdress from '../FindAdress';

function Batteries() {
 
  const props = {category:'category', material:'batteries'};

  return (
    <div>
      <FindAdress props={props}/>
      <br/>
      Мотивация + инфо о вреде неутилизированной батарейки.
    </div>
  );
}

export default Batteries;
