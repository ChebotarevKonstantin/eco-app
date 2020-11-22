import React from 'react';
import FindAdress from '../FindAdress';
import style from '../Text.module.css'

function Tires() {

const props = {category:'tyre', material:'rubber'};

  return (
    <div>
      <FindAdress props={props}/>
        <br/>
        <div className={style.text}>Содержание химических ве&shy;ществ в распространяемых микрочастицах гораздо выше, чем в выхлопных газах автомобильного двигателя.<br/><br/>
        
Отслужившие и выброшенные покрышки разлагаются в земле более ста лет, при этом происходит загрязнение почвы, вымывание токсинов и канцерогенных веществ грунтовыми водами.
При высокой температуре воздуха так же происходит выделение высокотоксичных соединений. По этой причине крайне не рекомендуется размещать покрышки на детских площадках.
Во время горения покрышек выделяется копоть и сернистая кислота.
Основным законом природы является закон о кругообороте веществ: вредоносные вещества продолжат мигрировать.
    </div>
    </div>
  );
}

export default Tires;
