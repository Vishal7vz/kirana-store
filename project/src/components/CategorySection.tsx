import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  image: string;
}

interface CategorySectionProps {
  title: string;
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, categories }) => {
  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <a href="#" className="text-orange-600 hover:text-orange-700 flex items-center">
          View All <ChevronRight className="ml-1 h-5 w-5" />
        </a>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map(category => (
          <a 
            key={category.id}
            href="#" 
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
              <div className="h-32 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
              </div>
              <div className="p-4 text-center bg-gradient-to-r from-orange-500 to-red-600 text-white">
                <h3 className="font-medium">{category.name}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;