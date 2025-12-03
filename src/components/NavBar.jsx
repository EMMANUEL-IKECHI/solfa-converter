import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between py-8 px-4 md:px-10">
      <h2 className="text-2xl font-semibold">Solfa Converter</h2>
      <ul className="flex gap-4 text-sm">
        <li>
          <a className="hover:text-blue-500 transition" href="#">
            About
          </a>
        </li>
        <li>
          <a className="hover:text-blue-500 transition" href="#">
            Help
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
