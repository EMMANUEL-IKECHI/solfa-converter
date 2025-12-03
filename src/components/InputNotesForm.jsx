import React from "react";
import useInput from "../hooks/useInput";
import SelectKey from "./SelectKey";

const InputNotesForm = ({ addNotes, chooseKey, currentKey }) => {
  const input = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNotes(input.value);
  };

  const viewportWidth = window.visualViewport.width;

  return (
    <form action="" onSubmit={handleSubmit} className="grid md:max-w-7/12 w-full gap-5">
      {viewportWidth < 330 ? 
      <input
        name=""
        id=""
        // cols="30"
        // rows="1"
        placeholder={`ti, do re mi fa so la ti do'`}
        className="p-6 border"
        value={input.value}
        onChange={input.handleChange}
      />
      : <input
        name=""
        id=""
        // cols="30"
        // rows="4"
        placeholder={`ti, do re mi fa so la ti do'`}
        className="p-6 border border-dashed  rounded-md"
        value={input.value} 
        onChange={input.handleChange}
      />}
      

      <SelectKey chooseKey={chooseKey} currentKey={currentKey} />

      <input
        type="submit"
        value="Convert"
        className="bg-blue-400 p-2 rounded-lg text-white"
      />

      <button onClick={input.reset} className="border border-blue-400 p-2 rounded-md text-blue-500" >Reset</button>
    </form>
  );
};

export default InputNotesForm;
