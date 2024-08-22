import React, { useContext } from "react";
import ResourceCard from "./ResourceCard";
import ResourceDetails from "./ResourceDetails";
import ResourceContext from "../context/ResourceContext";

const MainContent = () => {
  const { resource } = useContext(ResourceContext);

  if (!resource) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <main className="mt-40 w-full max-w-[1245px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <ResourceCard name="Name" hashtags="HashTags" category="Category" />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <ResourceDetails
            title={resource.title}
            description="loreum loreum loreum loerum loerum loerum loreum loreum loreum loerum loerum loerumloreum loreum loreum loerum loerum loerum"
            category="Typography"
            tags={resource.tags}
          />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
