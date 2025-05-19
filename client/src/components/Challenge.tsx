import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface SimulationStep {
  prompt: string;
  analysis: string;
  simulatedImageUrl: string;
}

const Challenge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const [steps, setSteps] = useState<SimulationStep[]>([
    { prompt: "", analysis: "", simulatedImageUrl: "" }
  ]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  
  // Placeholder simulated images for each step
  const simulatedImages = [
    "https://images.unsplash.com/photo-1642339485072-f15f6bc1e2dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1642425149059-240ff2075889?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1642447867547-224f32f7a5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];
  
  // Handle prompt input
  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newSteps = [...steps];
    newSteps[currentStep].prompt = e.target.value;
    setSteps(newSteps);
  };
  
  // Handle analysis input
  const handleAnalysisChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newSteps = [...steps];
    newSteps[currentStep].analysis = e.target.value;
    setSteps(newSteps);
  };
  
  // Simulate generation
  const simulateGeneration = () => {
    if (!steps[currentStep].prompt) return;
    
    // Start simulating animation
    setIsSimulating(true);
    
    // Wait for 2 seconds to simulate AI processing
    setTimeout(() => {
      const newSteps = [...steps];
      newSteps[currentStep].simulatedImageUrl = simulatedImages[currentStep % simulatedImages.length];
      setSteps(newSteps);
      setIsSimulating(false);
    }, 2000);
  };
  
  // Add new step
  const addNewStep = () => {
    if (!steps[currentStep].prompt || !steps[currentStep].analysis) {
      return;
    }
    
    // Add a new step if we're not at 3 steps yet
    if (currentStep < 2) {
      setSteps([...steps, { prompt: "", analysis: "", simulatedImageUrl: "" }]);
      setCurrentStep(currentStep + 1);
    } else {
      // If we've completed all 3 steps
      setIsComplete(true);
    }
  };
  
  // Animation variants
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
  
  const thinkingVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };
  
  return (
    <section id="challenge" className="py-16 md:py-24 bg-gradient-to-b from-white to-neutral-light" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
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
            Creative Challenge: Design a Mythical Creature
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-dark opacity-90 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Now it's your turn to practice the iterative prompting technique! In this exercise, you'll create a three-step prompt sequence to design a mythical creature inspired by Gujarati folklore. 
          </motion.p>
        </motion.div>
        
        {!isComplete ? (
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="p-6 md:p-8">
              {/* Step Indicator */}
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold">Step {currentStep + 1} of 3</h3>
                <div className="flex">
                  {[0, 1, 2].map((step) => (
                    <div 
                      key={step} 
                      className={`w-3 h-3 rounded-full mx-1 ${
                        currentStep === step 
                          ? 'bg-primary' 
                          : step < currentStep 
                            ? 'bg-primary opacity-50' 
                            : 'bg-gray-200'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Exercise Description */}
              <div className="bg-neutral-light/50 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-neutral-dark mb-2">
                  <i className="ri-magic-line mr-2 text-secondary"></i>
                  {currentStep === 0 && "Start with a basic description of your mythical creature"}
                  {currentStep === 1 && "Add more specific details about form and abilities"}
                  {currentStep === 2 && "Add cultural context, environment, and artistic style"}
                </h4>
                <p className="text-sm text-neutral-dark/80">
                  {currentStep === 0 && "Begin with a simple prompt describing the general type of creature (e.g., 'A mythical guardian lion with wings'). This establishes the basic concept."}
                  {currentStep === 1 && "Now add more specific physical characteristics and abilities (e.g., 'with a jeweled forehead, ability to control weather, multiple tails with distinctive patterns')."}
                  {currentStep === 2 && "For the final iteration, add cultural context, environment, and artistic style (e.g., 'inspired by Gujarati folk art, surrounded by desert landscape, ornate jewelry patterns, vibrant orange and teal colors')."}
                </p>
              </div>
              
              {/* Prompt Input */}
              <div className="mb-6">
                <label htmlFor="prompt" className="block text-lg font-medium mb-2">
                  Write your prompt:
                </label>
                <textarea 
                  id="prompt"
                  className="w-full p-4 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder={`${
                    currentStep === 0 
                      ? "e.g., A mythical guardian creature with wings..." 
                      : currentStep === 1 
                        ? "e.g., A mythical guardian creature with golden wings, emerald eyes..." 
                        : "e.g., A mythical guardian creature with golden wings in Gujarati folk art style..."
                  }`}
                  value={steps[currentStep].prompt}
                  onChange={handlePromptChange}
                ></textarea>
              </div>
              
              {/* Simulation Action */}
              <div className="flex justify-center mb-8">
                <motion.button 
                  className={`px-6 py-3 rounded-lg font-medium ${
                    steps[currentStep].prompt && !isSimulating
                      ? 'bg-primary text-white hover:bg-primary/90' 
                      : isSimulating
                        ? 'bg-neutral-light text-primary cursor-wait'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  } transition-all`}
                  disabled={!steps[currentStep].prompt || isSimulating}
                  onClick={simulateGeneration}
                  whileHover={steps[currentStep].prompt && !isSimulating ? { scale: 1.05 } : {}}
                  whileTap={steps[currentStep].prompt && !isSimulating ? { scale: 0.95 } : {}}
                >
                  {isSimulating ? (
                    <motion.span 
                      className="flex items-center"
                      variants={thinkingVariants}
                      animate="animate"
                    >
                      <i className="ri-loader-4-line mr-2 animate-spin"></i>
                      Simulating AI Generation...
                    </motion.span>
                  ) : (
                    <span className="flex items-center">
                      <i className="ri-magic-line mr-2"></i>
                      Simulate AI Output
                    </span>
                  )}
                </motion.button>
              </div>
              
              {/* Simulated Output Display */}
              <AnimatePresence>
                {steps[currentStep].simulatedImageUrl && (
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-lg font-medium mb-4">Simulated AI Output:</h4>
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={steps[currentStep].simulatedImageUrl} 
                        alt={`Simulated output for step ${currentStep + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Analysis Input */}
              <AnimatePresence>
                {steps[currentStep].simulatedImageUrl && (
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label htmlFor="analysis" className="block text-lg font-medium mb-2">
                      Analyze the output (What worked well? What needs improvement?):
                    </label>
                    <textarea 
                      id="analysis"
                      className="w-full p-4 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Write your analysis of the generated image here..."
                      value={steps[currentStep].analysis}
                      onChange={handleAnalysisChange}
                    ></textarea>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Navigation Buttons */}
              <AnimatePresence>
                {steps[currentStep].simulatedImageUrl && (
                  <motion.div 
                    className="flex justify-center mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <motion.button 
                      className={`px-6 py-3 rounded-lg font-medium ${
                        steps[currentStep].analysis
                          ? 'bg-secondary text-white hover:bg-secondary/90' 
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      } transition-all`}
                      disabled={!steps[currentStep].analysis}
                      onClick={addNewStep}
                      whileHover={steps[currentStep].analysis ? { scale: 1.05 } : {}}
                      whileTap={steps[currentStep].analysis ? { scale: 0.95 } : {}}
                    >
                      {currentStep < 2 ? 'Proceed to Next Step' : 'Complete Challenge'}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6 md:p-8 text-center">
              <div className="py-6">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary/10 mb-6">
                  <i className="ri-trophy-line text-5xl text-secondary"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Challenge Completed!</h3>
                <p className="text-neutral-dark mb-6 max-w-2xl mx-auto">
                  Congratulations! You've successfully completed the mythical creature design challenge using the iterative prompting technique. Each step has built upon the previous one, allowing you to refine your creation with progressively more detail.
                </p>
                
                {/* Summary of Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {steps.map((step, index) => (
                    <div key={index} className="bg-neutral-light rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={step.simulatedImageUrl} 
                        alt={`Step ${index + 1} output`}
                        className="w-full h-auto"
                      />
                      <div className="p-4">
                        <h4 className="font-medium mb-2">Step {index + 1}</h4>
                        <p className="text-sm text-neutral-dark/80 mb-2 line-clamp-2">{step.prompt}</p>
                        <details className="text-left">
                          <summary className="text-xs text-primary cursor-pointer hover:underline">View your analysis</summary>
                          <p className="text-xs mt-2 text-neutral-dark">{step.analysis}</p>
                        </details>
                      </div>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all"
                  onClick={() => {
                    setSteps([{ prompt: "", analysis: "", simulatedImageUrl: "" }]);
                    setCurrentStep(0);
                    setIsComplete(false);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try Another Creature
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Tips Box */}
        <motion.div 
          className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-12 max-w-4xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ delayChildren: 0.4 }}
        >
          <motion.h4 
            className="text-lg font-medium mb-4 flex items-center text-primary"
            variants={itemVariants}
          >
            <i className="ri-lightbulb-line mr-2"></i>
            Pro Tips for Mythical Creature Design
          </motion.h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.li 
              className="flex items-start text-sm"
              variants={itemVariants}
            >
              <i className="ri-checkbox-circle-line text-secondary mt-0.5 mr-2"></i>
              <span>Start with a coherent base concept (animal hybrid, guardian spirit, etc.) before adding details</span>
            </motion.li>
            <motion.li 
              className="flex items-start text-sm"
              variants={itemVariants}
            >
              <i className="ri-checkbox-circle-line text-secondary mt-0.5 mr-2"></i>
              <span>Consider the creature's role/function in its mythical context (guardian, trickster, messenger)</span>
            </motion.li>
            <motion.li 
              className="flex items-start text-sm"
              variants={itemVariants}
            >
              <i className="ri-checkbox-circle-line text-secondary mt-0.5 mr-2"></i>
              <span>Cultural elements add authenticity (artifacts, patterns, symbolism)</span>
            </motion.li>
            <motion.li 
              className="flex items-start text-sm"
              variants={itemVariants}
            >
              <i className="ri-checkbox-circle-line text-secondary mt-0.5 mr-2"></i>
              <span>Specify artistic style in your final iteration (woodcut, painting, digital art)</span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Challenge;