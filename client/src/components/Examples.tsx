import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface IterationData {
  prompt: string;
  analysis: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
}

// Component to highlight changed text between prompt iterations
const HighlightChanges = ({ 
  currentText, 
  previousText 
}: { 
  currentText: string; 
  previousText: string | null;
}) => {
  if (!previousText) {
    return <div dangerouslySetInnerHTML={{ __html: currentText }} />;
  }

  // Strip HTML tags for comparison
  const stripTags = (html: string) => html.replace(/<\/?[^>]+(>|$)/g, "");
  const currentStripped = stripTags(currentText);
  const previousStripped = stripTags(previousText);
  
  const words = currentStripped.split(' ');
  const prevWords = previousStripped.split(' ');
  
  const result = words.map((word, index) => {
    if (!prevWords.includes(word)) {
      return `<span class="highlight-new">${word}</span>`;
    }
    return word;
  }).join(' ');
  
  return <div dangerouslySetInnerHTML={{ __html: result }} />;
};

// Component for the image lightbox/modal with zoom functionality
const ImageLightbox = ({ 
  imageUrl, 
  imageAlt, 
  onClose 
}: { 
  imageUrl: string; 
  imageAlt: string; 
  onClose: () => void;
}) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));
  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };
  
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    setPosition({
      x: position.x + (e.clientX - dragStart.x) / scale,
      y: position.y + (e.clientY - dragStart.y) / scale
    });
    
    setDragStart({ x: e.clientX, y: e.clientY });
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  
  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div 
        className="relative w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 z-10 flex space-x-2">
          <button 
            className="bg-white text-black p-2 rounded-full"
            onClick={handleZoomIn}
          >
            <i className="ri-zoom-in-line"></i>
          </button>
          <button 
            className="bg-white text-black p-2 rounded-full"
            onClick={handleZoomOut}
          >
            <i className="ri-zoom-out-line"></i>
          </button>
          <button 
            className="bg-white text-black p-2 rounded-full"
            onClick={handleReset}
          >
            <i className="ri-refresh-line"></i>
          </button>
          <button 
            className="bg-white text-black p-2 rounded-full"
            onClick={onClose}
          >
            <i className="ri-close-line"></i>
          </button>
        </div>
        
        <div 
          className="overflow-hidden w-[90%] h-[90%] cursor-move select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            style={{
              transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
              transition: isDragging ? 'none' : 'transform 0.2s ease-out'
            }}
            className="w-full h-full flex items-center justify-center"
          >
            <img 
              src={imageUrl} 
              alt={imageAlt} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        <p className="text-white mt-4 text-center max-w-2xl">{imageAlt}</p>
      </div>
    </motion.div>
  );
};

