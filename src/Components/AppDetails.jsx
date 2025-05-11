import React, { useState } from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";
import Review from "./Review";
import { toast } from "react-toastify";

const AppDetails = () => {
  const [install, setInstall] = useState(false);
  const [allow, setAllow] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hover, setHover] = useState(0);
  const appData = useLoaderData();
  const { id } = useParams();
  const app = appData.find((app) => app.id == id);

  const handleInstallBtn = () => {
    setAllow(true);
    setInstall(!install);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!allow) {
      toast("You have to install it first", {
        position: "top-center",
        autoClose: 800,
      });
      return;
    }
    setComment(e.target.review.value);
  };

  return (
    <div className="max-w-5xl mx-auto mt-4 bg-base-100 p-4  md:p-8 lg:p-10 rounded-xl shadow-md mb-4">
      <title>AppStore | App-details</title>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex justify-start gap-5 items-center sm:w-2/3 lg:w-1/2">
          <img
            src={app.thumbnail}
            alt={app.name}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              {app.name}
            </h1>
            <p className="text-sm md:text-base text-gray-500 mb-2">
              By {app.developer}
            </p>
            <div className="text-xs md:text-sm text-gray-600 flex gap-4">
              <span>⭐ {app.rating}</span>
              <span>📥 {app.downloads}</span>
              <span>📂 {app.category}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-8 text-center">
          <button onClick={handleInstallBtn} className="btn btn-primary">
            {install ? "Uninstall" : "Install"}
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="mt-4 md:mt-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
          Description
        </h2>
        <p className="text-sm md:text-base text-gray-700">{app.description}</p>
      </div>

      {/* Features */}
      {app.features?.length > 0 && (
        <div className="mt-4 sm:mt-6">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
            Features
          </h2>
          <ul className="list-disc ml-6 text-sm md:text-base text-gray-700">
            {app.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      <form className="mt-3 sm:mt-4" onSubmit={handleSubmit}>
        <label className="font-semibold text-lg md:text-xl mr-2">
          Add a review
        </label>
        <input
          className="input mr-2 mb-4 w-full sm:w-auto"
          type="text"
          name="review"
          required
        />

        <br />
        <label className="font-semibold text-lg md:text-xl mr-2">
          Add a rating
        </label>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <FaStar
                key={index}
                size={30}
                className="cursor-pointer transition-colors"
                color={starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
              />
            );
          })}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {app.reviews?.length > 0 && (
        <div className="mt-4 md:mt-6">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
            User Reviews
          </h2>

          <div className="space-y-2">
            {app.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-base-200 text-sm md:text-base p-3 rounded-md shadow-sm my-1"
              >
                <div>
                  <FaUserCircle className="inline" size={25} />
                  <span className="mx-2 font-semibold">{review.user}</span>
                  <span className="mx-3">⭐ {review.rating}</span>
                </div>
                <p className="py-1 text-lg">{review.comment}</p>
              </div>
            ))}
          </div>

          {comment && (
            <div className="bg-base-200 text-sm md:text-base p-3 rounded-md shadow-sm my-1">
              <Review comment={comment} rating={rating}></Review>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AppDetails;
