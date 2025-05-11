import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Review = ({ comment, rating }) => {
  const { userInfo } = use(AuthContext);

  return (
    <div>
      <div>
        <img
          src={userInfo.photoURL}
          className="w-8 h-8 object-cover rounded-full inline"
          alt=""
        />
        <span className="mx-2 font-semibold">{userInfo.displayName}</span>
        <span className="mx-3">⭐ {rating}</span>
      </div>
      <p className="py-1 text-sm sm:text-base md:text-lg">{comment}</p>
    </div>
  );
};

export default Review;
