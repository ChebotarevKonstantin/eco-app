import React, { useState } from "react";
import style from "./Select.module.css";

export default function Select({ data }) {
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [errorState, setErrorState] = useState(false);

  const selectedMaterialHandler = (event) => {
    setSelectedMaterial(event.target.value);
  };

  const selectedCategoryHandler = (event) => {
    setSelectedCategory(event.target.value);
  };

  const clickHandler = () => {
    if (selectedMaterial && selectedCategory) {
      const obj = {
        barcode: data,
        material: selectedMaterial,
        category: selectedCategory,
      };

      try {
        fetch("http://192.168.90.134:8080/addtare/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });
      } catch (e) {
        setErrorState(true);
      }
    }
  };

  return (
    <div>
      <div>
        <select
          name="material"
          id={style.material}
          onChange={selectedMaterialHandler}
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            -- Материал --
          </option>
          <option value="glass">Стекло</option>
          <option value="metal">Металл</option>
          <option value="plastic">Пластик</option>
          <option value="paper">Бумага</option>
          <option value="rubber">Резина</option>
        </select>
        <select
          name="category"
          id={style.category}
          onChange={selectedCategoryHandler}
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            -- Категория --
          </option>
          <option value="bottle">Бутылка</option>
          <option value="can">Банка</option>
          <option value="box">Коробка/Упаковка</option>
          <option value="canister">Канистра</option>
          <option value="barrel">Бочка</option>
        </select>
      </div>
      <br />
      <button
        type="button"
        className="btn btn-success"
        onClick={clickHandler}
        style={{ marginBottom: "10px" }}
      >
        Добавить
      </button>
    </div>
  );
}
