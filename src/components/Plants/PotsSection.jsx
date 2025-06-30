import React, { useState } from 'react';

const PotsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Ceramic Pots');
  const [favorites, setFavorites] = useState(new Set());
  const [sortBy, setSortBy] = useState('Featured');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { name: 'Ceramic Pots', icon: 'fas fa-circle', count: 24, active: true },
    { name: 'Terracotta Pots', icon: 'fas fa-square', count: 18, active: false },
    { name: 'Plastic Pots', icon: 'fas fa-diamond', count: 32, active: false },
    { name: 'Metal Pots', icon: 'fas fa-cube', count: 12, active: false },
    { name: 'Hanging Pots', icon: 'fas fa-leaf', count: 15, active: false },
  ];

  const products = [
    {
      id: 1,
      name: 'Classic White Ceramic Pot',
      description: 'Perfect for indoor plants with excellent drainage',
      price: 32.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5735ef5c55-42f7207907fd84c30add.png',
      alt: 'elegant white ceramic pot with drainage holes, minimalist design, studio lighting'
    },
    {
      id: 2,
      name: 'Rustic Terracotta Pot',
      description: 'Handcrafted with natural clay finish',
      price: 28.50,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5f2ab1d5c6-c8a3ed6266bacaffe3e1.png',
      alt: 'rustic terracotta ceramic pot with textured surface, earthy brown color, natural lighting'
    },
    {
      id: 3,
      name: 'Modern Geometric Pot',
      description: 'Contemporary design with unique patterns',
      price: 45.00,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/39dbfae96b-cc2f9b7972cc862d2ec8.png',
      alt: 'modern black ceramic pot with geometric pattern, contemporary design, clean background'
    },
    {
      id: 4,
      name: 'Ocean Blue Glazed Pot',
      description: 'Stunning blue glaze with smooth finish',
      price: 39.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c00adfbdd4-a036817657d4b47fb334.png',
      alt: 'blue glazed ceramic pot with smooth finish, medium size, professional product photography'
    },
    {
      id: 5,
      name: 'Pastel Mini Pot Set',
      description: 'Set of 3 small pots in soft colors',
      price: 24.99,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5415b9cf73-17bf24be5361feb14a96.png',
      alt: 'small ceramic pot set with pastel colors, cute miniature pots, soft lighting'
    },
    {
      id: 6,
      name: 'Artisan Speckled Pot',
      description: 'Large pot with unique speckled finish',
      price: 52.00,
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/02d23904b7-8d5c9887abacbd20103d.png',
      alt: 'large ceramic pot with speckled glaze, artisan crafted, natural texture'
    }
  ];

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

 

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-80 bg-white rounded-xl shadow-sm p-6 h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Browse Categories</h2>
            
            <div className="space-y-4">
              {categories.map((category) => (
                <div
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className={`category-item p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <i className={`${category.icon} text-sm mr-3`}></i>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className={`text-sm px-2 py-1 rounded ${
                      selectedCategory === category.name
                        ? 'bg-white bg-opacity-20'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Filters */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              <div className="filter-section mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Size</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
                    <span className="ml-2 text-sm text-gray-600">Small (4-6 inches)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" defaultChecked />
                    <span className="ml-2 text-sm text-gray-600">Medium (7-10 inches)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
                    <span className="ml-2 text-sm text-gray-600">Large (11+ inches)</span>
                  </label>
                </div>
              </div>
              
              <div className="filter-section mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
                    <span className="ml-2 text-sm text-gray-600">$0 - $25</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" defaultChecked />
                    <span className="ml-2 text-sm text-gray-600">$25 - $50</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
                    <span className="ml-2 text-sm text-gray-600">$50+</span>
                  </label>
                </div>
              </div>
              
              <div className="filter-section">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Features</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
                    <span className="ml-2 text-sm text-gray-600">Drainage Holes</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
                    <span className="ml-2 text-sm text-gray-600">Saucer Included</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
                    <span className="ml-2 text-sm text-gray-600">Weather Resistant</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Main Content */}
          <section className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{selectedCategory} Collection</h1>
                <p className="text-gray-600 mt-2">Discover our premium selection of handcrafted {selectedCategory.toLowerCase()}</p>
              </div>
              <div className="flex items-center space-x-4">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                  >
                    <i className={`fas fa-th ${viewMode === 'grid' ? 'text-gray-600' : 'text-gray-400'}`}></i>
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                  >
                    <i className={`fas fa-list ${viewMode === 'list' ? 'text-gray-600' : 'text-gray-400'}`}></i>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="product-card bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6">
                  <div className="relative mb-4">
                    <img 
                      className="w-full h-48 object-cover rounded-lg" 
                      src={product.image} 
                      alt={product.alt}
                    />
                    <button 
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm"
                    >
                      <i className={`fa-heart ${
                        favorites.has(product.id) 
                          ? 'fas text-red-500' 
                          : 'far text-gray-400'
                      }`}></i>
                    </button>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">2</button>
                <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">3</button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PotsSection;