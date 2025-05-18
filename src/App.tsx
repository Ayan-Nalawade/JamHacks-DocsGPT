import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Home, Menu, X, Sun, Moon, BookOpen, Info, Mail } from 'lucide-react';
import DocViewer from './components/DocViewer';
import DocEditor from './components/DocEditor';
import CommentingSystem from './components/CommentingSystem';
import AIAssistant from './components/AIAssistant';
import FlashcardStudy from './components/FlashcardStudy';
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Import DocsGPT pages
import DocsPage from './pages/Docs';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';

// Sidebar component that will be used across all pages
const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="sidebar-container" style={{ position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 50, width: '16rem' }}>
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`md:hidden fixed top-4 left-4 z-50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-2 rounded-md shadow-md`}
        style={{ zIndex: 60 }}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-indigo-800'} text-white w-64 p-6 flex flex-col h-full`}
        style={{
          transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
          '@media (min-width: 768px)': {
            transform: 'translateX(0)'
          }
        }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className={`h-10 w-10 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-white/20'} flex items-center justify-center mr-3`}>
              <FileText size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold">DocsGPT</h1>
          </div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              theme === 'dark' 
                ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
                : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
            } transition-colors`}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link
                to="/docs"
                className={`flex items-center py-2 px-4 rounded-md ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-indigo-700'} transition-colors`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <BookOpen size={18} className="mr-3" />
                Docs
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`flex items-center py-2 px-4 rounded-md ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-indigo-700'} transition-colors`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Info size={18} className="mr-3" />
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`flex items-center py-2 px-4 rounded-md ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-indigo-700'} transition-colors`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Mail size={18} className="mr-3" />
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/host-dashboard"
                className={`flex items-center py-2 px-4 rounded-md ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-indigo-700'} transition-colors`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Home size={18} className="mr-3" />
                Host Dashboard
              </Link>
            </li>
          </ul>
        </nav>

        <div className={`mt-auto pt-6 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-indigo-300'}`}>
          <p>© {new Date().getFullYear()} DocsGPT</p>
          <p>Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
};

// Add CSS to ensure sidebar is visible on desktop
const GlobalStyles = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (min-width: 768px) {
        .sidebar-container > div {
          transform: translateX(0) !important;
        }
        .main-content {
          margin-left: 16rem !important;
          width: calc(100% - 16rem) !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return null;
};

const App: React.FC = () => {
  const [docContent, setDocContent] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const handleDocumentLoaded = (content: string) => {
    setDocContent(content);
  };

  return (
    <ThemeProvider>
      <Router>
        <GlobalStyles />
        <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800`}>
          {/* Sidebar component that will be present on all pages */}
          <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          
          {/* Main content area */}
          <div className="main-content p-6 md:p-8 overflow-auto" style={{ marginLeft: '0', width: '100%', transition: 'margin-left 0.3s ease-in-out, width 0.3s ease-in-out' }}>
            <Routes>
              {/* Redirect root to DocsGPT docs page */}
              <Route path="/" element={<Navigate to="/docs" replace />} />
              
              {/* DocsGPT Routes */}
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* Host Dashboard Route */}
              <Route
                path="/host-dashboard"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <header className="mb-8">
                      <h1 className="text-3xl font-bold mb-2">Google Docs + AI</h1>
                      <p className="text-gray-600 max-w-3xl">
                        Load your Google Docs, edit them, add comments, and get AI assistance - all in one place.
                      </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-6">
                        <DocViewer onDocumentLoaded={handleDocumentLoaded} />
                        {docContent && <DocEditor initialContent={docContent} />}
                        {docContent && <CommentingSystem />}
                        {docContent && <FlashcardStudy documentContent={docContent} />}
                      </div>
                      <div>
                        <AIAssistant documentContent={docContent} />
                      </div>
                    </div>
                  </motion.div>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
