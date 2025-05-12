import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import FAQSection from '../components/FAQSection.tsx';

const Contact: React.FC = () => {
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
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Have questions or need a quote? Get in touch with us today and we'll be happy to assist you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl">
          <SectionTitle
            subtitle="Get In Touch"
            title="Contact Information"
            description="Reach out to us through any of the following channels. We're here to help with all your printing needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="card text-center hover:shadow-lg transition-all duration-300"
              variants={fadeIn}
            >
              <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-accent-yellow-500/20 to-accent-orange-500/20 inline-block">
                <Phone size={24} className="text-accent-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">
                +91 93146-21262<br />+91 93523-21262
              </p>
              <a 
                href="tel:+919314621262" 
                className="text-accent-orange-500 font-medium mt-4 inline-block hover:underline"
              >
                Call Now
              </a>
            </motion.div>
            
            <motion.div 
              className="card text-center hover:shadow-lg transition-all duration-300"
              variants={fadeIn}
            >
              <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-accent-yellow-500/20 to-accent-orange-500/20 inline-block">
                <Mail size={24} className="text-accent-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">
                kishancards141@gmail.com
              </p>
              <a 
                href="mailto:kishancards141@gmail.com" 
                className="text-accent-orange-500 font-medium mt-4 inline-block hover:underline"
              >
                Email Us
              </a>
            </motion.div>
            
            <motion.div 
              className="card text-center hover:shadow-lg transition-all duration-300"
              variants={fadeIn}
            >
              <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-accent-yellow-500/20 to-accent-orange-500/20 inline-block">
                <MapPin size={24} className="text-accent-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
                BPL Godam, Goner Road<br />Jaipur - 302031
              </p>
              <a 
                href="https://maps.google.com/?q=BPL+Godam,+Goner+Road,+Jaipur,+302031" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-accent-orange-500 font-medium mt-4 inline-block hover:underline"
              >
                Get Directions
              </a>
            </motion.div>
            
            <motion.div 
              className="card text-center hover:shadow-lg transition-all duration-300"
              variants={fadeIn}
            >
              <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-accent-yellow-500/20 to-accent-orange-500/20 inline-block">
                <Clock size={24} className="text-accent-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-600">
                Everyday<br />9:00 AM - 8:00 PM
              </p>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              variants={fadeIn}
            >
              <ContactForm />
            </motion.div>
            
            <motion.div
              variants={fadeIn}
            >
              <div className="h-full">
                <div className="card h-full">
                  <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
                  <div className="rounded-lg overflow-hidden h-[400px] mb-6">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.8633397174696!2d75.87627851705213!3d26.879931705704134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db77567700009%3A0x902709c46953afb!2sKishan%20Cards%20%26%20Printers!5e0!3m2!1sen!2sin!4v1746907118674!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Kishan Cards & Printers Location"
                    ></iframe>
                  </div>
                  
                  <div className="bg-gradient-to-r from-accent-yellow-500/20 to-accent-orange-500/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">How to Reach Us:</h4>
                    <p className="text-gray-600">
                      We are located at BPL Godam on Goner Road in Jaipur. The shop is easily accessible by car or public transportation. Look for our distinctive yellow and orange sign with the flower logo.
                    </p>
                    <p className="text-gray-600 mt-2">
                      If you need help finding us, please call us at +91 93146-21262 for directions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
      
      {/* Call to Action Section */}
    </motion.div>
  );
};

export default Contact;