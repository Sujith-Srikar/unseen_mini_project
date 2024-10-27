import React, { useState } from "react";

const FilterTabs = () => {
  const tabs = [
    "All",
    "Development",
    "Tools",
    "Yt Channels",
    "Articles",
    "Design",
  ];

  // State to keep track of the active tab index
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="flex justify-center mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <ul className="menu menu-horizontal rounded-box text-xl font-semibold">
        {tabs.map((tab, index) => (
          <li key={index} className="m-1">
            <div
              href="#"
              className={`px-8 py-6 whitespace-nowrap rounded-xl border border-solid border-neutral-700 min-h-[79px] max-md:px-5 ${
                index === activeTabIndex
                  ? "bg-white text-black"
                  : "bg-neutral-900 text-white"
              }`}
              onClick={(e) => {
                // e.preventDefault(); // Prevent the default anchor behavior
                setActiveTabIndex(index); // Set the active tab on click
              }}
            >
              {tab}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterTabs;
