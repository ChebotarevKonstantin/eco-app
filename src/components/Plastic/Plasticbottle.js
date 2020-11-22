import React from 'react';
import FindAdress from '../FindAdress';

function Plasticbottle() {
 const props = {category:'bottle', material:'plastic'};
  return (
    <div>
    <FindAdress props={props}/>
      <br/>
    Мотивация + инфо о вреде неутилизированной Plasticbottду.
  </div>
  );
}

export default Plasticbottle;
