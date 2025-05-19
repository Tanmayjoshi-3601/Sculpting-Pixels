import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Technique = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="technique" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="md:w-1/2"
            variants={leftVariants}
          >
            <span className="inline-block px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm font-medium mb-4">
              The Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Mastering Iterative & Progressive Detail Prompting
            </h2>
            <p className="text-lg mb-8 text-neutral-dark opacity-90">
              The process involves starting with a basic concept and gradually refining it with increasingly specific details that guide the AI to produce more authentic and culturally accurate imagery.
            </p>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <motion.div 
                className="flex items-start space-x-4"
                variants={stepVariants}
              >
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Begin with Basic Concepts</h3>
                  <p className="text-neutral-dark opacity-80">
                    Start with a simple prompt that outlines the general scene or subject you want to generate.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                className="flex items-start space-x-4"
                variants={stepVariants}
              >
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Analyze Initial Results</h3>
                  <p className="text-neutral-dark opacity-80">
                    Review the AI's output and identify areas where cultural details or accuracy can be improved.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                className="flex items-start space-x-4"
                variants={stepVariants}
              >
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Add Specific Details</h3>
                  <p className="text-neutral-dark opacity-80">
                    Enhance your prompt with cultural terminology, specific colors, patterns, or contextual elements.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div 
                className="flex items-start space-x-4"
                variants={stepVariants}
              >
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Refine and Repeat</h3>
                  <p className="text-neutral-dark opacity-80">
                    Continue the iterative process until the AI generates an image that authentically represents the cultural elements you're aiming for.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            variants={rightVariants}
          >
            {/* An informative diagram showing the iterative prompting process */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-display font-bold mb-4 text-center">Prompt Iteration Process</h3>
              
              <div className="space-y-6">
                {/* Process Step 1 */}
                <motion.div 
                  className="bg-neutral-light rounded-lg p-4 prompt-compare"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm text-primary">Initial Prompt</span>
                    <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">Iteration 1</span>
                  </div>
                  <p className="text-sm text-neutral-dark bg-white p-3 rounded border border-gray-200">
                    "Rann Utsav festival, white desert landscape, tents, daytime."
                  </p>
                  <div className="flex items-center mt-3 text-xs text-neutral-dark/70">
                    <i className="ri-error-warning-line mr-1"></i>
                    <span>Basic elements without cultural specificity</span>
                  </div>
                </motion.div>
                
                {/* Process Step 2 */}
                <motion.div 
                  className="bg-neutral-light rounded-lg p-4 prompt-compare"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm text-primary">Enhanced Prompt</span>
                    <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">Iteration 2</span>
                  </div>
                  <p className="text-sm text-neutral-dark bg-white p-3 rounded border border-gray-200">
                    "Vibrant <span className="highlight">Rann Utsav festival in Kutch, Gujarat</span>, white desert landscape, <span className="highlight">colorful traditional Gujarati bhungas</span> and <span className="highlight">decorated circular tents</span>, <span className="highlight">golden sunset</span> light."
                  </p>
                  <div className="flex items-center mt-3 text-xs text-primary">
                    <i className="ri-check-line mr-1"></i>
                    <span>Added geographical context, specific architectural elements, and lighting</span>
                  </div>
                </motion.div>
                
                {/* Process Step 3 */}
                <motion.div 
                  className="bg-neutral-light rounded-lg p-4 prompt-compare"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm text-primary">Final Refined Prompt</span>
                    <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">Iteration 3</span>
                  </div>
                  <p className="text-sm text-neutral-dark bg-white p-3 rounded border border-gray-200">
                    "Vibrant Rann Utsav festival in Kutch, Gujarat, <span className="highlight">vast white salt desert of Rann of Kutch</span>, colorful traditional Gujarati bhungas and decorated circular tents, golden sunset light, <span className="highlight">local artisans displaying mirror-work embroidery and bandhani textiles</span>, <span className="highlight">camel silhouettes</span>, <span className="highlight">folk dancers in traditional Gujarati attire with ghagra choli</span>, <span className="highlight">photorealistic, detailed</span>."
                  </p>
                  <div className="flex items-center mt-3 text-xs text-primary">
                    <i className="ri-star-fill mr-1"></i>
                    <span>Complete cultural context with specific attire, crafts, and technical guidance</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technique;
