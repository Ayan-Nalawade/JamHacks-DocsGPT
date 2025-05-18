import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, X } from 'lucide-react';

interface Comment {
  id: string;
  text: string;
  author: string;
  timestamp: Date;
  resolved: boolean;
}

interface CommentingSystemProps {
  documentId?: string;
}

const CommentingSystem: React.FC<CommentingSystemProps> = ({ }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isAddingComment, setIsAddingComment] = useState(false);

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      text: newComment,
      author: 'You',
      timestamp: new Date(),
      resolved: false,
    };

    setComments([...comments, comment]);
    setNewComment('');
    setIsAddingComment(false);
  };

  const handleResolveComment = (id: string) => {
    setComments(
      comments.map(comment =>
        comment.id === id ? { ...comment, resolved: true } : comment
      )
    );
  };

  const handleDeleteComment = (id: string) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 mt-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Comments</h2>
        <button
          onClick={() => setIsAddingComment(!isAddingComment)}
          className="flex items-center px-3 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          <MessageCircle size={16} className="mr-1" />
          {isAddingComment ? 'Cancel' : 'Add Comment'}
        </button>
      </div>

      {isAddingComment && (
        <motion.div
          className="mb-4 border border-gray-300 rounded-md p-3"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.2 }}
        >
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Type your comment here..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2"
            rows={3}
          />
          <div className="flex justify-end">
            <button
              onClick={handleAddComment}
              disabled={!newComment.trim()}
              className={`flex items-center px-3 py-1.5 rounded-md ${
                !newComment.trim()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 transition-colors'
              }`}
            >
              <Send size={16} className="mr-1" />
              Add Comment
            </button>
          </div>
        </motion.div>
      )}

      {comments.length === 0 ? (
        <div className="text-gray-500 text-center py-6">
          No comments yet. Add a comment to start a discussion.
        </div>
      ) : (
        <div className="space-y-3">
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              className={`border ${
                comment.resolved ? 'border-green-200 bg-green-50' : 'border-gray-200'
              } rounded-md p-3`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">{comment.author}</div>
                  <div className="text-sm text-gray-500">
                    {formatTime(comment.timestamp)}
                    {comment.resolved && (
                      <span className="ml-2 text-green-600">• Resolved</span>
                    )}
                  </div>
                </div>
                <div className="flex space-x-1">
                  {!comment.resolved && (
                    <button
                      onClick={() => handleResolveComment(comment.id)}
                      className="text-green-600 hover:text-green-800 p-1"
                      title="Resolve comment"
                    >
                      ✓
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteComment(comment.id)}
                    className="text-red-600 hover:text-red-800 p-1"
                    title="Delete comment"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
              <div className="mt-1">{comment.text}</div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default CommentingSystem;
