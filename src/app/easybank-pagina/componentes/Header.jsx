"use client";
import Image from "next/image";
import logo from "../image/logo.svg";
import React from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  function toggleMenu() {
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const isMenuOpen = document.getElementById("isMenuOpen");
    if (isMenuOpen.classList.contains("hidden")) {
      isMenuOpen.classList.remove("hidden");
      isMenuOpen.classList.add("block");
      openBtn.classList.add("hidden");
      closeBtn.classList.remove("hidden");
    } else {
      isMenuOpen.classList.remove("block");
      isMenuOpen.classList.add("hidden");
      openBtn.classList.remove("hidden");
      closeBtn.classList.add("hidden");
    }
  }
  return (
    <header className="bg-white p-6 relative">
      <nav className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="">
          <Image
            src={logo}
            alt="logo"
            className="cursor-pointer"
          />
        </div>
        <button
          className="sm:hidden block"
          id="openBtn"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <img
              src={closeBtn}
              alt="Close"
            />
          ) : (
            <img
              src={isMenuOpen}
              alt="Menu"
            />
          )}
        </button>

        <div className="md:block hidden space-x-4">
          <a
            href="#"
            className="text-lg font-semibold text-gray-500 hover:text-green-400 transition hover:delay-200 hover:duration-300 hover:ease-in"
          >
            Home
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-500 hover:text-green-400 transition hover:delay-200 hover:duration-300 hover:ease-in"
          >
            About
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-500 hover:text-green-400 transition hover:delay-200 hover:duration-300 hover:ease-in"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-500 hover:text-green-400 transition hover:delay-200 hover:duration-300 hover:ease-in"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-500 hover:text-green-400 transition hover:delay-200 hover:duration-300 hover:ease-in"
          >
            Careers
          </a>
        </div>

        <div className="sm:block hidden mx-4">
          <a
            href="#"
            className="px-6 py-3 text-white font-semibold bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"
          >
            Request Invite
          </a>
        </div>
      </nav>
      <section
        className={`max-w-5xl mx-auto absolute top-12 right-0 left-0 bg-black bg-opacity-30 min-h-screen ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="max-w-xs my-8 rounded mx-auto bg-white h-64">
          <div className="space-y-4 flex flex-col items-center py-6">
            <a
              href="#"
              className="text-lg font-semibold text-gray-500 hover:text-green-400 transition hover:delay-200 hover:duration-300 hover:ease-in"
            >
              Home
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-500 hover:text-green-400 transition hover:delay-200 hover:duration-300 hover:ease-in"
            >
              About
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-500 hover:text-green-400 transition hover:delay-200 hover:duration-300 hover:ease-in"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-500 hover:text-green-400 transition hover:delay-200 hover:duration-300 hover:ease-in"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-500 hover:text-green-400 transition hover:delay-200 hover:duration-300 hover:ease-in"
            >
              Careers
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}
