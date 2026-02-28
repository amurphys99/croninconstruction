import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Clock, 
  HardHat, 
  Plus, 
  Minus,
  Home,
  Zap,
  Shield,
  Hammer,
  Layout
} from 'lucide-react';
import { useState } from 'react';
import { useQuoteModal } from '../context/QuoteModalContext';

const Extensions = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { openQuoteModal } = useQuoteModal();

  const faqs = [
    {
      question: "Do I need planning permission for a home extension?",
      answer: "Many single-story extensions fall under 'permitted development' and don't require full planning permission, provided they meet specific size and height limits. However, Building Regulations approval is always mandatory. We can help you determine if your project needs planning and handle the application process."
    },
    {
      question: "How long does a typical extension take to build?",
      answer: "A single-story extension usually takes between 8 to 12 weeks to complete, depending on the size and complexity. This includes the groundworks, structural build, and internal finishes."
    },
    {
      question: "Will I need to move out during the construction?",
      answer: "In most cases, you can stay in your home. We work hard to minimize disruption and maintain a clean, safe site. We'll discuss the logistics with you during the planning phase to ensure your comfort."
    },
    {
      question: "Can you help with the design and architectural drawings?",
      answer: "Yes, we offer a full design-and-build service. We can work with your existing plans or help you create new ones with our partner architects and structural engineers."
    }
  ];

  const features = [
    {
      icon: <Layout className="text-red-600" size={32} />,
      title: "Custom Design",
      description: "Tailored layouts to perfectly suit your lifestyle, from open-plan kitchens to extra living areas."
    },
    {
      icon: <Shield className="text-red-600" size={32} />,
      title: "Quality Materials",
      description: "We use only high-grade materials that match or complement your existing home's aesthetic."
    },
    {
      icon: <Home className="text-red-600" size={32} />,
      title: "Energy Efficient",
      description: "Modern insulation and glazing to ensure your new space is warm in winter and cool in summer."
    },
    {
      icon: <Hammer className="text-red-600" size={32} />,
      title: "Full Management",
      description: "We handle everything from groundworks and bricklaying to plumbing, electrics, and final decoration."
    }
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop" 
            alt="Modern Home Extension" 
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
              Single Story Extensions
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Expand Your Living <br /> Space & Home Value
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Create the extra room you've always wanted with our professional, high-quality home extension services.
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
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Professional <span className="text-red-600">Home Extensions</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  A home extension is a fantastic way to transform your living experience without the cost and stress of moving house. At Cronin Construction, we specialize in single-story extensions that seamlessly blend with your existing property.
                </p>
                <p>
                  From open-plan kitchen-diners to additional living rooms or home offices, we work closely with you to design and build a space that perfectly fits your needs and budget. Our team manages every aspect of the project, ensuring a high-quality finish and a smooth construction process.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    "Architectural Design",
                    "Full Project Management",
                    "Groundworks & Foundations",
                    "Expert Brickwork & Roofing",
                    "Plumbing & Electrical",
                    "Building Regs Approval"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="text-red-600" size={20} />
                      <span className="font-bold text-gray-800 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop" 
                  alt="Modern Kitchen Extension" 
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop" 
                  alt="Extension Exterior" 
                  className="rounded-2xl w-full h-80 object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600&auto=format&fit=crop" 
                  alt="Open Plan Living" 
                  className="rounded-2xl w-full h-80 object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop" 
                  alt="Extension Interior" 
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring years of construction expertise to every extension project, ensuring a stress-free experience and a premium finish.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
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
                alt="Extension Build Process" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">The Extension Process</h2>
              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: "Consultation & Design",
                    text: "We discuss your requirements, measure your space, and provide a detailed quote and design plan."
                  },
                  {
                    step: "02",
                    title: "Groundworks",
                    text: "Our team prepares the site, digs foundations, and installs drainage and utilities."
                  },
                  {
                    step: "03",
                    title: "Structural Build",
                    text: "We build the walls, install the roof, and fit windows and doors to make the extension watertight."
                  },
                  {
                    step: "04",
                    title: "Internal Finish",
                    text: "Plumbing, electrics, plastering, and final decoration are completed to our exacting standards."
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Common questions about home extensions.</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Expand Your Home?</h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Contact us today for a free consultation and see how we can transform your living space.
          </p>
          <button onClick={openQuoteModal} className="bg-white text-red-600 px-10 py-4 rounded-sm font-bold text-lg uppercase tracking-widest hover:bg-gray-100 transition-all shadow-2xl">
            Get Your Free Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Extensions;
