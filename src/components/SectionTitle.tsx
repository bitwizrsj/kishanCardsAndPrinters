import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  subtitle, 
  title, 
  description, 
  alignment = 'center' 
}) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="inline-block px-3 py-1 bg-gradient-to-r from-accent-yellow-500/20 to-accent-orange-500/20 text-accent-orange-500 rounded-full text-sm font-medium mb-2">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;