import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center px-[15rem] py-8 mt-36 mx-auto max-w-full font-bold text-center min-h-[375px] w-full max-w-[882px] max-md:mt-10">
      <h2 className="text-6xl bg-clip-text leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Assorted Resources for developers and designers and more
      </h2>
      <p className="mt-10 text-2xl leading-9 text-stone-300 max-md:max-w-full">
        Explore curated and handpicked goodies that enhance your workflow and
        cultivate your growth as a developer and designer.
      </p>
    </section>
  );
};

export default Hero;