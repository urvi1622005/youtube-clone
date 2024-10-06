import React from 'react';
import { Search, Menu, Mic, Video, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b">
      <div className="flex items-center">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Menu className="h-6 w-6" />
        </button>
        <Link to="/" className="flex items-center ml-4">
          <img src="/youtube-logo.png" alt="YouTube" className="h-6" />
        </Link>
      </div>
      <div className="flex items-center flex-grow max-w-2xl mx-4">
        <input
          className="flex-grow px-4 py-2 border rounded-l-full focus:outline-none focus:border-blue-500"
          placeholder="Search"
        />
        <button className="px-4 py-2 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200">
          <Search className="h-5 w-5" />
        </button>
        <button className="p-2 ml-2 hover:bg-gray-100 rounded-full">
          <Mic className="h-5 w-5" />
        </button>
      </div>
      <div className="flex items-center">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Video className="h-6 w-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="h-6 w-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <User className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;