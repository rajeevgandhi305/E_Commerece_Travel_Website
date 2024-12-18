import React from 'react';

export default function Travel_About() {
    return (
        <div>
            <div className="container mx-auto px-6 py-12">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-center text-blue-600 mb-10" data-aos="zoom-out">
                    About Us
                </h1>

                {/* About Section */}
                <section className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Why Choose Us Box */}
                    <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/2" data-aos="zoom-in">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Us?</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate accusantium repellat aliquam esse odit commodi est cumque perferendis rem veritatis minus aliquid delectus eligendi.
                        </p>
                        <a href="contact.html" className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                            Contact Us
                        </a>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-1/2">

                        {/* Box 1 */}
                        <div className="bg-white shadow-md rounded-lg p-4 text-center" data-aos="fade-up">
                            <img src="images/about-img-1.svg" alt="Easy Bookings" className="mx-auto w-20 h-20 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Easy Bookings</h3>
                            <p className="text-gray-600 text-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sed blanditiis.
                            </p>
                        </div>

                        {/* Box 2 */}
                        <div className="bg-white shadow-md rounded-lg p-4 text-center" data-aos="fade-up">
                            <img src="images/about-img-2.svg" alt="Travel World" className="mx-auto w-20 h-20 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Travel World</h3>
                            <p className="text-gray-600 text-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sed blanditiis.
                            </p>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-white shadow-md rounded-lg p-4 text-center" data-aos="fade-up">
                            <img src="images/about-img-3.svg" alt="Enjoy Tours" className="mx-auto w-20 h-20 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Enjoy Tours</h3>
                            <p className="text-gray-600 text-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sed blanditiis.
                            </p>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}
