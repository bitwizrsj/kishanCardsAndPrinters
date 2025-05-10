import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Trophy, CalendarDays, Printer } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Logo from '../components/Logo';

const About: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
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
              About Us
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Learn about our journey, our team, and our commitment to delivering excellence in printing services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
              className="order-2 lg:order-1"
            >
              <SectionTitle
                subtitle="Our Story"
                title="A Legacy of Excellence in Printing"
                description=""
                alignment="left"
              />
              
              <p className="text-gray-600 mb-6">
                Kishan Cards & Printers was established in 2005 by Gopal Meena and B.S. Meena with a vision to provide high-quality printing services in Jaipur. What started as a small printing shop has now grown into a comprehensive printing solutions provider serving clients across Rajasthan.
              </p>
              
              <p className="text-gray-600 mb-6">
                Our journey has been marked by a constant pursuit of excellence, embracing new printing technologies, and expanding our service offerings to meet the evolving needs of our customers.
              </p>
              
              <p className="text-gray-600 mb-6">
                Today, we take pride in being a trusted name in the printing industry, known for our commitment to quality, attention to detail, and customer satisfaction.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
                <div className="text-center">
                  <div className="text-accent-orange-500 text-3xl font-bold">35+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-accent-orange-500 text-3xl font-bold">5000+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-accent-orange-500 text-3xl font-bold">1000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-accent-orange-500 text-3xl font-bold">10+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-accent-yellow-500 to-accent-orange-500 rounded-tl-[80px] rounded-br-[80px] p-1">
                  <img 
                    src="https://images.pexels.com/photos/5816285/pexels-photo-5816285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Our printing shop" 
                    className="rounded-tl-[80px] rounded-br-[80px] h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-full shadow-lg">
                  <Logo className="h-16 w-16 text-accent-yellow-500" />
                </div>
                <div className="absolute -top-6 -right-6 bg-white px-6 py-3 rounded-full shadow-lg text-primary-900 font-bold">
                  Since 2005
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Owners */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-7xl">
          <SectionTitle
            subtitle="Leadership"
            title="Meet the Owners"
            description="Get to know the visionaries behind Kishan Cards & Printers who have built the business with dedication and expertise."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="card text-center"
              variants={fadeIn}
            >
              <div className="relative mb-6 inline-block">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent-yellow-500">
                  <img 
                    src="https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Gopal Meena" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Gopal Meena</h3>
              <p className="text-accent-orange-500 mb-4">Co-founder & Managing Director</p>
              <p className="text-gray-600 mb-6">
                With over 20 years of experience in the printing industry, Gopal brings expertise and innovation to every project. His commitment to quality has been the driving force behind our success.
              </p>
              {/* <div className="flex justify-center space-x-4">
                <a href="#" className="text-primary-900 hover:text-accent-yellow-500 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="text-primary-900 hover:text-accent-yellow-500 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </div> */}
            </motion.div>
            
            <motion.div 
              className="card text-center"
              variants={fadeIn}
            >
              <div className="relative mb-6 inline-block">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent-yellow-500">
                  <img 
                    src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="B.S. Meena" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">B.S. Meena</h3>
              <p className="text-accent-orange-500 mb-4">Co-founder & Technical Director</p>
              <p className="text-gray-600 mb-6">
                B.S. Meena oversees the technical aspects of our printing operations, ensuring we utilize the latest technologies to deliver superior results. His technical expertise has been crucial to our growth.
              </p>
              {/* <div className="flex justify-center space-x-4">
                <a href="#" className="text-primary-900 hover:text-accent-yellow-500 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="text-primary-900 hover:text-accent-yellow-500 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom text-white max-w-7xl">
          <SectionTitle 
            subtitle="Our Values"
            title="Principles That Guide Us"
            description="At Kishan Cards & Printers, we are guided by core values that define our approach to business and customer service."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="card text-center bg-gray-700 hover:border-l-4 hover:border-accent-yellow-500 transition-all duration-300"
              variants={fadeIn}
            >
              <div className="mb-6 inline-block p-3 rounded-full bg-gradient-to-r from-accent-yellow-500/20 to-accent-orange-500/20">
                <Trophy 
                  size={40} 
                  className="text-accent-orange-500" 
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-50 mb-4">Excellence</h3>
              <p className="text-gray-100">
                We are committed to delivering excellence in every project we undertake, regardless of size or complexity.
              </p>
            </motion.div>
            
            <motion.div 
              className="card text-center bg-gray-700 hover:border-l-4 hover:border-accent-yellow-500 transition-all duration-300"
              variants={fadeIn}
            >
              <div className="mb-6 inline-block p-3 rounded-full bg-gradient-to-r from-accent-yellow-500/20 to-accent-orange-500/20">
                <Users 
                  size={40} 
                  className="text-accent-orange-500" 
                />
              </div>
              <h3 className="text-xl text-gray-50 font-semibold mb-4">Customer First</h3>
              <p className="text-gray-100">
                Our customers are at the heart of everything we do. We strive to exceed expectations and build lasting relationships.
              </p>
            </motion.div>
            
            <motion.div 
              className="card text-center bg-gray-700  hover:border-l-4 hover:border-accent-yellow-500 transition-all duration-300"
              variants={fadeIn}
            >
              <div className="mb-6 inline-block p-3 rounded-full bg-gradient-to-r from-accent-yellow-500/20 to-accent-orange-500/20">
                <Printer 
                  size={40} 
                  className="text-accent-orange-500" 
                />
              </div>
              <h3 className="text-xl text-gray-50 font-semibold mb-4">Innovation</h3>
              <p className="text-gray-100">
                We continuously embrace new technologies and techniques to provide cutting-edge printing solutions for our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-7xl">
          <SectionTitle
            subtitle="Our Journey"
            title="Key Milestones"
            description="A look at our growth and evolution over the years as we've expanded our services and capabilities."
          />
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent-yellow-500 to-accent-orange-500 rounded-full"></div>
            
            <div className="space-y-12">
              <motion.div 
                className="relative"
                variants={fadeIn}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="w-10 h-10 rounded-full bg-accent-yellow-500 text-primary-900 flex items-center justify-center">
                    <CalendarDays size={20} />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-semibold mb-2">2005</h3>
                    <div className="card">
                      <h4 className="text-lg font-medium mb-2 text-accent-orange-500">Foundation</h4>
                      <p className="text-gray-600">
                        Kishan Cards & Printers was established by Gopal Meena and B.S. Meena in Jaipur with a small printing shop.
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:pl-12 mt-8 md:mt-0">
                    {/* Empty column for alignment */}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                variants={fadeIn}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="w-10 h-10 rounded-full bg-accent-yellow-500 text-primary-900 flex items-center justify-center">
                    <CalendarDays size={20} />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 hidden md:block">
                    {/* Empty column for alignment */}
                  </div>
                  
                  <div className="md:pl-12">
                    <h3 className="text-xl font-semibold mb-2">2010</h3>
                    <div className="card">
                      <h4 className="text-lg font-medium mb-2 text-accent-orange-500">Expansion</h4>
                      <p className="text-gray-600">
                        Expanded our services to include flex printing and invested in advanced offset printing machines.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                variants={fadeIn}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="w-10 h-10 rounded-full bg-accent-yellow-500 text-primary-900 flex items-center justify-center">
                    <CalendarDays size={20} />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-semibold mb-2">2015</h3>
                    <div className="card">
                      <h4 className="text-lg font-medium mb-2 text-accent-orange-500">Growth</h4>
                      <p className="text-gray-600">
                        Moved to a larger facility at BPL Godam, Goner Road, and expanded our team to 10 skilled professionals.
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:pl-12 mt-8 md:mt-0">
                    {/* Empty column for alignment */}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                variants={fadeIn}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="w-10 h-10 rounded-full bg-accent-yellow-500 text-primary-900 flex items-center justify-center">
                    <CalendarDays size={20} />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 hidden md:block">
                    {/* Empty column for alignment */}
                  </div>
                  
                  <div className="md:pl-12">
                    <h3 className="text-xl font-semibold mb-2">Present</h3>
                    <div className="card">
                      <h4 className="text-lg font-medium mb-2 text-accent-orange-500">Industry Leader</h4>
                      <p className="text-gray-600">
                        Today, we're a comprehensive printing solutions provider with state-of-the-art equipment and a reputation for excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-900 py-16">
        <div className="container-custom">
          <div className="text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              variants={fadeIn}
            >
              Ready to Work With Us?
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Contact our team today to discuss your printing needs and get a customized quote.
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

export default About;