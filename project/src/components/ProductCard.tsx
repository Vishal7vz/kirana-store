import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
}

interface ProductCardProps {
  product: Product;
  addToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">
          {Math.floor(Math.random() * 30) + 10}% OFF
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600 ml-1">{product.rating} ({Math.floor(Math.random() * 100) + 50})</span>
        </div>
        
        <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-800">₹{product.price}</span>
            <span className="text-sm text-gray-500 line-through ml-2">₹{Math.floor(product.price * 1.2)}</span>
          </div>
          
          <button 
            onClick={addToCart}
            className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-full transition duration-300"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;