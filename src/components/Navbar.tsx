import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  logoSrc?: string;
  logoAlt?: string;
}

const Navbar = ({
  logoSrc = "/logo.png", // Default logo path, replace with your actual logo
  logoAlt = "AI-Learn Logo",
}: NavbarProps) => {
  return (
    <nav className="w-full py-4 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoSrc} alt={logoAlt} className="h-10 w-auto" />
          <span className="ml-3 text-2xl font-bold text-blue-600">
            AI-Learn
          </span>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Courses
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Contact
          </Link>
        </div>

        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
