import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div 
            className="flex items-center mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <i className="ri-brush-4-line text-primary text-2xl mr-2"></i>
            <h2 className="text-xl font-display font-bold">AI Artistry Unveiled</h2>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#" className="text-white hover:text-primary transition-colors">
              <i className="ri-twitter-x-line text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors">
              <i className="ri-instagram-line text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors">
              <i className="ri-youtube-line text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors">
              <i className="ri-discord-line text-xl"></i>
            </a>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Our Story</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Team</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Partnerships</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Tutorials</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Discord</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Events</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Terms of Use</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">AI Ethics Statement</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} AI Artistry Unveiled. All images are for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
