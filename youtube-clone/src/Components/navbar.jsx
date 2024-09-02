import { IoMenu, IoSearch } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";

function Navbar({ onMenuClick }) {
  return (
    <div className="bg-gray-900 text-white py-3 flex items-center px-4 shadow-lg">
      <div className="flex items-center mr-4">
        <IoMenu size="24px" color="white" onClick={onMenuClick} />
      </div>

      <img
        src="src/assets/new-youtube-premium-features-1280-6d58ec9cf9__1_-removebg-preview.png"
        alt="YouTube Logo"
        className="h-8 w-auto mx-2 object-contain"
      />

      <div className="flex items-center flex-grow ml-10 max-w-xl">
        <div className="relative flex items-center w-full">
          <input
            type="text"
            className="block w-full bg-gray-800 text-white border-0 pl-4 pr-10 py-2 rounded-full sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Search"
          />
          <button
            type="button"
            className="absolute right-0 top-0 flex items-center justify-center w-12 h-full bg-gray-700 rounded-r-full hover:bg-gray-600"
          >
            <IoSearch className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4 ml-auto">
        <button
          type="button"
          className="p-2.5 text-gray-400 hover:text-gray-500"
        >
          <svg
            className="h-6 w-6 text-white stroke-2"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </button>

        <button
          type="button"
          className="p-2.5 bg-transparent text-gray-400 rounded-full flex items-center justify-center hover:bg-gray-800"
        >
          <RiVideoAddLine className="h-8 w-8 text-white" />
        </button>

        <button
          type="button"
          className="p-2.5 bg-transparent text-gray-400 rounded-full flex items-center justify-center hover:bg-gray-800"
        >
          <img
            alt="User Avatar"
            src="https://via.placeholder.com/150"
            className="h-10 w-10 rounded-full object-cover"
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
