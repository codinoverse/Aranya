import React from 'react';
import { Link } from 'react-router-dom';

function Header({ toggleVrMode }) {
  return (
    <header id="header" className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <i className="fas fa-leaf text-3xl text-green-600"></i>
            <h1 className="text-2xl font-bold text-gray-800">Aranya</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to={"/"}><span className="text-gray-700 hover:text-green-600 transition cursor-pointer">Home</span></Link>
            <Link to={"/plants"}><span className="text-gray-700 hover:text-green-600 transition cursor-pointer">Plants</span></Link>
            <Link to={"/pots"}><span className="text-gray-700 hover:text-green-600 transition cursor-pointer">Pots</span></Link>
            <Link to={"/care"}><span className="text-gray-700 hover:text-green-600 transition cursor-pointer">Care</span></Link>
            <Link to={"/aboutme"}><span className="text-gray-700 hover:text-green-600 transition cursor-pointer">About</span></Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              id="image-search-btn"
              className="p-2 bg-green-100 rounded-full hover:bg-green-200 transition"
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.onchange = () => alert('AI analyzing your image... Plant identified as Monstera Deliciosa!');
                input.click();
              }}
            >
              <i className="fas fa-camera text-green-600"></i>
            </button>
            <button
              id="live-camera-btn"
              className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition"
              onClick={() => alert('Camera access requested. Point your camera at a plant for identification!')}
            >
              <i className="fas fa-video text-blue-600"></i>
            </button>
            <button
              id="vr-toggle"
              className="p-2 bg-purple-100 rounded-full hover:bg-purple-200 transition"
              onClick={toggleVrMode}
            >
              <i className="fas fa-vr-cardboard text-purple-600"></i>
            </button>
            <i className="fas fa-shopping-cart text-2xl text-gray-700 cursor-pointer hover:text-green-600"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;