import React, { useState, useRef, useEffect } from "react";

const SelectKey = ({ chooseKey, currentKey }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const options = ["C","C#","D","Eb","E","F","F#","G","Ab","A","Bb","B"];

  function handleSelect(value) {
    chooseKey(value);
    setOpen(false);
  }

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
      <label
        htmlFor="key-selector"
        className="text-sm font-medium block mb-2 mt-4"
      >
        Select the key
      </label>

      {/* Hidden native select for accessibility */}
      <select
        id="key-selector"
        value={currentKey}
        onChange={(e) => handleSelect(e.target.value)}
        className="hidden"
      >
        <option value="" disabled>Select Key</option>
        {options.map((op) => (
          <option key={op} value={op}>{op}</option>
        ))}
      </select>

      {/* Custom trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          w-full flex items-center justify-between
          rounded-xl bg-white
          px-4 py-3 text-sm font-semibold border-2 border-cyan-200 focus:ring-cyan-400 outline-none
          focus:border-cyan-400
          transition
        "
      >
        {currentKey || "Select Key"}
        <span
          className={`transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>

      {/* Dropdown card */}
      {open && (
        <div
          className="
            absolute left-0 right-0 mt-2
            bg-white shadow-xl rounded-xl
            border border-gray-200
            py-2 z-20
            animate-[fadeIn_0.15s_ease-out]
          "
        >
          {options.map((op) => (
            <div
              key={op}
              onClick={() => handleSelect(op)}
              className="
                px-4 py-2 cursor-pointer text-sm
                hover:bg-gray-100
                transition
              "
            >
              {op}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectKey;
