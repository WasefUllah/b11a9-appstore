import React from "react";
import img from "../assets/error.jpg";
import { NavLink } from "react-router";
const ErrorComponent = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center items-center gap-6">

        <title>Error!</title>
   
      <img src={img} alt="" className="rounded-lg w-[400px] h-[400px]" />
      <h1 className="text-4xl text-red-600 ">404 - page not found</h1>
      <p>Opss!! the page you are looking for doesn't exists</p>

      <NavLink to={"/"}>
        {" "}
        <button className="btn btn-primary text-white bg-green-600 border-none">
          Go back to Home
        </button>
      </NavLink>
    </div>
  );
};

export default ErrorComponent;
