import React from 'react'

export default function TravelContact() {
  return (
    <div>
      {/* Contact Section */}
      <div className="container mx-auto px-6 py-12">
         {/* Section Heading */}
         <h1 className="text-4xl font-bold text-center text-blue-600 mb-10" data-aos="zoom-out">
            Contact Us
         </h1>

         {/* Row Section */}
         <section className="flex flex-col md:flex-row items-start gap-8">
            {/* Google Map */}
            <iframe 
               className="w-full md:w-1/2 h-96 rounded-lg shadow-md"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15077.086614958938!2d72.83608960687518!3d19.13958260781318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1672939645362!5m2!1sen!2sin"
               allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-aos="flip-left">
            </iframe>

            {/* Form Section */}
            <form className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md" data-aos="flip-right">
               <h3 className="text-2xl font-semibold mb-4 text-blue-600">Get In Touch</h3>
               <input type="text" name="name" required maxLength="50" placeholder="Enter your name"
                  className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
               <input type="email" name="email" required maxLength="50" placeholder="Enter your email"
                  className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
               <input type="number" name="number" required maxLength="10" min="0" max="9999999999" placeholder="Enter your number"
                  className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
               <textarea name="message" required maxLength="1000" rows="5" placeholder="Your message"
                  className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
               <input type="submit" value="Send Message"
                  className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition cursor-pointer" />
            </form>
         </section>

         {/* Grid Contact Details */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Phone Box */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-up">
               <i className="fas fa-phone text-blue-600 text-3xl mb-4"></i>
               <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
               <a href="tel:1234567890" className="text-blue-600 hover:underline">+123-456-7890</a>
               <a href="tel:1112223333" className="text-blue-600 hover:underline">+111-222-3333</a>
            </div>

            {/* Email Box */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-up">
               <i className="fas fa-envelope text-blue-600 text-3xl mb-4"></i>
               <h3 className="text-xl font-semibold mb-2">Email Address</h3>
               <a href="mailto:shaikhanas@gmail.com" className="text-blue-600 hover:underline">shaikhanas@gmail.com</a>
               <a href="mailto:anasbhai@gmail.com" className="text-blue-600 hover:underline">anasbhai@gmail.com</a>
            </div>

            {/* Address Box */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-up">
               <i className="fas fa-map-marker-alt text-blue-600 text-3xl mb-4"></i>
               <h3 className="text-xl font-semibold mb-2">Office Address</h3>
               <p className="text-gray-600">Flat No. 01, A-1, Jogeshwari, Mumbai, India - 400104</p>
            </div>
         </div>

         {/* Footer Credit */}
         <div className="text-center text-gray-500 mt-12">
            &copy; Copyright @ 2023 by <span className="text-blue-600 font-semibold">Mr. Web Designer</span> | All Rights Reserved!
         </div>
      </div>
    </div>
  )
}
