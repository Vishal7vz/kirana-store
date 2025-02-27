import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ 
  isOpen, 
  onClose, 
  cart, 
  updateQuantity, 
  removeFromCart 
}) => {
  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4 h-[calc(100vh-180px)] overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <img 
                src="https://images.unsplash.com/photo-1586769852044-692d6e3703f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Empty cart" 
                className="w-40 h-40 object-cover rounded-full mb-4 opacity-50"
              />
              <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
              <button 
                onClick={onClose}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-medium transition duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex border-b pb-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <p className="text-gray-600 mb-2">₹{item.price}</p>
                    
                    <div className="flex items-center">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-gray-500 hover:text-orange-600 border border-gray-300 rounded-l-md p-1"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      
                      <span className="border-t border-b border-gray-300 px-3 py-1 min-w-[40px] text-center">
                        {item.quantity}
                      </span>
                      
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-500 hover:text-orange-600 border border-gray-300 rounded-r-md p-1"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="border-t p-4 bg-gray-50">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-medium">₹{totalAmount.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Delivery:</span>
              <span className="font-medium">{totalAmount >= 500 ? 'Free' : '₹40.00'}</span>
            </div>
            
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total:</span>
              <span>₹{(totalAmount >= 500 ? totalAmount : totalAmount + 40).toFixed(2)}</span>
            </div>
            
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md font-medium transition duration-300">
              Proceed to Checkout
            </button>
            
            <button 
              onClick={onClose}
              className="w-full mt-2 border border-orange-600 text-orange-600 hover:bg-orange-50 py-2 rounded-md font-medium transition duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;