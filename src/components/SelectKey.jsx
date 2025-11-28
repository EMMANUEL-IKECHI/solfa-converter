import React from "react";

const SelectKey = ({chooseKey, currentKey }) => {

  function handleChange(e) {
    chooseKey(e.target.value);
  }

  return (
    <div className="flex items-center">
      <label htmlFor="key-selector">Select the key: </label>
      <select
        name="key"
        id="key-selector"
        value={currentKey}
        onChange={handleChange}
        className="px-2 flex"
      >
        <option value=""> Select Key </option>
        <option value="C">C</option>
        <option value="C#">C#</option>
        <option value="D">D</option>
        <option value="Eb">Eb</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="F#">F#</option>
        <option value="G">G</option>
        <option value="Ab">Ab</option>
        <option value="A">A</option>
        <option value="Bb">Bb</option>
        <option value="B">B</option>
      </select>
    </div>
  );
};

export default SelectKey;
