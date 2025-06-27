import React, { useState, useEffect } from 'react';
import Footer from '../Aranya/Footer';
import "./Plantlist.css"

function Plantlist() {
  const [vrMode, setVrMode] = useState(false);

  useEffect(() => {
    const throttle = (func, limit) => {
      let inThrottle;
      return function (...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    };

    const handleScroll = throttle(() => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.parallax-leaf');
      if (parallax) {
        parallax.style.setProperty('--scroll-y', `${scrolled * 0.5}px`);
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleVrMode = () => {
    setVrMode(!vrMode);
  };

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x200?text=Plant+Image+Not+Found';
  };

  const plants = [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      description: 'Indoor Plant • Low Maintenance',
      price: '$45.99',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/ea79bde387-8519eebca851626cb24e.png',
      alt: 'beautiful monstera deliciosa houseplant in terracotta pot, bright natural lighting',
      rating: '4.8 (124)',
    },
    {
      id: 2,
      name: 'Snake Plant',
      description: 'Indoor Plant • Very Low Maintenance',
      price: '$29.99',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/8a1b6f0c3a-64b194b6022a440061cb.png',
      alt: 'snake plant sansevieria in modern white pot, minimal style',
      rating: '4.9 (89)',
    },
    {
      id: 3,
      name: 'Fiddle Leaf Fig',
      description: 'Indoor Plant • Medium Maintenance',
      price: '$89.99',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/a888af57ab-d9b8cccd8498a78f72ec.png',
      alt: 'fiddle leaf fig plant in woven basket pot, bright interior',
      rating: '4.6 (156)',
      favorited: true,
    },
    {
      id: 4,
      name: 'Peace Lily',
      description: 'Indoor Plant • Low Maintenance',
      price: '$35.99',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/88fca39958-65c56d28ce4cf39f5bbf.png',
      alt: 'peace lily plant with white flowers in ceramic pot',
      rating: '4.7 (92)',
    },
    {
      id: 5,
      name: 'Rubber Plant',
      description: 'Indoor Plant • Low Maintenance',
      price: '$42.99',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/e9f9d47de9-535b587d766518250c9a.png',
      alt: 'rubber plant ficus elastica in modern black pot',
      rating: '4.5 (78)',
    },
    {
      id: 6,
      name: 'Golden Pothos',
      description: 'Plant • Very Low Maintenance',
      price: '$24.99',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/88fca39958-65c56d28ce4cf39f5bbf.png',
      alt: 'pothos golden vine plant hanging in macrame holder',
      rating: '4.8 (203)',
    },
    {
      id: 7,
      name: 'Aloe Vera',
      description: 'Succulent • Very Low Maintenance',
      price: '$18.99',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/067efa4f48-f97c942512821f708bb3.png',
      alt: 'aloe vera succulent plant in terracotta pot, desert style',
      rating: '4.9 (167)',
    },
    {
      id: 8,
      name: 'Spider Plant',
      description: 'Hanging Plant • Low Maintenance',
      price: '$27.99',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d5ca234a4b-faf8732ebfa76766e504.png',
      alt: 'spider plant chlorophytum with baby plants in hanging basket',
      rating: '4.7 (134)',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-50 leaf-bg flex flex-1">
        <div id="sidebar" className="w-64 bg-white shadow-sm h-screen sticky top-0 border-r">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
            <nav className="space-y-2">
              <span className="flex items-center px-3 py-2 text-plant-green bg-green-50 rounded-lg font-medium cursor-pointer">
                <i className="fa-solid fa-leaf mr-3"></i>
                Plants
              </span>
              <span className="flex items-center px-3 py-2 text-gray-600 hover:text-plant-green hover:bg-gray-50 rounded-lg cursor-pointer">
                <i className="fa-solid fa-flask mr-3"></i>
                Fertilizers
              </span>
              <span className="flex items-center px-3 py-2 text-gray-600 hover:text-plant-green hover:bg-gray-50 rounded-lg cursor-pointer">
                <i className="fa-solid fa-trowel mr-3"></i>
                Garden Tools
              </span>
              <span className="flex items-center px-3 py-2 text-gray-600 hover:text-plant-green hover:bg-gray-50 rounded-lg cursor-pointer">
                <i className="fa-solid fa-seedling mr-3"></i>
                Seeds
              </span>
              <span className="flex items-center px-3 py-2 text-gray-600 hover:text-plant-green hover:bg-gray-50 rounded-lg cursor-pointer">
                <i className="fa-solid fa-bucket mr-3"></i>
                Pots & Planters
              </span>
              <span className="flex items-center px-3 py-2 text-gray-600 hover:text-plant-green hover:bg-gray-50 rounded-lg cursor-pointer">
                <i className="fa-solid fa-spray-can mr-3"></i>
                Pesticides
              </span>
            </nav>
          </div>
          <div className="px-6 py-4 border-t">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Filter by Price</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-plant-green focus:ring-plant-green" />
                <span className="ml-2 text-sm text-gray-600">Under $25</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-plant-green focus:ring-plant-green" />
                <span className="ml-2 text-sm text-gray-600">$25 - $50</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-plant-green focus:ring-plant-green" />
                <span className="ml-2 text-sm text-gray-600">$50 - $100</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-plant-green focus:ring-plant-green" />
                <span className="ml-2 text-sm text-gray-600">Over $100</span>
              </label>
            </div>
          </div>
        </div>
        <div id="main-content" className="flex-1 p-6">
          <div className="parallax-container relative">
            <div className="parallax-leaf absolute inset-0 z-[-1]"></div>
            <button
              id="vr-toggle"
              className="mb-6 p-2 bg-purple-100 rounded-full hover:bg-purple-200 transition"
              onClick={toggleVrMode}
            >
              <i className="fas fa-vr-cardboard text-purple-600"></i>
            </button>
            <div id="page-header" className="mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Plants Collection</h1>
                  <p className="text-gray-600 mt-1">Discover our wide variety of indoor and outdoor plants</p>
                </div>
                <div className="flex items-center space-x-4">
                  <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-plant-green">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Name: A to Z</option>
                  </select>
                  <div className="flex border border-gray-300 rounded-lg">
                    <button className="px-3 py-2 bg-gray-100 text-gray-600">
                      <i className="fa-solid fa-th-large"></i>
                    </button>
                    <button className="px-3 py-2 text-gray-600">
                      <i className="fa-solid fa-list"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div id="plants-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
              {plants.map(plant => (
                <div
                  key={plant.id}
                  className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden ${vrMode ? 'vr-mode' : ''}`}
                >
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover"
                      src={plant.image}
                      alt={plant.alt}
                      onError={handleImageError}
                    />
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50">
                      <i className={`fa-regular fa-heart ${plant.favorited ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}></i>
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{plant.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{plant.description}</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl font-bold text-plant-green">{plant.price}</span>
                      <div className="flex items-center text-sm text-gray-500">
                        <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
                        {plant.rating}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-plant-green text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                        <i className="fa-solid fa-shopping-cart mr-1"></i>
                        Add to Cart
                      </button>
                      <button className="px-3 py-2 border border-plant-green text-plant-green rounded-lg hover:bg-green-50 transition-colors">
                        {/* <i className="fa-solid fa-bolt"></i> */}
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Plantlist;