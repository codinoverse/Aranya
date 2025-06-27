import React from 'react';

function AIFeatures({ vrMode }) {
  return (
    <section id="ai-features" className="py-16 bg-white/50">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">AI-Powered Plant Discovery</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div id="image-search-card" className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition ${vrMode ? 'vr-mode' : ''}`}>
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-image text-2xl text-white"></i>
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Image Search</h4>
            <p className="text-gray-600 mb-6">Upload any plant photo and our AI will identify it instantly, providing care tips and purchase options.</p>
            <button className="w-full py-3 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition font-semibold">
              Try Image Search
            </button>
          </div>
          <div id="live-camera-card" className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition ${vrMode ? 'vr-mode' : ''}`}>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-camera text-2xl text-white"></i>
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Live Camera</h4>
            <p className="text-gray-600 mb-6">Point your camera at any plant for real-time identification and instant care recommendations.</p>
            <button className="w-full py-3 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition font-semibold">
              Open Camera
            </button>
          </div>
          <div id="vr-view-card" className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition ${vrMode ? 'vr-mode' : ''}`}>
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-vr-cardboard text-2xl text-white"></i>
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-4">VR Preview</h4>
            <p className="text-gray-600 mb-6">Visualize how plants will look in your space with our immersive VR technology.</p>
            <button className="w-full py-3 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition font-semibold">
              Enter VR Mode
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIFeatures;