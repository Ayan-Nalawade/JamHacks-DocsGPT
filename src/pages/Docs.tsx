import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Docs: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);
    setProgress(0);

    // Simulate loading progress for ~1.5 seconds
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 99) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            // Reset URL after processing
            setUrl('');
          }, 500);
          return 99;
        }
        // Increment by ~33% every 500ms to reach ~99% in 1.5s
        return prev + 33;
      });
    }, 500);
  };

  return (
    <motion.main 
      className="main-content p-6 md:p-8 flex justify-center items-center min-h-[70vh]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="docs-container max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        variants={itemVariants}
        whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
      >
        <motion.h1 
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Documentation Processor
        </motion.h1>
        
        <motion.p 
          className="text-gray-600 dark:text-gray-300 mb-8 text-center"
          variants={itemVariants}
        >
          Enter the URL of your documentation to process it with our AI-powered system.
        </motion.p>
        
        <motion.form 
          onSubmit={(e) => {
            handleUrlSubmit(e);
            if (url) {
              window.location.href = "https://www.docsgpt.tech/host-dashboard";
            }
          }}
          className="space-y-4"
          variants={itemVariants}
        >
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.input
              type="url"
              placeholder="Enter documentation URL"
              className="docs-input w-full p-4 border-2 border-indigo-200 dark:border-gray-600 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              animate={url ? { borderColor: "#6366f1" } : {}}
            />
            {url && (
              <motion.button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          onClick={() => setUrl('')}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
              >
          ✕
              </motion.button>
            )}
          </motion.div>
          
          <motion.button 
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.03, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.97 }}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Process Documentation"}
          </motion.button>
        </motion.form>
        
        {isLoading && (
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative pt-1">
              <div className="text-center text-indigo-600 dark:text-indigo-400 mb-2 font-medium">
                Processing Documentation
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-indigo-100 dark:bg-gray-700">
                <motion.div 
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-indigo-500 to-purple-500"
                  style={{ width: `${progress}%` }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
              <motion.div 
                className="text-right text-indigo-600 dark:text-indigo-400"
                animate={{ 
                  opacity: [1, 0.7, 1],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {Math.round(progress)}%
              </motion.div>
            </div>
          </motion.div>
        )}
        
        <motion.div 
          className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm"
          variants={itemVariants}
          transition={{ delay: 0.4 }}
        >
          <p>Supported formats: HTML, PDF, Markdown, and Text</p>
        </motion.div>
      </motion.div>
    </motion.main>
  );
};

export default Docs;
