import { createContext, useContext, ReactNode } from 'react';

export const QuoteModalContext = createContext<{ openQuoteModal: () => void } | null>(null);

export const useQuoteModal = () => {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) throw new Error('useQuoteModal must be used within QuoteModalProvider');
  return ctx;
};
