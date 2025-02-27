import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  toggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-orange-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-sm">Free delivery on orders above ₹500</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm hover:underline">Track Order</a>
            <a href="#" className="text-sm hover:underline">Contact Us</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            className="mr-4 lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">Mukesh</span>
            <span className="text-2xl font-bold text-gray-800 ml-1">Kirana Store</span>
          </a>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Home</a>
          <div className="relative group">
            <button className="text-gray-700 hover:text-orange-600 font-medium flex items-center">
              Categories <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 hidden group-hover:block">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Groceries</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Dairy</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Personal Care</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Beverages</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Snacks</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Cleaning</a>
            </div>
          </div>
          <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Offers</a>
          <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">About Us</a>
          <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Contact</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            className="text-gray-700 hover:text-orange-600"
            onClick={toggleSearch}
          >
            <Search className="h-6 w-6" />
          </button>
          
          <button 
            className="text-gray-700 hover:text-orange-600 relative"
            onClick={toggleCart}
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
          
          <a href="#" className="hidden md:block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium transition duration-300">
            Sign In
          </a>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Home</a>
            <div className="relative">
              <button className="text-gray-700 hover:text-orange-600 font-medium flex items-center w-full justify-between">
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="mt-2 pl-4 border-l-2 border-gray-200 space-y-2">
                <a href="#" className="block py-1 text-gray-800 hover:text-orange-600">Groceries</a>
                <a href="#" className="block py-1 text-gray-800 hover:text-orange-600">Dairy</a>
                <a href="#" className="block py-1 text-gray-800 hover:text-orange-600">Personal Care</a>
                <a href="#" className="block py-1 text-gray-800 hover:text-orange-600">Beverages</a>
                <a href="#" className="block py-1 text-gray-800 hover:text-orange-600">Snacks</a>
                <a href="#" className="block py-1 text-gray-800 hover:text-orange-600">Cleaning</a>
              </div>
            </div>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Offers</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">About Us</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Contact</a>
            <a href="#" className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium transition duration-300 text-center">
              Sign In
            </a>
          </nav>
        </div>
      )}
      
      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-t border-gray-200 py-4 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for products..." 
                className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <button 
                className="absolute right-3 top-2 text-gray-500 hover:text-gray-700"
                onClick={toggleSearch}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;