import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-between items-center py-3">
      <div>
        <img src={logo} className="w-16 rounded-full" alt="" />
      </div>
      <div className="flex justify-center items-center gap-5">
        <NavLink to="/">App</NavLink>
        <NavLink to="/myProfile">My profile</NavLink>
      </div>
      <div>
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
