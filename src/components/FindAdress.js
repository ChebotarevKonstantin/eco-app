import React, { useEffect } from 'react';
import{useDispatch, useSelector} from 'react-redux';
import {featchFindAC} from '../redux/actionCreator';
import {useHistory} from 'react-router-dom';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps'
import style from './FindAdress.module.css'


function FindAdress(props) {
  const dispatch = useDispatch();
  const addres = useSelector(store =>store.addres);
    useEffect(()=>{
    dispatch(featchFindAC(props.props))
  },[]);
      const history = useHistory();
      const mapstate = { center: [59.9371, 30.3575], zoom: 9, width: '90%', height: '90%' };
  return (
    <div >
      <div className="back-btn"><button type="button" className="btn btn-primary btn-sm " onClick={()=> history.push('/blic')}>Назад</button></div>
      <br/>
      Пункты приёма.
      <br/>
      <br/>
      <div className={style.flexfind} >
      <YMaps>
        <Map state={mapstate}  >
          {addres && addres.map((placemark, i)=> <Placemark key={placemark._id} {...placemark} />)}
          <ZoomControl />
        </Map>
      </YMaps>
     </div>
     </div>
  );
}

export default FindAdress;
