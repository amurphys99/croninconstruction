import { motion } from 'motion/react';
import { 
  HardHat, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuoteModal } from '../context/QuoteModalContext';

const AboutUs = () => {
  const { openQuoteModal } = useQuoteModal();
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center text-center text-white overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590066305974-2694b3ef4c2b?q=80&w=2000&auto=format&fit=crop" 
            alt="About Us Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Supplying Garden rooms throughout the North and South of Ireland. Ideal for adding more space and value to your home.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" 
                alt="Cronin Construction Garden Room" 
                className="w-full h-full object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-6 sm:mb-8">Cronin Construction - Garden Rooms</h2>
              <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                <p>
                  Cronin Construction is a professional, family run business, established in 2009. We consist of a group of highly qualified tradesmen and offer a range of joinery services. Majority of our projects are completed for highly recognised construction companies throughout Ireland.
                </p>
                <p>
                  At <Link to="/garden-rooms" className="text-red-600 font-bold hover:underline">Garden Rooms</Link> by Cronin Construction, we aim to have our insulated garden buildings completed within 2-5 days. We will guide you on lead time on receipt of deposit. Our garden rooms are built on site, from initial phase to completion, leaving you with a sustainable, low maintenance room.
                </p>
                <p>
                  With our quick turn-around time we aim to minimise disruption for you, while maximising your home space and comfort. We will confirm your booking with a 10% deposit, and then proceed to collect 50% payment on day one of installation, following by 40% on completion day.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-10">
                {[
                  "Bespoke Specification",
                  "Quick Turnaround",
                  "Deposit Payment",
                  "Aftercare Support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-red-50 p-1 rounded-full">
                      <CheckCircle2 className="text-red-600" size={20} />
                    </div>
                    <span className="font-bold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-red-600 mb-6"
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg"
          >
            Our garden rooms are completed to the highest standard of a builder’s finish. We are very keen to adapt our garden rooms specifically to each individual, ensuring high quality and a personalised finish.
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <HardHat size={32} />,
                title: "Reliable & Qualified Experts",
                text: "We consist of a group of highly qualified tradesmen and are now very proud specialists in insulated garden rooms, serving all across Ireland."
              },
              {
                icon: <Clock size={32} />,
                title: "Quick Turnaround",
                text: "We aim to have our insulated garden buildings completed within 3-5 days to minimise disruption for you."
              },
              {
                icon: <Clock size={32} />,
                title: "Competitive & Flexible Prices",
                text: "Confirm your booking with a deposit, then then make part-payment on day one of installation followed by final payment on completion day. *Finance options now available"
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
            {/* Mission */}
            <div className="grid md:grid-cols-3 gap-12 items-start">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                  <Target size={28} />
                </div>
                <h3 className="text-3xl font-bold text-red-600">Our Mission</h3>
              </div>
              <div className="md:col-span-2 space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Our mission is to help people create their perfect space with our garden room installations. We believe that everyone deserves a comfortable and inviting space to relax and unwind, whether it’s for work or play. Our goal is to make this a reality for our customers by providing them with high-quality garden rooms that are tailored to their individual needs and preferences.
                </p>
                <p>
                  We are committed to delivering exceptional customer service throughout the entire process, from the initial consultation to the final installation. We understand that our customers’ time is valuable, which is why we strive to work efficiently without sacrificing quality or attention to detail. Our team of experienced professionals takes pride in their work and always goes the extra mile to ensure our customers are completely satisfied.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="grid md:grid-cols-3 gap-12 items-start">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                  <Eye size={28} />
                </div>
                <h3 className="text-3xl font-bold text-red-600">Our Vision</h3>
              </div>
              <div className="md:col-span-2 space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Cronin Construction – Garden Rooms, we are passionate about creating beautiful and functional garden rooms that enhance our customers’ lives. We are constantly pushing ourselves to innovate and improve our products and services, always striving to exceed expectations. Whether our customers are looking for a quiet retreat, a home office, or a space to entertain guests, we are dedicated to making their vision a reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop" 
            alt="CTA Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-red-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-900/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Need A Free Quote?</h2>
            <p className="text-xl text-red-100 mb-10 leading-relaxed">
              Give us a call to discuss any requests you have, we would be glad to assist and can provide competitive quotes for our services.
            </p>
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={openQuoteModal}
                className="bg-white text-red-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center gap-2"
              >
                Get a Free Quote <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
