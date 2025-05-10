import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="bg-primary-900 py-16">
      <div className="container-custom max-w-7xl">
        <div className="text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            variants={fadeIn}
          >
            Ready to Get Started with Your Printing Project?
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Contact us today for a free consultation and quote. We're here to bring your printing ideas to life.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link to="/contact" className="btn btn-primary">
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;