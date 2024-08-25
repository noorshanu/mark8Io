import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="  py-2  w-full z-40 absolute">
      <div className=" container-wrapper mx-auto  flex justify-between items-center    py-1 ">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 mr-6">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="images/logo.webp" className="h-[80px]" alt=" Logo" />
          </a>
        </div>

        {/* Navigation menu */}
        <div className="hidden md:flex flex-grow justify-center">
          <a
            href="/"
            className="text-white font-bold text-lg px-3 py-2 font-archo"
          >
            About Us
          </a>
          <a href="#about" className="text-white font-bold text-lg px-3 py-2">
            Product
          </a>
          <a href="#col" className="text-white font-bold text-lg px-3 py-2">
            Stake
          </a>

          <a href="#contact" className="text-white font-bold text-lg px-3 py-2">
            FAQ
          </a>
          <a href="#contact" className="text-white font-bold text-lg px-3 py-2">
            How to buy
          </a>
        </div>

        {/* Wallet Connect button */}
        <div className="md:flex items-center">
          <div className=" flex items-center gap-4 text-white  ml-5">
            <a
              href="/"
              className="  shadow-xl  py-2 px-4 font-archo text-center text-base rounded-2xl font-manbold font-bold btn-main border border-[#000] "
            >
              {" "}
              Connect Wallet
            </a>
          </div>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="md:hidden bg-black rounded-2xl border-2 border-[#000] px-2 pt-2 pb-3 space-y-1 m-4"
          >
            <a
              href="/"
              className="text-white font-bold text-lg block px-3 py-2"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-white font-bold text-lg block px-3 py-2"
            >
              About
            </a>
            <a
              href="#col"
              className="text-white font-bold text-lg block px-3 py-2"
            >
              Features
            </a>

            <div className=" flex items-center gap-4 text-white mb-6 ml-5">
              <a
                href="https://x.com/PurplePepe_Sol"
                className=" text-xl text-white bg-black hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
              >
                <BsTwitterX />
              </a>

              <a
                href="https://t.me/PurplePepe_sol"
                target="_blank"
                rel="noreferrer"
                className=" text-xl text-white bg-black hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
              >
                <FaTelegram />
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
