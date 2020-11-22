import React from 'react';
import FindAdress from '../FindAdress';


function Tires() {

const props = {category:'tyre', material:'rubber'};

  return (
    <div>
      <FindAdress props={props}/>
        <br/>
      Мотивация + инфо о вреде неутилизированной шины.
    </div>
  );
}

export default Tires;
