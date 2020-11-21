import React from 'react';
import {useHistory} from 'react-router-dom'
function Products(props) {

  const history = useHistory();
  return (
    <div>
      <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/blic')}>Назад</button>
      <br/>
            Показываем на карте куда можно сдать.
      <br/>
      Мотивация.
    </div>
  );
}

export default Products;
