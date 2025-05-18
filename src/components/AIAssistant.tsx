import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, Sparkles } from 'lucide-react';
import { generateResponse } from '../services/ai';
import type { ChatMessage } from '../services/ai';
import ReactMarkdown from 'react-markdown';
import { useTheme } from '../context/ThemeContext';

interface AIAssistantProps {
  documentContent?: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ documentContent = '' }) => {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "Hello! I'm your AI assistant. I can help you with your document. Ask me anything!",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [docLoaded, setDocLoaded] = useState(false);

  // Reset chat when document content changes
  useEffect(() => {
    if (documentContent && !docLoaded) {
      setDocLoaded(true);
      // Add a system message about the loaded document
      const systemMessage: ChatMessage = {
        id: Date.now().toString(),
        content: "I've loaded your document and I'm ready to help you with it. What would you like to know?",
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages([
        {
          id: '1',
          content: "Hello! I'm your AI assistant. I can help you with your document. Ask me anything!",
          role: 'assistant',
          timestamp: new Date(),
        },
        systemMessage
      ]);
    }
  }, [documentContent, docLoaded]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputMessage,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Create a new array for the AI with the first message being from the user
      // This ensures we don't violate the Gemini API requirement
      const aiMessages: ChatMessage[] = [];
      
      // Add a synthetic first user message with document context if available
      if (documentContent) {
        aiMessages.push({
          id: 'context',
          content: `Here is the document I want to discuss: ${documentContent.substring(0, 1000)}...`,
          role: 'user',
          timestamp: new Date(Date.now() - 60000), // 1 minute ago
        });
        
        // Add a synthetic assistant response acknowledging the document
        aiMessages.push({
          id: 'context-response',
          content: "I understand. I'll help you with this document. What would you like to know?",
          role: 'assistant',
          timestamp: new Date(Date.now() - 50000), // 50 seconds ago
        });
      }
      
      // Add the actual conversation history, but ensure it starts with a user message
      let startIndex = 0;
      if (messages.length > 0 && messages[0].role === 'assistant') {
        startIndex = 1;
      }
      
      // Add the actual conversation messages
      for (let i = startIndex; i < messages.length; i++) {
        aiMessages.push(messages[i]);
      }
      
      // Add the current user message
      aiMessages.push(userMessage);
      
      // Generate the AI response
      const aiResponse = await generateResponse(aiMessages);

      // Add AI response
      const aiMessage: ChatMessage = {
        id: Date.now().toString(),
        content: aiResponse,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      
      // Add error message
      const errorMessage: ChatMessage = {
        id: Date.now().toString(),
        content: 'Sorry, I encountered an error processing your request. Please try again.',
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestIdeas = () => {
    if (!documentContent || isLoading) return;
    
    setInputMessage("Can you suggest some ideas to improve this document?");
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <motion.div
      className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-lg shadow-md overflow-hidden flex flex-col h-[500px]`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`${theme === 'dark' ? 'bg-indigo-800' : 'bg-indigo-600'} text-white p-4`}>
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
            <Bot size={18} className="text-white" />
          </div>
          <h2 className="text-lg font-semibold">DocsGPT Assistant</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? theme === 'dark' 
                    ? 'bg-indigo-700 text-white rounded-br-none' 
                    : 'bg-indigo-600 text-white rounded-br-none'
                  : theme === 'dark'
                    ? 'bg-gray-700 text-white rounded-bl-none'
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              <div className="text-sm whitespace-pre-wrap markdown-content">
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>
              <div
                className={`text-xs mt-1 text-right ${
                  message.role === 'user' 
                    ? theme === 'dark' ? 'text-indigo-300' : 'text-indigo-200'
                    : theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                {formatTime(message.timestamp)}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className={`${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'} rounded-lg rounded-bl-none p-3 max-w-[80%]`}>
              <div className="flex items-center space-x-2">
                <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}>Thinking</div>
                <div className="flex space-x-1">
                  <div className={`w-1.5 h-1.5 ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-500'} rounded-full animate-bounce`} style={{ animationDelay: '0s' }}></div>
                  <div className={`w-1.5 h-1.5 ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-500'} rounded-full animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
                  <div className={`w-1.5 h-1.5 ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-500'} rounded-full animate-bounce`} style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {documentContent && (
        <div className="px-4 pt-2">
          <button
            onClick={handleSuggestIdeas}
            disabled={isLoading}
            className={`w-full flex items-center justify-center py-2 ${
              theme === 'dark' 
                ? 'bg-indigo-800 text-white hover:bg-indigo-700' 
                : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
            } rounded-md transition-colors mb-2`}
          >
            <Sparkles size={16} className="mr-2" />
            Suggest improvements for this document
          </button>
        </div>
      )}

      <div className={`p-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask me anything about your document..."
            className={`flex-grow px-4 py-2 border ${
              theme === 'dark' 
                ? 'bg-gray-700 border-gray-600 text-white focus:ring-indigo-400' 
                : 'bg-white border-gray-300 text-gray-700 focus:ring-indigo-500'
            } rounded-l-md focus:outline-none focus:ring-2`}
            disabled={isLoading}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !inputMessage.trim()}
            className={`px-4 py-2 rounded-r-md ${
              isLoading || !inputMessage.trim()
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : theme === 'dark'
                  ? 'bg-indigo-700 text-white hover:bg-indigo-600 transition-colors'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 transition-colors'
            }`}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AIAssistant;
