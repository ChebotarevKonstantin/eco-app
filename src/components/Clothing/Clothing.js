import React from 'react';
import style from '../Text.module.css'
import FindAdress from '../FindAdress';

function Clothing() {
const props = {category:'category', material:'clothing'};

  return (
    <div>
          <FindAdress props={props}/>
          <br/>
          <div  className={style.text}>
      <p4>Спасибо!</p4>
      </div>
    </div>
  );
}

export default Clothing;
