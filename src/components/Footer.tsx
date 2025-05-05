import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Printer, Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-10 w-10 text-accent-yellow-500" />
              <div className="ml-3">
                <span className="text-accent-yellow-500 font-bold text-xl block">Kishan Cards</span>
                <span className="text-white text-sm block">& Printers</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your Trusted Printing Partner in Jaipur since 2005. Quality printing services for all your needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent-yellow-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-yellow-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-yellow-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact Us</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Get a Quote</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li className="flex items-center footer-link">
                <Printer size={16} className="mr-2" />
                <span>All Types of Printing Jobs</span>
              </li>
              <li className="flex items-center footer-link">
                <Printer size={16} className="mr-2" />
                <span>Flex Printing</span>
              </li>
              <li className="flex items-center footer-link">
                <Printer size={16} className="mr-2" />
                <span>Offset Printing</span>
              </li>
              <li className="flex items-center footer-link">
                <Printer size={16} className="mr-2" />
                <span>Screen Printing</span>
              </li>
              <li className="flex items-center footer-link">
                <Printer size={16} className="mr-2" />
                <span>Wedding Cards</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="text-accent-yellow-500 mr-3 flex-shrink-0" size={20} />
                <span>BPL Godam, Goner Road, Jaipur - 302031</span>
              </li>
              <li className="flex">
                <Phone className="text-accent-yellow-500 mr-3 flex-shrink-0" size={20} />
                <span>+91 93146-21262, 93523-21262</span>
              </li>
              <li className="flex">
                <Mail className="text-accent-yellow-500 mr-3 flex-shrink-0" size={20} />
                <span>kishancards141@gmail.com</span>
              </li>
              <li className="flex">
                <Clock className="text-accent-yellow-500 mr-3 flex-shrink-0" size={20} />
                <div>
                  <span className="block">Mon - Sat: 9:00 AM - 7:00 PM</span>
                  <span className="block">Sunday: Closed</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Kishan Cards & Printers. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Owners: Gopal Meena, B.S. Meena
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;