// Tutorial section types
export interface TutorialSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
}

// Iteration example types
export interface PromptIteration {
  iteration: number;
  prompt: string;
  analysis: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption?: string;
}

// Technique step types
export interface TechniqueStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

// Resource item types
export interface ResourceItem {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

// Resource category types
export interface ResourceCategory {
  title: string;
  icon: string;
  items: ResourceItem[];
}
