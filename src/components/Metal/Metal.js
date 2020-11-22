import React from 'react';
import FindAdress from '../FindAdress';


function Metal() {
  const props = {category:'category', material:'metal'};

  return (
    <div>
      <FindAdress props={props}/>
        <br/>
      Мотивация + инфо о вреде неутилизированной шины.
    </div>
  );
}

export default Metal;
