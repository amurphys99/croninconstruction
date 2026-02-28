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
  Lightbulb
} from 'lucide-react';
import { useState } from 'react';
import { useQuoteModal } from '../context/QuoteModalContext';

const AtticConversions = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { openQuoteModal } = useQuoteModal();

  const faqs = [
    {
      question: "Do I need planning permission for an attic conversion?",
      answer: "Most attic conversions fall under 'permitted development' and don't require full planning permission, provided they don't exceed certain volume limits. However, Building Regulations approval is always mandatory. We handle all the necessary paperwork and compliance for you."
    },
    {
      question: "How long does an attic conversion take?",
      answer: "A typical attic conversion takes between 4 to 8 weeks to complete, depending on the type (Velux, Dormer, or Hip-to-Gable) and the complexity of the internal finish."
    },
    {
      question: "Will an attic conversion add value to my home?",
      answer: "Yes, an attic conversion is one of the best ways to increase your property's value. On average, a well-executed conversion can add between 15% to 20% to the market value of your home."
    },
    {
      question: "Can any attic be converted?",
      answer: "Most attics can be converted if there is enough head height (typically 2.2m at the highest point). If your head height is lower, we can discuss options like lowering the ceilings of the rooms below or raising the roof line."
    }
  ];

  const features = [
    {
      icon: <Lightbulb className="text-red-600" size={32} />,
      title: "Natural Light",
      description: "Strategic placement of Velux windows or Dormers to flood your new space with sunlight."
    },
    {
      icon: <Shield className="text-red-600" size={32} />,
      title: "Structural Integrity",
      description: "Expert structural engineering to ensure your home remains safe and sound throughout the build."
    },
    {
      icon: <Home className="text-red-600" size={32} />,
      title: "Seamless Integration",
      description: "We design stairs and finishes that match your existing home perfectly for a natural look."
    },
    {
      icon: <Hammer className="text-red-600" size={32} />,
      title: "Full Management",
      description: "From initial design and structural calcs to plumbing, electrics, and final plastering."
    }
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="/attic-bedroom-1.png" 
            alt="Modern Attic Conversion" 
            className="w-full h-full object-cover"
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
              Expert Attic Conversions
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Maximize Your Home's <br /> Potential & Value
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Transform your unused attic into a stunning new bedroom, home office, or living area with Cronin Construction.
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
                Professional <span className="text-red-600">Attic Conversions</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  An attic conversion is one of the most cost-effective ways to add significant living space and value to your home. At Cronin Construction, we specialize in high-quality conversions that feel like a natural part of your house.
                </p>
                <p>
                  Our team of experts handles everything from the initial structural assessment and design to the final decorative touches. We ensure that every conversion meets strict building regulations while maximizing the available space and light.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    "Structural Engineering",
                    "Velux & Dormer Options",
                    "Bespoke Staircase Design",
                    "Full Insulation Upgrade",
                    "Plumbing & Electrical",
                    "Building Regs Compliance"
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
                  src="/attic-bedroom-1.png" 
                  alt="Attic Bedroom" 
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                />
                <img 
                  src="/attic-cinema.png" 
                  alt="Attic Home Cinema" 
                  className="rounded-2xl w-full h-80 object-cover shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="/attic-bedroom-2.png" 
                  alt="Attic Master Bedroom" 
                  className="rounded-2xl w-full h-80 object-cover shadow-lg"
                />
                <img 
                  src="/attic-living.png" 
                  alt="Attic Living Area" 
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
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
              We bring years of construction expertise to every attic project, ensuring a stress-free experience and a premium finish.
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
                src="/attic-cinema.png" 
                alt="Attic Conversion - Home Cinema" 
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">The Conversion Process</h2>
              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: "Initial Survey",
                    text: "We assess your attic's suitability, check head height, and discuss your vision for the space."
                  },
                  {
                    step: "02",
                    title: "Design & Planning",
                    text: "Our architects create detailed plans and structural calculations for building control approval."
                  },
                  {
                    step: "03",
                    title: "Structural Build",
                    text: "We install floor joists, steel beams, and windows, followed by internal partitioning and stairs."
                  },
                  {
                    step: "04",
                    title: "Internal Finish",
                    text: "Plumbing, electrics, plastering, and woodwork are completed to our exacting standards."
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
            <p className="text-gray-600">Common questions about attic conversions.</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Convert Your Attic?</h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Contact us today for a free consultation and see how we can transform your home.
          </p>
          <button onClick={openQuoteModal} className="bg-white text-red-600 px-10 py-4 rounded-sm font-bold text-lg uppercase tracking-widest hover:bg-gray-100 transition-all shadow-2xl">
            Get Your Free Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default AtticConversions;
