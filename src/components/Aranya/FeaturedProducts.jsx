import React from 'react';

function FeaturedProducts({ vrMode }) {
  const products = [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      description: 'Perfect for beginners',
      price: '$45',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/1be5079821-04be3b2dcdd0ab26d0ec.png',
      alt: 'monstera deliciosa plant in modern white ceramic pot'
    },
    {
      id: 2,
      name: 'Fiddle Leaf Fig',
      description: 'Statement plant',
      price: '$75',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/69a5ebb377-a5f6ef2d448b8bf2407a.png',
      alt: 'fiddle leaf fig plant in terracotta pot indoor setting'
    },
    {
      id: 3,
      name: 'Snake Plant',
      description: 'Low maintenance',
      price: '$35',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/8a1b6f0c3a-3194a44858aef8aa06d3.png',
      alt: 'snake plant sansevieria in modern black pot minimalist'
    },
    {
      id: 4,
      name: 'Golden Pothos',
      description: 'Air purifying',
      price: '$25',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/dbbfba87f9-958c6f5644cc0d82cb62.png',
      alt: 'pothos plant in hanging macrame planter boho style'
    }
  ];

  return (
    <section id="featured-products" className="py-16">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">Featured Collection</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition ${vrMode ? 'vr-mode' : ''}`}>
              <img className="w-full h-48 object-cover" src={product.image} alt={product.alt} />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h4>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                    <i className="fas fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;