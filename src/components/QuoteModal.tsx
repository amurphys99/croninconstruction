import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const digitsOnly = phone.replace(/\D/g, '');
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (digitsOnly.length < 10) {
      newErrors.phone = 'Please enter a valid phone number (min 10 digits)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleClose = () => {
    onClose();
    // Reset form after modal closes (with slight delay for animation)
    setTimeout(() => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setErrors({});
      setIsSubmitted(false);
    }, 300);
  };

  const inputBaseClass = 'w-full px-4 py-3 rounded-lg border outline-none transition-all';
  const inputErrorClass = 'border-red-500 focus:ring-red-500';
  const inputValidClass = 'border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors z-10"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {isSubmitted ? (
                <div className="p-8 sm:p-12 text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
                  <p className="text-gray-600 mb-8">
                    Your enquiry has been submitted successfully. We'll be in touch shortly to discuss your project and provide a free quote.
                  </p>
                  <button
                    onClick={handleClose}
                    className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Free Quote</h3>
                  <p className="text-gray-600 mb-6">Fill in your details and we'll get back to you as soon as possible.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className={`${inputBaseClass} ${errors.firstName ? inputErrorClass : inputValidClass}`}
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className={`${inputBaseClass} ${errors.lastName ? inputErrorClass : inputValidClass}`}
                          placeholder="Smith"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`${inputBaseClass} ${errors.email ? inputErrorClass : inputValidClass}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`${inputBaseClass} ${errors.phone ? inputErrorClass : inputValidClass}`}
                        placeholder="07702 909 637"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={`${inputBaseClass} ${inputValidClass}`}
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        <>
                          Submit Your Enquiry <Send className="ml-2" size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
