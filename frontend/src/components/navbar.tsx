import React from "react";


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b border-gray-200">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Fonda Safaja</a>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Inici</a></li>
          <li><a>Menú</a></li>
          <li><a>Contacte</a></li>
        </ul>
      </div>

      <div className="flex-none lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Inici</a></li>
            <li><a>Menú</a></li>
            <li><a>Contacte</a></li>
          </ul>
        </div>
      </div>
      <button className="btn btn-primary">Prova DaisyUI</button>

    </div>
  );
};

export default Navbar;
