import React from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
const Navbar = () => {
  return (
    <>
      <nav className="bg-[#C5BEB4] w-full h-[110px] flex items-center justify-between px-8 border-b-2 border-gray-700">
        <h1 className="text-2xl font-NewLight">Amsterdam, NL</h1>
        <img
          src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/5f7f87c8b81a6e7a214312f0_header.svg"
          alt="logo"
          className="h-[40px]"
        />

        <HiOutlineMenuAlt4 className="text-2xl" />
      </nav>
    </>
  );
};

export default Navbar;
