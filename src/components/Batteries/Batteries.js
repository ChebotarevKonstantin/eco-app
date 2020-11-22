import React from 'react';
import FindAdress from '../FindAdress';
import style from '../Text.module.css'

function Batteries() {
 
  const props = {category:'category', material:'batteries'};

  return (
    <div>
      <FindAdress props={props}/>
      <br/>
      <div  className={style.text}>
      <p4>Один элемент питания загрязняет 20 квадратных метров земли. Такое воздействие на окружающую среду осуществляется посредством тяжелых металлов. Кроме почвы подобный гальванический элемент может испортить до 400 литров воды.</p4>
    </div>
    </div>
  );
}

export default Batteries;
