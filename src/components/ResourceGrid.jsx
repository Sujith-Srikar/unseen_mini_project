import React from "react";
import Card from "./Card";
import resources from "../data/resources.json"; // Import the JSON file

const ResourceGrid = () => {
  return (
    <div>
      <section className="flex flex-wrap justify-center gap-8 items-center mt-44 max-md:mt-10">
        {resources.map((resource, index) => (
          <Card
            key={index}
            name={resource.name}
            tags={resource.tags}
            image={resource.image}
            alt={resource.alt}
            slug={resource.slug}
          />
        ))}
      </section>

      <section className="flex justify-center mt-12">
        <div className="join">
          <input
            className="join-item btn btn-square w-10 h-10"
            type="radio"
            name="options"
            aria-label="1"
            defaultChecked
          />
          <input
            className="join-item btn btn-square w-10 h-10"
            type="radio"
            name="options"
            aria-label="2"
          />
          <input
            className="join-item btn btn-square w-10 h-10"
            type="radio"
            name="options"
            aria-label="3"
          />
          <input
            className="join-item btn btn-square w-10 h-10"
            type="radio"
            name="options"
            aria-label="4"
          />
        </div>
      </section>
    </div>
  );
};

export default ResourceGrid;
