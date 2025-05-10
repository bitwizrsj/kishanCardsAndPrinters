import { motion } from 'framer-motion';
import { Printer, PenTool, Palette, BookOpen } from 'lucide-react';
import { technologies } from '../../data/servicesData';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const getIconComponent = (iconName: string) => {
  switch(iconName) {
    case 'Printer': return <Printer size={24} className="text-accent-orange-500" />;
    case 'PenTool': return <PenTool size={24} className="text-accent-orange-500" />;
    // Add other icons...
    default: return null;
  }
};

export const TechnologiesSection = () => {
  return (
    <div className="space-y-6">
      {technologies.map((tech) => (
        <div key={tech.title} className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            {getIconComponent(tech.icon)}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold mb-1">{tech.title}</h3>
            <p className="text-gray-600">{tech.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};