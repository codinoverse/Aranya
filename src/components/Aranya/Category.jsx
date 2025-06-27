const Category = () => {

    return <>
        <section id="categories-section" class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-forest mb-4">Shop by Category</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">From air-purifying houseplants to statement planters, find everything you need to create your perfect green space.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div id="indoor-plants-card" class="group cursor-pointer">
                        <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-mint to-sage/30 h-64 flex items-center justify-center">
                            <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c625c89c00-d43446846b00988d3259.png" alt="beautiful indoor houseplants collection, monstera and fiddle leaf fig"/>
                                <div class="absolute inset-0 bg-forest/20 group-hover:bg-forest/10 transition-colors"></div>
                                <div class="absolute bottom-4 left-4 text-white">
                                    <h3 class="text-xl font-semibold">Indoor Plants</h3>
                                    <p class="text-sm opacity-90">150+ varieties</p>
                                </div>
                        </div>
                    </div>
                    <div id="outdoor-plants-card" class="group cursor-pointer">
                        <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sage/30 to-forest/20 h-64 flex items-center justify-center">
                            <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b9715cf4f9-be1d273a041a99f24d7d.png" alt="outdoor garden plants and flowers in terracotta pots"/>
                                <div class="absolute inset-0 bg-forest/20 group-hover:bg-forest/10 transition-colors"></div>
                                <div class="absolute bottom-4 left-4 text-white">
                                    <h3 class="text-xl font-semibold">Outdoor Plants</h3>
                                    <p class="text-sm opacity-90">80+ varieties</p>
                                </div>
                        </div>
                    </div>
                    <div id="ceramic-pots-card" class="group cursor-pointer">
                        <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-terracotta/30 to-sage/20 h-64 flex items-center justify-center">
                            <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0ca56ca5de-15f5a4b8cd26956765e7.png" alt="modern ceramic pots collection, minimalist design, white and terracotta colors"/>
                                <div class="absolute inset-0 bg-forest/20 group-hover:bg-forest/10 transition-colors"></div>
                                <div class="absolute bottom-4 left-4 text-white">
                                    <h3 class="text-xl font-semibold">Ceramic Pots</h3>
                                    <p class="text-sm opacity-90">Premium quality</p>
                                </div>
                        </div>
                    </div>
                    <div id="care-accessories-card" class="group cursor-pointer">
                        <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-mint to-forest/20 h-64 flex items-center justify-center">
                            <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/65051d97b2-8177fc26f2ce94e4f5cf.png" alt="plant care accessories, watering can, pruning tools, fertilizer"/>
                                <div class="absolute inset-0 bg-forest/20 group-hover:bg-forest/10 transition-colors"></div>
                                <div class="absolute bottom-4 left-4 text-white">
                                    <h3 class="text-xl font-semibold">Care &amp; Tools</h3>
                                    <p class="text-sm opacity-90">Everything you need</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Category;