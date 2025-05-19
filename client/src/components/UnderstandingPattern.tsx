import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const UnderstandingPattern = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  // State for interactive elements
  const [activeConceptTab, setActiveConceptTab] = useState<number>(0);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [activeModelPerformance, setActiveModelPerformance] = useState<number | null>(null);
  const [activeUserInteraction, setActiveUserInteraction] = useState<number | null>(null);
  const [currentLegoPiece, setCurrentLegoPiece] = useState<number>(0);
  const [currentForestStep, setCurrentForestStep] = useState<number>(0);
  
  // Toggle accordion sections
  const toggleAccordion = (id: string) => {
    if (activeAccordion === id) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(id);
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
  
  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const accordionVariants = {
    hidden: { height: 0, opacity: 0, overflow: "hidden" },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: { 
        height: { duration: 0.3 },
        opacity: { duration: 0.3, delay: 0.1 }
      }
    }
  };
  
  // Data for model performance benefits
  const modelPerformanceData = [
    {
      title: "Improving Text-to-Image Alignment",
      content: "Iterative prompting allows for more precise translation of textual descriptions into visual representations. By refining the prompt based on AI outputs, users can guide the model toward generating images that more accurately match their intentions, reducing the semantic gap between text prompts and visual outputs."
    },
    {
      title: "Enhancing Detail and Specificity",
      content: "The progressive introduction of details enables users to achieve higher levels of specificity in generated images. This is particularly valuable for complex scenes where attempting to specify all details at once may lead to details being overlooked or incorrectly interpreted by the model."
    },
    {
      title: "Reducing Concept Entanglement and Omission",
      content: "When too many concepts are introduced simultaneously, AI models can struggle with separating and representing each concept accurately. Progressive detailing helps reduce this 'concept entanglement' by introducing elements sequentially, ensuring each is properly represented before adding more complexity."
    },
    {
      title: "Facilitating Complex Scene Generation",
      content: "For intricate scenes with multiple elements, spatial relationships, and stylistic considerations, iterative prompting provides a structured approach to building complexity. This makes the generation of complex, coherent scenes more manageable and successful."
    }
  ];
  
  // Data for user interaction benefits
  const userInteractionData = [
    {
      title: "Increased User Control and Agency",
      content: "The iterative nature of the pattern gives users direct influence over the generation process. Rather than relying on a single, complex prompt and hoping for the best, users actively shape the outcome through multiple refinement cycles, resulting in a more collaborative human-AI creative process."
    },
    {
      title: "Structured Approach to Complexity",
      content: "Breaking down the generation process into distinct steps provides users with a clear methodology for tackling complex visual scenes. This structured approach is particularly beneficial for users who might otherwise struggle with formulating comprehensive, detailed prompts."
    },
    {
      title: "Learning and Discovery",
      content: "Through the iterative process, users learn how the AI interprets different types of prompts and how to effectively communicate their visual intentions. This educational aspect helps users build mental models of AI capabilities and limitations, improving future interactions."
    }
  ];
  
  // Lego build steps for visual metaphor
  const legoBuildSteps = [
    "Foundation pieces that establish the basic structure",
    "Main blocks that define the general shape and form",
    "Detailed elements that add specific features and characteristics",
    "Final decorative pieces that complete the model with refinements"
  ];
  
  // Forest example steps
  const forestSteps = [
    {
      prompt: "A forest landscape",
      description: "Initial basic prompt establishing the subject"
    },
    {
      prompt: "A misty forest landscape with a carpet of ferns in the early morning light",
      description: "Refined prompt adding atmosphere, specific vegetation, and lighting conditions"
    }
  ];
  
  // Living room example steps
  const livingRoomSteps = [
    {
      prompt: "A modern living room",
      description: "Basic prompt establishing the subject matter"
    },
    {
      prompt: "A modern living room with Scandinavian furniture, large windows, and minimalist decor",
      description: "Adding style specifics and key features"
    },
    {
      prompt: "A modern living room with Scandinavian furniture, large windows overlooking a city skyline, minimalist decor with a statement chandelier, indoor plants, and a textured area rug on wooden flooring",
      description: "Final detailed prompt with specific elements, materials, and contextual details"
    }
  ];
  
  return (
    <section id="understanding-pattern" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F7F2EA]" ref={ref}>
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
            Understanding the Pattern
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-dark opacity-90 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Discover the principles behind Iterative & Progressive Detail Prompting and why it's a powerful approach for generating culturally authentic images with AI.
          </motion.p>
        </motion.div>
        
        {/* Definitions Section */}
        <motion.div 
          className="mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-display font-bold mb-6 text-center"
            variants={itemVariants}
          >
            Core Definitions
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Iterative Prompting Definition */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-md"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#DB4D2E]/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#DB4D2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold">Iterative Prompting</h4>
              </div>
              <p className="text-neutral-dark mb-4">
                A dynamic conversational process between a user and an AI system, involving a feedback loop where the user refines prompts based on the AI's outputs. Similar to an artist sketching and refining, each cycle builds upon previous results.
              </p>
              <div className="bg-[#F7F2EA] p-4 rounded-lg">
                <div className="flex items-center justify-around text-sm">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#DB4D2E]/20 rounded-full flex items-center justify-center mb-1">
                      <span className="text-[#DB4D2E] font-medium">1</span>
                    </div>
                    <span>Prompt</span>
                  </div>
                  <svg className="w-4 h-4 text-[#DB4D2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#DB4D2E]/20 rounded-full flex items-center justify-center mb-1">
                      <span className="text-[#DB4D2E] font-medium">2</span>
                    </div>
                    <span>AI Output</span>
                  </div>
                  <svg className="w-4 h-4 text-[#DB4D2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#DB4D2E]/20 rounded-full flex items-center justify-center mb-1">
                      <span className="text-[#DB4D2E] font-medium">3</span>
                    </div>
                    <span>Analyze</span>
                  </div>
                  <svg className="w-4 h-4 text-[#DB4D2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#DB4D2E]/20 rounded-full flex items-center justify-center mb-1">
                      <span className="text-[#DB4D2E] font-medium">4</span>
                    </div>
                    <span>Refine</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Progressive Detail Prompting Definition */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-md"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#1D7874]/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#1D7874]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold">Progressive Detail Prompting</h4>
              </div>
              <p className="text-neutral-dark mb-4">
                A specific strategy within iterative prompting that focuses on moving from coarse to fine details when generating complex scenes. Starting with basic elements and gradually adding specificity in successive iterations.
              </p>
              <div className="bg-[#F7F2EA] p-4 rounded-lg">
                <div className="relative h-24">
                  <div className="absolute top-0 left-0 w-full">
                    <div className="relative mx-auto w-full max-w-[180px]">
                      <div className="w-full h-6 bg-[#1D7874]/60 rounded-t-lg flex items-center justify-center">
                        <span className="text-white text-xs">General Concept</span>
                      </div>
                      <div className="w-full h-0 border-l-[90px] border-r-[90px] border-t-[70px] border-l-transparent border-r-transparent border-t-[#1D7874]/60 rounded-b-lg"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 text-center">
                    <span className="text-sm font-medium text-[#1D7874]">Specific Details</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Core Concepts Tabs */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden mb-12"
            variants={itemVariants}
          >
            <div className="flex border-b">
              <button 
                className={`flex-1 py-4 px-6 font-medium text-center ${activeConceptTab === 0 ? 'text-[#DB4D2E] border-b-2 border-[#DB4D2E]' : 'text-neutral-dark hover:bg-neutral-light/50'}`}
                onClick={() => setActiveConceptTab(0)}
              >
                Gradual Refinement
              </button>
              <button 
                className={`flex-1 py-4 px-6 font-medium text-center ${activeConceptTab === 1 ? 'text-[#1D7874] border-b-2 border-[#1D7874]' : 'text-neutral-dark hover:bg-neutral-light/50'}`}
                onClick={() => setActiveConceptTab(1)}
              >
                Coarse-to-Fine Detailing
              </button>
              <button 
                className={`flex-1 py-4 px-6 font-medium text-center ${activeConceptTab === 2 ? 'text-[#F9C846] border-b-2 border-[#F9C846]' : 'text-neutral-dark hover:bg-neutral-light/50'}`}
                onClick={() => setActiveConceptTab(2)}
              >
                SCoPE Methodology
              </button>
            </div>
            
            <div className="p-6">
              {/* Gradual Refinement Tab */}
              {activeConceptTab === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-bold mb-4 text-[#DB4D2E]">Core Concept: Gradual Refinement & Feedback Loop</h4>
                  <p className="mb-6 text-neutral-dark">
                    Users incrementally introduce complexity based on the AI's output from previous prompts. This process allows for targeted improvements and ensures that subsequent details build coherently upon the established foundation.
                  </p>
                  
                  <div className="mb-6">
                    <h5 className="font-medium mb-2">Forest Landscape Example:</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F7F2EA] p-4 rounded-lg">
                      <div className={`p-4 rounded-lg border ${currentForestStep === 0 ? 'border-[#DB4D2E] bg-white' : 'border-transparent'}`}>
                        <div className="font-medium text-sm mb-2 flex justify-between">
                          <span>Initial Prompt:</span>
                          <button 
                            className={`px-2 py-1 rounded text-xs ${currentForestStep === 0 ? 'bg-[#DB4D2E]/20 text-[#DB4D2E]' : 'bg-neutral-light text-neutral-dark'}`}
                            onClick={() => setCurrentForestStep(0)}
                          >
                            Step 1
                          </button>
                        </div>
                        <p className="text-sm italic mb-2">"{forestSteps[0].prompt}"</p>
                        <p className="text-xs text-neutral-dark/80">{forestSteps[0].description}</p>
                      </div>
                      
                      <div className={`p-4 rounded-lg border ${currentForestStep === 1 ? 'border-[#DB4D2E] bg-white' : 'border-transparent'}`}>
                        <div className="font-medium text-sm mb-2 flex justify-between">
                          <span>Refined Prompt:</span>
                          <button 
                            className={`px-2 py-1 rounded text-xs ${currentForestStep === 1 ? 'bg-[#DB4D2E]/20 text-[#DB4D2E]' : 'bg-neutral-light text-neutral-dark'}`}
                            onClick={() => setCurrentForestStep(1)}
                          >
                            Step 2
                          </button>
                        </div>
                        <p className="text-sm italic mb-2">"{forestSteps[1].prompt}"</p>
                        <p className="text-xs text-neutral-dark/80">{forestSteps[1].description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#DB4D2E]">Click the steps to focus on each prompt</span>
                    <div className="flex space-x-2">
                      <button 
                        className={`w-3 h-3 rounded-full ${currentForestStep === 0 ? 'bg-[#DB4D2E]' : 'bg-neutral-light'}`}
                        onClick={() => setCurrentForestStep(0)}
                      ></button>
                      <button 
                        className={`w-3 h-3 rounded-full ${currentForestStep === 1 ? 'bg-[#DB4D2E]' : 'bg-neutral-light'}`}
                        onClick={() => setCurrentForestStep(1)}
                      ></button>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Coarse-to-Fine Detailing Tab */}
              {activeConceptTab === 1 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-bold mb-4 text-[#1D7874]">Core Concept: Coarse-to-Fine Detailing (Hierarchical Prompting)</h4>
                  <p className="mb-6 text-neutral-dark">
                    Initial prompts establish global layout and primary subjects, while subsequent prompts add intricacies, texture, lighting, and other fine-grained elements. This approach is similar to how an artist might block out the basic composition before adding details.
                  </p>
                  
                  <div className="mb-6">
                    <h5 className="font-medium mb-2">LEGO Model Building Analogy:</h5>
                    <div className="bg-[#F7F2EA] p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h6 className="font-medium">Building Up Complexity Layer by Layer</h6>
                        <span className="text-sm text-[#1D7874]">Step {currentLegoPiece + 1} of 4</span>
                      </div>
                      
                      <div className="relative h-8 bg-neutral-light rounded-full mb-4">
                        <div 
                          className="absolute left-0 top-0 h-8 bg-[#1D7874] rounded-full transition-all duration-300"
                          style={{ width: `${(currentLegoPiece + 1) * 25}%` }}
                        ></div>
                      </div>
                      
                      <div className="p-4 bg-white rounded-lg">
                        <p className="font-medium mb-2 text-[#1D7874]">
                          {["Base Structure", "General Form", "Specific Features", "Final Refinements"][currentLegoPiece]}
                        </p>
                        <p className="text-sm">{legoBuildSteps[currentLegoPiece]}</p>
                      </div>
                      
                      <div className="flex justify-between mt-4">
                        <button 
                          className={`px-3 py-1.5 rounded text-sm flex items-center ${currentLegoPiece > 0 ? 'bg-[#1D7874]/20 text-[#1D7874]' : 'bg-neutral-light/50 text-neutral-dark/50 cursor-not-allowed'}`}
                          onClick={() => currentLegoPiece > 0 && setCurrentLegoPiece(currentLegoPiece - 1)}
                          disabled={currentLegoPiece === 0}
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                          Previous
                        </button>
                        
                        <button 
                          className={`px-3 py-1.5 rounded text-sm flex items-center ${currentLegoPiece < 3 ? 'bg-[#1D7874]/20 text-[#1D7874]' : 'bg-neutral-light/50 text-neutral-dark/50 cursor-not-allowed'}`}
                          onClick={() => currentLegoPiece < 3 && setCurrentLegoPiece(currentLegoPiece + 1)}
                          disabled={currentLegoPiece === 3}
                        >
                          Next
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* SCoPE Methodology Tab */}
              {activeConceptTab === 2 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 bg-[#F7F2EA] rounded-lg border border-[#F9C846]/20 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-[#F9C846]/20 px-3 py-1 text-xs font-medium text-[#F9C846] rounded-bl-lg">
                    Advanced Technique
                  </div>
                  
                  <h4 className="text-lg font-bold mb-4 text-[#F9C846] mt-4">SCoPE: Self-Consistent Prompt Editing</h4>
                  <p className="mb-4 text-neutral-dark">
                    SCoPE is an automated implementation of the coarse-to-fine approach, which decomposes a complex prompt into simpler sub-prompts and then gradually reintroduces complexity through embedding interpolation.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <h5 className="font-medium text-sm mb-2 text-center">Prompt Decomposition</h5>
                      <div className="h-px bg-neutral-light my-1"></div>
                      <p className="text-xs text-neutral-dark/80 text-center">Breaking complex prompts into simpler components</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <h5 className="font-medium text-sm mb-2 text-center">Embedding Interpolation</h5>
                      <div className="h-px bg-neutral-light my-1"></div>
                      <p className="text-xs text-neutral-dark/80 text-center">Gradually reintroducing complexity</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <h5 className="font-medium text-sm mb-2 text-center">Automated Refinement</h5>
                      <div className="h-px bg-neutral-light my-1"></div>
                      <p className="text-xs text-neutral-dark/80 text-center">System handles the iterative process</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-neutral-dark/80 italic">
                      "While manual iterative prompting requires user guidance at each step, SCoPE automates this process, achieving improved text-to-image alignment with measurably better VQA (Visual Question Answering) scores."
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Purpose and Importance Section */}
        <motion.div 
          className="mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-display font-bold mb-8 text-center"
            variants={itemVariants}
          >
            Why This Pattern Matters
          </motion.h3>
          
          <motion.p 
            className="text-center text-lg mb-10 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Iterative & Progressive Detail Prompting enhances user control, improves image quality, accuracy, and detail for complex concepts. It bridges the gap between human intention and AI understanding.
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Model Performance Benefits */}
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden"
              variants={itemVariants}
            >
              <div className="bg-[#DB4D2E]/10 px-6 py-4">
                <h4 className="text-lg font-bold text-[#DB4D2E]">Impact on Model Performance</h4>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  {modelPerformanceData.map((item, index) => (
                    <li key={index} className="border-b border-neutral-light/60 pb-4 last:border-0 last:pb-0">
                      <button 
                        className={`flex justify-between items-center w-full text-left font-medium ${activeModelPerformance === index ? 'text-[#DB4D2E]' : 'text-neutral-dark'}`}
                        onClick={() => setActiveModelPerformance(activeModelPerformance === index ? null : index)}
                      >
                        <span>{item.title}</span>
                        <svg 
                          className={`w-5 h-5 ${activeModelPerformance === index ? 'text-[#DB4D2E] rotate-180' : 'text-neutral-dark'} transition-transform duration-300`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      <AnimatePresence>
                        {activeModelPerformance === index && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={accordionVariants}
                          >
                            <p className="text-neutral-dark/80 text-sm mt-2 pl-4 border-l-2 border-[#DB4D2E]/20">
                              {item.content}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            {/* User Interaction Benefits */}
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden"
              variants={itemVariants}
            >
              <div className="bg-[#1D7874]/10 px-6 py-4">
                <h4 className="text-lg font-bold text-[#1D7874]">Impact on User Interaction</h4>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  {userInteractionData.map((item, index) => (
                    <li key={index} className="border-b border-neutral-light/60 pb-4 last:border-0 last:pb-0">
                      <button 
                        className={`flex justify-between items-center w-full text-left font-medium ${activeUserInteraction === index ? 'text-[#1D7874]' : 'text-neutral-dark'}`}
                        onClick={() => setActiveUserInteraction(activeUserInteraction === index ? null : index)}
                      >
                        <span>{item.title}</span>
                        <svg 
                          className={`w-5 h-5 ${activeUserInteraction === index ? 'text-[#1D7874] rotate-180' : 'text-neutral-dark'} transition-transform duration-300`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      <AnimatePresence>
                        {activeUserInteraction === index && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={accordionVariants}
                          >
                            <p className="text-neutral-dark/80 text-sm mt-2 pl-4 border-l-2 border-[#1D7874]/20">
                              {item.content}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
          
          {/* Illustrative Example */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden"
            variants={itemVariants}
          >
            <div className="px-6 py-4 bg-[#F9C846]/10 flex justify-between items-center">
              <h4 className="text-lg font-bold text-[#F9C846]">Illustrative Example: Modern Living Room</h4>
              <button 
                className={`p-2 rounded-full ${activeAccordion === 'livingRoom' ? 'bg-[#F9C846]/20' : 'bg-white/50'}`}
                onClick={() => toggleAccordion('livingRoom')}
              >
                <svg 
                  className={`w-5 h-5 text-[#F9C846] ${activeAccordion === 'livingRoom' ? 'rotate-180' : ''} transition-transform duration-300`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <AnimatePresence>
              {activeAccordion === 'livingRoom' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={accordionVariants}
                  className="p-6"
                >
                  <p className="text-neutral-dark mb-6">
                    This example illustrates how iterative prompting can be applied to interior design visualization, with each step adding more specific details to achieve a rich, detailed image.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {livingRoomSteps.map((step, index) => (
                      <div key={index} className="bg-[#F7F2EA] rounded-lg overflow-hidden">
                        <div className="p-4 h-36 flex items-center justify-center border-b border-neutral-light">
                          <div className="w-16 h-16 bg-[#F9C846]/20 rounded-full flex items-center justify-center">
                            <span className="text-2xl text-[#F9C846] font-bold">{index + 1}</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h5 className="font-medium text-sm mb-2">Prompt {index + 1}:</h5>
                          <p className="text-sm italic mb-3">"{step.prompt}"</p>
                          <div className="text-xs text-neutral-dark/70">{step.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-[#F9C846]/5 border border-[#F9C846]/20 rounded-lg p-4">
                    <h5 className="font-medium mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[#F9C846]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Benefits in Interior Design
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#F9C846] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Allows for more precise control over aesthetic elements and spatial relationships</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#F9C846] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Enables detailed visualization of styling choices before physical implementation</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#F9C846] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Facilitates clear communication between designers and clients through progressive refinement</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UnderstandingPattern;