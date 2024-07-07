import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-black text-white">
      {/* Name on the left */}
      <div className="pl-4">
        <span className="font-bold"><a href='/'>Name</a> </span>
      </div>
      
      {/* Navigation links in the middle */}
      <div className="flex space-x-4">
        <a href="" className="">Explore</a>
        <a href="/swap" className="">Swap</a>
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
