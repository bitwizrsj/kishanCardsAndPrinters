import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import Logo from '../Logo';
import img1 from '../../assets/hero.jpeg'

const HeroSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative bg-primary-900 pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-accent-yellow-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-10 top-40 w-72 h-72 bg-accent-orange-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeIn}>
            <span className="inline-block px-3 py-1 bg-accent-yellow-500/20 text-accent-yellow-500 rounded-full text-sm font-medium mb-4">
              Your Trusted Printing Partner in Jaipur
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Premium Printing Solutions for All Your Needs
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              With over 35 years of experience, we provide high-quality printing services for businesses and individuals throughout Jaipur and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/services" className="btn btn-outline">
                Explore Services
              </Link>
            </div>
            
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex items-center">
                <CheckCircle2 className="text-accent-yellow-500 mr-2" size={20} />
                <span className="text-white">Quality Service</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-accent-yellow-500 mr-2" size={20} />
                <span className="text-white">Affordable Rates</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-accent-yellow-500 mr-2" size={20} />
                <span className="text-white">Quick Turnaround</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <div className="w-72 h-72 bg-gradient-to-br from-accent-yellow-500 to-accent-orange-500 rounded-full blur-xl opacity-20 absolute transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative bg-white p-2 rounded-xl shadow-2xl rotate-3 z-10">
                <img 
                  src={img1}
                  alt="Printing press machine" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-lg -rotate-6 z-20">
                <Logo className="h-16 w-16 text-accent-yellow-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;