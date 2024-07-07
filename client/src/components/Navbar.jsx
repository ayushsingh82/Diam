import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Name on the left */}
      <div className="pl-4">
        <span className="font-bold"> Name</span>
      </div>
      
      {/* Navigation links in the middle */}
      <div className="flex space-x-4">
        <a href="/swap" className="hover:text-gray-400">Nav1</a>
        <a href="#nav2" className="hover:text-gray-400">Nav2</a>
      </div>
      
      {/* Create Account button on the right */}
      <div className="pr-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Navbar;
