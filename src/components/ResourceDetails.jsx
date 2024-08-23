import React from "react";

const ResourceDetails = ({ title, description, category, tags, visitlink }) => {
  return (
    <article className="flex flex-col self-stretch my-auto w-full text-center max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[502px]">
        <h2 className="self-start text-4xl font-bold leading-tight text-white">
          {title}
        </h2>
        <p className="mt-8 text-4xl text-white leading-[50px] max-md:max-w-full">
          {description}
        </p>
      </div>
      <a
        href={visitlink}
        target="_blank"
        className="self-start px-6 py-2 mt-14 text-2xl font-bold leading-snug text-black rounded-2xl bg-zinc-100 max-md:px-5 max-md:mt-10"
      >
        Visit Source
      </a>
      <div className="shrink-0 mt-6 border border-solid border-white border-opacity-60 h-[3px] max-md:max-w-full" />
      <div className="flex gap-5 justify-between mt-5 max-w-full text-base leading-snug text-white whitespace-nowrap w-[401px] max-md:ml-2">
        <div>Category</div>
        <div>{category}</div>
      </div>
      <div className="shrink-0 mt-5 border border-solid border-white border-opacity-60 h-[3px] max-md:max-w-full" />
      <div className="flex flex-wrap gap-5 justify-between self-end mt-4 max-w-full text-base leading-snug text-white w-[588px]">
        <div className="self-start">Tags</div>
        <div className="flex flex-col">
          {tags.map((tag, index) => (
            <React.Fragment key={index}>
              <div className="self-start">{tag}</div>
              {index < tags.length - 1 && (
                <div className="shrink-0 mt-2 h-0.5 border border-solid border-white border-opacity-60" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ResourceDetails;