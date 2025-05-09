import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
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
        <Link to={"/auth/login"} className="btn btn-primary">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
