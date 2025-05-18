import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Plus, X, Zap } from 'lucide-react';
import { generateResponse } from '../services/ai';
import { useTheme } from '../context/ThemeContext';

interface Flashcard {
  id: string;
  question: string;
  answer: string;
}

interface FlashcardStudyProps {
  documentContent?: string;
}

const FlashcardStudy: React.FC<FlashcardStudyProps> = ({ documentContent = '' }) => {
  const { theme } = useTheme();
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAddCard = () => {
    if (!newQuestion.trim() || !newAnswer.trim()) return;

    const newCard: Flashcard = {
      id: Date.now().toString(),
      question: newQuestion,
      answer: newAnswer,
    };

    setFlashcards([...flashcards, newCard]);
    setNewQuestion('');
    setNewAnswer('');
    setIsAddingCard(false);
  };

  const handleDeleteCard = (id: string) => {
    setFlashcards(flashcards.filter(card => card.id !== id));
    if (currentIndex >= flashcards.length - 1) {
      setCurrentIndex(Math.max(0, flashcards.length - 2));
    }
  };

  const handleNext = () => {
    if (flashcards.length === 0) return;
    setFlipped(false);
    setCurrentIndex((currentIndex + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    if (flashcards.length === 0) return;
    setFlipped(false);
    setCurrentIndex((currentIndex - 1 + flashcards.length) % flashcards.length);
  };

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  const generateFlashcards = async () => {
    if (!documentContent || isGenerating) return;
    
    setIsGenerating(true);
    
    try {
      // Create a prompt for the AI to generate flashcards
      const prompt = `Based on the following document content, generate 5 flashcards in JSON format with 'question' and 'answer' fields. Make the questions test key concepts from the document. Here's the document: ${documentContent.substring(0, 2000)}...`;
      
      // Call the AI to generate flashcards
      const response = await generateResponse([
        {
          id: 'flashcard-gen',
          content: prompt,
          role: 'user',
          timestamp: new Date(),
        }
      ]);
      
      // Try to extract JSON from the response
      try {
        // Find JSON-like content in the response
        const jsonMatch = response.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          const jsonStr = jsonMatch[0];
          const generatedCards = JSON.parse(jsonStr);
          
          // Validate and format the cards
          const validCards = generatedCards
            .filter((card: any) => card.question && card.answer)
            .map((card: any) => ({
              id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
              question: card.question,
              answer: card.answer,
            }));
          
          if (validCards.length > 0) {
            setFlashcards([...flashcards, ...validCards]);
          }
        } else {
          console.error('No JSON found in AI response');
        }
      } catch (error) {
        console.error('Error parsing AI-generated flashcards:', error);
      }
    } catch (error) {
      console.error('Error generating flashcards:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.div
      className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-lg shadow-md overflow-hidden`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`${theme === 'dark' ? 'bg-indigo-800' : 'bg-indigo-600'} text-white p-4`}>
        <h2 className="text-lg font-semibold">Flashcards</h2>
        <p className={`text-sm ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-200'}`}>Create flashcards to study your document</p>
      </div>

      <div className="p-4">
        {flashcards.length > 0 ? (
          <div className="mb-6">
            <div 
              className={`h-48 w-full ${theme === 'dark' ? 'bg-gradient-to-r from-indigo-900 to-blue-900' : 'bg-gradient-to-r from-indigo-50 to-blue-50'} rounded-lg shadow-sm cursor-pointer flex items-center justify-center p-6 relative`}
              onClick={toggleFlip}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentIndex}-${flipped ? 'back' : 'front'}`}
                  initial={{ opacity: 0, rotateY: flipped ? -90 : 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: flipped ? 90 : -90 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className={`text-xs ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-400'} mb-2`}>
                      {flipped ? 'ANSWER' : 'QUESTION'} ({currentIndex + 1}/{flashcards.length})
                    </div>
                    <div className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                      {flipped ? flashcards[currentIndex].answer : flashcards[currentIndex].question}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <button 
                className={`absolute top-2 right-2 ${theme === 'dark' ? 'text-gray-400 hover:text-red-400' : 'text-gray-400 hover:text-red-500'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteCard(flashcards[currentIndex].id);
                }}
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="flex justify-between mt-4">
              <button 
                onClick={handlePrevious}
                className={`px-4 py-2 ${theme === 'dark' ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-md transition-colors flex items-center`}
              >
                <ArrowLeft size={16} className="mr-1" /> Previous
              </button>
              <button 
                onClick={handleNext}
                className={`px-4 py-2 ${theme === 'dark' ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-md transition-colors flex items-center`}
              >
                Next <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        ) : (
          <div className={`text-center py-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            No flashcards yet. Add your first card below or generate them with AI.
          </div>
        )}

        {isAddingCard ? (
          <div className={`border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} rounded-lg p-4`}>
            <h3 className="text-md font-medium mb-3">Add New Flashcard</h3>
            <div className="mb-3">
              <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Question</label>
              <textarea
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className={`w-full px-3 py-2 border ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[80px]`}
                placeholder="Enter question..."
              />
            </div>
            <div className="mb-3">
              <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Answer</label>
              <textarea
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                className={`w-full px-3 py-2 border ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[80px]`}
                placeholder="Enter answer..."
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsAddingCard(false)}
                className={`px-4 py-2 border ${theme === 'dark' ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} rounded-md transition-colors`}
              >
                Cancel
              </button>
              <button
                onClick={handleAddCard}
                disabled={!newQuestion.trim() || !newAnswer.trim()}
                className={`px-4 py-2 rounded-md ${
                  !newQuestion.trim() || !newAnswer.trim()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : theme === 'dark' 
                      ? 'bg-indigo-700 text-white hover:bg-indigo-600 transition-colors' 
                      : 'bg-indigo-600 text-white hover:bg-indigo-700 transition-colors'
                }`}
              >
                Add Card
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <button
              onClick={() => setIsAddingCard(true)}
              className={`w-full py-3 border-2 border-dashed ${theme === 'dark' ? 'border-gray-600 text-gray-400 hover:text-indigo-400 hover:border-indigo-700' : 'border-gray-300 text-gray-500 hover:text-indigo-600 hover:border-indigo-300'} rounded-lg transition-colors flex items-center justify-center`}
            >
              <Plus size={18} className="mr-2" /> Add Flashcard Manually
            </button>
            
            {documentContent && (
              <button
                onClick={generateFlashcards}
                disabled={isGenerating}
                className={`w-full py-3 ${
                  isGenerating 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : theme === 'dark'
                      ? 'bg-indigo-700 text-white hover:bg-indigo-600'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                } rounded-lg transition-colors flex items-center justify-center`}
              >
                <Zap size={18} className="mr-2" /> 
                {isGenerating ? 'Generating Flashcards...' : 'Generate Flashcards with AI'}
              </button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FlashcardStudy;
