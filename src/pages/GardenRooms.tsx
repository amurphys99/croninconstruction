import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Clock, 
  HardHat, 
  ChevronDown, 
  Plus, 
  Minus,
  Home,
  Zap,
  Shield,
  Hammer
} from 'lucide-react';
import { useState } from 'react';
import { useQuoteModal } from '../context/QuoteModalContext';

const GardenRooms = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { openQuoteModal } = useQuoteModal();

  const faqs = [
    {
      question: "Do I need planning permission for a garden room?",
      answer: "In most cases, garden rooms fall under 'permitted development' and do not require planning permission, provided they meet certain criteria regarding height and location. We can advise you on this during our initial consultation."
    },
    {
      question: "How long does the installation take?",
      answer: "Our typical installation time is between 2 to 5 days, depending on the size and complexity of the project. We aim to minimize disruption to your home and garden."
    },
    {
      question: "Are the garden rooms insulated for year-round use?",
      answer: "Yes, all our garden rooms are fully insulated using high-quality materials, making them comfortable for use throughout the year, even in the coldest winter months."
    },
    {
      question: "What kind of base is required?",
      answer: "We typically install a specialized ground screw or concrete base system, depending on your garden's terrain. This ensures a solid, level foundation for your new room."
    }
  ];

  const features = [
    {
      icon: <Zap className="text-red-600" size={32} />,
      title: "Fully Wired",
      description: "Complete electrical package including internal/external lighting and sockets."
    },
    {
      icon: <Shield className="text-red-600" size={32} />,
      title: "Highly Secure",
      description: "Multi-point locking systems on all doors and windows for your peace of mind."
    },
    {
      icon: <Home className="text-red-600" size={32} />,
      title: "Fully Insulated",
      description: "Premium insulation in walls, floor, and roof for year-round comfort."
    },
    {
      icon: <Hammer className="text-red-600" size={32} />,
      title: "Expert Build",
      description: "Constructed by highly qualified tradesmen with years of experience."
    }
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590066305974-2694b3ef4c2b?q=80&w=2000&auto=format&fit=crop" 
            alt="Modern Garden Room" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full py-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-red-500 font-bold text-xs md:text-sm mb-4 uppercase tracking-[0.3em]">
              Premium Garden Spaces
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Bespoke Garden Rooms <br /> Tailored To Your Needs
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Create the perfect home office, gym, or relaxation space with our high-quality, fully insulated garden rooms.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={openQuoteModal} className="bg-red-600 text-white px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl">
                Get a Free Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-20 md:py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                Our Garden Rooms <span className="text-red-600">For Sale</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Cronin Construction, we specialize in creating high-quality, sustainable garden rooms that provide the extra space you need without the hassle of a traditional extension.
                </p>
                <p>
                  Whether you're looking for a quiet home office to escape the distractions of the house, a fully-equipped home gym, or a stylish entertainment space for guests, our garden rooms are designed to meet your specific requirements.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    "Quick 2-5 Day Installation",
                    "Fully Insulated Walls & Roof",
                    "Double Glazed Windows & Doors",
                    "Complete Electrical Package",
                    "Maintenance Free Options",
                    "10 Year Structural Guarantee"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="text-red-600" size={20} />
                      <span className="font-bold text-gray-800 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop" 
                  alt="Garden Room Exterior" 
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1590066305974-2694b3ef4c2b?q=80&w=600&auto=format&fit=crop" 
                  alt="Garden Room Interior" 
                  className="rounded-2xl w-full h-80 object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop" 
                  alt="Garden Room Detail" 
                  className="rounded-2xl w-full h-80 object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop" 
                  alt="Garden Room View" 
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern materials to deliver garden rooms that are built to last.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border-b-4 border-transparent hover:border-red-600">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" 
                alt="Construction Process" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">How It Works</h2>
              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: "Consultation & Design",
                    text: "We discuss your requirements, measure your space, and provide a detailed quote and design plan."
                  },
                  {
                    step: "02",
                    title: "Base Preparation",
                    text: "Our team prepares the foundation, ensuring a solid and level base for your garden room."
                  },
                  {
                    step: "03",
                    title: "On-Site Construction",
                    text: "We build your room from the ground up on-site, typically completing the structure in 2-5 days."
                  },
                  {
                    step: "04",
                    title: "Final Handover",
                    text: "Once complete, we conduct a final walkthrough to ensure everything meets our high standards."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="text-4xl font-bold text-red-100">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about our garden rooms.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900">{faq.question}</span>
                  {openFaq === idx ? <Minus size={20} className="text-red-600" /> : <Plus size={20} className="text-red-600" />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote and let's start planning your dream garden room.
          </p>
          <button onClick={openQuoteModal} className="bg-white text-red-600 px-10 py-4 rounded-sm font-bold text-lg uppercase tracking-widest hover:bg-gray-100 transition-all shadow-2xl">
            Get Your Free Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default GardenRooms;
