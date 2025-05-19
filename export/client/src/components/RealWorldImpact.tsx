import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const RealWorldImpact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  // State for interactive elements
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  
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
  
  // Sustainable Urban Housing Complex example
  const housingComplexSteps = [
    {
      prompt: "A sustainable urban housing complex",
      description: "Initial basic prompt establishing the subject matter",
      benefits: [
        "Establishes the general concept",
        "Allows exploring the basic form and layout",
        "Provides a starting point for further refinement"
      ]
    },
    {
      prompt: "A sustainable urban housing complex with green rooftops, solar panels, communal gardens, and modular design in a contemporary architectural style",
      description: "Adding specific sustainability features and architectural style",
      benefits: [
        "Introduces key sustainability elements",
        "Specifies architectural style for better context",
        "Adds functional elements that define the complex"
      ]
    },
    {
      prompt: "A sustainable urban housing complex with green rooftops, solar panels, rainwater collection systems, and vertical gardens on the facades. The complex features modular apartment units made of recycled materials, arranged around central communal gardens and pedestrian walkways. The design follows contemporary architectural style with natural wood elements and large windows for passive heating. Show the complex integrated into an urban neighborhood during golden hour lighting.",
      description: "Final detailed prompt with specific materials, arrangement, systems, and environmental context",
      benefits: [
        "Provides comprehensive material specifications",
        "Offers clear spatial relationships between elements",
        "Contextualizes the design in its environment",
        "Adds atmospheric elements for better visualization"
      ]
    },
    {
      prompt: "Further iterations could focus on specific views (e.g., interior courtyard, rooftop garden details) or seasonal variations (e.g., how the building performs in different weather conditions).",
      description: "Potential next steps for focused exploration",
      benefits: [
        "Allows deeper exploration of specific areas",
        "Demonstrates functionality across different conditions",
        "Enables exploration of experiential qualities"
      ]
    }
  ];
  
  // Benefits of iterative prompting in architecture
  const architecturalBenefits = [
    {
      title: "Rapid Prototyping",
      description: "Architects can quickly test and visualize design concepts without the time investment of traditional renderings or physical models. Multiple design iterations can be explored in a fraction of the time it would take using conventional methods."
    },
    {
      title: "Effective Communication",
      description: "Detailed visualizations help communicate complex architectural ideas to clients, stakeholders, and team members who may not be able to interpret technical drawings. The iterative process allows for progressive refinement based on feedback."
    },
    {
      title: "Exploring Complexity",
      description: "The iterative approach enables exploration of complex architectural relationships, sustainable features, and integration with surroundings that might be difficult to conceptualize all at once."
    },
    {
      title: "Design Refinement",
      description: "Architects can systematically refine aesthetics, functionality, and technical aspects of a design by focusing on different elements in each iteration."
    }
  ];
  
  return (
    <section id="real-world-impact" className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span 
            className="inline-block w-20 h-1 bg-[#DB4D2E] mb-6"
            variants={itemVariants}
          ></motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            variants={itemVariants}
          >
            Real-World Impact
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-dark opacity-90 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Discover how the iterative prompting technique extends beyond art and can be applied to professional fields like architectural visualization and design.
          </motion.p>
        </motion.div>
        
        {/* Architectural Visualization Overview */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Architectural Visualization</h3>
              <p className="text-neutral-dark mb-6">
                Iterative and Progressive Detail Prompting offers significant advantages in architectural visualization, allowing architects and designers to rapidly prototype ideas, communicate complex concepts, and explore detailed design solutions through a structured approach.
              </p>
              <div className="bg-[#F7F2EA] p-4 rounded-lg mb-6">
                <h4 className="font-medium mb-3 flex items-center text-[#DB4D2E]">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Key Applications
                </h4>
                <ul className="space-y-2 pl-7 list-disc text-neutral-dark">
                  <li>Conceptual design exploration</li>
                  <li>Client presentations and communication</li>
                  <li>Sustainability visualization</li>
                  <li>Urban planning and integration</li>
                  <li>Material and texture studies</li>
                </ul>
              </div>
              <button 
                className="flex items-center text-[#1D7874] font-medium hover:underline"
                onClick={() => setActiveAccordion(activeAccordion === 'benefits' ? null : 'benefits')}
              >
                <span>View detailed benefits</span>
                <svg 
                  className={`w-5 h-5 ml-1 ${activeAccordion === 'benefits' ? 'rotate-180' : ''} transition-transform duration-300`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {activeAccordion === 'benefits' && (
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={accordionVariants}
                    className="mt-4"
                  >
                    <div className="bg-white rounded-lg shadow-sm border border-neutral-light p-4">
                      <div className="space-y-4">
                        {architecturalBenefits.map((benefit, index) => (
                          <div key={index} className="pb-4 border-b border-neutral-light/60 last:border-0 last:pb-0">
                            <h5 className="font-medium mb-1 text-[#1D7874]">{benefit.title}</h5>
                            <p className="text-sm text-neutral-dark/80">{benefit.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="relative">
              <div className="bg-[#F7F2EA] rounded-xl p-4 md:p-6 relative">
                <div className="aspect-video bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#1D7874]/20 to-[#DB4D2E]/10 flex items-center justify-center">
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/80 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#1D7874]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-lg mb-2">Architectural Visualization</h4>
                      <p className="text-sm text-neutral-dark/80">
                        Transform concepts into detailed visual representations through iterative refinement
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 bg-white px-3 py-1 rounded shadow-sm text-xs font-medium text-[#DB4D2E]">
                  Professional Application
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-[#1D7874]/10 rounded-lg p-3 shadow-sm hidden md:block">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-[#DB4D2E] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#1D7874] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#F9C846] rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Urban Housing Complex Example */}
        <motion.div 
          className="bg-white rounded-xl shadow-md overflow-hidden mb-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="bg-[#1D7874]/10 px-6 py-4 flex justify-between items-center">
            <h3 className="text-xl font-bold text-[#1D7874]">Sustainable Urban Housing Complex</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-neutral-dark/80">Iterative Example</span>
              <svg className="w-5 h-5 text-[#1D7874]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-8">
              <div className="relative h-2 bg-neutral-light rounded-full mb-8">
                <div 
                  className="absolute left-0 top-0 h-2 bg-[#1D7874] rounded-full transition-all duration-500"
                  style={{ width: `${(currentStep + 1) * 25}%` }}
                ></div>
                
                <div className="absolute top-0 left-0 w-full flex justify-between">
                  {[0, 1, 2, 3].map((step) => (
                    <button 
                      key={step}
                      className={`w-6 h-6 rounded-full flex items-center justify-center -mt-2 ${
                        currentStep >= step ? 'bg-[#1D7874] text-white' : 'bg-white border-2 border-neutral-light text-neutral-dark'
                      } ${
                        currentStep === step ? 'ring-4 ring-[#1D7874]/20' : ''
                      }`}
                      onClick={() => setCurrentStep(step)}
                    >
                      {step + 1}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between text-sm text-neutral-dark/70 mb-8">
                <span>Basic<br />Concept</span>
                <span>Specific<br />Features</span>
                <span>Detailed<br />Specification</span>
                <span>Further<br />Exploration</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-lg font-bold mb-4">Prompt Iteration {currentStep + 1}</h4>
                <div className="bg-[#F7F2EA] rounded-lg p-4 mb-4">
                  <h5 className="font-medium text-sm mb-2 text-[#1D7874]">Prompt Text:</h5>
                  <p className="text-sm italic">
                    "{housingComplexSteps[currentStep].prompt}"
                  </p>
                </div>
                
                <div className="bg-white border border-neutral-light/60 rounded-lg p-4">
                  <h5 className="font-medium text-sm mb-3 text-[#DB4D2E]">Design Considerations:</h5>
                  <ul className="space-y-2">
                    {housingComplexSteps[currentStep].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg className="w-5 h-5 text-[#DB4D2E] mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-neutral-dark/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-[#F7F2EA] rounded-lg p-4 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <svg className="w-10 h-10 text-[#1D7874]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-lg mb-2">Iteration {currentStep + 1} Visualization</h4>
                  <p className="text-sm text-neutral-dark/80 mb-4">
                    {housingComplexSteps[currentStep].description}
                  </p>
                  
                  <div className="flex justify-center space-x-4">
                    <button 
                      className={`px-3 py-1.5 rounded text-sm flex items-center ${
                        currentStep > 0 ? 'bg-[#1D7874]/20 text-[#1D7874]' : 'bg-neutral-light/80 text-neutral-dark/50 cursor-not-allowed'
                      }`}
                      onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
                      disabled={currentStep === 0}
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous
                    </button>
                    
                    <button 
                      className={`px-3 py-1.5 rounded text-sm flex items-center ${
                        currentStep < 3 ? 'bg-[#1D7874]/20 text-[#1D7874]' : 'bg-neutral-light/80 text-neutral-dark/50 cursor-not-allowed'
                      }`}
                      onClick={() => currentStep < 3 && setCurrentStep(currentStep + 1)}
                      disabled={currentStep === 3}
                    >
                      Next Step
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#DB4D2E]/5 border border-[#DB4D2E]/20 rounded-lg p-4">
              <h5 className="font-medium mb-3 flex items-center text-[#DB4D2E]">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Professional Insight
              </h5>
              <p className="text-sm text-neutral-dark/80">
                In architectural practice, this iterative approach allows designers to progressively build complexity while maintaining clear communication with clients. Each iteration can address feedback, explore new ideas, or focus on specific aspects of the design. This structured approach helps manage the inherent complexity of architectural visualization and ensures that both technical and aesthetic considerations are properly addressed.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Other Applications Teaser */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="bg-[#F7F2EA] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            variants={itemVariants}
          >
            <div className="w-12 h-12 bg-[#DB4D2E]/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#DB4D2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2">Product Design</h4>
            <p className="text-neutral-dark/80 text-sm">
              Iterative prompting can help product designers visualize concepts, explore variations, and refine details before physical prototyping, saving time and resources.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#F7F2EA] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            variants={itemVariants}
          >
            <div className="w-12 h-12 bg-[#1D7874]/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#1D7874]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2">UI/UX Design</h4>
            <p className="text-neutral-dark/80 text-sm">
              Designers can use this technique to progressively refine interface mockups, explore user flows, and visualize different interaction patterns through iterative prompting.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#F7F2EA] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            variants={itemVariants}
          >
            <div className="w-12 h-12 bg-[#F9C846]/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#F9C846]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2">Film & Animation</h4>
            <p className="text-neutral-dark/80 text-sm">
              Storyboard artists and concept designers can iteratively develop scenes, character designs, and environments with increasingly specific details and visual styles.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealWorldImpact;