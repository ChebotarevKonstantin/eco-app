import React from 'react';
import FindAdress from '../FindAdress';


function Flakon() {

const props = {category:'flakon', material:'plastic'};

  return (
    <div>
    <FindAdress props={props}/>
      <br/>
    Мотивация + инфо о вреде неутилизированноь пластике.
  </div>
  );
}

export default Flakon;
