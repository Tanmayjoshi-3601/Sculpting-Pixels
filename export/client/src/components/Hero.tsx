import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-neutral-light to-neutral-light relative overflow-hidden">
      {/* Background Pattern (Gujarati-inspired) */}
      <div className="absolute inset-0 opacity-10 z-0 pattern-dots" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`, backgroundSize: '500px', mixBlendMode: 'multiply' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
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
          
          {/* Right Content - Cultural Icons */}
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-300 aspect-square bg-gradient-to-br from-orange-100 to-red-200 p-4 flex items-center justify-center">
                <div className="w-full h-full border-4 border-orange-500 rounded-md p-3 bg-white bg-opacity-70 flex items-center justify-center">
                  <h3 className="text-lg font-bold text-orange-700">Gujarati Textiles</h3>
                </div>
              </div>
              
              <div className="rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300 aspect-square bg-gradient-to-br from-amber-100 to-yellow-200 p-4 flex items-center justify-center">
                <div className="w-full h-full border-4 border-amber-500 rounded-md p-3 bg-white bg-opacity-70 flex items-center justify-center">
                  <h3 className="text-lg font-bold text-amber-700">Traditional Architecture</h3>
                </div>
              </div>
              
              <div className="rounded-lg shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-300 aspect-square bg-gradient-to-br from-green-100 to-teal-200 p-4 flex items-center justify-center">
                <div className="w-full h-full border-4 border-teal-500 rounded-md p-3 bg-white bg-opacity-70 flex items-center justify-center">
                  <h3 className="text-lg font-bold text-teal-700">Garba Dancers</h3>
                </div>
              </div>
              
              <div className="rounded-lg shadow-lg transform -rotate-2 hover:rotate-0 transition-all duration-300 aspect-square bg-gradient-to-br from-red-100 to-rose-200 p-4 flex items-center justify-center">
                <div className="w-full h-full border-4 border-rose-500 rounded-md p-3 bg-white bg-opacity-70 flex items-center justify-center">
                  <h3 className="text-lg font-bold text-rose-700">Cultural Pottery</h3>
                </div>
              </div>
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
