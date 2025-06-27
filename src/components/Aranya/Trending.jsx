const Trending = () => {
    return <>
        <section id="featured-products" class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between mb-12">
                    <div>
                        <h2 class="text-3xl font-bold text-forest mb-4">Trending Now</h2>
                        <p class="text-gray-600">Most loved by our plant parents</p>
                    </div>
                    <button class="text-forest font-semibold hover:text-sage transition-colors">View All</button>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div id="product-1" class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                        <div class="relative">
                            <img class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3336f71d68-c21d7438087152a79d68.png" alt="monstera deliciosa plant in white ceramic pot, studio photography" />
                            <button class="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                                <i class="fa-regular fa-heart text-gray-600"></i>
                            </button>
                            <div class="absolute top-4 left-4 bg-sage text-white px-3 py-1 rounded-full text-sm font-medium">Bestseller</div>
                        </div>
                        <div class="p-6">
                            <h3 class="font-semibold text-gray-900 mb-2">Monstera Deliciosa</h3>
                            <p class="text-gray-600 text-sm mb-4">Perfect for bright, indirect light</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-2">
                                    <span class="text-xl font-bold text-forest">$45</span>
                                    <span class="text-sm text-gray-500 line-through">$60</span>
                                </div>
                                <button class="bg-forest text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-forest/90 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="product-2" class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                        <div class="relative">
                            <img class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8a1b6f0c3a-6d58fcf703655b451b3b.png" alt="snake plant sansevieria in modern terracotta pot, minimalist style" />
                            <button class="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                                <i class="fa-regular fa-heart text-gray-600"></i>
                            </button>
                        </div>
                        <div class="p-6">
                            <h3 class="font-semibold text-gray-900 mb-2">Snake Plant</h3>
                            <p class="text-gray-600 text-sm mb-4">Low maintenance, air purifying</p>
                            <div class="flex items-center justify-between">
                                <span class="text-xl font-bold text-forest">$32</span>
                                <button class="bg-forest text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-forest/90 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="product-3" class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                        <div class="relative">
                            <img class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/35b32631e4-bf62fbeeb308cf6c68a7.png" alt="modern ceramic pot set, white and terracotta, minimalist design" />
                            <button class="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                                <i class="fa-regular fa-heart text-gray-600"></i>
                            </button>
                            <div class="absolute top-4 left-4 bg-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">New</div>
                        </div>
                        <div class="p-6">
                            <h3 class="font-semibold text-gray-900 mb-2">Ceramic Pot Set</h3>
                            <p class="text-gray-600 text-sm mb-4">Set of 3 modern planters</p>
                            <div class="flex items-center justify-between">
                                <span class="text-xl font-bold text-forest">$89</span>
                                <button class="bg-forest text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-forest/90 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="product-4" class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                        <div class="relative">
                            <img class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9f8eb880b9-c27d6f753c21973b5fd2.png" alt="fiddle leaf fig plant in large white pot, bright natural lighting" />
                            <button class="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                                <i class="fa-regular fa-heart text-gray-600"></i>
                            </button>
                        </div>
                        <div class="p-6">
                            <h3 class="font-semibold text-gray-900 mb-2">Fiddle Leaf Fig</h3>
                            <p class="text-gray-600 text-sm mb-4">Statement plant for bright spaces</p>
                            <div class="flex items-center justify-between">
                                <span class="text-xl font-bold text-forest">$78</span>
                                <button class="bg-forest text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-forest/90 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}


export default Trending;