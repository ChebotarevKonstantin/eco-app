import React from 'react';
import {useHistory} from 'react-router-dom'


function Hazardouswaste(props) {
  const history = useHistory()

  return (
    <div>
      <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/blic')}>Назад</button>
    <br/>
    </div>
  );
}

export default Hazardouswaste;
