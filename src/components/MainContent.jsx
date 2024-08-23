import React, { useContext } from "react";
import ResourceCard from "./ResourceCard";
import ResourceDetails from "./ResourceDetails";
import ResourceContext from "../context/ResourceContext";
import resources from "../data/resource";

const MainContent = () => {
  const { resource } = useContext(ResourceContext);

  const convertTagsToArray = (tags) => {
    if (Array.isArray(tags)) {
      return tags;
    }
    return tags.split(",").map((tag) => tag.trim());
  };

  // if (!resource) {
  //   return <p className="text-center mt-[10vh] text-gray-500">Loading...</p>;
  // }

  return (
    <main className="mt-40 w-full max-w-[1245px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <ResourceCard
            name={resources[0].name}
            category={resources[0].category}
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <ResourceDetails
            title={resources[0].name}
            description={resources[0].description}
            category={resources[0].category}
            tags={convertTagsToArray(resources[0].tags)}
            visitlink={resources[0].link}
          />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
