import React from "react";
import { useParams } from "react-router-dom";
import { Header, Footer, MainContent } from "../components/index";
import resources from "../data/resources.json"; // Import your JSON data

function ResourcePage() {
  const { slug } = useParams(); // Get the slug from the URL
  const resource = resources.find((res) => res.slug === slug); // Find the resource based on the slug

  if (!resource) {
    return <p className="text-white">Resource not found</p>; // Handle case where resource is not found
  }

  return (
    <div className="flex overflow-hidden flex-col items-center px-20 py-16 bg-neutral-900 max-md:px-5">
      <Header />
      <div className="mt-6 w-full border border-solid border-white border-opacity-60 min-h-[1px]" />

      {/* Pass resource data to MainContent or display it directly */}
      <MainContent resource={resource} />

      <h2 className="mt-16 font-bold leading-loose text-center text-[300px] text-zinc-500 tracking-[21px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        UNSEEN
      </h2>
      <div className="mt-2 w-screen border border-solid border-white border-opacity-60 min-h-[1px]" />
      <p className="self-start mt-16 text-4xl font-bold leading-tight text-center text-white max-md:mt-10 max-md:max-w-full">
        Crafted & Curated with Care
      </p>
      <Footer />
    </div>
  );
}

export default ResourcePage;
