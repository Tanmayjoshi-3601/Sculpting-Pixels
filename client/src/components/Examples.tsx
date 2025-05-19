import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

interface IterationData {
  prompt: string;
  analysis: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
}

const Examples = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const [currentIteration, setCurrentIteration] = useState<number>(1);
  const [showComparison, setShowComparison] = useState<boolean>(false);
  
  const iterations: IterationData[] = [
    {
      prompt: "Rann Utsav festival, white desert landscape, tents, daytime.",
      analysis: "As expected, a fairly generic scene. The AI provides a basic representation of a desert with some tents, but it lacks the specific cultural elements that make Rann Utsav unique. The colors are muted, the tents are generic, and there is no indication of Gujarati cultural elements.",
      imageUrl: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Initial AI generation of Rann Utsav with basic tents in a desert",
      imageCaption: "Initial AI generation based on basic prompt"
    },
    {
      prompt: "Vibrant <span class=\"highlight\">Rann Utsav festival in Kutch, Gujarat</span>, white desert landscape, <span class=\"highlight\">colorful traditional Gujarati bhungas</span> and <span class=\"highlight\">decorated circular tents</span>, <span class=\"highlight\">golden sunset</span> light.",
      analysis: "Much better! We see the colorful Kutchi tents and bhungas (traditional round houses) with their distinctive decorative elements. The golden sunset creates a warm atmosphere, and the AI has captured some of the vibrancy of the festival. However, it still lacks some specific cultural details and activities that would make it truly authentic.",
      imageUrl: "https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Improved AI generation showing colorful tents at Rann Utsav during sunset",
      imageCaption: "Improved generation with specified cultural elements"
    },
    {
      prompt: "Vibrant Rann Utsav festival in Kutch, Gujarat, <span class=\"highlight\">vast white salt desert of Rann of Kutch</span>, colorful traditional Gujarati bhungas and decorated circular tents, golden sunset light, <span class=\"highlight\">local artisans displaying mirror-work embroidery and bandhani textiles</span>, <span class=\"highlight\">camel silhouettes</span>, <span class=\"highlight\">folk dancers in traditional Gujarati attire with ghagra choli</span>, <span class=\"highlight\">photorealistic, detailed</span>.",
      analysis: "Perfect! The image now contains all the essential elements that make Rann Utsav culturally authentic. We can see the distinctive white salt desert, traditional Gujarati bhungas with mirror work decorations, folk dancers in traditional attire, artisans displaying their crafts, and even camel silhouettes against the sunset. The photorealistic quality brings the scene to life with rich details.",
      imageUrl: "https://pixabay.com/get/g439e8cc5f3256fed4da986c5a85fea1e4730d035c526deae328d973651ae8b7b7a4cc763017925fbef105ba2f99ac2a540f18bab5065b0fc6f00176804b3bf3e_1280.jpg",
      imageAlt: "Final detailed AI generation showing authentic Rann Utsav with folk dancers, artisans, and traditional elements",
      imageCaption: "Final detailed generation with complete cultural context"
    }
  ];
  
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
    <section id="examples" className="py-16 md:py-24 bg-white" ref={ref}>
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
            Iterative Examples Gallery
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-dark opacity-90"
            variants={itemVariants}
          >
            Explore real examples showing how prompt iteration transforms AI-generated imagery, enhancing cultural accuracy and visual appeal.
          </motion.p>
        </motion.div>
        
        {/* Example 1: Rann Utsav */}
        <motion.div 
          className="mb-20" 
          id="example-rann-utsav"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-display font-bold mb-6 text-center"
            variants={itemVariants}
          >
            Rann Utsav Festival at Sunset
          </motion.h3>
          <motion.p 
            className="text-center mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Watch how we transform a basic festival scene into a culturally authentic representation of Gujarat's famous Rann Utsav celebration.
          </motion.p>
          
          {/* Interactive Container */}
          <motion.div 
            className="bg-neutral-light rounded-xl p-6 md:p-10 custom-shadow"
            variants={itemVariants}
          >
            {/* Iteration Navigation */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm">
                {[1, 2, 3].map((i) => (
                  <button 
                    key={i}
                    className={`px-5 py-2.5 ${
                      currentIteration === i 
                        ? 'bg-primary text-white' 
                        : 'bg-white text-neutral-dark hover:bg-gray-50'
                    } ${
                      i === 1 ? 'rounded-l-lg' : i === 3 ? 'rounded-r-lg' : ''
                    } font-medium iteration-btn`}
                    onClick={() => setCurrentIteration(i)}
                  >
                    Iteration {i}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Content Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 iteration-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentIteration}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="transition-fade"
                >
                  {/* Prompt */}
                  <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                    <h4 className="text-lg font-medium mb-3 flex items-center text-neutral-dark">
                      <i className="ri-chat-1-line mr-2 text-primary"></i>
                      Prompt Text
                    </h4>
                    <p 
                      className="text-sm md:text-base bg-neutral-light p-4 rounded"
                      dangerouslySetInnerHTML={{ __html: iterations[currentIteration - 1].prompt }}
                    ></p>
                  </div>
                  
                  {/* Analysis */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-medium mb-3 flex items-center text-neutral-dark">
                      <i className="ri-search-line mr-2 text-primary"></i>
                      Analysis
                    </h4>
                    <p className="text-sm md:text-base">
                      {iterations[currentIteration - 1].analysis}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Image for Iteration */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`image-${currentIteration}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="order-first lg:order-last"
                >
                  <img 
                    src={iterations[currentIteration - 1].imageUrl} 
                    alt={iterations[currentIteration - 1].imageAlt} 
                    className="w-full h-auto rounded-xl shadow-lg object-cover aspect-[4/3]" 
                  />
                  <p className="mt-4 text-sm text-neutral-dark opacity-70 italic text-center">
                    {iterations[currentIteration - 1].imageCaption}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Comparison Toggle */}
            <div className="mt-10 text-center">
              <motion.button 
                className="inline-flex items-center px-5 py-2.5 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition-colors"
                onClick={() => setShowComparison(!showComparison)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`ri-${showComparison ? 'fullscreen-exit' : 'contrast-2'}-line mr-2`}></i>
                {showComparison ? 'Return to Single View' : 'Toggle Side-by-Side Comparison'}
              </motion.button>
            </div>
            
            {/* Comparison View */}
            <AnimatePresence>
              {showComparison && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {iterations.map((iteration, index) => (
                      <div key={`comparison-${index}`}>
                        <img 
                          src={iteration.imageUrl} 
                          alt={iteration.imageAlt} 
                          className="w-full h-auto rounded-xl shadow-sm object-cover aspect-square" 
                        />
                        <p className="mt-2 text-xs text-center font-medium">Iteration {index + 1}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
        
        {/* Example 2 Teaser */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ delayChildren: 0.4 }}
        >
          <motion.div 
            className="bg-neutral-light rounded-xl p-6 custom-shadow hover:shadow-xl transition-shadow"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            {/* Traditional Gujarati Wedding */}
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-display font-bold">Traditional Gujarati Wedding</h4>
              <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">Coming Soon</span>
            </div>
            <img 
              src="https://pixabay.com/get/g404087376972eb6faa09f9149fe895abfa4002c032427143578a19012b8625f2560ae0abaea7814034e2003614d22032a970ef5f091fc0045ed8af9a15fe4c12_1280.jpg" 
              alt="AI-generated Gujarati wedding scene" 
              className="w-full h-auto rounded-lg shadow-sm mb-4 object-cover aspect-[16/9]" 
            />
            <p className="text-sm text-neutral-dark opacity-80">
              Explore how to generate authentic Gujarati wedding imagery with detailed cultural elements including traditional attire, rituals, and decorations.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-neutral-light rounded-xl p-6 custom-shadow hover:shadow-xl transition-shadow"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            {/* Navratri Festival */}
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-display font-bold">Navratri Garba Celebration</h4>
              <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">Coming Soon</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="AI-generated Navratri dancers in traditional attire" 
              className="w-full h-auto rounded-lg shadow-sm mb-4 object-cover aspect-[16/9]" 
            />
            <p className="text-sm text-neutral-dark opacity-80">
              Learn to create vibrant scenes of Gujarat's famous Navratri festival with authentic dance formations, traditional chaniya choli attire, and festive atmosphere.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Examples;
