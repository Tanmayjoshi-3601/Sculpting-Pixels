import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Introduction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
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

  return (
    <section id="introduction" className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span 
            className="inline-block w-20 h-1 bg-secondary mb-6"
            variants={itemVariants}
          ></motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            variants={itemVariants}
          >
            Bridging AI and Cultural Heritage
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-dark opacity-90"
            variants={itemVariants}
          >
            Discover how iterative prompting can help AI models better understand and represent the rich cultural nuances of Gujarat.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Feature 1 */}
          <motion.div 
            className="bg-neutral-light rounded-xl p-8 custom-shadow hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
          >
            <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <i className="ri-focus-3-line text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-display font-bold mb-4">Detail Refinement</h3>
            <p className="text-neutral-dark opacity-80">
              Learn how adding specific details to prompts can dramatically improve AI's understanding of cultural context.
            </p>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            className="bg-neutral-light rounded-xl p-8 custom-shadow hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
          >
            <div className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <i className="ri-repeat-line text-2xl text-secondary"></i>
            </div>
            <h3 className="text-xl font-display font-bold mb-4">Iterative Process</h3>
            <p className="text-neutral-dark opacity-80">
              Master the step-by-step approach to refining prompts for progressively better results with each iteration.
            </p>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            className="bg-neutral-light rounded-xl p-8 custom-shadow hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
          >
            <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <i className="ri-palette-line text-2xl text-accent"></i>
            </div>
            <h3 className="text-xl font-display font-bold mb-4">Cultural Accuracy</h3>
            <p className="text-neutral-dark opacity-80">
              Develop techniques to ensure AI-generated artwork accurately represents specific cultural elements and traditions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
