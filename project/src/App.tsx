import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Instagram, Phone, Mail, MapPin, ChevronDown, ChevronRight, Star } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<Array<{id: number, name: string, price: number, quantity: number, image: string}>>([]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product: {id: number, name: string, price: number, image: string}) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? {...item, quantity: item.quantity + 1} 
          : item
      ));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setCart(cart.map(item => 
      item.id === id 
        ? {...item, quantity} 
        : item
    ));
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Header 
        cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} 
        toggleCart={toggleCart} 
      />
      
      <main>
        <Hero />
        
        <CategorySection 
          title="Popular Categories" 
          categories={[
            { id: 1, name: "Groceries", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: 2, name: "Dairy", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: 3, name: "Personal Care", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: 4, name: "Beverages", image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: 5, name: "Snacks", image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: 6, name: "Cleaning", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
          ]} 
        />
        
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Best Selling Products</h2>
            <a href="#" className="text-orange-600 hover:text-orange-700 flex items-center">
              View All <ChevronRight className="ml-1 h-5 w-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { id: 1, name: "Tata Salt", price: 20, image: "https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", rating: 4.8 },
              { id: 2, name: "Aashirvaad Atta", price: 350, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", rating: 4.7 },
              { id: 3, name: "Amul Butter", price: 50, image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", rating: 4.9 },
              { id: 4, name: "Maggi Noodles", price: 14, image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", rating: 4.6 },
            ].map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                addToCart={() => addToCart(product)} 
              />
            ))}
          </div>
        </section>
        
        <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Special Offers</h2>
            <a href="#" className="text-orange-600 hover:text-orange-700 flex items-center">
              View All <ChevronRight className="ml-1 h-5 w-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { id: 5, name: "Surf Excel", price: 120, image: "https://images.unsplash.com/photo-1583947581924-a31d2121a2a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", rating: 4.5 },
              { id: 6, name: "Parle-G Biscuits", price: 10, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", rating: 4.8 },
              { id: 7, name: "Colgate Toothpaste", price: 55, image: "https://images.unsplash.com/photo-1559304822-9eb2813c9844?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", rating: 4.7 },
              { id: 8, name: "Britannia Milk Bread", price: 40, image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", rating: 4.6 },
            ].map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                addToCart={() => addToCart(product)} 
              />
            ))}
          </div>
        </section>
        
        <section className="bg-gradient-to-r from-orange-500 to-red-600 py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Free Delivery on Your First Order!</h2>
            <p className="text-white text-lg mb-8">Use code FIRSTORDER at checkout</p>
            <button className="bg-white text-orange-600 hover:bg-orange-100 font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Shop Now
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={toggleCart} 
        cart={cart} 
        updateQuantity={updateQuantity} 
        removeFromCart={removeFromCart} 
      />
    </div>
  );
}

export default App;