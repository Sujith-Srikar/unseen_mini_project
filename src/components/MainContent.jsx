import React from "react";
import { useParams } from "react-router-dom";
import ResourceCard from "./ResourceCard";
import ResourceDetails from "./ResourceDetails";
import resources from "../data/resources.json"; // Import your JSON data

const MainContent = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const resource = resources.find((res) => res.slug === slug); // Find the resource based on the slug

  const convertTagsToArray = (tags) => {
    if (Array.isArray(tags)) {
      return tags;
    }
    return tags.split(",").map((tag) => tag.trim());
  };

  if (!resource) {
    return (
      <p className="text-center mt-[10vh] text-gray-500">
        Resource not found...
      </p>
    );
  }

  return (
    <main className="mt-40 w-full max-w-[1245px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <ResourceCard
            name={resource.name}
            category={resource.category}
            image={resource.image}
            alt={resource.alt}
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <ResourceDetails
            title={resource.name}
            description={resource.description}
            category={resource.category}
            tags={convertTagsToArray(resource.tags)}
            visitlink={resource.link}
          />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
