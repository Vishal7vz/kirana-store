import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 to-red-600 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-white mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Neighborhood <br />
            <span className="text-yellow-300">Kirana Store</span> <br />
            Now Online
          </h1>
          <p className="text-lg mb-8 max-w-md">
            Fresh groceries, daily essentials, and household items delivered to your doorstep within hours.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-orange-600 hover:bg-orange-100 font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Shop Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold py-3 px-8 rounded-full transition duration-300">
              View Offers
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="bg-white p-6 rounded-lg shadow-xl transform rotate-3 transition-transform hover:rotate-0 duration-300">
            <img 
              src="https://images.unsplash.com/photo-1604719312566-8912e9c8a213?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Grocery items" 
              className="rounded-lg w-full h-auto"
            />
            <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded-lg transform -rotate-3 shadow-md">
              20% OFF on first order!
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm p-4 rounded-lg">
            <h3 className="text-white font-bold text-xl mb-1">Fast Delivery</h3>
            <p className="text-white text-sm">Within 2 hours</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm p-4 rounded-lg">
            <h3 className="text-white font-bold text-xl mb-1">Fresh Products</h3>
            <p className="text-white text-sm">100% quality</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm p-4 rounded-lg">
            <h3 className="text-white font-bold text-xl mb-1">Easy Returns</h3>
            <p className="text-white text-sm">No questions asked</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm p-4 rounded-lg">
            <h3 className="text-white font-bold text-xl mb-1">Secure Payment</h3>
            <p className="text-white text-sm">100% secure checkout</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;