import React from 'react';

function Hero({ vrMode }) {
  return (
    <section id="hero" className="pt-24 pb-16 h-[600px] relative overflow-hidden">
      <div className="absolute inset-0 parallax-leaf">
        <div className="absolute top-10 left-10 w-20 h-20 opacity-20">
          <i className="fas fa-leaf text-6xl text-green-500 transform rotate-45"></i>
        </div>
        <div className="absolute top-32 right-20 w-16 h-16 opacity-15">
          <i className="fas fa-seedling text-5xl text-green-400 transform -rotate-12"></i>
        </div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 opacity-10">
          <i className="fas fa-leaf text-7xl text-emerald-600 transform rotate-90"></i>
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Discover Your Perfect <span className="text-green-600">Green Companion</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience plants like never before with AI-powered search, VR visualization, and expert care guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search plants..."
                  className="w-full px-6 py-4 rounded-full border-2 border-green-200 focus:border-green-500 outline-none"
                />
                <i className="fas fa-search absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <button className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition font-semibold">
                Explore Now
              </button>
            </div>
          </div>
          <div className="relative">
            <div className={`bg-white/20 backdrop-blur-sm rounded-3xl p-8 ${vrMode ? 'vr-mode' : ''}`}>
              <img
                className="w-full h-80 object-cover rounded-2xl"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c3c186f2c9-aa895749fb0959328c27.png"
                alt="beautiful indoor plants collection with monstera and fiddle leaf fig in modern pots, bright natural lighting"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;