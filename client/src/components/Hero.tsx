import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-neutral-light to-neutral-light relative overflow-hidden">
      {/* Background Pattern (Gujarati-inspired) */}
      <div className="absolute inset-0 opacity-10 z-0 pattern-dots" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`, backgroundSize: '500px', mixBlendMode: 'multiply' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 bg-secondary bg-opacity-20 text-secondary rounded-full text-sm font-medium mb-4">
              Educational Tutorial
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              AI Artistry Unveiled: A Gujarati Journey into Detail
            </h2>
            <p className="text-lg md:text-xl mb-8 text-neutral-dark opacity-90">
              Explore the art of iterative and progressive detail prompting through the vibrant lens of Gujarati culture. Learn how to transform basic AI-generated images into stunning, culturally rich masterpieces.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#examples" 
                className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-opacity-90 transition-all shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Examples
              </motion.a>
              <motion.a 
                href="#technique" 
                className="px-6 py-3 border-2 border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn the Technique
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* A vibrant collage of Gujarati cultural imagery */}
            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                src="https://images.unsplash.com/photo-1599030740023-883efd7ccb51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Traditional Gujarati embroidery textile pattern" 
                className="rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 0 }}
              />
              <motion.img 
                src="https://images.unsplash.com/photo-1624286256376-e9b012a0975e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Colorful traditional Gujarati building architecture" 
                className="rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 0 }}
              />
              <motion.img 
                src="https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Navratri Garba dancers in traditional attire" 
                className="rounded-lg shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 0 }}
              />
              <motion.img 
                src="https://images.unsplash.com/photo-1580756321097-95a3740fa6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Traditional Gujarati clay pottery with intricate patterns" 
                className="rounded-lg shadow-lg transform -rotate-2 hover:rotate-0 transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 0 }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg z-10">
              <span className="text-xs font-medium text-neutral-dark block">Created with</span>
              <span className="font-medium text-primary">AI Prompting</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
