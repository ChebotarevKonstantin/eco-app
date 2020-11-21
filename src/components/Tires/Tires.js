import React, { useCallback } from 'react';
import {useHistory} from 'react-router-dom'
function Tires(props) {




  
  const history = useHistory()
  return (
    <div>
      <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/blic')}>Назад</button>
      <br/>
      Показываем на карте куда можно сдать.
      <br/>
      Мотивация + инфо о вреде неутилизированной шины.
    </div>
  );
}

export default Tires;
