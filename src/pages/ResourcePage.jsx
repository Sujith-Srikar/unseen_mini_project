import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header, Footer, MainContent } from "../components/index";

function ResourcePage() {
  const { slug } = useParams();
  const [resource, setResource] = useState(null);

  useEffect(() => {
    fetch("/data/resources.json")
      .then((response) => response.json())
      .then((data) => {
        const foundResource = data.find((res) => res.slug === slug);
        setResource(foundResource);
      });
  }, [slug]);

  if (!resource) {
    return <p className="text-white min-h-screen flex items-center justify-center">Loading...</p>;
  }

  return (
    <div className="flex overflow-hidden flex-col items-center px-20 py-16 bg-neutral-900 max-md:px-5">
      <Header />
      <div className="mt-6 w-full border border-solid border-white border-opacity-60 min-h-[1px]" />

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
