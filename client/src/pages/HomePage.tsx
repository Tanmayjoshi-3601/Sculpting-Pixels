import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import UnderstandingPattern from "@/components/UnderstandingPattern";
import RealWorldImpact from "@/components/RealWorldImpact";
import Technique from "@/components/Technique";
import Examples from "@/components/Examples";
import Quiz from "@/components/Quiz";
import Challenge from "@/components/Challenge";
import AiApiInfo from "@/components/AiApiInfo";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

// Add custom CSS for the tutorial site
const customStyles = `
  .transition-fade {
    transition: opacity 0.4s ease-in-out, transform 0.4s ease-out;
  }
  .highlight {
    background-color: rgba(255, 179, 71, 0.3);
    padding: 0 3px;
    border-radius: 2px;
  }
  .highlight-new {
    background-color: rgba(251, 146, 60, 0.4);
    padding: 0 3px;
    border-radius: 2px;
    animation: pulse 2s ease-in-out 1;
  }
  @keyframes pulse {
    0%, 100% { background-color: rgba(251, 146, 60, 0.2); }
    50% { background-color: rgba(251, 146, 60, 0.6); }
  }
  .custom-shadow {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .image-fade {
    transition: opacity 0.5s ease;
  }
  .prompt-compare {
    transition: all 0.3s ease-in-out;
  }
  .prompt-compare:hover {
    transform: translateY(-2px);
  }
  body {
    scroll-behavior: smooth;
  }
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const HomePage = () => {
  useEffect(() => {
    // Add the custom styles to the document
    const style = document.createElement('style');
    style.textContent = customStyles;
    document.head.appendChild(style);
    
    // Smooth scroll function for navigation links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId as string);
        
        if (targetElement) {
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleSmoothScroll);
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-neutral-light text-neutral-dark font-body">
      <Header />
      <Hero />
      <Introduction />
      <UnderstandingPattern />
      <RealWorldImpact />
      <Technique />
      <Examples />
      <Quiz />
      <Challenge />
      <AiApiInfo />
      <Resources />
      <Footer />
    </div>
  );
};

export default HomePage;
