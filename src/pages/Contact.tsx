import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const email = 'docsGPT@gmail.com';
  const subject = 'Inquiry about DocsGPT';
  const body = 'Hi DocsGPT team,\n\nI would like to inquire about...';
  
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

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

  return (
    <motion.main 
      className="main-content contact-main p-6 md:p-8 flex justify-center items-center min-h-[70vh]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="contact-info bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-md w-full transform transition-all duration-300"
        whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Contact Us
        </motion.h2>
        
        <motion.div className="contact-details space-y-6">
          <motion.div 
            className="contact-item flex items-center p-4 bg-indigo-50 dark:bg-gray-700 rounded-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <motion.span 
              className="contact-icon text-3xl mr-4"
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              📧
            </motion.span>
            <motion.a 
              href={mailtoLink} 
              className="contact-link text-indigo-600 dark:text-indigo-400 font-medium hover:underline text-lg"
              whileHover={{ scale: 1.05 }}
            >
              {email}
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="contact-item flex items-center p-4 bg-purple-50 dark:bg-gray-700 rounded-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <motion.span 
              className="contact-icon text-3xl mr-4"
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
            >
              📞
            </motion.span>
            <motion.span className="contact-text text-gray-700 dark:text-gray-300 font-medium text-lg">
              123-456-7890
            </motion.span>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-center"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.main>
  );
};

export default Contact;
