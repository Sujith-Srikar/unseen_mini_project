import React from "react";
import Card from "./Card";

const ResourceGrid = () => {
 const resources = [
   {
     name: "Aceternity-UI",
     tags: "Web, Animation",
     image: "../../public/assests/aceternity-ui.jpg",
     alt: "Aceternity-ui",
   },
   {
     name: "Awwwards",
     tags: "Frontend, UI/UX",
     image: "../../public/assests/awwwards.jpg",
     alt: "awwwards",
   },
   {
     name: "DSA Patterns",
     tags: "DSA, Articles",
     image: "../../public/assests/DSA-Patterns.jpg",
     alt: "DSA-Patterns",
   },
   {
     name: "Blender",
     tags: "Tools, Animation",
     image: "../../public/assests/Blender.jpg",
     alt: "Blender",
   },
   {
     name: "Uncutwtf",
     tags: "Typography",
     image: "../../public/assests/uncutwtf.jpg",
     alt: "Uncutwtf",
   },
   {
     name: "Framer Motion",
     tags: "Technologies",
     image: "../../public/assests/framermotion.jpg",
     alt: "Framer-Motion",
   },
 ];



  return (
    <div>
      <section className="flex flex-wrap justify-center gap-8 items-center mt-44 max-md:mt-10">
        {resources.map((resource, index) => (
          <Card key={index} name={resource.name} tags={resource.tags} image={resource.image} alt={resource.alt} />
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