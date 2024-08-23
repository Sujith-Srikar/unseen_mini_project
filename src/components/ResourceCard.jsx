import React from "react";

const ResourceCard = ({ name, category, image, alt }) => {
  return (
    <article className="flex overflow-hidden relative flex-col items-start p-1.5 mx-auto w-full text-xl font-medium text-center whitespace-nowrap rounded-xl border-solid bg-neutral-900 border-[5px] border-purple-500 border-opacity-30 min-h-[662px] max-md:mt-10 max-md:max-w-full">
      <div className="flex z-0 flex-1 self-stretch w-full rounded-xl bg-zinc-900 min-h-[508px] max-md:max-w-full" />
      <div className="flex overflow-hidden z-0 gap-2.5 items-start px-6 py-2.5 max-w-full w-[20vw] max-md:px-5">
        <div className="flex flex-col items-start w-full">
          <h2 className="text-2xl font-bold leading-snug text-white">{name}</h2>
          <div className="self-stretch py-2 px-4 mt-4 bg-white rounded-[100px] text-stone-950 inline-block">
            {category}
          </div>
        </div>
      </div>
      <img
        src={image}
        alt={alt}
        className="flex absolute z-0 max-w-full rounded-xl shadow-sm bottom-[250px] inset-x-[110px] min-h-[312px] top-[100px] w-[366px] object-cover"
      />
    </article>
  );
};

export default ResourceCard;
