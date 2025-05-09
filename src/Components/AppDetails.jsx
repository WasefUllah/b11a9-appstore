import React from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";

const AppDetails = () => {
  const appData = useLoaderData();
  const { id } = useParams();
  const app = appData.find((app) => app.id == id);

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-base-100 p-6 rounded-xl shadow-md mb-4">
      
      <div className="flex items-start gap-6">
        <img
          src={app.thumbnail}
          alt={app.name}
          className="w-24 h-24 object-cover rounded-lg "
        />
        <div>
          <h1 className="text-3xl font-bold">{app.name}</h1>
          <p className="text-gray-500 mb-2">By {app.developer}</p>
          <div className="text-sm text-gray-600 flex gap-4">
            <span>⭐ {app.rating}</span>
            <span>📥 {app.downloads}</span>
            <span>📂 {app.category}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{app.description}</p>
      </div>

      {/* Features */}
      {app.features?.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Features</h2>
          <ul className="list-disc ml-6 text-gray-700">
            {app.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Reviews */}
      {/* {app.reviews?.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">User Reviews</h2>
          <div className="space-y-2">
            {app.reviews.map((review, idx) => (
              <p
                key={idx}
                className="bg-base-200 text-sm p-3 rounded-md shadow-sm"
              >
                {review}
              </p>
            ))}
          </div>
        </div>
      )} */}

      {/* Install Button */}
      <div className="mt-8 text-center">
        <button className="btn btn-primary">Install</button>
      </div>
    </div>
  );
};

export default AppDetails;
