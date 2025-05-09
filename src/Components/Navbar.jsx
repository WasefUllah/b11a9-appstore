import React, { use } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { userInfo, logOut } = use(AuthContext);
  const handleLogoutBtn = () => {
    logOut();
  };
  console.log(userInfo);
  return (
    <div className="w-11/12 mx-auto flex justify-between items-center py-3">
      <div>
        <img src={logo} className="w-16 rounded-full" alt="" />
      </div>
      <div className="flex justify-center items-center gap-5">
        <NavLink to="/">App</NavLink>
        {userInfo && <NavLink to="/myProfile">My profile</NavLink>}
      </div>
      <div>
        {userInfo ? (
          
          <button className="btn btn-primary" onClick={handleLogoutBtn}>
          Logout
        </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
      
    </div>
  );
};

export default Navbar;
