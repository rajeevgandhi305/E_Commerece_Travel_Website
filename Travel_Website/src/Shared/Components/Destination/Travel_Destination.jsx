import React from 'react'

export default function Travel_Destination() {
  return (
   
    <div className="container mx-auto px-6 py-12">
      {/* Section Heading */}
      <h1
        className="text-4xl font-bold text-center text-blue-600 mb-10"
        data-aos="zoom-out"
      >
        Destinations
      </h1>

      {/* Grid Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="box bg-white rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in">
          <img
            src="/images/destination-1.jpg"
            alt="Istanbul"
            className="w-full h-56 object-cover"
          />
          <h3 className="text-2xl font-semibold text-center py-4 text-gray-700">
            <span>Istanbul</span>
          </h3>
        </div>

        {/* Card 2 */}
        <div className="box bg-white rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in">
          <img
            src="/images/destination-2.jpg"
            alt="California"
            className="w-full h-56 object-cover"
          />
          <h3 className="text-2xl font-semibold text-center py-4 text-gray-700">
            <span>California</span>
          </h3>
        </div>

        {/* Card 3 */}
        <div className="box bg-white rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in">
          <img
            src="/images/destination-3.jpg"
            alt="London"
            className="w-full h-56 object-cover"
          />
          <h3 className="text-2xl font-semibold text-center py-4 text-gray-700">
            <span>London</span>
          </h3>
        </div>

        {/* Card 4 */}
        <div className="box bg-white rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in">
          <img
            src="/images/destination-4.jpg"
            alt="Morocco"
            className="w-full h-56 object-cover"
          />
          <h3 className="text-2xl font-semibold text-center py-4 text-gray-700">
            <span>Morocco</span>
          </h3>
        </div>

        {/* Card 5 */}
        <div className="box bg-white rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in">
          <img
            src="/images/destination-5.jpg"
            alt="New York"
            className="w-full h-56 object-cover"
          />
          <h3 className="text-2xl font-semibold text-center py-4 text-gray-700">
            <span>New York</span>
          </h3>
        </div>

        {/* Card 6 */}
        <div className="box bg-white rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in">
          <img
            src="/images/destination-6.jpg"
            alt="Paris"
            className="w-full h-56 object-cover"
          />
          <h3 className="text-2xl font-semibold text-center py-4 text-gray-700">
            <span>Paris</span>
          </h3>
        </div>

        {/* Card 7 */}
        <div className="box bg-white rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in">
          <img
            src="/images/destination-7.jpg"
            alt="Barcelona"
            className="w-full h-56 object-cover"
          />
          <h3 className="text-2xl font-semibold text-center py-4 text-gray-700">
            <span>Barcelona</span>
          </h3>
        </div>

        {/* Card 8 */}
        <div className="box bg-white rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in">
          <img
            src="/images/destination-8.jpg"
            alt="Sydney"
            className="w-full h-56 object-cover"
          />
          <h3 className="text-2xl font-semibold text-center py-4 text-gray-700">
            <span>Sydney</span>
          </h3>
        </div>

        {/* Card 9 */}
        <div className="box bg-white rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in">
          <img
            src="/images/destination-9.jpg"
            alt="Tokyo"
            className="w-full h-56 object-cover"
          />
          <h3 className="text-2xl font-semibold text-center py-4 text-gray-700">
            <span>Tokyo</span>
          </h3>
        </div>
        
      </section>
    </div>
  );
}

