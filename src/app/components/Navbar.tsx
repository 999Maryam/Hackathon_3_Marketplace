"use client";
import React from "react";
import { useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdCancel, MdFacebook } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const navbarBgColor = pathname === "/" ? " bg-[#FBEBB5] " : "bg-white";

  return (
    <div>
      <nav
        className={`w-full h-[100px] bg-${navbarBgColor} flex sm:flex-row justify-between items-center px-4 sm:px-8 py-4`}
      >
        <button
          className="text-black sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <TiThMenu />
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"
            } absolute sm:static top-20 left-0 w-full sm:w-auto sm:flex sm:flex-1 flex-col sm:flex-row items-center text-black text-[16px] font-[500] leading-[24px] z-50 ${isOpen ? navbarBgColor : "bg-transparent"
            }`}
        >
          {/* Links Section */}
          <div className="flex flex-col sm:flex-1 sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <Link
              href="/"
              className="text-black text-[14px] sm:text-[16px] font-[500] leading-[24px]"
            >
              Home
            </Link>
            <Link
              href="/Shop"
              className="text-black text-[14px] sm:text-[16px] font-[500] leading-[24px]"
            >
              Shop
            </Link>
            <Link
              href="/About"
              className="text-black text-[14px] sm:text-[16px] font-[500] leading-[24px]"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="text-black text-[14px] sm:text-[16px] font-[500] leading-[24px]"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Icons Section */}
        <div className=" flex justify-center items-center space-x-4 sm:space-x-6 text-[20px] sm:text-[24px]  sm:mt-0">
          <Link href={"/Accounts"}>
            <RiAccountCircleLine className="cursor-pointer" />
          </Link>
          <FiSearch className="cursor-pointer" />
          <FaRegHeart className="cursor-pointer" />
          <button onClick={() => setisCartOpen(!isCartOpen)}>
            <IoCartOutline className="cursor-pointer" />
          </button>
          <div
            className={`${isCartOpen ? "block" : "hidden"
              } fixed top-20 right-0 bg-white shadow-lg rounded-xl w-[280px] sm:w-[320px] py-4 px-6 z-50`}
          >
            <div>
              <p className="font-bold text-[24px] leading-[36px] mb-7 mt-3 flex">
                Shopping Cart
                <MdCancel
                  className="text-gray-400 w-[20px] h-[20px] ml-16 cursor-pointer mt-3"
                  onClick={() => setisCartOpen(!isCartOpen)}
                />
              </p>
            </div>
            <div className="border-b mb-6"></div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/pic8.png"
                alt="Product"
                className="w-16 h-16 bg-[#FBEBB5] rounded-lg object-cover"
              />
              <div className="flex">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-black">
                    Asgaard sofa
                  </h3>
                  <p className="text-xs text-gray-500">
                    <span className="text-yellow-600">Rs. 250,000.00</span>
                  </p>
                </div>
                <MdCancel className="text-gray-400 w-[20px] h-[20px] ml-16 cursor-pointer mt-1" />
              </div>
            </div>
            <div className="flex justify-between items-center text-black text-[19px] pt-4 mt-40">
              <p>Subtotal</p>
              <p className="text-yellow-600">Rs. 250,000.00</p>
            </div>
            <div className="border-t mt-6"></div>
            <div className="flex gap-4 mt-10">
              <Link
                href="/Cart"
                className=" flex-1 text-[18px] text-center border rounded-lg text-black hover:bg-gray-100"
              >
                View Cart
              </Link>
              <Link
                href="/CheckOut"
                className="flex-1 text-center bg-black text-white rounded-2xl hover:bg-gray-800 "
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;