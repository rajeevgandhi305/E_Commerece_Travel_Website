import React from 'react'

export default function Travel_Home() {
  return (
    <div>
 
    <header className="bg-white shadow-md fixed top-0 w-full z-50" data-aos="fade-down">
      <section className="flex items-center justify-between px-6 py-4">
     
        <a href="home.html" class="text-2xl font-bold text-blue-600">Travia.</a>
  
       
        <nav className="hidden md:flex space-x-6">
          <a href="home.html" class="text-gray-700 hover:text-blue-600 transition">Home</a>
          <a href="about.html" class="text-gray-700 hover:text-blue-600 transition">About</a>
          <a href="tours.html" class="text-gray-700 hover:text-blue-600 transition">Tours</a>
          <a href="destinations.html" class="text-gray-700 hover:text-blue-600 transition">Destinations</a>
          <a href="contact.html" class="text-gray-700 hover:text-blue-600 transition">Contact</a>
        </nav>
  
       
        <div id="menu-btn" class="md:hidden text-2xl text-gray-700 cursor-pointer">
          <i class="fas fa-bars"></i>
        </div>
      </section>
    </header>
      
    </div>
  )
}
