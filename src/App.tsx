/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronDown, 
  CheckCircle2, 
  Clock, 
  HardHat, 
  Star,
  MapPin,
  Send
} from 'lucide-react';
import GardenRooms from './pages/GardenRooms';
import AboutUs from './pages/AboutUs';
import AtticConversions from './pages/AtticConversions';
import Extensions from './pages/Extensions';
import QuoteModal from './components/QuoteModal';
import { QuoteModalContext } from './context/QuoteModalContext';
import { useQuoteModal } from './context/QuoteModalContext';

// --- Components ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { 
      name: 'Services', 
      href: '#', 
      hasDropdown: true,
      subItems: [
        { name: 'Garden Rooms', href: '/garden-rooms' },
        { name: 'Attic Conversions', href: '/attic-conversions' },
        { name: 'Extensions', href: '/extensions' },
      ]
    },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-2 shadow-xl' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="text-white font-bold text-lg sm:text-2xl tracking-tighter flex items-center">
            <div className="mr-2 h-9 w-9 sm:h-12 sm:w-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 shrink-0">
              <HardHat size={20} className="text-white sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col leading-none min-w-0">
              <span className="text-base sm:text-xl uppercase truncate">CRONIN</span>
              <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-gray-400 uppercase">CONSTRUCTION</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-4 xl:space-x-8 items-center">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.hasDropdown ? (
                <button 
                  className="text-white hover:text-gray-300 font-medium transition-colors flex items-center text-sm"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {link.name}
                  <ChevronDown size={14} className="ml-1 opacity-60" />
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-xl overflow-hidden py-2"
                      >
                        {link.subItems?.map((sub) => (
                          <Link 
                            key={sub.name}
                            to={sub.href}
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-red-600 hover:text-white transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ) : (
                <Link 
                  to={link.href} 
                  className="text-white hover:text-gray-300 font-medium transition-colors flex items-center text-sm"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <button onClick={openQuoteModal} className="border-2 border-white text-white px-4 sm:px-6 py-2 rounded-sm font-bold hover:bg-white hover:text-black transition-all text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap">
            Get a Free Quote
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <>
                      <div className="px-3 py-4 text-base font-bold text-gray-400 uppercase tracking-widest text-xs">
                        {link.name}
                      </div>
                      <div className="pl-4 space-y-1">
                        {link.subItems?.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className="block px-3 py-3 text-base font-medium text-white hover:bg-white/10 rounded-md"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="block px-3 py-4 text-base font-medium text-white hover:bg-white/10 rounded-md"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <button type="button" onClick={openQuoteModal} className="w-full mt-4 border-2 border-white text-white px-6 py-3 rounded-md font-bold">
                Get a Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  const { openQuoteModal } = useQuoteModal();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-40">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-garden-room.png" 
          alt="Modern Garden Room" 
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
          <p className="text-white font-bold text-xs md:text-sm mb-4 uppercase tracking-[0.3em] opacity-80">
            Committed To Superior Quality & Results
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-[1.15] tracking-tight">
            Garden Rooms Ireland By Cronin <br className="hidden md:block" /> Construction!
          </h1>
          <div className="space-y-2 mb-10">
            <p className="text-base md:text-lg text-gray-300 font-medium max-w-xl">
              Need more room, an office or a home gym? A garden room may be the perfect solution for you.
            </p>
          </div>
          <div className="flex flex-col items-start gap-6">
            <button onClick={openQuoteModal} className="bg-red-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-sm font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-red-700 transition-all shadow-2xl">
              Get a Free Quote
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Left Badge from Photo */}
      <div className="absolute bottom-12 left-8 md:left-12 z-20">
        <div className="h-12 w-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer hover:scale-110 transition-transform border border-white/30">
          <CheckCircle2 size={24} />
        </div>
      </div>
    </section>
  );
};

const Home = () => (
  <>
    <Hero />
    <About />
    <RoomTypes />
    <Features />
    <Reviews />
    <ContactForm />
  </>
);

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
              Cronin Construction – <span className="text-red-600">Modern Garden Rooms</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                Cronin Construction is a professional, family-run business, established in 2009. We consist of a group of highly qualified tradesmen and offer a range of joinery services. The majority of our interior design projects are completed for highly recognised construction companies throughout Ireland.
              </p>
              <p>
                At Cronin Construction, we aim to have our Garden Rooms completed within 2-5 days. Our insulated garden rooms are built on site, from initial phase to completion, leaving you with a sustainable, low maintenance room.
              </p>
              <p>
                With our quick turn-around time we aim to minimise disruption for you, while maximising your living space, home space and comfort.
              </p>
            </div>
            
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 p-4 sm:p-6 bg-red-50 rounded-xl border-l-4 border-red-600">
              <div className="bg-red-600 p-3 rounded-full text-white mr-4">
                <Phone size={24} />
              </div>
              <div>
                <h6 className="font-bold text-gray-900">Get in touch!</h6>
                <p className="text-red-700 font-bold text-lg sm:text-xl">021 237 9909</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/construction-worker.png" 
                alt="Construction Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-8 rounded-2xl shadow-xl hidden lg:block">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm uppercase tracking-wider font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RoomTypes = () => {
  const types = [
    {
      title: 'Wooden',
      description: 'Timber frame garden rooms provide a practical and attractive addition to any garden space, offering a wide range of benefits to homeowners.',
      image: '/wooden-garden-room.png',
      href: '/garden-rooms',
    },
    {
      title: 'Extensions',
      description: 'Single story extensions offer a variety of benefits, from durability and sustainability to comfort and low-maintenance.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      href: '/extensions',
    },
    {
      title: 'Attic Conversion',
      description: 'An attic conversion can be a beautiful and practical addition to any home, offering aesthetic and functional benefits.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
      href: '/attic-conversions',
    }
  ];

  return (
    <section id="services" className="grid grid-cols-1 md:grid-cols-3">
      {types.map((type, index) => (
        <div key={index} className="relative group h-[320px] sm:h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src={type.image} 
            alt={type.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">{type.title}</h3>
            <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {type.description}
            </p>
            <Link to={type.href} className="text-red-500 font-bold flex items-center hover:text-red-400 transition-colors w-fit">
              Learn More <ChevronDown className="-rotate-90 ml-1" size={18} />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <HardHat size={32} />,
      title: 'Reliable & Qualified Experts',
      description: 'We consist of a group of highly qualified tradesmen and are now very proud specialists in insulated garden rooms.'
    },
    {
      icon: <Clock size={32} />,
      title: 'Quick Turnaround',
      description: 'We aim to have our insulated garden buildings completed within 3-5 days to minimise disruption for you.'
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: 'Competitive & Flexible Prices',
      description: 'Confirm your booking with a deposit, then make part-payment on day one of installation followed by final payment.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Our garden rooms are completed to the highest standard of a builder’s finish. We are very keen to adapt our garden rooms specifically to each individual.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-red-600">
              <div className="text-red-600 mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: 'Maura Quinn',
      rating: 5,
      text: 'I recently had a 25sq meter garden room built by Cronin Construction and I couldn’t be happier with the result. The workmanship was absolutely excellent.'
    },
    {
      name: 'Edel McBarron',
      rating: 5,
      text: 'The Cronin team were so professional and accomodating, we would highly recommend. Our room was put up in 3 days and we are really happy with it.'
    },
    {
      name: 'Chris Doolin',
      rating: 5,
      text: 'Brilliant work from start to finish. The guys were brilliant every time with their responses and reassurances. Could not recommend them enough.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Happy Customers</h2>
          <div className="flex justify-center items-center space-x-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} />)}
            <span className="ml-2 font-bold text-gray-900">EXCELLENT</span>
          </div>
          <p className="text-gray-500 mt-2">Based on 78 reviews</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />)}
              </div>
              <p className="text-gray-700 italic mb-6">"{review.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  {review.name[0]}
                </div>
                <span className="ml-3 font-bold text-gray-900">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-red-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-red-800 skew-x-12 translate-x-32 z-0 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Need A Free Quote?</h2>
            <p className="text-base sm:text-lg md:text-xl text-red-100 mb-8 sm:mb-10">
              Give us a call to discuss any requests you have, we would be glad to assist and can provide competitive quotes for our services.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-red-200 text-sm uppercase tracking-wider">Call Us</p>
                  <p className="text-lg sm:text-xl font-bold">021 237 9909</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-red-200 text-sm uppercase tracking-wider">Email Us</p>
                  <p className="text-base sm:text-xl font-bold break-all">info@cronin-construction.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl">
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Request a Free Quote</h4>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"></textarea>
              </div>
              <button className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center">
                Submit Your Enquiry <Send className="ml-2" size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-x-16 md:gap-y-12 mb-12 sm:mb-16">
          <div className="col-span-1 md:col-span-1 min-w-0">
            <div className="text-white font-bold text-xl sm:text-2xl tracking-tighter mb-4 sm:mb-6 block">
              <span className="block">CRONIN</span>
              <span className="text-red-600 block">CONSTRUCTION</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Cronin Construction is a professional, family-run business, established in 2009. We consist of a group of highly qualified tradesmen and offer a range of joinery services.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 border-b-2 border-red-600 pb-2 inline-block">Pages</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/garden-rooms" className="hover:text-red-500 transition-colors">Garden Rooms</Link></li>
              <li><Link to="/attic-conversions" className="hover:text-red-500 transition-colors">Attic Conversions</Link></li>
              <li><Link to="/extensions" className="hover:text-red-500 transition-colors">Single Story Extensions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 border-b-2 border-red-600 pb-2 inline-block">Location</h4>
            <div className="flex items-start text-gray-400 mb-6">
              <MapPin className="text-red-600 mr-3 mt-1 shrink-0" size={18} />
              <p>Cloyne, Co. Cork, Ireland</p>
            </div>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><span>Monday – Friday</span> <span>08:00 – 17:00</span></div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><span>Saturday – Sunday</span> <span>Closed</span></div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 border-b-2 border-red-600 pb-2 inline-block">Maps</h4>
            <div className="rounded-xl overflow-hidden h-40 sm:h-48 bg-gray-800">
              <iframe
                src="https://www.google.com/maps?q=Cloyne,+Co.+Cork,+Ireland&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cronin Construction - Cloyne, Cork"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 sm:pt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm text-center md:text-left gap-4">
          <p>© 2024 Cronin Construction. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Scroll to Top Helper ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal }}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/garden-rooms" element={<GardenRooms />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/attic-conversions" element={<AtticConversions />} />
              <Route path="/extensions" element={<Extensions />} />
            </Routes>
          </main>
          <Footer />
          <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
        </div>
      </Router>
    </QuoteModalContext.Provider>
  );
}
