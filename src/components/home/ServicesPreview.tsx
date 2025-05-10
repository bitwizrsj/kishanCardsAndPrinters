import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle';
import ServiceCard from '../ServiceCard';
import { services } from '../../data/servicesData'; // Import the data

const ServicesPreview = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-7xl">
        <SectionTitle
          subtitle="What We Offer"
          title="Our Premium Printing Services"
          description="We provide a wide range of high-quality printing services tailored to meet your specific needs and requirements."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
        
        <div className="text-center mt-10">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;