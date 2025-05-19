// Tutorial content
export const TUTORIAL_CONTENT = {
  title: "AI Artistry Unveiled: A Gujarati Journey into Detail",
  subtitle: "Explore the art of iterative and progressive detail prompting through the vibrant lens of Gujarati culture.",
  description: "Learn how to transform basic AI-generated images into stunning, culturally rich masterpieces using the iterative detail prompting technique."
};

// Customized color scheme
export const COLORS = {
  primary: '#E85A4F',
  secondary: '#FFB347',
  accent: '#35845B',
  neutral: {
    light: '#F5F3F0',
    dark: '#4A4238'
  }
};

// Example Iterations
export const RANN_UTSAV_EXAMPLES = [
  {
    iteration: 1,
    prompt: "Rann Utsav festival, white desert landscape, tents, daytime.",
    analysis: "As expected, a fairly generic scene. The AI provides a basic representation of a desert with some tents, but it lacks the specific cultural elements that make Rann Utsav unique. The colors are muted, the tents are generic, and there is no indication of Gujarati cultural elements.",
    imageUrl: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Initial AI generation of Rann Utsav with basic tents in a desert"
  },
  {
    iteration: 2,
    prompt: "Vibrant Rann Utsav festival in Kutch, Gujarat, white desert landscape, colorful traditional Gujarati bhungas and decorated circular tents, golden sunset light.",
    analysis: "Much better! We see the colorful Kutchi tents and bhungas (traditional round houses) with their distinctive decorative elements. The golden sunset creates a warm atmosphere, and the AI has captured some of the vibrancy of the festival. However, it still lacks some specific cultural details and activities that would make it truly authentic.",
    imageUrl: "https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Improved AI generation showing colorful tents at Rann Utsav during sunset"
  },
  {
    iteration: 3,
    prompt: "Vibrant Rann Utsav festival in Kutch, Gujarat, vast white salt desert of Rann of Kutch, colorful traditional Gujarati bhungas and decorated circular tents, golden sunset light, local artisans displaying mirror-work embroidery and bandhani textiles, camel silhouettes, folk dancers in traditional Gujarati attire with ghagra choli, photorealistic, detailed.",
    analysis: "Perfect! The image now contains all the essential elements that make Rann Utsav culturally authentic. We can see the distinctive white salt desert, traditional Gujarati bhungas with mirror work decorations, folk dancers in traditional attire, artisans displaying their crafts, and even camel silhouettes against the sunset. The photorealistic quality brings the scene to life with rich details.",
    imageUrl: "https://pixabay.com/get/g2a45b323b1b3384ef3793fecb101249f958421b1322ce83138619ea17aa2fa85985b3cbecd7ca3e53497e62329ac0d19b20ad61ccf2a2572278d290eb61f6907_1280.jpg",
    imageAlt: "Final detailed AI generation showing authentic Rann Utsav with folk dancers, artisans, and traditional elements"
  }
];

// Steps for iterative prompting
export const TECHNIQUE_STEPS = [
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
];
