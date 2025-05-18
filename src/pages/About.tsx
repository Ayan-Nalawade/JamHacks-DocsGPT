import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
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

  const featureVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", damping: 12 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.main 
      className="main-content about-main p-6 md:p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        variants={itemVariants}
      >
        How it Works
      </motion.h1>
      
      <div className="about-container max-w-4xl mx-auto">
        <motion.section 
          className="about-section mb-12"
          variants={itemVariants}
        >
          <motion.div 
            className="about-card bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="about-icon text-4xl mb-4 flex justify-center"
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              🚀
            </motion.div>
            <motion.h2 
              className="text-2xl font-bold mb-4 text-center text-indigo-600 dark:text-indigo-400"
            >
              Transform Your Documentation
            </motion.h2>
            <motion.p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              DocsGPT is an innovative tool that helps you understand and navigate through documentation
              with the power of AI. Simply provide a URL to your documentation, and we'll transform it
              into an interactive, searchable knowledge base.
            </motion.p>
          </motion.div>
        </motion.section>
        
        <motion.section 
          className="features-section"
          variants={itemVariants}
        >
          <motion.div 
            className="about-card bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="about-icon text-4xl mb-4 flex justify-center"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✨
            </motion.div>
            <motion.h2 
              className="text-2xl font-bold mb-6 text-center text-indigo-600 dark:text-indigo-400"
            >
              Key Features
            </motion.h2>
            
            <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="feature-item bg-indigo-50 dark:bg-gray-700 p-5 rounded-lg"
                variants={featureVariants}
                whileHover="hover"
              >
                <span className="feature-icon text-3xl block mb-3">🧠</span>
                <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-300">Intelligent Processing</h3>
                <p className="text-gray-600 dark:text-gray-400">Advanced document analysis and understanding</p>
              </motion.div>
              
              <motion.div 
                className="feature-item bg-purple-50 dark:bg-gray-700 p-5 rounded-lg"
                variants={featureVariants}
                whileHover="hover"
                transition={{ delay: 0.1 }}
              >
                <span className="feature-icon text-3xl block mb-3">💬</span>
                <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">Natural Language</h3>
                <p className="text-gray-600 dark:text-gray-400">Human-like understanding and responses</p>
              </motion.div>
              
              <motion.div 
                className="feature-item bg-blue-50 dark:bg-gray-700 p-5 rounded-lg"
                variants={featureVariants}
                whileHover="hover"
                transition={{ delay: 0.2 }}
              >
                <span className="feature-icon text-3xl block mb-3">⚡</span>
                <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Quick Responses</h3>
                <p className="text-gray-600 dark:text-gray-400">Fast and accurate information retrieval</p>
              </motion.div>
              
              <motion.div 
                className="feature-item bg-teal-50 dark:bg-gray-700 p-5 rounded-lg"
                variants={featureVariants}
                whileHover="hover"
                transition={{ delay: 0.3 }}
              >
                <span className="feature-icon text-3xl block mb-3">🔄</span>
                <h3 className="text-xl font-semibold mb-2 text-teal-700 dark:text-teal-300">Easy Integration</h3>
                <p className="text-gray-600 dark:text-gray-400">Seamless documentation integration</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </motion.main>
  );
};

export default About;
