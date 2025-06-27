const Choose = () => {

    return <>
        <section id="benefits-section" class="py-20 backdrop-blur-sm max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 class="text-4xl font-bold text-gray-800 mb-8">Why Choose <b>Aranya?</b></h2>
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <div class="bg-green-100 p-3 rounded-full">
                                    <i class="fas fa-shipping-fast text-green-500 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Free Shipping</h3>
                                    <p class="text-gray-600">Free delivery on orders over $50. Fast and secure packaging.</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="bg-green-100 p-3 rounded-full">
                                    <i class="fas fa-seedling text-green-500 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Plant Care Guide</h3>
                                    <p class="text-gray-600">Detailed care instructions with every plant purchase.</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="bg-green-100 p-3 rounded-full">
                                    <i class="fas fa-award text-green-500 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Quality Guarantee</h3>
                                    <p class="text-gray-600">30-day return policy on all plants and accessories.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <img class="w-full h-96 object-cover rounded-3xl shadow-2xl" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/689f3a48db-a7128608b5cc2ddc1890.png" alt="beautiful plant care setup with watering can, pruning tools, and healthy green plants in modern home" />
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default Choose;