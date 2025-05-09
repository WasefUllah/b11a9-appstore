import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <Link to={`/${app.id}`}>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img
            src={app.thumbnail}
            alt={app.name}
            className="object-cover w-full h-48"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {app.name}
            {app.isNew && <div className="badge badge-secondary">NEW</div>}
          </h2>
          <p className="text-sm text-gray-600">⭐ {app.rating} / 5</p>
          <p className="text-sm text-gray-600">📥 {app.downloads} downloads</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{app.category}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
