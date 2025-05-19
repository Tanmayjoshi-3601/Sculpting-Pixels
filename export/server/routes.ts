import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get tutorial content
  app.get('/api/tutorial', (req, res) => {
    res.json({
      title: "AI Artistry Unveiled: A Gujarati Journey into Detail",
      sections: [
        {
          id: "introduction",
          title: "Bridging AI and Cultural Heritage",
          content: "Discover how iterative prompting can help AI models better understand and represent the rich cultural nuances of Gujarat."
        },
        {
          id: "technique",
          title: "Mastering Iterative & Progressive Detail Prompting",
          content: "The process involves starting with a basic concept and gradually refining it with increasingly specific details that guide the AI to produce more authentic and culturally accurate imagery."
        },
        {
          id: "examples",
          title: "Iterative Examples Gallery",
          content: "Explore real examples showing how prompt iteration transforms AI-generated imagery, enhancing cultural accuracy and visual appeal."
        }
      ]
    });
  });

  // API endpoint to get example iterations
  app.get('/api/examples', (req, res) => {
    res.json({
      examples: [
        {
          id: "rann-utsav",
          title: "Rann Utsav Festival at Sunset",
          description: "Watch how we transform a basic festival scene into a culturally authentic representation of Gujarat's famous Rann Utsav celebration.",
          iterations: [
            {
              iteration: 1,
              prompt: "Rann Utsav festival, white desert landscape, tents, daytime.",
              analysis: "As expected, a fairly generic scene. The AI provides a basic representation of a desert with some tents, but it lacks the specific cultural elements that make Rann Utsav unique. The colors are muted, the tents are generic, and there is no indication of Gujarati cultural elements.",
              imageUrl: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            },
            {
              iteration: 2,
              prompt: "Vibrant Rann Utsav festival in Kutch, Gujarat, white desert landscape, colorful traditional Gujarati bhungas and decorated circular tents, golden sunset light.",
              analysis: "Much better! We see the colorful Kutchi tents and bhungas (traditional round houses) with their distinctive decorative elements. The golden sunset creates a warm atmosphere, and the AI has captured some of the vibrancy of the festival. However, it still lacks some specific cultural details and activities that would make it truly authentic.",
              imageUrl: "https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            },
            {
              iteration: 3,
              prompt: "Vibrant Rann Utsav festival in Kutch, Gujarat, vast white salt desert of Rann of Kutch, colorful traditional Gujarati bhungas and decorated circular tents, golden sunset light, local artisans displaying mirror-work embroidery and bandhani textiles, camel silhouettes, folk dancers in traditional Gujarati attire with ghagra choli, photorealistic, detailed.",
              analysis: "Perfect! The image now contains all the essential elements that make Rann Utsav culturally authentic. We can see the distinctive white salt desert, traditional Gujarati bhungas with mirror work decorations, folk dancers in traditional attire, artisans displaying their crafts, and even camel silhouettes against the sunset. The photorealistic quality brings the scene to life with rich details.",
              imageUrl: "https://pixabay.com/get/g2a45b323b1b3384ef3793fecb101249f958421b1322ce83138619ea17aa2fa85985b3cbecd7ca3e53497e62329ac0d19b20ad61ccf2a2572278d290eb61f6907_1280.jpg"
            }
          ]
        }
      ]
    });
  });

  // API endpoint to get technique steps
  app.get('/api/technique', (req, res) => {
    res.json({
      steps: [
        {
          step: 1,
          title: "Begin with Basic Concepts",
          description: "Start with a simple prompt that outlines the general scene or subject you want to generate."
        },
        {
          step: 2,
          title: "Analyze Initial Results",
          description: "Review the AI's output and identify areas where cultural details or accuracy can be improved."
        },
        {
          step: 3,
          title: "Add Specific Details",
          description: "Enhance your prompt with cultural terminology, specific colors, patterns, or contextual elements."
        },
        {
          step: 4,
          title: "Refine and Repeat",
          description: "Continue the iterative process until the AI generates an image that authentically represents the cultural elements you're aiming for."
        }
      ]
    });
  });

  // API endpoint to get resources
  app.get('/api/resources', (req, res) => {
    res.json({
      categories: [
        {
          title: "AI Prompting Techniques",
          icon: "robot",
          items: [
            {
              title: "The Art of Prompt Engineering",
              description: "A comprehensive guide to crafting effective prompts for various AI image generation models.",
              icon: "article"
            },
            {
              title: "Video Tutorial: Progressive Prompting",
              description: "A step-by-step visual guide to the iterative prompting technique with multiple examples.",
              icon: "video"
            },
            {
              title: "Prompting Dictionary",
              description: "A collection of technical terms and descriptive phrases that significantly improve AI image generation.",
              icon: "book-open"
            },
            {
              title: "AI Artistry Community",
              description: "Join our community of AI artists sharing techniques, prompts, and feedback on cultural representations.",
              icon: "community"
            }
          ]
        },
        {
          title: "Gujarati Cultural Elements",
          icon: "gallery",
          items: [
            {
              title: "Visual Guide to Gujarati Textiles",
              description: "Learn about bandhani, patola, ajrakh, and other traditional textile patterns from Gujarat.",
              icon: "book-2"
            },
            {
              title: "Architecture of Gujarat",
              description: "Explore the distinctive architectural styles from different regions of Gujarat, including havelis and bhungas.",
              icon: "building"
            },
            {
              title: "Festival Glossary",
              description: "A comprehensive guide to major Gujarati festivals, their significance, and visual elements.",
              icon: "calendar-event"
            },
            {
              title: "Cultural Sensitivity Guide",
              description: "Best practices for respectful and accurate representation of Gujarati cultural elements in AI art.",
              icon: "heart"
            }
          ]
        }
      ]
    });
  });

  // Subscribe to newsletter endpoint
  app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ message: "Valid email is required" });
    }
    
    // In a real application, you would save this to a database
    res.status(200).json({ message: "Subscription successful" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
