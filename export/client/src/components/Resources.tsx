import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const Resources = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [email, setEmail] = useState('');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <section id="resources" className="py-16 md:py-24 bg-neutral-light" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span className="inline-block w-20 h-1 bg-accent mb-6" variants={itemVariants}></motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            variants={itemVariants}
          >
            Resources & Further Learning
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-dark opacity-90"
            variants={itemVariants}
          >
            Enhance your understanding of both AI prompting techniques and Gujarati cultural elements with these resources.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* AI Prompting Resources */}
          <motion.div 
            className="bg-white rounded-xl p-8 custom-shadow"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center">
              <i className="ri-robot-line text-primary mr-3"></i>
              AI Prompting Techniques
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="ri-article-line text-primary mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium mb-1">The Art of Prompt Engineering</h4>
                  <p className="text-sm text-neutral-dark opacity-80">
                    A comprehensive guide to crafting effective prompts for various AI image generation models.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <i className="ri-video-line text-primary mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium mb-1">Video Tutorial: Progressive Prompting</h4>
                  <p className="text-sm text-neutral-dark opacity-80">
                    A step-by-step visual guide to the iterative prompting technique with multiple examples.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <i className="ri-book-open-line text-primary mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium mb-1">Prompting Dictionary</h4>
                  <p className="text-sm text-neutral-dark opacity-80">
                    A collection of technical terms and descriptive phrases that significantly improve AI image generation.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <i className="ri-community-line text-primary mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium mb-1">AI Artistry Community</h4>
                  <p className="text-sm text-neutral-dark opacity-80">
                    Join our community of AI artists sharing techniques, prompts, and feedback on cultural representations.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
          
          {/* Gujarati Cultural Resources */}
          <motion.div 
            className="bg-white rounded-xl p-8 custom-shadow"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center">
              <i className="ri-gallery-line text-secondary mr-3"></i>
              Gujarati Cultural Elements
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="ri-book-2-line text-secondary mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium mb-1">Visual Guide to Gujarati Textiles</h4>
                  <p className="text-sm text-neutral-dark opacity-80">
                    Learn about bandhani, patola, ajrakh, and other traditional textile patterns from Gujarat.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <i className="ri-building-line text-secondary mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium mb-1">Architecture of Gujarat</h4>
                  <p className="text-sm text-neutral-dark opacity-80">
                    Explore the distinctive architectural styles from different regions of Gujarat, including havelis and bhungas.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <i className="ri-calendar-event-line text-secondary mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium mb-1">Festival Glossary</h4>
                  <p className="text-sm text-neutral-dark opacity-80">
                    A comprehensive guide to major Gujarati festivals, their significance, and visual elements.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <i className="ri-heart-line text-secondary mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium mb-1">Cultural Sensitivity Guide</h4>
                  <p className="text-sm text-neutral-dark opacity-80">
                    Best practices for respectful and accurate representation of Gujarati cultural elements in AI art.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Newsletter Signup */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white custom-shadow"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ delayChildren: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div 
              className="md:w-1/2"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-display font-bold mb-3">Stay Updated</h3>
              <p className="opacity-90">
                Subscribe to our newsletter for new tutorials, prompting techniques, and cultural resources to enhance your AI-generated artwork.
              </p>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              variants={itemVariants}
            >
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-md flex-grow text-neutral-dark focus:outline-none focus:ring-2 focus:ring-white" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <motion.button 
                  type="submit" 
                  className="px-6 py-3 bg-white text-primary rounded-md font-medium hover:bg-opacity-90 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
