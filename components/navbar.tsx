"use client";

import { useState } from "react";

const NavItem = ({ children }: { children: React.ReactNode }) => (
  <li className="cursor-pointer select-none  transition-colors duration-300 hover:text-primary text-gray-300">
    {children}
  </li>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="shadow-xs sm:border-1 fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-gray-600/10 bg-opacity-60 px-6 py-4 shadow-inner shadow-zinc-800/10 backdrop-blur-md sm:left-4 sm:right-4 sm:top-4 sm:rounded-full">
        <div className="flex w-full items-center justify-start sm:justify-center">
          {/* Subtle Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-gray-200 focus:outline-none sm:hidden"
          >
            <div className="space-y-1">
              <span className="block h-[2px] w-4 rounded-full bg-gradient-to-r from-gray-200/70 to-gray-200/60"></span>
              <span className="block h-[3px] w-5 rounded-full bg-gradient-to-r from-gray-200/70 to-gray-200/60"></span>
              <span className="block h-[4px] w-6 rounded-full bg-gradient-to-r from-gray-200/70 to-gray-200/60"></span>
            </div>
          </button>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-8 sm:flex">
            <NavItem>Home</NavItem>
            <NavItem>Tech stack</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Contact</NavItem>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-1 fixed mx-4 mt-16 w-[150px] rounded-xl border-white/20 bg-gray-900/10 bg-opacity-80 p-6 shadow-lg backdrop-blur-md sm:hidden">
          <ul className="flex flex-col items-center gap-4 text-base text-gray-200">
            <NavItem>Home</NavItem>
            <NavItem>Tech stack</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Contact</NavItem>
          </ul>
        </div>
      )}
    </>
  );
};
