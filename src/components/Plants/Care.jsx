import "./Care.css"



const CareSection = () => {
  return (
    <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <section id="product-section" className="flex-1">
          <div id="breadcrumb" className="mb-6">
            <nav className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="hover:text-plant-green cursor-pointer">Home</span>
              <i className="fa-solid fa-chevron-right text-xs"></i>
              <span className="hover:text-plant-green cursor-pointer">Plant Care</span>
              <i className="fa-solid fa-chevron-right text-xs"></i>
              <span className="text-gray-900">Products</span>
            </nav>
          </div>

          <div id="page-header" className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Plant Care Products</h1>
            <p className="text-gray-600">Everything you need to keep your plants healthy and thriving</p>
          </div>

          <div id="filter-bar" className="flex items-center justify-between mb-6 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
              <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-plant-green">
                <option>All Categories</option>
                <option>Fertilizers</option>
                <option>Tools</option>
                <option>Pots & Planters</option>
                <option>Soil & Substrates</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-plant-green">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
                <option>Newest</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-grid-2 text-plant-green cursor-pointer"></i>
              <i className="fa-solid fa-list text-gray-400 cursor-pointer hover:text-plant-green"></i>
            </div>
          </div>

          <div id="products-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div id="product-card-1" className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative">
                <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4a8dc79cda-a2682455c4fff265657a.png" alt="organic plant fertilizer bottle on white background, product photography" />
                <div className="absolute top-3 right-3 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  Organic
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Premium Organic Fertilizer</h3>
                <p className="text-sm text-gray-600 mb-3">All-natural plant food for healthy growth</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-plant-green">$24.99</span>
                  <button className="bg-plant-green text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">(128 reviews)</span>
                </div>
              </div>
            </div>

            <div id="product-card-2" className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative">
                <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/326a70af76-edf2e58d6708f3b73555.png" alt="ceramic plant pot with drainage holes, modern design, white background" />
                <div className="absolute top-3 right-3 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  Best Seller
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Ceramic Drainage Planter</h3>
                <p className="text-sm text-gray-600 mb-3">Modern design with perfect drainage system</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-plant-green">$18.50</span>
                  <button className="bg-plant-green text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-regular fa-star text-xs"></i>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">(89 reviews)</span>
                </div>
              </div>
            </div>

            <div id="product-card-3" className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/cf28ecad9d-42b45e57c5c30522a14d.png" alt="gardening tool set with pruning shears and watering can, professional quality" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Professional Tool Set</h3>
                <p className="text-sm text-gray-600 mb-3">Complete gardening toolkit for plant care</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-plant-green">$45.99</span>
                  <button className="bg-plant-green text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">(203 reviews)</span>
                </div>
              </div>
            </div>

            <div id="product-card-4" className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9809a8f0a5-e3b66605b2e60bd4e59d.png" alt="premium potting soil bag with organic ingredients label" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Premium Potting Mix</h3>
                <p className="text-sm text-gray-600 mb-3">Nutrient-rich soil blend for all plants</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-plant-green">$16.99</span>
                  <button className="bg-plant-green text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-regular fa-star text-xs"></i>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">(76 reviews)</span>
                </div>
              </div>
            </div>

            <div id="product-card-5" className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8c30847ec1-7d8be3a308837507cff1.png" alt="plant growth light LED panel for indoor plants" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">LED Growth Light</h3>
                <p className="text-sm text-gray-600 mb-3">Full spectrum lighting for indoor plants</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-plant-green">$89.99</span>
                  <button className="bg-plant-green text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">(154 reviews)</span>
                </div>
              </div>
            </div>

            <div id="product-card-6" className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d876e2f6b3-ff871e2c5ea905b75ce8.png" alt="plant misting spray bottle with adjustable nozzle" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Plant Misting Bottle</h3>
                <p className="text-sm text-gray-600 mb-3">Fine mist sprayer for humidity control</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-plant-green">$12.99</span>
                  <button className="bg-plant-green text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-solid fa-star text-xs"></i>
                    <i className="fa-regular fa-star text-xs"></i>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">(92 reviews)</span>
                </div>
              </div>
            </div>
          </div>

          <div id="pagination" className="flex justify-center mt-8">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 text-gray-500 hover:text-plant-green">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="px-3 py-2 bg-plant-green text-white rounded-md">1</button>
              <button className="px-3 py-2 text-gray-700 hover:text-plant-green">2</button>
              <button className="px-3 py-2 text-gray-700 hover:text-plant-green">3</button>
              <button className="px-3 py-2 text-gray-500 hover:text-plant-green">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </nav>
          </div>
        </section>

        <aside id="sidebar" className="w-80 space-y-6">
          <div id="cart-summary" className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <i className="fa-solid fa-shopping-cart text-plant-green mr-2"></i>
              Cart Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Items (3)</span>
                <span className="font-medium">$67.48</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-lg text-plant-green">$67.48</span>
              </div>
            </div>
            <button className="w-full bg-plant-green text-white py-3 rounded-md mt-4 hover:bg-green-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>

          <div id="care-tips" className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <i className="fa-solid fa-lightbulb text-yellow-500 mr-2"></i>
              Care Tips
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-plant-green pl-4">
                <h4 className="font-medium text-sm text-gray-900">Watering Schedule</h4>
                <p className="text-xs text-gray-600 mt-1">Most houseplants need watering when the top inch of soil feels dry.</p>
              </div>
              <div className="border-l-4 border-plant-light pl-4">
                <h4 className="font-medium text-sm text-gray-900">Light Requirements</h4>
                <p className="text-xs text-gray-600 mt-1">Place plants near windows but avoid direct sunlight for most varieties.</p>
              </div>
              <div className="border-l-4 border-plant-sage pl-4">
                <h4 className="font-medium text-sm text-gray-900">Fertilizing</h4>
                <p className="text-xs text-gray-600 mt-1">Feed plants monthly during growing season (spring/summer).</p>
              </div>
            </div>
          </div>

          <div id="featured-products" className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <i className="fa-solid fa-star text-yellow-500 mr-2"></i>
              Featured Products
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img className="w-12 h-12 rounded-md object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0f67c91d68-2df0f076e9f4f82c88e6.png" alt="small succulent plant in terracotta pot" />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">Mini Succulent Set</h4>
                  <p className="text-xs text-gray-600">Perfect for beginners</p>
                  <span className="text-sm font-bold text-plant-green">$29.99</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img className="w-12 h-12 rounded-md object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/cb33ab1bf3-099030df93c433f9a188.png" alt="plant humidity meter digital gauge" />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">Soil Moisture Meter</h4>
                  <p className="text-xs text-gray-600">Monitor soil conditions</p>
                  <span className="text-sm font-bold text-plant-green">$15.99</span>
                </div>
              </div>
            </div>
          </div>

          <div id="newsletter" className="newsletter rounded-lg p-6 text-white">
            <h3 className="font-semibold mb-2 flex items-center">
              <i className="fa-solid fa-envelope mr-2"></i>
              Plant Care Newsletter
            </h3>
            <p className="text-sm mb-4 opacity-90">Get weekly tips and exclusive offers</p>
            <div className="space-y-3">
              <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 rounded-md text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white" />
              <button className="w-full sub-btn  py-2 rounded-md text-sm font-medium  transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default CareSection;