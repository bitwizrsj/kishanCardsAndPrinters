import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => {
  return (
    <motion.div 
      className="flex flex-col  sm:flex-row lg:flex-col card group hover:shadow-lg rounded-sm"
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4 p-3 bg-primary-100 inline-block group-hover:bg-gradient-to-r group-hover:from-accent-yellow-500 group-hover:to-accent-orange-500 transition-all duration-300">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover text-primary-900 transition-all duration-300" 
        />
      </div>
      <div className='ml-4 lg:ml-0 flex flex-col items-center lg:items-start p-4 '>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-orange-500 transition-all duration-300">{title}</h3>
      <ul className="list-disc list-inside text-sm text-gray-500 space-y-1 leading-snug">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;