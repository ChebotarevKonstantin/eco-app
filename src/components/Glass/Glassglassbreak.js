import React from 'react';
import {useHistory} from 'react-router-dom'


function Glassglassbreak(props) {
  const history = useHistory();
  return (
    <div>
      <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/glass')}>Назад</button>
    <br/>
      
    </div>
  );
}

export default Glassglassbreak;
