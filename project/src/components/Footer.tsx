import React from 'react';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mukesh Kirana Store</h3>
            <p className="text-gray-300 mb-4">Your neighborhood store for all daily essentials, groceries, and household items.</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/vishal7.z?igsh=Nml0aDA2NWRjb3Nz&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition duration-300">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition duration-300">Shop</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition duration-300">Categories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition duration-300">Offers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition duration-300">Groceries</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition duration-300">Dairy Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition duration-300">Personal Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition duration-300">Beverages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition duration-300">Snacks</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition duration-300">Cleaning Supplies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Market Street, Cityville, State - 123456</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-orange-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-orange-400" />
                <span className="text-gray-300">info@mukeshkirana.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 Vishal Singh. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition duration-300">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;