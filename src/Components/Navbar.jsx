import React, { use } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "./Loading";

const Navbar = () => {
  const { userInfo, logOut, loading } = use(AuthContext);
  const handleLogoutBtn = () => {
    logOut();
  };

  console.log("navbar", userInfo);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full mx-auto flex justify-between items-center py-3 px-1 sm:px-8 lg:px-16">
      <div>
        <Link to={"/"}>
          <img src={logo} className="lg:w-16 w-9 rounded-full" alt="Logo" />
        </Link>
      </div>
      <div className="flex justify-center items-center lg:gap-5 gap-1.5 text-sm sm:text-base">
        <NavLink to="/" activeClassName="text-blue-500">
          App
        </NavLink>
        <NavLink to="/blogs" activeClassName="text-blue-500">
          Blogs
        </NavLink>
        {userInfo && (
          <NavLink to="/myProfile" activeClassName="text-blue-500">
            My Profile
          </NavLink>
        )}
      </div>
      <div className="flex justify-center items-center lg:gap-3 gap-1">
        {userInfo && (
          <div
            className="tooltip tooltip-bottom"
            data-tip={`${userInfo?.displayName}`}
          >
            <img
              className="lg:w-12 lg:h-12 w-9 h-9 rounded-full object-cover"
              src={userInfo?.photoURL}
              alt="User Profile"
            />
          </div>
        )}

        {userInfo ? (
          <button className="btn btn-primary" onClick={handleLogoutBtn}>
            Logout
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary btn-sm lg:btn-lg">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
