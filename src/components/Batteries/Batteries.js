import React from 'react';
import FindAdress from '../FindAdress';

function Batteries() {
 
  const props = {category:'category', material:'batteries'};

  return (
    <div>
      <FindAdress props={props}/>
      <br/>
      <p4>Один элемент питания загрязняет 20 квадратных метров земли. Такое воздействие на окружающую среду осуществляется посредством тяжелых металлов. Кроме почвы подобный гальванический элемент может испортить до 400 литров воды.</p4>
    </div>
  );
}

export default Batteries;
