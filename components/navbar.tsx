"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavItem = ({ children }: { children: React.ReactNode }) => (
  <li className="cursor-pointer select-none transition duration-300 hover:text-gray-200 hover:underline hover:underline-offset-2">
    {children}
  </li>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center sm:justify-center justify-start">
        {/* Hamburger menu for small screens */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden items-center justify-center gap-8 text-sm text-gray-300 sm:flex">
          <NavItem>Home</NavItem>
          <NavItem>Tech stack</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>Contact</NavItem>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mt-4 absolute size-44  sm:hidden">
          <ul className="flex flex-col items-center gap-4 text-sm text-gray-300">
            <NavItem>Home</NavItem>
            <NavItem>Tech stack</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Contact</NavItem>
          </ul>
        </div>
      )}
    </nav>
  );
};

// export const Navbar = () => (
//   <nav className="py-3">
//     <ul className="hidden sm:flex items-center justify-center gap-6 text-sm text-gray-300">
//       <li className="cursor-pointer select-none transition duration-300 hover:text-gray-200 hover:underline hover:underline-offset-1">
//         Home
//       </li>
//       <li className="cursor-pointer select-none transition duration-300 hover:text-gray-200 hover:underline hover:underline-offset-1">
//         Tech stack
//       </li>
//       <li className="cursor-pointer select-none transition duration-300 hover:text-gray-200 hover:underline hover:underline-offset-1">
//         Projects
//       </li>
//       <li className="cursor-pointer select-none transition duration-300 hover:text-gray-200 hover:underline hover:underline-offset-1">
//         Contact
//       </li>
//     </ul>
//   </nav>
// );
