import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Printer, FileText, ImageIcon, CircleDollarSign, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import Logo from '../components/Logo';

import offsetImage from '../../assets/services/offset.png';
import flexImage from '../../assets/services/flex.png';
import weddingImage from '../../assets/services/wedding.png';
import screenImage from '../../assets/services/screen.png';


const Home: React.FC = () => {
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
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative bg-primary-900 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-72 h-72 bg-accent-yellow-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -left-10 top-40 w-72 h-72 bg-accent-orange-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={fadeIn}
            >
              <span className="inline-block px-3 py-1 bg-accent-yellow-500/20 text-accent-yellow-500 rounded-full text-sm font-medium mb-4">
                Your Trusted Printing Partner in Jaipur
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Premium Printing Solutions for All Your Needs
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                With over 15 years of experience, we provide high-quality printing services for businesses and individuals throughout Jaipur and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Get a Quote
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
  src="https://placehold.co/600x400?text=Printing+Press+Machine" 
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

      {/* Services Preview */}
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
<ServiceCard
  image="https://img.freepik.com/free-photo/modern-manufacturing-equipment-futuristic-factory-generated-by-ai_188544-18464.jpg?ga=GA1.1.1722708618.1746429974&semt=ais_hybrid&w=740"
  title="Offset Printing"
  description="High-quality offset printing services for brochures, catalogs, posters, and more with vibrant colors and sharp details."
/>

<ServiceCard
  image="https://img.freepik.com/free-vector/set-banners-with-abstract-geometric-shapes_23-2147919423.jpg?ga=GA1.1.1722708618.1746429974&semt=ais_hybrid&w=740"
  title="Flex Printing"
  description="Large format flex printing perfect for banners, hoardings, and promotional materials with weather-resistant inks."
/>

<ServiceCard
  image="https://img.freepik.com/free-vector/hand-drawn-colorful-wedding-invitation-template_23-2148394115.jpg?ga=GA1.1.1722708618.1746429974&semt=ais_hybrid&w=740"
  title="Wedding Cards"
  description="Elegant and customized wedding invitation cards with premium paper quality and beautiful designs."
/>

<ServiceCard
  image="https://img.freepik.com/free-vector/vintage-screen-printing-badges-set_225004-855.jpg?ga=GA1.1.1722708618.1746429974&semt=ais_hybrid&w=740"
  title="Screen Printing"
  description="Professional screen printing services for fabrics, promotional items, and custom merchandise."
/>

</motion.div>

          
          <div className="text-center mt-10">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
              className="order-2 lg:order-1"
            >
              <SectionTitle
                subtitle="Why Choose Us"
                title="Quality Printing Services You Can Trust"
                description=""
                alignment="left"
              />
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-yellow-500 text-primary-900">
                      <CheckCircle2 size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Experienced Team</h3>
                    <p className="text-gray-600">
                      With over 15 years in the printing industry, our expert team delivers high-quality results.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-yellow-500 text-primary-900">
                      <CheckCircle2 size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Advanced Equipment</h3>
                    <p className="text-gray-600">
                      We use the latest printing technology to ensure superior quality for all your printing needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-yellow-500 text-primary-900">
                      <CheckCircle2 size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Quick Turnaround</h3>
                    <p className="text-gray-600">
                      We understand tight deadlines and pride ourselves on delivering projects on time.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-yellow-500 text-primary-900">
                      <CircleDollarSign size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Competitive Pricing</h3>
                    <p className="text-gray-600">
                      High-quality printing services at affordable rates to suit every budget.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.pexels.com/photos/3800456/pexels-photo-3800456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Printing press" 
                    className="rounded-lg shadow-lg"
                  />
                  <img 
                    src="https://images.pexels.com/photos/8108381/pexels-photo-8108381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Print samples" 
                    className="rounded-lg shadow-lg mt-8"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-accent-yellow-500 to-accent-orange-500 rounded-lg p-4 shadow-lg">
                  <div className="text-primary-900 font-bold text-xl">15+</div>
                  <div className="text-primary-900 text-sm">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
            <motion.div
              variants={fadeIn}
            >
              <Link to="/contact" className="btn btn-primary">
                Contact Us Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;