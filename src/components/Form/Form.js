import React, { useState, useRef } from "react";
import Select from "../Select/Select";

export default function Form({ data }) {
  const [errorState, setErrorState] = useState(false);
  const [success, setSuccess] = useState(true);
  const [places, setPlaces] = useState([]);

  const barcodeInput = useRef();
  const clickHandler = () => {
    if ("Отсканируйте штрих-код" !== barcodeInput.current.value) {
      try {
        fetch("http://192.168.90.134:8080/tares/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ barcode: barcodeInput.current.value }),
        })
          .then((response) => response.json())
          .then((data) => {
            setSuccess(data.success);
            setPlaces(data.places);
          })
          .catch((e) => setErrorState(true));
      } catch (e) {
        setErrorState(true);
      }
    }
  };

  return (
    <div>
      <label>Barcode: </label>
      <input value={data} ref={barcodeInput} type="text" readOnly />
      <button type="button" className="btn btn-primary" onClick={clickHandler}>
        Отправить
      </button>
      {!success ? <Select data={data} /> : null}
    </div>
  );
}
