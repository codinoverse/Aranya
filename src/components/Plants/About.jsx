


const PlantAboutPage = () => {
    const leafPattern = {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2334d399' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    };

    return (
        <div className="bg-gradient-to-br from-emerald-50 via-white to-green-50">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0" style={leafPattern}></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <i className="fa-solid fa-leaf mr-2"></i>
                                About Our Green Journey
                            </div>
                            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                                Cultivating Life, One Plant at a Time
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                From humble beginnings to becoming your trusted plant companion, discover the passion and expertise behind every leaf we nurture.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-serif font-bold text-gray-900">Our Growing Story</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        What started as a small greenhouse dream in 2015 has blossomed into a thriving community of plant lovers. We began with just 50 plants and an unwavering belief that everyone deserves to experience the joy of nurturing green life.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Today, we're proud to offer over 500 varieties of plants and handcrafted pots, each carefully selected and nurtured with the same love we had for our very first seedling.
                                    </p>
                                </div>
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-emerald-600">8+</div>
                                        <div className="text-sm text-gray-600">Years Growing</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-emerald-600">500+</div>
                                        <div className="text-sm text-gray-600">Plant Varieties</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-emerald-600">10K+</div>
                                        <div className="text-sm text-gray-600">Happy Customers</div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        className="w-full h-[500px] object-cover"
                                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3567752dae-61643d2b31b65c6886d4.png"
                                        alt="greenhouse interior with lush plants, natural lighting, botanical paradise, professional photography"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                            <i className="fa-solid fa-seedling text-emerald-600 text-xl"></i>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">Est. 2015</div>
                                            <div className="text-sm text-gray-600">Growing Since</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-700">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-4xl font-serif font-bold text-white mb-8">Our Mission</h3>
                        <p className="text-xl text-emerald-100 leading-relaxed mb-12">
                            To make plant parenthood accessible, enjoyable, and rewarding for everyone. We believe that connecting with nature through plants enriches lives, purifies spaces, and creates lasting joy.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fa-solid fa-heart text-white text-2xl"></i>
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-3">Passion-Driven</h4>
                                <p className="text-emerald-100">Every plant is nurtured with genuine care and expertise.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fa-solid fa-leaf text-white text-2xl"></i>
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-3">Sustainable</h4>
                                <p className="text-emerald-100">Eco-friendly practices in everything we do.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fa-solid fa-users text-white text-2xl"></i>
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-3">Community</h4>
                                <p className="text-emerald-100">Building a supportive network of plant enthusiasts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h3 className="text-4xl font-serif font-bold text-gray-900 mb-6">Meet Our Green Team</h3>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                The passionate botanists and plant enthusiasts who make the magic happen every day.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="relative mb-6">
                                    <img
                                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                                        alt="Sarah Green"
                                        className="w-24 h-24 rounded-full mx-auto object-cover"
                                    />
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                                        <i className="fa-solid fa-leaf text-white text-sm"></i>
                                    </div>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">Sarah Green</h4>
                                <p className="text-emerald-600 font-medium mb-3">Head Botanist</p>
                                <p className="text-gray-600 text-sm">15+ years of experience in plant care and cultivation. Specializes in rare tropical plants.</p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="relative mb-6">
                                    <img
                                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                                        alt="Mike Forest"
                                        className="w-24 h-24 rounded-full mx-auto object-cover"
                                    />
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                                        <i className="fa-solid fa-hammer text-white text-sm"></i>
                                    </div>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">Mike Forest</h4>
                                <p className="text-emerald-600 font-medium mb-3">Pot Craftsman</p>
                                <p className="text-gray-600 text-sm">Master ceramicist creating unique, handcrafted pots that perfectly complement our plants.</p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="relative mb-6">
                                    <img
                                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg"
                                        alt="Emma Bloom"
                                        className="w-24 h-24 rounded-full mx-auto object-cover"
                                    />
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                                        <i className="fa-solid fa-graduation-cap text-white text-sm"></i>
                                    </div>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">Emma Bloom</h4>
                                <p className="text-emerald-600 font-medium mb-3">Plant Care Educator</p>
                                <p className="text-gray-600 text-sm">Passionate about teaching plant care. Creates guides and workshops for plant parents.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h3 className="text-4xl font-serif font-bold text-gray-900 mb-6">What We Stand For</h3>
                            <p className="text-xl text-gray-600">The principles that guide everything we do.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <i className="fa-solid fa-shield-heart text-white text-2xl"></i>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h4>
                                <p className="text-gray-600">Only the healthiest plants and finest pots make it to your home.</p>
                            </div>

                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <i className="fa-solid fa-recycle text-white text-2xl"></i>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">Eco-Conscious</h4>
                                <p className="text-gray-600">Sustainable practices and environmentally friendly packaging.</p>
                            </div>

                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <i className="fa-solid fa-handshake text-white text-2xl"></i>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">Customer Care</h4>
                                <p className="text-gray-600">Ongoing support to ensure your plants thrive in their new home.</p>
                            </div>

                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <i className="fa-solid fa-lightbulb text-white text-2xl"></i>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h4>
                                <p className="text-gray-600">Constantly exploring new varieties and creative pot designs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        className="w-full h-full object-cover"
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d1e57e126a-f08de28dcadcdc4296c6.png"
                        alt="botanical pattern, leaves silhouettes, nature texture, dark green background"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                            Ready to Start Your Plant Journey?
                        </h3>
                        <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
                            Join thousands of happy plant parents who've transformed their spaces with our carefully curated collection.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-300 flex items-center justify-center">
                                <i className="fa-solid fa-seedling mr-2"></i>
                                Shop Plants
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-700 transition-colors duration-300 flex items-center justify-center">
                                <i className="fa-solid fa-phone mr-2"></i>
                                Get Expert Advice
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PlantAboutPage;