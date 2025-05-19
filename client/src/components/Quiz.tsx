import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const Quiz = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  
  // Quiz questions from the specification
  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the primary goal of Iterative & Progressive Detail Prompting?",
      options: [
        "To generate as many images as possible in a short time",
        "To refine an AI-generated image through multiple iterations with increasingly detailed prompts",
        "To create photorealistic images in a single prompt",
        "To combine multiple AI models for better results"
      ],
      correctAnswer: 1,
      explanation: "Iterative & Progressive Detail Prompting is about systematically refining images through multiple iterations, gradually adding more specific details to achieve the desired outcome."
    },
    {
      id: 2,
      question: "Which of the following is NOT typically included in the initial prompt of the iterative process?",
      options: [
        "Basic subject identification",
        "Setting or environment",
        "Highly specific cultural details",
        "General time of day"
      ],
      correctAnswer: 2,
      explanation: "The initial prompt typically includes basic elements like subject, setting, and general attributes. Highly specific cultural details are usually added in later iterations as the image is refined."
    },
    {
      id: 3,
      question: "What is a key benefit of using iterative prompting versus trying to create a perfect single prompt?",
      options: [
        "It uses less computational resources",
        "It allows for learning from the AI's interpretation at each step",
        "It's always faster than single prompts",
        "It requires less creativity from the user"
      ],
      correctAnswer: 1,
      explanation: "A key benefit of iterative prompting is that it allows you to see how the AI interprets your instructions at each step, enabling you to make targeted improvements based on actual results rather than trying to predict everything in advance."
    },
    {
      id: 4,
      question: "When refining prompts for culturally specific imagery, what approach is most effective?",
      options: [
        "Using general terms that apply to all cultures",
        "Adding specific named elements, artifacts, and cultural context",
        "Focusing only on color schemes typical of that culture",
        "Using technical art terminology"
      ],
      correctAnswer: 1,
      explanation: "For culturally specific imagery, it's most effective to incorporate named elements (e.g., 'Gujarati bhungas' instead of just 'houses'), specific artifacts, traditional attire, and authentic contextual details that are unique to that culture."
    },
    {
      id: 5,
      question: "What should be the focus of the final iteration in the progressive prompting process?",
      options: [
        "Completely changing the concept if previous iterations aren't perfect",
        "Adding technical parameters like resolution and aspect ratio",
        "Fine details, atmosphere, lighting qualities, and stylistic elements",
        "Removing all specific details to let the AI be more creative"
      ],
      correctAnswer: 2,
      explanation: "The final iteration should focus on fine-tuning with specific details, atmosphere (like lighting and mood), and adding stylistic elements or artistic qualities that elevate the image to its final refined state."
    }
  ];
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleOptionSelect = (optionIndex: number) => {
    if (showAnswer) return; // Prevent changing answer after submission
    
    setSelectedOption(optionIndex);
  };
  
  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    
    setShowAnswer(true);
    
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setScore(0);
    setQuizCompleted(false);
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
  
  const cardVariants = {
    initial: { rotateY: 0 },
    flip: { rotateY: 180, transition: { duration: 0.8 } }
  };
  
  return (
    <section id="quiz" className="py-16 md:py-24 bg-neutral-light" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span 
            className="inline-block w-20 h-1 bg-primary mb-6"
            variants={itemVariants}
          ></motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            variants={itemVariants}
          >
            Test Your Knowledge
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-dark opacity-90"
            variants={itemVariants}
          >
            Let's see how well you understand the iterative prompting technique with this interactive quiz.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {!quizCompleted ? (
            <div className="p-6 md:p-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-1">
                  <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                  <span>Score: {score}/{currentQuestionIndex}</span>
                </div>
                <div className="w-full bg-neutral-light rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`question-${currentQuestionIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold mb-6">{currentQuestion.question}</h3>
                  
                  {/* Options */}
                  <div className="space-y-3 mb-8">
                    {currentQuestion.options.map((option, index) => (
                      <motion.div 
                        key={`option-${index}`}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedOption === index 
                            ? showAnswer 
                              ? index === currentQuestion.correctAnswer 
                                ? 'border-green-500 bg-green-50' 
                                : 'border-red-500 bg-red-50'
                              : 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-neutral-light/50'
                        }`}
                        onClick={() => handleOptionSelect(index)}
                        whileHover={selectedOption === null ? { scale: 1.02 } : {}}
                        whileTap={selectedOption === null ? { scale: 0.98 } : {}}
                      >
                        <div className="flex items-start">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                            selectedOption === index 
                              ? showAnswer 
                                ? index === currentQuestion.correctAnswer 
                                  ? 'bg-green-500 text-white' 
                                  : 'bg-red-500 text-white'
                                : 'bg-primary text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {String.fromCharCode(65 + index)}
                          </div>
                          <span className="text-neutral-dark">{option}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Explanation */}
                  <AnimatePresence>
                    {showAnswer && (
                      <motion.div 
                        className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <h4 className="font-medium text-blue-700 mb-1 flex items-center">
                          <i className="ri-information-line mr-2"></i>
                          Explanation
                        </h4>
                        <p className="text-blue-600">{currentQuestion.explanation}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Action Button */}
                  <div className="flex justify-center">
                    {!showAnswer ? (
                      <motion.button
                        className={`px-6 py-3 rounded-lg font-medium transition-all ${
                          selectedOption !== null
                            ? 'bg-primary text-white hover:bg-primary/90'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={selectedOption === null}
                        onClick={handleSubmitAnswer}
                        whileHover={selectedOption !== null ? { scale: 1.05 } : {}}
                        whileTap={selectedOption !== null ? { scale: 0.95 } : {}}
                      >
                        Submit Answer
                      </motion.button>
                    ) : (
                      <motion.button
                        className="px-6 py-3 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition-all"
                        onClick={handleNextQuestion}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <div className="p-6 md:p-8 text-center">
              <motion.div 
                className="py-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
                  <i className="ri-award-line text-5xl text-primary"></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">Quiz Completed!</h3>
                <p className="text-neutral-dark mb-4">Your score: {score} out of {questions.length}</p>
                
                {score === questions.length ? (
                  <p className="text-green-600 mb-6">Perfect score! You're a master of iterative prompting!</p>
                ) : score >= Math.floor(questions.length * 0.7) ? (
                  <p className="text-green-600 mb-6">Great job! You have a solid understanding of the concepts.</p>
                ) : (
                  <p className="text-amber-600 mb-6">You're on the right track! Review the concepts and try again.</p>
                )}
                
                <motion.button
                  className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all"
                  onClick={resetQuiz}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Take Quiz Again
                </motion.button>
                
                <motion.a
                  href="#challenge"
                  className="inline-block px-6 py-3 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition-all ml-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try the Challenge
                </motion.a>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Quiz;