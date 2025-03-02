import React from "react";
import Linkedln from  '../assets/linkedln-icon.png';
import X from  '../assets/x-icon.png';
import Instagram from  '../assets/instagram-icon.png';
const Footer = () =>{
  return (
    <footer className="relative  text-white py-10 px-6">
      <div className="absolute inset-0  bg-cover bg-center opacity-20"></div>
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-left">
          <h3 className="text-xl font-bold text-purple-500">proxima</h3>
          <p className="text-gray-400 text-sm mt-2 max-w-xs">
            Proxima is an AI solution that boosts your product’s SEO ranking and visibility.
          </p>
          <p className="text-gray-500 text-xs mt-4">
            All copyrights are reserved @proxima pvt ltd
          </p>
        </div>
        <div className="flex items-center space-x-6">
          <img
            src={Instagram}
            alt="Instagram-icon"
            className="w-6 h-6 cursor-pointer hover:opacity-80"
          />
          <img
            src={Linkedln}
            alt="LinkedIn-icon"
            className="w-6 h-6 cursor-pointer hover:opacity-80"
          />
          <img
            src={X}
            alt="x-icon"
            className="w-6 h-6 cursor-pointer hover:opacity-80"
          />
        </div>
      </div>
      <div className="absolute bottom-4 right-6 text-xs text-gray-500">
        Made on earth with <span className="text-purple-400">♥</span> by human
      </div>
    </footer>
  );
}

export default Footer