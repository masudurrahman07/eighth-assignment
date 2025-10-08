import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'


export default function Navbar() {
  return (
    <nav className=" text-white px-6 py-4 flex flex-col md:flex-row items-center justify-between shadow-md gap-4 md:gap-0">
      
      <NavLink to="/" className="text-2xl font-bold text-purple-500 flex">
      <img className="w-8 h-8 object-contain" src={logo} alt="" />
        <span className="text-2xl font-bold text-purple-500">HERO.IO</span>
      </NavLink>

      
      <div className="flex gap-6">
        <NavLink  to="/"  className={({ isActive }) =>  `hover:text-purple-500 transition-colors duration-20 ${isActive ? "text-purple-600 font-semibold" : "text-black"}`}>
          Home
        </NavLink>

        <NavLink   to="/apps"   className={({ isActive }) =>  `hover:text-purple-500 transition-colors duration-20 ${isActive ? "text-purple-600 font-semibold" : "text-black"}`}>
          Apps
        </NavLink>

        <NavLink to="/installation"className={({ isActive }) =>  `hover:text-purple-500 transition-colors duration-20 ${isActive ? "text-purple-600 font-semibold" : "text-black"}`}>
          Installation
        </NavLink>
      </div>

      
     <a href="https://github.com/masudurrahman07" target="_blank" rel="noopener noreferrer" className="text-white px-4 py-2 rounded-lg text-sm font-medium" style={{ background: "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)", borderRadius: "4px", }} ><i className="fa-brands fa-github"></i> Contribute </a>
    </nav>
  );
}
