import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

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
      <section className="section-padding bg-gray-50">
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56914.02331122273!2d75.7652422671388!3d26.85448329587283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5196f4b2191%3A0x71a7d24eb53af3a3!2sGoner%20Rd%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1697606154321!5m2!1sen!2sin" 
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
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl">
          <SectionTitle
            subtitle="Quick Answers"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our printing services and processes."
          />
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="mb-6"
              variants={fadeIn}
            >
              <div className="card">
                <h3 className="text-lg font-semibold mb-2">What types of printing services do you offer?</h3>
                <p className="text-gray-600">
                  We offer a wide range of printing services including offset printing, flex printing, screen printing, wedding cards, business cards, and stationery printing. We can handle almost any printing need you might have.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="mb-6"
              variants={fadeIn}
            >
              <div className="card">
                <h3 className="text-lg font-semibold mb-2">How long does it take to complete a printing order?</h3>
                <p className="text-gray-600">
                  Turnaround times vary depending on the type of project, quantity, and complexity. Simple jobs like business cards might take 1-2 business days, while more complex projects like wedding cards or catalogs might take 3-7 business days. We always provide an estimated completion date when you place an order.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="mb-6"
              variants={fadeIn}
            >
              <div className="card">
                <h3 className="text-lg font-semibold mb-2">Do you provide design services?</h3>
                <p className="text-gray-600">
                  Yes, we offer professional design services for all our printing products. Our experienced designers can create custom designs based on your requirements or refine your existing designs for optimal print quality.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="mb-6"
              variants={fadeIn}
            >
              <div className="card">
                <h3 className="text-lg font-semibold mb-2">How do I get a quote for my printing project?</h3>
                <p className="text-gray-600">
                  You can get a quote by contacting us via phone, email, or by filling out the contact form on our website. Please provide details about your project including the type of printing, quantity, size, paper quality, and any special requirements to help us provide an accurate quote.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
            >
              <div className="card">
                <h3 className="text-lg font-semibold mb-2">Do you offer rush orders or expedited services?</h3>
                <p className="text-gray-600">
                  Yes, we understand that sometimes you need prints quickly. We offer rush order services for an additional fee, depending on our current production schedule and the complexity of your project. Please contact us directly to discuss your specific deadline requirements.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;