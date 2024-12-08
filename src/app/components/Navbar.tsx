import { FC } from "react";
import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar: FC = () => {
  return (
    <nav className="bg-[#FBEBB5]">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-4">
        {/* Center Section: Navigation Links */}
        <div className="flex-1 flex justify-center space-x-8">
          <a href="#" className="text-black text-lg font-medium hover:underline">
            Home
          </a>
          <a href="#" className="text-black text-lg font-medium hover:underline">
            Shop
          </a>
          <a href="#" className="text-black text-lg font-medium hover:underline">
            About
          </a>
          <a href="#" className="text-black text-lg font-medium hover:underline">
            Contact
          </a>
        </div>

        {/* Right Section: Icons */}
        <div className="flex space-x-6 text-black text-2xl">
          <button className="hover:text-gray-700">
            <AiOutlineUser />
          </button>
          <button className="hover:text-gray-700">
            <AiOutlineSearch />
          </button>
          <button className="hover:text-gray-700">
            <AiOutlineHeart />
          </button>
          <button className="hover:text-gray-700">
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
