import { Info, MessageCircleQuestionMark, Music } from "lucide-react";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-6 md:px-14 px-5 mb-3">
      <div>
        <div className="flex gap-4 items-center">
          <div className="p-3 rounded-2xl shadow-lg bg-linear-to-br from-cyan-500 to-blue-600">
            <Music className="text-white"/>
          </div>
          <h2 className=" text-4xl font-bold bg-linear-to-r text-transparent from-cyan-600 to-blue-600 bg-clip-text border-4  ">Solfa Converter</h2>
        </div>
        <p className="mt-2 text-gray-600">Transform solfege syllables into letter notes instantly</p>
      </div>
        <ul className="flex gap-4 text-sm">
        <li className="rounded-full bg-white p-2.5 shadow">
          <a className="hover:text-blue-500 text-cyan-600 transition" href="#">
            <Info className="w-5 h-5" />
          </a>
        </li>
        <li className="rounded-full bg-white p-2.5 shadow">
          <a className="hover:text-blue-500  text-cyan-600 transition" href="#">
            <MessageCircleQuestionMark className="w-5 h-5" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
