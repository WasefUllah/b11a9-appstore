import React from "react";

const Slider = ({ app }) => {
  return (
    <div className="carousel carousel-center bg-neutral w-full rounded-box space-x-4 p-2 md:p-3 lg:p-4">
      {app.map((app, index) => (
        <div
          key={index}
          className="carousel-item bg-base-100 rounded-xl w-full sm:w-4/5 md:w-2/3 shadow-md flex flex-col md:flex-row items-center gap-4 p-3 sm:p-4"
        >
          <img
            src={app.thumbnail}
            alt={app.name}
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-contain rounded-lg"
          />
          <div className="text-center md:text-left">
            <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl">{app.name}</h3>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-500 mt-1 sm:mt-2">
              {app.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
