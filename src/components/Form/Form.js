import React, { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const inputHandler = (event) => {
    setText(event.target.value);
  };

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
      <form onChange={inputHandler}>
        <label>Barcode: </label>
        <input type="text" name="barcode" /> <br />
        <label>Material: </label>
        <select
          name="material"
          id="material"
          onChange={selectedMaterialHandler}
        >
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
        </select>
        <br />
        <label>Category: </label>
        <select
          name="category"
          id="category"
          onChange={selectedCategoryHandler}
        >
          <option value="value4">Value 4</option>
          <option value="value5">Value 5</option>
          <option value="value6">Value 6</option>
        </select>{" "}
        <br />
        <button onClick={null}>Submit</button>
      </form>
    </div>
  );
}
