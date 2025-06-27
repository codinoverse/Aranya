import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <i className="fas fa-leaf text-2xl text-green-400"></i>
              <h3 className="text-xl font-bold">Aranya</h3>
            </div>
            <p className="text-gray-400">Your ultimate destination for plants, pots, and AI-powered plant care.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li><span className="hover:text-white transition cursor-pointer">Indoor Plants</span></li>
              <li><span className="hover:text-white transition cursor-pointer">Outdoor Plants</span></li>
              <li><span className="hover:text-white transition cursor-pointer">Pots & Planters</span></li>
              <li><span className="hover:text-white transition cursor-pointer">Plant Care</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">AI Features</h4>
            <ul className="space-y-2 text-gray-400">
              <li><span className="hover:text-white transition cursor-pointer">Image Search</span></li>
              <li><span className="hover:text-white transition cursor-pointer">Live Camera</span></li>
              <li><span className="hover:text-white transition cursor-pointer">VR Preview</span></li>
              <li><span className="hover:text-white transition cursor-pointer">Plant Assistant</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <i className="fab fa-facebook text-2xl text-gray-400 hover:text-white cursor-pointer transition"></i>
              <i className="fab fa-instagram text-2xl text-gray-400 hover:text-white cursor-pointer transition"></i>
              <i className="fab fa-twitter text-2xl text-gray-400 hover:text-white cursor-pointer transition"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;