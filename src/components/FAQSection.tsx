import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../data/FAQData.ts';
import SectionTitle from '../components/SectionTitle';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};


const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white py-16 md:py-24">
      <div className="container-custom max-w-7xl">
          <SectionTitle
            subtitle="Quick Answers"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our printing services and processes."
          />
        
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqData.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-6"
              variants={itemVariants}
            >
              <div 
                className={`card bg-white rounded-lg shadow-sm border border-accent-yellow-200 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'shadow-md' : ''
                }`}
              >
                <div 
                  className="flex justify-between items-center p-2 cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <div className="text-gray-500 flex-shrink-0">
                    {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
                
                <div 
                  className={`px-2 transition-all duration-300 overflow-hidden ${
                    openIndex === index ? 'pb-5 max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;