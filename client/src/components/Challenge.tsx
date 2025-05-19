import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Challenge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
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
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
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
            className="inline-block w-20 h-1 bg-[#1D7874] mb-6"
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
            Ready to practice the iterative prompting technique? Here are some creative tools you can use to design your own mythical creature inspired by Gujarati folklore, following the three-step prompting pattern.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Step 1 Card */}
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-md overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="w-12 h-12 bg-[#DB4D2E] rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Basic Concept</h3>
            <p className="text-neutral-dark mb-4">
              Start with a simple prompt describing the general type of creature (e.g., "A mythical guardian lion with wings").
            </p>
            <div className="bg-[#F7F2EA] p-4 rounded-lg mb-4">
              <h4 className="font-medium text-sm mb-2 text-[#DB4D2E]">Example Prompt:</h4>
              <p className="text-sm italic">
                "A mythical bird creature with a peacock's tail that guards ancient Gujarati temples"
              </p>
            </div>
            <div className="flex items-center text-[#1D7874] text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Establishes the base concept</span>
            </div>
          </motion.div>
          
          {/* Step 2 Card */}
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-md overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="w-12 h-12 bg-[#1D7874] rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Add Specific Details</h3>
            <p className="text-neutral-dark mb-4">
              Enhance your prompt with specific physical characteristics and abilities to make it more unique.
            </p>
            <div className="bg-[#F7F2EA] p-4 rounded-lg mb-4">
              <h4 className="font-medium text-sm mb-2 text-[#1D7874]">Example Prompt:</h4>
              <p className="text-sm italic">
                "A mythical bird creature with a peacock's tail that guards ancient Gujarati temples, <span className="bg-[#1D7874]/10">with a golden crest on its head, eyes that glow like emeralds, and the ability to summon protective fire</span>"
              </p>
            </div>
            <div className="flex items-center text-[#1D7874] text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Adds distinctive features and abilities</span>
            </div>
          </motion.div>
          
          {/* Step 3 Card */}
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-md overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="w-12 h-12 bg-[#F9C846] rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Cultural Context & Style</h3>
            <p className="text-neutral-dark mb-4">
              Add cultural context, environmental elements, and specify an artistic style for the final iteration.
            </p>
            <div className="bg-[#F7F2EA] p-4 rounded-lg mb-4">
              <h4 className="font-medium text-sm mb-2 text-[#F9C846]">Example Prompt:</h4>
              <p className="text-sm italic">
                "A mythical bird creature with a peacock's tail that guards ancient Gujarati temples, with a golden crest on its head, eyes that glow like emeralds, and the ability to summon protective fire, <span className="bg-[#F9C846]/10">perched on an intricately carved stone archway, surrounded by mirror work patterns typical of Kutch region, in the style of traditional Indian miniature painting, warm sunset lighting</span>"
              </p>
            </div>
            <div className="flex items-center text-[#1D7874] text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Completes with cultural authenticity</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Creative Tools Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-md overflow-hidden mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="p-6 md:p-8">
            <motion.h3 
              className="text-2xl font-bold mb-6 text-center"
              variants={itemVariants}
            >
              Recommended Creative Tools
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {/* Free Online Tools */}
              <motion.div 
                className="border border-[#DB4D2E]/20 rounded-lg p-5"
                variants={itemVariants}
              >
                <h4 className="text-lg font-medium mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#DB4D2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-4.5-8.599A5.5 5.5 0 003 15z" />
                  </svg>
                  Free Online Text-to-Image Tools
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#DB4D2E] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium block">Bing Image Creator</span>
                      <span className="text-sm text-neutral-dark/80">Free DALL-E powered image generator with limited uses per day</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#DB4D2E] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium block">Leonardo.ai</span>
                      <span className="text-sm text-neutral-dark/80">Create limited images for free with high-quality models</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#DB4D2E] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium block">Playground AI</span>
                      <span className="text-sm text-neutral-dark/80">User-friendly interface with free daily credits</span>
                    </div>
                  </li>
                </ul>
              </motion.div>
              
              {/* Desktop Applications */}
              <motion.div 
                className="border border-[#1D7874]/20 rounded-lg p-5"
                variants={itemVariants}
              >
                <h4 className="text-lg font-medium mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#1D7874]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Desktop Applications
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1D7874] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium block">DiffusionBee</span>
                      <span className="text-sm text-neutral-dark/80">Mac application for Stable Diffusion (completely local)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1D7874] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium block">AUTOMATIC1111</span>
                      <span className="text-sm text-neutral-dark/80">Advanced open-source UI for all platforms</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1D7874] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium block">ComfyUI</span>
                      <span className="text-sm text-neutral-dark/80">Node-based interface with powerful customization</span>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-8 bg-[#F7F2EA] rounded-lg p-5"
              variants={itemVariants}
            >
              <h4 className="text-lg font-medium mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#F9C846]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Prompting Tips for Cultural Accuracy
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#F9C846] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Research specific cultural elements (bandhani patterns, mirror work, ghagra choli) for authenticity</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#F9C846] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Include specific color palettes authentic to Gujarati art (vibrant reds, teals, yellows)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#F9C846] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Specify an artistic style (Rajasthani miniature, folk art, contemporary digital)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#F9C846] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Reference specific locations (Rann of Kutch, Sidi Saiyyed Mosque) for environmental context</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Gallery of Inspiration */}
        <motion.div 
          className="bg-[#1D7874]/5 rounded-xl p-6 md:p-8 max-w-4xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-xl font-bold mb-6 text-center"
            variants={itemVariants}
          >
            Example Creation Journey
          </motion.h3>
          
          <div className="space-y-6">
            <motion.div 
              className="flex flex-col md:flex-row gap-4 items-center"
              variants={itemVariants}
            >
              <div className="md:w-1/3 bg-white p-3 rounded-lg shadow-md">
                <div className="aspect-square bg-[#F7F2EA] rounded flex items-center justify-center">
                  <span className="text-4xl">🦚</span>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-medium bg-[#DB4D2E]/20 text-[#DB4D2E] px-2 py-1 rounded-full">Step 1</span>
                </div>
              </div>
              
              <div className="md:w-1/3 bg-white p-3 rounded-lg shadow-md">
                <div className="aspect-square bg-[#F7F2EA] rounded flex items-center justify-center">
                  <span className="text-4xl">🦚✨</span>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-medium bg-[#1D7874]/20 text-[#1D7874] px-2 py-1 rounded-full">Step 2</span>
                </div>
              </div>
              
              <div className="md:w-1/3 bg-white p-3 rounded-lg shadow-md">
                <div className="aspect-square bg-[#F7F2EA] rounded flex items-center justify-center">
                  <span className="text-4xl">🦚🏮✨</span>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-medium bg-[#F9C846]/20 text-[#F9C846] px-2 py-1 rounded-full">Step 3</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <a 
                href="https://huggingface.co/spaces/stabilityai/stable-diffusion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#1D7874] text-white rounded-lg font-medium hover:bg-[#13534F] transition-all shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Try an Online Image Generator
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Challenge;