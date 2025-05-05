import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Printer, FileText, ImageIcon, PenTool, Palette, BookOpen } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Services: React.FC = () => {
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

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl">
          <SectionTitle
            subtitle="What We Offer"
            title="Our Premium Printing Services"
            description="We provide a wide range of printing solutions using state-of-the-art technology and premium materials to ensure exceptional quality for every project."
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div 
              className="card overflow-hidden group"
              variants={fadeIn}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Offset Printing" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end p-4">
                  <h3 className="text-white text-xl font-semibold">Offset Printing</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Our offset printing delivers superior print quality with vibrant colors and sharp details. Perfect for brochures, catalogs, flyers, posters, and other promotional materials.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>High-quality image reproduction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>Cost-effective for large print runs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>Wide range of paper options</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="card overflow-hidden group"
              variants={fadeIn}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.pexels.com/photos/6667298/pexels-photo-6667298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Flex Printing" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end p-4">
                  <h3 className="text-white text-xl font-semibold">Flex Printing</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Our large format flex printing is ideal for banners, hoardings, signage, and other outdoor advertising materials, with durable inks that withstand weather conditions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>Weather-resistant materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>Vibrant, eye-catching colors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>Custom sizes and formats</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="card overflow-hidden group"
              variants={fadeIn}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.pexels.com/photos/12806627/pexels-photo-12806627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Screen Printing" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end p-4">
                  <h3 className="text-white text-xl font-semibold">Screen Printing</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Our screen printing services are perfect for t-shirts, fabrics, merchandise, and promotional items, delivering consistent and durable results.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>Suitable for various materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>Long-lasting, vibrant prints</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>Custom color matching available</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="card overflow-hidden group"
              variants={fadeIn}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.pexels.com/photos/5709020/pexels-photo-5709020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Wedding Cards" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end p-4">
                  <h3 className="text-white text-xl font-semibold">Wedding Cards</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  We specialize in designing and printing elegant wedding invitation cards with premium paper quality and beautiful designs to make your special day memorable.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>Customized designs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>Premium paper options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>Elegant finishing options</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="card overflow-hidden group"
              variants={fadeIn}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Business Cards" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end p-4">
                  <h3 className="text-white text-xl font-semibold">Business Cards</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Make a lasting impression with our professional business cards. We offer a variety of finishes, paper stocks, and designs to reflect your brand identity.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>Professional designs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>Premium finishing options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>Quick turnaround time</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="card overflow-hidden group"
              variants={fadeIn}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Stationery Printing" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end p-4">
                  <h3 className="text-white text-xl font-semibold">Stationery Printing</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Complete your brand identity with our comprehensive stationery printing services, including letterheads, envelopes, notepads, and more.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>Consistent brand identity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>High-quality paper options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-yellow-500 mr-2">✓</span>
                    <span>Bulk order discounts</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-7xl">
          <SectionTitle
            subtitle="Our Process"
            title="How We Work"
            description="Our streamlined printing process ensures that your project is completed efficiently while maintaining the highest quality standards."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              variants={fadeIn}
            >
              <div className="relative mb-6 inline-block">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent-yellow-500 to-accent-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Consultation</h3>
              <p className="text-gray-600">
                We begin with a detailed discussion to understand your requirements, preferences, and project timeline.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={fadeIn}
            >
              <div className="relative mb-6 inline-block">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent-yellow-500 to-accent-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Design & Proof</h3>
              <p className="text-gray-600">
                Our design team creates or refines your design, and we provide a proof for your approval before printing.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={fadeIn}
            >
              <div className="relative mb-6 inline-block">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent-yellow-500 to-accent-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Production</h3>
              <p className="text-gray-600">
                Once approved, your project enters our production process, where we use state-of-the-art equipment to ensure quality.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={fadeIn}
            >
              <div className="relative mb-6 inline-block">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent-yellow-500 to-accent-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Delivery</h3>
              <p className="text-gray-600">
                We complete the project within the agreed timeline and deliver the final product to your specified location.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
            >
              <SectionTitle
                subtitle="Our Technology"
                title="Advanced Printing Equipment"
                description="We invest in the latest printing technology to deliver superior quality and efficiency for all your printing needs."
                alignment="left"
              />
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Printer size={24} className="text-accent-orange-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Digital Printing</h3>
                    <p className="text-gray-600">
                      Our state-of-the-art digital printers allow for quick turnaround times without compromising on quality, making them perfect for short to medium print runs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <PenTool size={24} className="text-accent-orange-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">CNC Cutting Machines</h3>
                    <p className="text-gray-600">
                      Precision cutting for custom shapes and sizes, ensuring clean edges and accurate dimensions for all your printing materials.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Palette size={24} className="text-accent-orange-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Color Calibration Systems</h3>
                    <p className="text-gray-600">
                      Advanced color management systems to ensure consistent and accurate color reproduction across all your printed materials.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <BookOpen size={24} className="text-accent-orange-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Binding & Finishing Equipment</h3>
                    <p className="text-gray-600">
                      Complete in-house binding and finishing capabilities, including lamination, embossing, die-cutting, and more for a professional finish.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/6033993/pexels-photo-6033993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Printing technology" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-accent-yellow-500 to-accent-orange-500 p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-primary-900 font-semibold">
                  "We continuously invest in cutting-edge technology to deliver exceptional quality and value to our customers."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-900 py-16">
        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Printing Project?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Contact us today for a free consultation and quote. Our team is ready to bring your printing ideas to life with quality and excellence.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Get a Free Quote
              </Link>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Why Choose Our Services?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent-yellow-500 mr-2">✓</span>
                  <span className="text-gray-600">High-quality printing with attention to detail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-yellow-500 mr-2">✓</span>
                  <span className="text-gray-600">Timely delivery and professional service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-yellow-500 mr-2">✓</span>
                  <span className="text-gray-600">Competitive pricing with no hidden costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-yellow-500 mr-2">✓</span>
                  <span className="text-gray-600">Experienced team with industry expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-yellow-500 mr-2">✓</span>
                  <span className="text-gray-600">Customized solutions for your specific needs</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;