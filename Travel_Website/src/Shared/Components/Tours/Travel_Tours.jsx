import React from 'react';

export default function Travel_Tours() {
  return (
    <div>
      <div className="container mx-auto px-6 py-12">

        {/* Section Heading */}
        <h1
          className="text-4xl font-bold text-center text-blue-600 mb-10"
          data-aos="zoom-out"
        >
          Popular Places
        </h1>

        {/* Grid Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-4 text-center" data-aos="fade-up">
            <div className="text-xl font-semibold text-blue-500 mb-2">
              <i className="fas fa-dollar-sign"></i><span>1299</span>
            </div>
            <img
              src="/images/tour-img-1.webp"
              alt="Taj Mahal"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Taj Mahal</h3>
            <p className="text-gray-600 mb-4">Agra, India</p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Enquiry
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-4 text-center" data-aos="fade-up">
            <div className="text-xl font-semibold text-blue-500 mb-2">
              <i className="fas fa-dollar-sign"></i><span>1999</span>
            </div>
            <img
              src="/images/tour-img-2.webp"
              alt="Tokyo"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tokyo</h3>
            <p className="text-gray-600 mb-4">Tokyo, Japan</p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Enquiry
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-4 text-center" data-aos="fade-up">
            <div className="text-xl font-semibold text-blue-500 mb-2">
              <i className="fas fa-dollar-sign"></i><span>3000</span>
            </div>
            <img
              src="/images/tour-img-3.webp"
              alt="Hawaii"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Hawaii</h3>
            <p className="text-gray-600 mb-4">Hawaii, United States</p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Enquiry
            </a>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-4 text-center" data-aos="fade-up">
            <div className="text-xl font-semibold text-blue-500 mb-2">
              <i className="fas fa-dollar-sign"></i><span>1203</span>
            </div>
            <img
              src="/images/tour-img-4.webp"
              alt="London"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">London</h3>
            <p className="text-gray-600 mb-4">England, U.K.</p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Enquiry
            </a>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-md rounded-lg p-4 text-center" data-aos="fade-up">
            <div className="text-xl font-semibold text-blue-500 mb-2">
              <i className="fas fa-dollar-sign"></i><span>1999</span>
            </div>
            <img
              src="/images/tour-img-5.webp"
              alt="Lotus Temple"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Lotus Temple</h3>
            <p className="text-gray-600 mb-4">New Delhi, India</p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Enquiry
            </a>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-md rounded-lg p-4 text-center" data-aos="fade-up">
            <div className="text-xl font-semibold text-blue-500 mb-2">
              <i className="fas fa-dollar-sign"></i><span>1000</span>
            </div>
            <img
              src="/images/tour-img-6.webp"
              alt="Arc de Triomphe"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Arc de Triomphe</h3>
            <p className="text-gray-600 mb-4">Paris, France</p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Enquiry
            </a>
          </div>

        </section>
      </div>
    </div>
  );
}
