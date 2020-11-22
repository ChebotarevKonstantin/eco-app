import React from 'react';
import FindAdress from '../FindAdress';

function Tetrapac() {
const props = {category:'category', material:'tetrapac'};
  return (
    <div>
      <FindAdress props={props}/>
        <br/>
      Мотивация + инфо о вреде неутилизированной Tetrapac.
    </div>
  );
}

export default Tetrapac;
