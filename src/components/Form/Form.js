import React, { useState } from "react";
import Select from "../Select/Select";

export default function Form(props) {
  const [text, setText] = useState("");
  const [success, setSuccess] = useState(false);
  const [checked, setChecked] = useState(false);
  // const [selectedMaterial, setSelectedMaterial] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("");
  const [errorState, setErrorState] = useState(false);

  const inputHandler = (event) => {
    setText(event.target.value);
  };

  // const selectedMaterialHandler = (event) => {
  //   setSelectedMaterial(event.target.value);
  //   console.log(event.target.value);
  // };
  //
  // const selectedCategoryHandler = (event) => {
  //   setSelectedCategory(event.target.value);
  //   console.log(event.target.value);
  // };

  const clickHandler = (event) => {
    event.preventDefault();

    setChecked(true);

    const barcode = {
      barcode: props.data.toString(),
    };
    console.log(barcode);
    try {
      fetch("http://192.168.90.134:8080/tares/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(barcode),
      })
        .then((response) => response.json())
        .then((res) => setSuccess(res.success))
        .catch((e) => setErrorState(true));
    } catch (e) {
      setErrorState(true);
    }

    console.log(errorState);
  };

  return (
    <div>
      <form onChange={inputHandler}>
        <label>Barcode: </label>
        <input
          type="text"
          name="barcode"
          value={props.data}
          onChange={inputHandler}
        />
        <br />
        {!success && checked ? <Select /> : null}
        {/*<label>Material: </label>*/}
        {/*<select*/}
        {/*  name="material"*/}
        {/*  id="material"*/}
        {/*  onChange={selectedMaterialHandler}*/}
        {/*>*/}
        {/*  <option value="glass">Стекло</option>*/}
        {/*  <option value="metal">Металл</option>*/}
        {/*  <option value="plastic">Пластик</option>*/}
        {/*  <option value="paper">Бумага</option>*/}
        {/*  <option value="rubber">Резина</option>*/}
        {/*</select>*/}
        {/*<br />*/}
        {/*<label>Category: </label>*/}
        {/*<select*/}
        {/*  name="category"*/}
        {/*  id="category"*/}
        {/*  onChange={selectedCategoryHandler}*/}
        {/*>*/}
        {/*  <option value="bottle">Бутылка</option>*/}
        {/*  <option value="can">Банка</option>*/}
        {/*  <option value="box">Коробка/Упаковка</option>*/}
        {/*  <option value="canister">Канистра</option>*/}
        {/*  <option value="barrel">Бочка</option>*/}
        {/*</select>{" "}*/}
        <button onClick={clickHandler}>Submit</button>
      </form>
      {errorState}
    </div>
  );
}
