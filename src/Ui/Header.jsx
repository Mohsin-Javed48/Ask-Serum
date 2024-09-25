/** @format */

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left Side - Logo */}
        <span className="flex items-end">
          <img src="../../public/logo.png" className="h-12" alt="logo"></img>
          <div className="text-xl font-bold p-1">
            <span className="text-[#40E0D0]">Ask</span>
            <span className="text-[#FFA500]">Serum</span>
          </div>
        </span>
        {/* Middle - Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a href="/" className="text-black font-medium hover:text-gray-500">
            Home
          </a>
          <a href="/shop" className="hover:text-gray-500">
            Shop
          </a>
          <a href="/blog" className="hover:text-gray-500">
            Blog
          </a>
          <a href="/aboutus" className="hover:text-gray-500">
            About us
          </a>
        </nav>

        {/* Right Side - Icons */}
        <div className="flex items-center space-x-6 text-gray-500">
          <button className="hover:text-gray-900">
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <button className="hover:text-gray-900">
            {/* Cart Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5.4A1 1 0 007 20h10a1 1 0 00.9-.6L20 13m-13 0h13m-5 5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>

          <button className="hover:text-gray-900">
            {/* User Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 19.121A8.962 8.962 0 0112 21a8.962 8.962 0 016.879-1.879M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

/*import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isInputVisible, setIsInputVisible] = useState(false);

  return (
    <div className="h-12  bg-slate-300 w-full border-b-4 justify-around flex items-center absolute">
      <div className="flex items-center">
        <img src="../../public/logo.png" className="h-10 w-10 "></img>
        <h1>AskSerum</h1>
      </div>
      <div className=" ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/aboutUs">About Us</NavLink>
      </div>
      <div>
        {" "}
        <div className="relative w-full">
          <input
            type="text"
            id="simple-search"
            className="  h-5/6"
            placeholder="Search branch name..."
            required
          />
        </div>
        <img src="../../public/search-Icon.png" className=" h-1/6"></img>
      </div>
    </div>
  );
}

export default Header;
*/
