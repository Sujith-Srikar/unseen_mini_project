import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ResourceContext from "../context/ResourceContext";

const Card = ({ name, tags, image, alt }) => {
  const navigate = useNavigate();
  const { resource, setResource } = useContext(ResourceContext);

  const handleGoClick = () => {
    console.log("Current resource context before setting:", resource);

    // Log the resource data being set
    console.log("Setting resource:", { name, tags, image, alt });

    // Set the resource
    setResource({ name, tags, image, alt });

    // Log current state after setting
    console.log("Current resource context after setting:", resource);

    // Navigate to the resource page
    navigate("/resource-page");
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
          <button className="btn btn-primary btn-sm" onClick={handleGoClick}>
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