const Examples = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const [currentIteration, setCurrentIteration] = useState<number>(1);
  const [showComparison, setShowComparison] = useState<boolean>(false);
  const [activeLightbox, setActiveLightbox] = useState<{
    imageUrl: string;
    imageAlt: string;
  } | null>(null);
  const [isComparing, setIsComparing] = useState<boolean>(false);
  const [animatePrompt, setAnimatePrompt] = useState<boolean>(false);

  // The Rann Utsav Festival example
  const rannUtsavIterations: IterationData[] = [
    {
      prompt: "Rann Utsav festival, white desert landscape, tents, daytime.",
      analysis: "As expected, a fairly generic scene. The AI provides a basic representation of a desert with some tents, but it lacks the specific cultural elements that make Rann Utsav unique. The colors are muted, the tents are generic, and there is no indication of Gujarati cultural elements.",
      imageUrl: "/images/rann_utsav_iteration1.png",
      imageAlt: "Initial AI generation of Rann Utsav with basic tents in a white desert",
      imageCaption: "Initial AI generation based on basic prompt"
    },
    {
      prompt: "Vibrant <span class=\"highlight\">Rann Utsav festival in Kutch, Gujarat</span>, white desert landscape, <span class=\"highlight\">colorful traditional Gujarati bhungas</span> and <span class=\"highlight\">decorated circular tents</span>, <span class=\"highlight\">golden sunset</span> light.",
      analysis: "Much better! We see the colorful Kutchi tents and bhungas (traditional round houses) with their distinctive decorative elements. The addition of camels with traditional decorations adds cultural authenticity. However, it still lacks some specific cultural details and activities that would make it truly authentic.",
      imageUrl: "/images/rann_utsav_iteration2.png",
      imageAlt: "Improved AI generation showing colorful tents at Rann Utsav with decorated camels",
      imageCaption: "Improved generation with specified cultural elements and decorated camels"
    },
    {
      prompt: "Vibrant Rann Utsav festival in Kutch, Gujarat, <span class=\"highlight\">vast white salt desert of Rann of Kutch</span>, colorful traditional Gujarati bhungas and decorated circular tents, golden sunset light, <span class=\"highlight\">local artisans displaying mirror-work embroidery and bandhani textiles</span>, <span class=\"highlight\">camel silhouettes</span>, <span class=\"highlight\">folk dancers in traditional Gujarati attire with ghagra choli</span>, <span class=\"highlight\">photorealistic, detailed</span>.",
      analysis: "Perfect! The image now contains all the essential elements that make Rann Utsav culturally authentic. We can see the distinctive white salt desert at sunset, traditional Gujarati tents with glowing lights, folk dancers in traditional attire, and cultural activities happening. The golden sunset creates a magical atmosphere and the photorealistic quality brings the scene to life with rich details.",
      imageUrl: "/images/rann_utsav_iteration3.png",
      imageAlt: "Final detailed AI generation showing authentic Rann Utsav at sunset with folk dancers, decorated tents, and cultural elements",
      imageCaption: "Final detailed generation with complete cultural context at sunset"
    }
  ];
  
  // Sidi Saiyyed Mosque Jali example with actual images
  const sidiSaiyyedIterations: IterationData[] = [
    {
      prompt: "Sidi Saiyyed Mosque jali window pattern, stone carving.",
      analysis: "The basic prompt produces a depiction of a jali window, but lacks the specific cultural and historical details of the famous Sidi Saiyyed Mosque in Ahmedabad. The geometric honeycomb pattern shown here is different from the iconic tree-of-life pattern that makes this jali world-famous.",
      imageUrl: "/images/sidi_saiyyed_iteration1.png",
      imageAlt: "Initial AI generation of a geometric jali window pattern",
      imageCaption: "Initial generation showing a basic geometric jali pattern"
    },
    {
      prompt: "Famous <span class=\"highlight\">Sidi Saiyyed Mosque jali in Ahmedabad, Gujarat</span>, intricate <span class=\"highlight\">tree of life pattern</span>, <span class=\"highlight\">16th century Islamic architecture</span>, <span class=\"highlight\">detailed stone latticework</span>, <span class=\"highlight\">golden sunlight filtering through</span>.",
      analysis: "This iteration shows significant improvement with the tree of life pattern clearly visible in the jali. The sunlight shining through creates a magical effect, highlighting the beautiful craftsmanship. The addition of specific details about location and historical context has helped generate a more authentic representation.",
      imageUrl: "/images/sidi_saiyyed_iteration2.png",
      imageAlt: "Improved AI generation showing the distinctive tree of life pattern with sunlight filtering through",
      imageCaption: "Enhanced generation with the iconic tree of life pattern and beautiful lighting"
    },
    {
      prompt: "Famous Sidi Saiyyed Mosque jali in Ahmedabad, Gujarat, intricate tree of life pattern, 16th century Islamic architecture, detailed stone latticework, golden light filtering through, <span class=\"highlight\">intertwining branches and delicate leaves</span>, <span class=\"highlight\">symbol of Indo-Islamic art</span>, <span class=\"highlight\">historically accurate architectural details</span>, <span class=\"highlight\">ornate stone frame</span>, <span class=\"highlight\">photorealistic, high detail</span>.",
      analysis: "The final iteration captures the full essence of this architectural masterpiece. The intertwining branches of the tree of life pattern are rendered with historical accuracy, and the cultural significance as a symbol of Indo-Islamic art fusion is evident. The detailed stone frame around the jali is now accurately represented, and the lighting highlights the three-dimensional quality of this remarkable piece of Gujarati heritage.",
      imageUrl: "/images/sidi_saiyyed_iteration3.png",
      imageAlt: "Final detailed AI generation showing the iconic Sidi Saiyyed jali with accurate historical details and ornate frame",
      imageCaption: "Final detailed generation with historical accuracy and proper architectural context"
    }
  ];
  
  // State to track which example is active
  const [activeExample, setActiveExample] = useState<'rannUtsav' | 'sidiSaiyyed'>('rannUtsav');
  
  // Get the current iterations based on active example
  const iterations = activeExample === 'rannUtsav' ? rannUtsavIterations : sidiSaiyyedIterations;
  
  // Handle iteration changes with animation
  const changeIteration = (newIteration: number) => {
    if (newIteration === currentIteration) return;
    
    // Trigger prompt highlight animation
    setAnimatePrompt(true);
    setTimeout(() => setAnimatePrompt(false), 1500);
    
    setCurrentIteration(newIteration);
  };
  
  // Open lightbox for image zoom
  const openLightbox = (imageUrl: string, imageAlt: string) => {
    setActiveLightbox({ imageUrl, imageAlt });
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
  
  const promptVariants = {
    highlight: {
      backgroundColor: ['rgba(255,179,71,0)', 'rgba(255,179,71,0.4)', 'rgba(255,179,71,0)'],
      transition: { duration: 1.5, times: [0, 0.5, 1] }
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
        
        {/* Example Selection Tabs */}
        <motion.div 
          className="mb-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="flex justify-center space-x-4">
            <motion.button 
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeExample === 'rannUtsav' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-neutral-light hover:bg-neutral-light/80'
              }`}
              onClick={() => setActiveExample('rannUtsav')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <span className="flex items-center">
                <i className="ri-landscape-line mr-2"></i>
                Rann Utsav Festival
              </span>
            </motion.button>
            
            <motion.button 
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeExample === 'sidiSaiyyed' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-neutral-light hover:bg-neutral-light/80'
              }`}
              onClick={() => setActiveExample('sidiSaiyyed')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <span className="flex items-center">
                <i className="ri-building-line mr-2"></i>
                Sidi Saiyyed Mosque Jali
              </span>
            </motion.button>
          </div>
        </motion.div>
        
        {/* Active Example Container */}
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
            {activeExample === 'rannUtsav' 
              ? 'Rann Utsav Festival at Sunset' 
              : 'Sidi Saiyyed Mosque Jali Window'}
          </motion.h3>
          <motion.p 
            className="text-center mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {activeExample === 'rannUtsav'
              ? 'Watch how we transform a basic festival scene into a culturally authentic representation of Gujarat\'s famous Rann Utsav celebration.'
              : 'Explore how to evolve a simple jali window pattern into the iconic tree-of-life lattice work of the Sidi Saiyyed Mosque in Ahmedabad.'}
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
                    onClick={() => changeIteration(i)}
                  >
                    <span className="flex items-center">
                      <i className={`ri-${i === 1 ? 'seed-line' : i === 2 ? 'plant-line' : 'tree-line'} mr-1`}></i>
                      Iteration {i}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Content Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 iteration-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentIteration}-${activeExample}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="transition-fade"
                >
                  {/* Prompt */}
                  <motion.div 
                    className="bg-white rounded-lg p-6 mb-6 shadow-sm"
                    animate={animatePrompt ? "highlight" : ""}
                    variants={promptVariants}
                  >
                    <h4 className="text-lg font-medium mb-3 flex items-center text-neutral-dark">
                      <i className="ri-chat-1-line mr-2 text-primary"></i>
                      Prompt Text
                    </h4>
                    
                    <div className="text-sm md:text-base bg-neutral-light p-4 rounded">
                      {currentIteration === 1 ? (
                        <div dangerouslySetInnerHTML={{ __html: iterations[0].prompt }} />
                      ) : (
                        <HighlightChanges 
                          currentText={iterations[currentIteration - 1].prompt} 
                          previousText={iterations[currentIteration - 2].prompt}
                        />
                      )}
                    </div>
                  </motion.div>
                  
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
                  key={`image-${currentIteration}-${activeExample}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="order-first lg:order-last"
                >
                  <div className="relative group">
                    <img 
                      src={iterations[currentIteration - 1].imageUrl} 
                      alt={iterations[currentIteration - 1].imageAlt} 
                      className="w-full h-auto rounded-xl shadow-lg object-cover aspect-[4/3] cursor-pointer transition-transform group-hover:scale-[1.01]" 
                      onClick={() => openLightbox(
                        iterations[currentIteration - 1].imageUrl,
                        iterations[currentIteration - 1].imageAlt
                      )}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button 
                        className="bg-white p-3 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-300"
                        onClick={() => openLightbox(
                          iterations[currentIteration - 1].imageUrl,
                          iterations[currentIteration - 1].imageAlt
                        )}
                      >
                        <i className="ri-zoom-in-line text-xl"></i>
                      </button>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-neutral-dark opacity-70 italic text-center">
                    {iterations[currentIteration - 1].imageCaption}
                  </p>
                  
                  {/* Image Comparison Navigation */}
                  <div className="flex justify-center space-x-3 mt-6">
                    <button 
                      className={`p-2 ${currentIteration > 1 ? 'text-primary' : 'text-gray-300 cursor-not-allowed'} transition-colors`}
                      onClick={() => currentIteration > 1 && changeIteration(currentIteration - 1)}
                      disabled={currentIteration === 1}
                    >
                      <i className="ri-arrow-left-line text-xl"></i>
                    </button>
                    
                    <button 
                      className="p-2 text-secondary hover:text-secondary/80 transition-colors"
                      onClick={() => setIsComparing(!isComparing)}
                    >
                      <i className={`ri-${isComparing ? 'eye-off-line' : 'eye-line'} text-xl`}></i>
                    </button>
                    
                    <button 
                      className={`p-2 ${currentIteration < 3 ? 'text-primary' : 'text-gray-300 cursor-not-allowed'} transition-colors`}
                      onClick={() => currentIteration < 3 && changeIteration(currentIteration + 1)}
                      disabled={currentIteration === 3}
                    >
                      <i className="ri-arrow-right-line text-xl"></i>
                    </button>
                  </div>
                  
                  {/* Previous/Current Image Comparison */}
                  {isComparing && currentIteration > 1 && (
                    <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
                      <h5 className="text-center text-sm font-medium mb-3">Comparing with Previous Iteration</h5>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <img 
                            src={iterations[currentIteration - 2].imageUrl} 
                            alt={`Previous iteration: ${iterations[currentIteration - 2].imageAlt}`}
                            className="w-full h-auto rounded-lg object-cover aspect-square"
                          />
                          <p className="mt-2 text-xs text-center">Iteration {currentIteration - 1}</p>
                        </div>
                        <div>
                          <img 
                            src={iterations[currentIteration - 1].imageUrl} 
                            alt={`Current iteration: ${iterations[currentIteration - 1].imageAlt}`}
                            className="w-full h-auto rounded-lg object-cover aspect-square"
                          />
                          <p className="mt-2 text-xs text-center">Iteration {currentIteration}</p>
                        </div>
                      </div>
                    </div>
                  )}
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
                      <div key={`comparison-${index}`} className="group relative">
                        <img 
                          src={iteration.imageUrl} 
                          alt={iteration.imageAlt} 
                          className="w-full h-auto rounded-xl shadow-sm object-cover aspect-square cursor-pointer" 
                          onClick={() => openLightbox(iteration.imageUrl, iteration.imageAlt)}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <button 
                            className="bg-white p-2 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-300"
                            onClick={(e) => {
                              e.stopPropagation();
                              openLightbox(iteration.imageUrl, iteration.imageAlt);
                            }}
                          >
                            <i className="ri-zoom-in-line"></i>
                          </button>
                        </div>
                        <p className="mt-2 text-xs text-center font-medium">Iteration {index + 1}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
        
        {/* Lightbox for image zoom */}
        <AnimatePresence>
          {activeLightbox && (
            <ImageLightbox
              imageUrl={activeLightbox.imageUrl}
              imageAlt={activeLightbox.imageAlt}
              onClose={() => setActiveLightbox(null)}
            />
          )}
        </AnimatePresence>
        
        {/* Quiz Section Teaser */}
        <motion.div 
          className="bg-primary/5 rounded-xl p-6 md:p-10 mt-12 mb-12 custom-shadow text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ delayChildren: 0.6 }}
        >
          <motion.h3 
            className="text-2xl font-display font-bold mb-4"
            variants={itemVariants}
          >
            Test Your Knowledge
          </motion.h3>
          <motion.p 
            className="max-w-2xl mx-auto mb-6 text-neutral-dark"
            variants={itemVariants}
          >
            Ready to test your understanding of the iterative prompting technique? Take our interactive quiz to see how well you've grasped the concepts.
          </motion.p>
          <motion.a 
            href="#quiz"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            <i className="ri-question-line mr-2"></i>
            Take the Quiz
          </motion.a>
        </motion.div>
        
        {/* Creative Challenge Teaser */}
        <motion.div 
          className="bg-secondary/5 rounded-xl p-6 md:p-10 custom-shadow text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ delayChildren: 0.8 }}
        >
          <motion.h3 
            className="text-2xl font-display font-bold mb-4"
            variants={itemVariants}
          >
            Try It Yourself: Creative Challenge
          </motion.h3>
          <motion.p 
            className="max-w-2xl mx-auto mb-6 text-neutral-dark"
            variants={itemVariants}
          >
            Put your new knowledge into practice with our "Designing a Mythical Creature" exercise, where you'll create your own iterative prompts.
          </motion.p>
          <motion.a 
            href="#challenge"
            className="inline-flex items-center px-6 py-3 bg-secondary text-white rounded-md font-medium hover:bg-secondary/90 transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            <i className="ri-magic-line mr-2"></i>
            Start the Challenge
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Examples;
