import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AiApiInfo = () => {
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
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <span className="inline-block px-3 py-1 bg-[#DB4D2E]/20 text-[#DB4D2E] rounded-full text-sm font-medium mb-4">
              For Developers
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Open Source AI Image Generation APIs
            </h2>
            <p className="text-lg mb-8 text-neutral-dark opacity-90 max-w-3xl mx-auto">
              You can integrate real AI image generation with these open-source alternatives to power the 'Simulate AI Output' feature with actual AI-generated images.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {/* Stable Diffusion */}
            <motion.div 
              className="bg-neutral-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#1D7874]/10 p-3 rounded-lg">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="#1D7874" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#1D7874" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Stable Diffusion API</h3>
                  <p className="text-neutral-dark opacity-80 mb-4">
                    An open-source text-to-image model that can be self-hosted or accessed through platforms like Replicate.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-[#1D7874]/10 text-[#1D7874] px-2 py-1 rounded-full">Self-Hostable</span>
                    <span className="text-xs bg-[#1D7874]/10 text-[#1D7874] px-2 py-1 rounded-full">Free Options</span>
                    <span className="text-xs bg-[#1D7874]/10 text-[#1D7874] px-2 py-1 rounded-full">Hugging Face</span>
                  </div>
                  <a 
                    href="https://replicate.com/stability-ai/stable-diffusion" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#1D7874] font-medium hover:underline inline-flex items-center"
                  >
                    Learn More <i className="ri-external-link-line ml-1"></i>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* ComfyUI */}
            <motion.div 
              className="bg-neutral-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#DB4D2E]/10 p-3 rounded-lg">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="#DB4D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 4.21002L12 6.81002L16.5 4.21002" stroke="#DB4D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 19.79V14.6L3 12" stroke="#DB4D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12L16.5 14.6V19.79" stroke="#DB4D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.27002 6.96002L12 12.01L20.73 6.96002" stroke="#DB4D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22.08V12" stroke="#DB4D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">ComfyUI</h3>
                  <p className="text-neutral-dark opacity-80 mb-4">
                    A powerful and modular UI and API for Stable Diffusion that can be run locally or on cloud services.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-[#DB4D2E]/10 text-[#DB4D2E] px-2 py-1 rounded-full">Node-Based</span>
                    <span className="text-xs bg-[#DB4D2E]/10 text-[#DB4D2E] px-2 py-1 rounded-full">Python API</span>
                    <span className="text-xs bg-[#DB4D2E]/10 text-[#DB4D2E] px-2 py-1 rounded-full">Open Source</span>
                  </div>
                  <a 
                    href="https://github.com/comfyanonymous/ComfyUI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#DB4D2E] font-medium hover:underline inline-flex items-center"
                  >
                    Learn More <i className="ri-external-link-line ml-1"></i>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Hugging Face */}
            <motion.div 
              className="bg-neutral-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#F9C846]/10 p-3 rounded-lg">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 16L14 16" stroke="#F9C846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12V20" stroke="#F9C846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 8.5C8.5 8.5 9.5 9 12 9C14.5 9 15.5 8.5 15.5 8.5" stroke="#F9C846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 11C17 9.34315 17 8.51472 16.7559 7.86147C16.5559 7.31338 16.1866 6.94411 15.6385 6.74408C14.9853 6.5 14.1569 6.5 12.5 6.5H11.5C9.84315 6.5 9.01472 6.5 8.36147 6.74408C7.81338 6.94411 7.44411 7.31338 7.24408 7.86147C7 8.51472 7 9.34315 7 11V13C7 14.6569 7 15.4853 7.24408 16.1385C7.44411 16.6866 7.81338 17.0559 8.36147 17.2559C9.01472 17.5 9.84315 17.5 11.5 17.5H12.5C14.1569 17.5 14.9853 17.5 15.6385 17.2559C16.1866 17.0559 16.5559 16.6866 16.7559 16.1385C17 15.4853 17 14.6569 17 13V12" stroke="#F9C846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 6.5V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6.5" stroke="#F9C846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Hugging Face Inference API</h3>
                  <p className="text-neutral-dark opacity-80 mb-4">
                    Access thousands of AI models including various text-to-image options with simple API calls.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-[#F9C846]/10 text-[#F9C846] px-2 py-1 rounded-full">Free Tier</span>
                    <span className="text-xs bg-[#F9C846]/10 text-[#F9C846] px-2 py-1 rounded-full">Multiple Models</span>
                    <span className="text-xs bg-[#F9C846]/10 text-[#F9C846] px-2 py-1 rounded-full">REST API</span>
                  </div>
                  <a 
                    href="https://huggingface.co/inference-api" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#F9C846] font-medium hover:underline inline-flex items-center"
                  >
                    Learn More <i className="ri-external-link-line ml-1"></i>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* DiffusionBee */}
            <motion.div 
              className="bg-neutral-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#422057]/10 p-3 rounded-lg">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 15V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V9" stroke="#422057" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12H21M21 12L18 9M21 12L18 15" stroke="#422057" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">DiffusionBee API</h3>
                  <p className="text-neutral-dark opacity-80 mb-4">
                    A simplified desktop application for Stable Diffusion with an accessible API for local integration.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-[#422057]/10 text-[#422057] px-2 py-1 rounded-full">Desktop App</span>
                    <span className="text-xs bg-[#422057]/10 text-[#422057] px-2 py-1 rounded-full">Local Integration</span>
                    <span className="text-xs bg-[#422057]/10 text-[#422057] px-2 py-1 rounded-full">User Friendly</span>
                  </div>
                  <a 
                    href="https://diffusionbee.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#422057] font-medium hover:underline inline-flex items-center"
                  >
                    Learn More <i className="ri-external-link-line ml-1"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-12 p-6 border border-[#DB4D2E]/20 rounded-lg bg-[#DB4D2E]/5"
            variants={itemVariants}
          >
            <h3 className="text-lg font-medium mb-2 flex items-center text-[#DB4D2E]">
              <i className="ri-information-line mr-2"></i>
              Implementation Note
            </h3>
            <p className="text-neutral-dark text-sm">
              To integrate real AI image generation in this tutorial application, you would need to:
            </p>
            <ol className="list-decimal list-inside mt-2 text-sm space-y-1 text-neutral-dark">
              <li>Choose an API provider (like those listed above)</li>
              <li>Get an API key and secure it using environment variables</li>
              <li>Create a backend endpoint that proxies requests to the AI provider</li>
              <li>Replace the 'Simulate AI Output' functionality to make actual API calls</li>
              <li>Add proper error handling and loading states for API requests</li>
            </ol>
            <p className="mt-4 text-sm text-[#DB4D2E]">
              Note that most services will require either registration or payment for API usage beyond free tiers.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AiApiInfo;