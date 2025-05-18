import React, { useState } from 'react';
import { getGoogleDocText, parseDocContent, isValidGoogleDocUrl } from '../services/googleDocs';

interface DocViewerProps {
  onDocumentLoaded?: (content: string) => void;
}

const DocViewer: React.FC<DocViewerProps> = ({ onDocumentLoaded }) => {
  const [docId, setDocId] = useState<string>('');
  const [docContent, setDocContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocId(e.target.value);
    setError(null);
  };

  const handleFetchDocument = async () => {
    if (!docId.trim()) {
      setError('Please enter a Google Document ID');
      return;
    }

    if (!isValidGoogleDocUrl(docId)) {
      setError('Invalid Google Document URL format');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const rawContent = await getGoogleDocText(docId);
      const parsedContent = parseDocContent(rawContent);
      setDocContent(parsedContent.content);
      
      if (onDocumentLoaded) {
        onDocumentLoaded(parsedContent.content);
      }
    } catch (err) {
      setError('Failed to load document. Please check the ID and ensure the document is accessible.');
      console.error('Error loading document:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">Load Google Document</h2>
      
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          value={docId}
          onChange={handleInputChange}
          placeholder="Enter Google Document ID"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          disabled={isLoading}
        />
        <button
          onClick={handleFetchDocument}
          disabled={isLoading}
          className={`px-6 py-2 rounded-md text-white font-medium ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 transition-colors'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </span>
          ) : (
            'Load Document'
          )}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 animate-fade-in">
          {error}
        </div>
      )}

      {docContent && (
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Document Content:</h3>
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200 whitespace-pre-wrap max-h-96 overflow-y-auto">
            {docContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default DocViewer;
