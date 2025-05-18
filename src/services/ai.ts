import { GoogleGenerativeAI } from '@google/generative-ai';

// Interface for chat messages
export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

// Interface for Gemini chat history format
interface GeminiChatMessage {
  role: string;
  parts: { text: string }[];
}

// Hardcoded API key
const API_KEY = 'AIzaSyAId0RVXkLxH5dlDXt-emW2WnNMybydNkE';

// Initialize the API with the hardcoded API key
const getAIInstance = () => {
  try {
    return new GoogleGenerativeAI(API_KEY);
  } catch (error) {
    console.error('Error initializing Gemini API:', error);
    return null;
  }
};

// Convert our internal role to Gemini API role
const mapRoleToGemini = (role: string): string => {
  // Gemini API expects 'user' or 'model' roles
  if (role === 'assistant') {
    return 'model';
  }
  return role;
};

export async function generateResponse(messages: ChatMessage[]): Promise<string> {
  try {
    console.log('Generating response with messages:', messages.length);
    
    const genAI = getAIInstance();
    
    if (!genAI) {
      return 'Error: AI service is not configured properly.';
    }
    
    // Get the model
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Fix the chat history to ensure it starts with a user message
    let chatHistory: GeminiChatMessage[] = [];
    
    // If the first message is from the assistant, we need to skip it for the history
    // The Gemini API requires the first message to be from the user
    if (messages.length > 1) {
      const startIndex = messages[0].role === 'assistant' ? 1 : 0;
      chatHistory = messages.slice(startIndex, -1).map(msg => ({
        role: mapRoleToGemini(msg.role),
        parts: [{ text: msg.content }],
      }));
    }

    // Start a chat session
    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });

    // Send the most recent message
    const latestMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(latestMessage.content);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating AI response:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return `Sorry, I encountered an error while processing your request: ${errorMessage}.`;
  }
}
