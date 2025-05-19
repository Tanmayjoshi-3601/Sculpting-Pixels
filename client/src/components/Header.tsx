import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full bg-white ${scrolled ? 'bg-opacity-95 shadow-sm' : 'bg-opacity-90'} z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <i className="ri-brush-4-line text-primary text-2xl"></i>
            <h1 className="text-xl font-display font-bold">AI Artistry Unveiled</h1>
          </motion.div>
          
          <motion.nav 
            className="hidden md:flex space-x-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#introduction" className="font-medium hover:text-primary transition-colors">Introduction</a>
            <a href="#technique" className="font-medium hover:text-primary transition-colors">The Technique</a>
            <a href="#examples" className="font-medium hover:text-primary transition-colors">Examples</a>
            <a href="#resources" className="font-medium hover:text-primary transition-colors">Resources</a>
          </motion.nav>
          
          <motion.button 
            id="mobile-menu-button" 
            className="md:hidden text-neutral-dark focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <i className={`ri-${isOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </motion.button>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-3 space-y-3">
              <a 
                href="#introduction" 
                className="block font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Introduction
              </a>
              <a 
                href="#technique" 
                className="block font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                The Technique
              </a>
              <a 
                href="#examples" 
                className="block font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Examples
              </a>
              <a 
                href="#resources" 
                className="block font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
