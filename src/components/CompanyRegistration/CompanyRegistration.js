import React, { useEffect, useState } from "react";

export default function CompanyRegistration() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [link, setLink] = useState("");
  const [material, setMaterial] = useState("");
  const [errorState, setErrorState] = useState(false);

  const inputHelper = (event) => {
    event.preventDefault();
    setLong(event.target.long.value);
    setLat(event.target.lat.value);
    setName(event.target.metro.value);
    setAddress(event.target.address.value);
    setLink(event.target.link.value);
    setMaterial(event.target.material.value);
    console.log(lat, long, name, address, link, material);

    const obj = {
      geometry: [lat, long],
      properties: {
        hintContent: name,
        balloonContent: address,
      },
      modules: ["geoObject.addon.hint", "geoObject.addon.balloon"],
      link: link,
      materials: [material],
    };
    try {
      fetch("http://192.168.90.134:8080/addplace/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((e) => setErrorState(true));
    } catch (e) {
      setErrorState(true);
    }
  };

  return (
    <div>
      <form onSubmit={inputHelper}>
        <label>Введите широту и долготу</label> <br />
        <input name="long" type="text" placeholder="широта" />{" "}
        <input name="lat" type="text" placeholder="долгота" /> <br />
        <label>Название и территориальное расположение(метро)</label> <br />
        <input name="metro" type="text" /> <br />
        <label>Адрес</label> <br />
        <input name="address" type="text" placeholder="адрес" /> <br />
        <label>Ссылка</label> <br />
        <input name="link" type="text" placeholder="ссылка" /> <br />
        <label>Выберите материал: </label> <br />
        <select name="material" id="material" defaultValue={"DEFAULT"}>
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
