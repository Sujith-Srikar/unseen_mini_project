import React from "react";

const ResourceCard = ({ name, hashtags, category }) => {
  return (
    <article className="flex overflow-hidden relative flex-col items-start p-1.5 mx-auto w-full text-xl font-medium text-center whitespace-nowrap rounded-xl border-solid bg-neutral-900 border-[5px] border-purple-500 border-opacity-30 min-h-[662px] max-md:mt-10 max-md:max-w-full">
      <div className="flex z-0 flex-1 self-stretch w-full rounded-xl bg-zinc-900 min-h-[508px] max-md:max-w-full" />
      <div className="flex overflow-hidden z-0 gap-2.5 items-start px-6 py-2.5 max-w-full w-[140px] max-md:px-5">
        <div className="flex flex-col items-start w-[90px]">
          <h2 className="text-2xl font-bold leading-snug text-white">{name}</h2>
          <p className="mt-4 text-zinc-500">{hashtags}</p>
          <div className="self-stretch py-2 pr-1 pl-1 mt-4 w-full bg-white min-h-[30px] rounded-[100px] text-stone-950">
            {category}
          </div>
        </div>
      </div>
      <div className="flex absolute z-0 max-w-full rounded-xl shadow-sm bg-zinc-500 bottom-[250px] inset-x-[110px] min-h-[312px] top-[100px] w-[366px]" />
    </article>
  );
};

export default ResourceCard;
