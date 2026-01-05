import { ClipboardCopyIcon, Copy, Music } from "lucide-react";
import React, { useState } from "react";

const DisplayNotes = ({ notes }) => {
  let formattedNotes = (
    <>
      <h2 className="text-center w-full text-gray-700 font-medium text-sm mb-3">
        Letter Notes
      </h2>
      <div className="text-3xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent tracking-wider">
        {notes}
      </div>
    </>
  );
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(notes);
    // alert(`Copied notes (${notes}) to clip board`);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const placeholderText = (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="bg-linear-to-br from-cyan-200 to-blue-200 w-fit p-5 rounded-full">
        <Music  className="text-cyan-400 w-10 h-10" />
      </div>
      <div>
        <h3 className="font-semibold mb-3 text-gray-700">Enter solfege notes and press Convert</h3>
        <p className="text-gray-400 text-sm">Your letter notes will appear here</p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full gap-5 bg-white/70 backdrop-blur-xl border-white/50 p-10 rounded-3xl shadow-2xl">
      <div className="flex w-full justify-between items-center">
        <h2 className="font-semibold text-xl">Conversion Result</h2>
        {notes ? (
          <div
            onClick={handleCopy}
            className=" flex items-center gap-2 rounded-xl px-4 py-2 bg-cyan-100 text-cyan-600 hover:cursor-pointer"
          >
            <Copy className="w-4 h-4" />{" "}
            <p className="font-medium text-sm">
              {!copied ? "Copy" : "Copied!"}
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="items-center justify-center bg-linear-to-r from-cyan-50 to-blue-50/70 rounded-2xl p-8 min-h-40 backdrop-blur-2xl opacity-80 border-cyan-100 border-2">
        <p className="text-center">
          {notes && notes.trim() ? formattedNotes : placeholderText}
        </p>
      </div>

      <footer className="rounded-2xl bg-linear-to-r from-cyan-50 to-blue-50/70 backdrop-blur-2xl border border-cyan-100 py-5 text-center text-gray-500 text-sm">
        <span className="font-semibold text-cyan-700">Legend:</span> do re mi fa
        so la ti do
      </footer>
    </div>
  );
};

export default DisplayNotes;
