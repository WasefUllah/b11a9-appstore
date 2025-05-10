import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { userInfo, updateUser } = useContext(AuthContext);

  // Local states to manage input values
  const [displayName, setDisplayName] = useState(userInfo?.displayName || "");
  const [photoURL, setPhotoURL] = useState(userInfo?.photoURL || "");

  useEffect(() => {
    setDisplayName(userInfo?.displayName || "");
    setPhotoURL(userInfo?.photoURL || "");
  }, [userInfo]);
  console.log("before", userInfo);
  const handleUpdate = (e) => {
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    console.log("after", userInfo);
    setDisplayName(displayName);
    setPhotoURL(photoURL);
    updateUser({ displayName, photoURL })
      .then(() => {
        toast("Profile updated successfully!", {
          position: "top-center",
          autoClose: 800,
        });
      })
      .catch((err) => {
        console.error(err);
        toast("Failed to update profile", {
          position: "top-center",
          autoClose: 800,
        });
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-base-100 p-6 rounded shadow">
      <title>AppStore | My-profile</title>

      <h2 className="text-xl font-bold mb-4">My Profile</h2>

      <div className="flex flex-col items-center mb-4">
        <img
          src={photoURL}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-2"
        />
        <p className="mt-2 font-semibold">{displayName}</p>
        <p className="text-sm text-gray-500">{userInfo?.email}</p>
      </div>

      <h1 className="text-2xl font-bold pb-3">Update your profile:</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="label">Display Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="name"
            required
          />
        </div>

        <div>
          <label className="label">Photo URL</label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="photo"
            required
          />
        </div>

        <button className="btn btn-primary w-full" type="submit">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
