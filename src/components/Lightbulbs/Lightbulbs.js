import React from 'react';
import FindAdress from '../FindAdress';

function Lightbulbs() {
const props = {category:'category', material:'lightbulbs'};

  return (
    <div>
           <FindAdress props={props}/>
           <br/>
      Мотивация + инфо о вреде неутилизированной лампочки.
    </div>
  );
}

export default Lightbulbs;
