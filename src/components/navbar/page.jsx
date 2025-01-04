"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="text-white text-2xl font-bold">
                Explore Nepal
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-6">
                <Link
                  href="/"
                  className="text-white hover:bg-white hover:text-blue-500 rounded-lg px-4 py-2 transition"
                >
                  Home
                </Link>
                <Link
                  href="/aboutnepal"
                  className="text-white hover:bg-white hover:text-blue-500 rounded-lg px-4 py-2 transition"
                >
                  About Nepal
                </Link>
                <Link
                  href="/destinationslists"
                  className="text-white hover:bg-white hover:text-blue-500 rounded-lg px-4 py-2 transition"
                >
                  Destinations
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:bg-white hover:text-blue-500 rounded-lg px-4 py-2 transition"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isClick && (
          <div className="md:hidden bg-blue-500">
            <div className="px-4 py-3 space-y-2">
              <Link
                href="/"
                className="block text-white hover:bg-white hover:text-blue-500 rounded-lg px-4 py-2 transition"
              >
                Home
              </Link>
              <Link
                href="/aboutnepal"
                className="block text-white hover:bg-white hover:text-blue-500 rounded-lg px-4 py-2 transition"
              >
                About Nepal
              </Link>
              <Link
                href="/destinationslists"
                className="block text-white hover:bg-white hover:text-blue-500 rounded-lg px-4 py-2 transition"
              >
                Destinations
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:bg-white hover:text-blue-500 rounded-lg px-4 py-2 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;