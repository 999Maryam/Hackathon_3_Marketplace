import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Instagram Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Our Instagram</h2>
          <p className="text-gray-500">Follow our store on Instagram</p>
          <button className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition">
            Follow Us
          </button>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Address */}
          <div>
            <p className="text-gray-900 font-bold mb-2">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-2">Links</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold mb-2">Help</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-2">Newsletter</h3>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring focus:ring-gray-200"
              />
              <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t pt-4">
          © 2022 Neutral House. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
