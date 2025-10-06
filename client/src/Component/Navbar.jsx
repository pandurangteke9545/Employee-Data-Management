import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-300 shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Employee<span className="text-blue-600">MS</span>
      </h1>
      <ul className="flex space-x-6 text-lg font-medium">
        <li>
          <Link to="/"  className="hover:text-blue-600 hover:bg-white hover:rounded-2xl p-2 transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/addemployee" className="hover:text-blue-600 hover:bg-white hover:rounded-2xl p-2 transition duration-300">
            Add Employee
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

