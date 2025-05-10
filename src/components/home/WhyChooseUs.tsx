import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, CircleDollarSign } from 'lucide-react';
import SectionTitle from '../SectionTitle';

const WhyChooseUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
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
                  src="https://img.freepik.com/free-photo/modern-printing-press-creates-colorful-documents-indoors-generated-by-ai_188544-22624.jpg?t=st=1746873475~exp=1746877075~hmac=af4d2fa57d50a1f71b9d94941728140ef3577b9861c48b257c8825bce0a9698d&w=1380" 
                  alt="Printing press" 
                  className="rounded-lg shadow-lg"
                />
                <img 
                  src="https://img.freepik.com/free-photo/still-life-cmyk-toners-composition_23-2149120717.jpg?t=st=1746873538~exp=1746877138~hmac=5885554a940901d72c072a6b751388bf97085cd701e73ca649eec0ead3d8c7c8&w=1380" 
                  alt="Print samples" 
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-accent-yellow-500 to-accent-orange-500 rounded-lg p-4 shadow-lg">
                <div className="text-primary-900 font-bold text-xl">35+</div>
                <div className="text-primary-900 text-sm">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;