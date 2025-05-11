import React from "react";
import img from "../assets/error.jpg";
import { NavLink } from "react-router"; // Ensure correct import of NavLink

const ErrorComponent = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center items-center gap-6 py-10">
      <title>Error!</title>

      <img
        src={img}
        alt="Error Image"
        className="rounded-lg w-[90%] sm:w-[400px] h-auto"
      />

      <h1 className="text-4xl text-red-600 font-semibold">
        404 - Page Not Found
      </h1>

      <p className="text-lg text-center text-gray-700">
        Oops! The page you are looking for doesn't exist.
      </p>

      <NavLink to={"/"}>
        <button className="btn btn-primary text-white bg-green-600 border-none py-2 px-6 rounded-md mt-4 hover:bg-green-700 transition-all">
          Go back to Home
        </button>
      </NavLink>
    </div>
  );
};

export default ErrorComponent;
