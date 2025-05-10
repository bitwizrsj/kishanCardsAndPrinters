import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const ServicesHero = () => {
  return (
    <section className="bg-primary-900 pt-32 pb-20">
      <div className="container-custom max-w-7xl">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={fadeIn}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Discover our comprehensive range of high-quality printing services designed to meet all your printing needs.
          </motion.p>
        </div>
      </div>
    </section>
  );
};