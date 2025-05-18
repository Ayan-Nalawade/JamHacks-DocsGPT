import React, { useState } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';
import type { Descendant } from 'slate';
import { motion } from 'framer-motion';

interface DocEditorProps {
  initialContent?: string;
  onContentChange?: (content: string) => void;
}

// Convert plain text to Slate's initial value format
const textToSlateValue = (text: string): Descendant[] => {
  // Split by double newlines to create paragraphs
  const paragraphs = text.split(/\n\n+/);
  
  return paragraphs.map(paragraph => ({
    type: 'paragraph',
    children: [{ text: paragraph }],
  }));
};

// Convert Slate value back to plain text
const slateValueToText = (value: Descendant[]): string => {
  return value
    .map(node => 
      // @ts-ignore - simplified for this example
      node.children.map(child => child.text).join('')
    )
    .join('\n\n');
};

const DocEditor: React.FC<DocEditorProps> = ({ initialContent = '', onContentChange }) => {
  // Create a Slate editor object that won't change across renders
  const [editor] = useState(() => withReact(createEditor()));
  
  // Initialize with content or empty document
  const [value, setValue] = useState<Descendant[]>(() => 
    initialContent ? textToSlateValue(initialContent) : [
      {
        type: 'paragraph',
        children: [{ text: 'Start typing your document here...' }],
      },
    ]
  );

  const handleChange = (newValue: Descendant[]) => {
    setValue(newValue);
    
    if (onContentChange) {
      const textContent = slateValueToText(newValue);
      onContentChange(textContent);
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold mb-4">Document Editor</h2>
      
      <div className="border border-gray-300 rounded-md p-4 min-h-[400px]">
        <Slate
          editor={editor}
          initialValue={value}
          onChange={handleChange}
        >
          <Editable
            className="min-h-[380px] focus:outline-none"
            placeholder="Start typing..."
          />
        </Slate>
      </div>
    </motion.div>
  );
};

export default DocEditor;
