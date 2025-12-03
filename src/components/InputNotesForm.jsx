import React from "react";
import useInput from "../hooks/useInput";
import SelectKey from "./SelectKey";

const InputNotesForm = ({ addNotes, chooseKey, currentKey }) => {
  const input = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNotes(input.value);
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="grid w-full max-w-lg gap-5"
>
  <input
    placeholder="ti, do re mi fa so la ti do'"
    className="
      p-4 border border-dashed rounded-md
      w-full
    "
    value={input.value}
    onChange={input.handleChange}
  />

  <SelectKey chooseKey={chooseKey} currentKey={currentKey} />

  <input
    type="submit"
    value="Convert"
    className="bg-blue-500 p-2 rounded-lg text-white"
  />

  <button
    type="button"
    onClick={input.reset}
    className="border border-blue-400 p-2 rounded-md text-blue-500"
  >
    Reset
  </button>
</form>

  );
};

export default InputNotesForm;
