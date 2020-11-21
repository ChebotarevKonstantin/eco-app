import React, { useState } from "react";

export default function Select() {
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const selectedMaterialHandler = (event) => {
    setSelectedMaterial(event.target.value);
    console.log(event.target.value);
  };

  const selectedCategoryHandler = (event) => {
    setSelectedCategory(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <label>Material: </label>
      <select name="material" id="material" onChange={selectedMaterialHandler}>
        <option value="glass">Стекло</option>
        <option value="metal">Металл</option>
        <option value="plastic">Пластик</option>
        <option value="paper">Бумага</option>
        <option value="rubber">Резина</option>
      </select>
      <br />
      <label>Category: </label>
      <select name="category" id="category" onChange={selectedCategoryHandler}>
        <option value="bottle">Бутылка</option>
        <option value="can">Банка</option>
        <option value="box">Коробка/Упаковка</option>
        <option value="canister">Канистра</option>
        <option value="barrel">Бочка</option>
      </select>{" "}
    </div>
  );
}
