import { motion } from 'framer-motion';
import { processSteps } from '../../data/servicesData';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const ProcessSteps = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {processSteps.map((step) => (
        <motion.div 
          key={step.number}
          className="text-center"
          variants={fadeIn}
        >
          <div className="relative mb-6 inline-block">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent-yellow-500 to-accent-orange-500 flex items-center justify-center text-white text-2xl font-bold">
              {step.number}
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
};