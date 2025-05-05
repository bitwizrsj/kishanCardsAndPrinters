import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  image: string; // path to the image
  title: string;
  description: string;
}


const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => {
  return (
    <motion.div 
      className="card group hover:shadow-lg"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4 p-3 bg-primary-100 inline-block group-hover:bg-gradient-to-r group-hover:from-accent-yellow-500 group-hover:to-accent-orange-500 transition-all duration-300">
        <img 
          src={image} 
          alt={title} 
          className="w-full min-w-52 h-56 object-cover text-primary-900 transition-all duration-300" 
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-orange-500 transition-all duration-300">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};


export default ServiceCard;