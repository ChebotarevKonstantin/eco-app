import React from 'react';
import FindAdress from '../FindAdress';

function Paper() {
  const props = {category:'category', material:'paper'};
   return (
    <div>
    <FindAdress props={props}/>
      <br/>
    Мотивация + инфо о вреде неутилизированной бумаги.
  </div>
  );
}

export default Paper;
