import React, { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import SelectKey from "./SelectKey";
import { Music, RotateCcw, Sparkles } from "lucide-react";

const InputNotesForm = ({ addNotes, chooseKey, currentKey }) => {
  const input = useInput("");
  const [resetClicked, setResetClicked] = useState(false);

  useEffect(() => {
    const handlekeyDown = (e) => {
      const formInput = document.querySelector("#form-input");
      if (document.activeElement !== formInput && e.key.length === 1) {
        formInput.focus();
      }
    };

    window.addEventListener("keydown", handlekeyDown);

    return () => window.removeEventListener("keydown", handlekeyDown);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNotes(input.value);
  };

  return (
    <form className="flex-col w-full bg-white/70 gap-2 p-10 rounded-3xl shadow-lg backdrop-blur-xl border-white/50">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-cyan-600" />
          <label htmlFor="form-input" className="font-semibold text-xl">
            Enter Solfa Notes
          </label>
        </div>
        <textarea
          id="form-input"
          placeholder="ti do re mi fa so la ti do"
          className=" bg-white/80 border-cyan-200 focus:border-cyan-400 outline-none resize-none p-4 border-2 rounded-2xl w-full min-h-40"
          value={input.value}
          onChange={input.handleChange}
        />
      </div>

      <SelectKey chooseKey={chooseKey} currentKey={currentKey} />

      <div className="flex items-center justify-between gap-3 mt-4">
        <button
          onClick={handleSubmit}
          className="w-full bg-linear-to-r from-cyan-500 to-blue-500 p-4 rounded-2xl font-semibold text-white hover:cursor-pointer flex justify-center items-center gap-2"
        >
          <Music className="w-5 h-5" /> Convert
        </button>

        <button
          type="button"
          onClick={input.reset}
          className="hover:cursor-pointer bg-white/80 border-gray-300 border-2 py-4 px-6 rounded-2xl w-fit"
        >
          <RotateCcw className="h-5 w-5 text-gray-700" onClick={() => {setResetClicked(!resetClicked)}}/>
        </button>
      </div>
    </form>
  );
};

export default InputNotesForm;
