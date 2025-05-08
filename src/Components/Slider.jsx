import React from "react";

const Slider = ({ app }) => {
  console.log(app);

  return (
    <div className="carousel   carousel-center bg-neutral rounded-box space-x-4 p-4">
      {app.map((app, index) => (
        <div
          key={index}
          className="carousel-item bg-base-100 rounded-xl w-2/3 shadow-md flex items-center gap-4 p-4 "
        >
          <img
            src={app.thumbnail}
            alt={app.name}
            className="w-72 h-72 object-contain rounded-lg"
          />
          <div className="">
            <h3 className=" font-bold text-4xl">{app.name}</h3>
            <p className="text-lg font-semibold text-gray-500">
              {app.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
