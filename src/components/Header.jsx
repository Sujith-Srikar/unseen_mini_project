import React from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = ()=>{
    navigate("/");
  }

  return (
    <header className="flex flex-wrap gap-5 justify-between w-full max-w-[1244px] max-md:max-w-full">
      <button className="text-6xl text-white max-md:text-4xl" onClick={handleLogoClick} >UNSEEN</button>
      <nav className="flex gap-9 my-auto font-bold">
        <a href="#about" className="grow text-3xl leading-tight text-white">
          About
        </a>
        <a
          href="#submit"
          className="grow px-9 py-2 text-2xl leading-snug text-center text-black bg-zinc-100 rounded-[50px] w-fit max-md:px-5"
        >
          Submit Resource
        </a>
      </nav>
    </header>
  );
};

export default Header;
