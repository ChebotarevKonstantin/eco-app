import React, { useRef,useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import {featchAddCompanyAC} from '../../redux/actionCreator';

export default function CompanyRegistration() {
  const dispatch = useDispatch();
  const long = useRef();
  const lat = useRef();
  const address = useRef();
  const metro = useRef();
  const link = useRef();
  const material = useRef();

  
  // const [lat, setLat] = useState(null);
  // const [long, setLong] = useState(null);
  // const [name, setName] = useState("");
  // const [address, setAddress] = useState("");
  // const [link, setLink] = useState("");
  // const [material, setMaterial] = useState("");
  const [errorState, setErrorState] = useState(false);

  const inputHelper = (event) => {
    event.preventDefault();
   
    // setLong(event.target.long.value);
    // setLat(event.target.lat.value);
    // setName(event.target.metro.value);
    // setAddress(event.target.address.value);
    // setLink(event.target.link.value);
    // setMaterial(event.target.material.value);
    
   

    const obj = {
      geometry: [lat.current.value, long.current.value],
      properties: {
        hintContent: metro.current.value,
        balloonContent: address.current.value,
      },
      modules: ["geoObject.addon.hint", "geoObject.addon.balloon"],
      link: link.current.value,
      materials: [material.current.value],
    };
    console.log(obj);
    try {
      dispatch(featchAddCompanyAC(obj))
      .catch((e) => setErrorState(true));

      // fetch("http://192.168.90.134:8080/addplace/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(obj),
      // })
      //   .then((response) => response.json())
      //   .then((data) => console.log(data))
      //   .catch((e) => setErrorState(true));
    } catch (e) {
      setErrorState(true);
    }
  };

  return (
    <div>
      <form onSubmit={inputHelper}>
        <label>Введите широту и долготу</label> <br />
        <input ref={long} name="long" type="text" placeholder="широта" />{" "}
        <input ref={lat} name="lat" type="text" placeholder="долгота" /> <br />
        <label>Название и территориальное расположение(метро)</label> <br />
        <input ref={metro} name="metro" type="text" /> <br />
        <label>Адрес</label> <br />
        <input ref={address} name="address" type="text" placeholder="адрес" /> <br />
        <label>Ссылка</label> <br />
        <input ref={link} name="link" type="text" placeholder="ссылка" /> <br />
        <label>Выберите материал: </label> <br />
        <select ref={material} name="material" id="material" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disabled>
            -- Материал --
          </option>
          <option value="glass">Стекло</option>
          <option value="metal">Металл</option>
          <option value="plastic">Пластик</option>
          <option value="paper">Бумага</option>
          <option value="rubber">Резина</option>
        </select>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Закрыть
          </button>
          <button type="submit" className="btn btn-primary">
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
}
