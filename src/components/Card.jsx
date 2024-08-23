import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ResourceContext from "../context/ResourceContext";

const Card = ({ name, tags, image, alt, slug }) => {
  const navigate = useNavigate();
  const { setResource } = useContext(ResourceContext);

  const handleGoClick = () => {
    // Set the resource in context
    setResource({ name, tags, image, alt });

    // Navigate to the resource page with the slug
    navigate(`/resource/${slug}`);
  };

  return (
    <div className="card bg-base-100 w-96 h-[45vh] shadow-xl">
      <figure className="h-41 overflow-hidden">
        <img src={image} alt={alt} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg">{name}</h2>
        <p className="text-sm text-gray-600">{tags}</p>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary btn-sm" onClick={handleGoClick}>
            Go
          </button> */}
          <a target="_blank"
            href={`/resource/${slug}`}
            className="btn btn-primary btn-sm"
          >
            Go
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
