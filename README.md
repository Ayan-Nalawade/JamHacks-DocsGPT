# DocsGPT - Google Docs with AI Integration

## Setup and Usage Instructions

This document provides step-by-step instructions for setting up and using the DocsGPT application, which combines Google Docs functionality with AI-powered assistance.

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- A Gemini API key from Google

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ayan-Nalawade/DocsGPT.git
   cd DocsGPT
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the root directory by copying the `.env.example` file:

   ```bash
   cp .env.example .env.local
   ```

   Open the `.env.local` file and add your Gemini API key:

   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

   Replace `your_gemini_api_key_here` with your actual Gemini API key.

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Using the Application

### Loading a Google Document

1. On the home page, find the "Load Google Document" section.
2. Enter the Google Document ID in the input field.
   - The Document ID is the part of the Google Docs URL after `/d/` and before any further parameters.
   - For example, in `https://docs.google.com/document/d/1ABC123XYZ/edit`, the ID is `1ABC123XYZ`.
3. Click the "Load Document" button.
4. If the document is publicly accessible, its content will be loaded and displayed.

### Editing Documents

1. After loading a document, the Document Editor will appear below the loader.
2. You can edit the document content directly in the editor.
3. Changes are saved automatically in the local application (note: changes are not synced back to Google Docs in this version).

### Adding Comments

1. Below the document editor, you'll find the Comments section.
2. Click the "Add Comment" button to create a new comment.
3. Type your comment in the text area and click "Add Comment" to save it.
4. You can resolve or delete comments using the buttons on each comment.

### Using the AI Assistant

1. The AI Assistant panel is located on the right side of the screen (or below on mobile devices).
2. You can ask questions about your document or request suggestions.
3. The AI will analyze your document content and provide relevant responses.
4. Use the "Suggest improvements for this document" button for quick AI feedback.

### Settings

1. Access the Settings page by clicking on "Settings" in the sidebar.
2. Here you can update your Gemini API key if needed.
3. Click "Save Settings" to apply any changes.

## Troubleshooting

### API Key Issues

If you encounter errors related to the AI assistant:

1. Check that your Gemini API key is correctly entered in the `.env.local` file.
2. Ensure the API key has the necessary permissions for the Gemini API.
3. Verify that you haven't exceeded your API usage limits.

### Document Loading Issues

If you have trouble loading Google Documents:

1. Ensure the document ID is correct.
2. Verify that the document is publicly accessible or shared with the appropriate permissions.
3. Check your internet connection.

### Application Performance

For optimal performance:

1. Use a modern browser (Chrome, Firefox, Safari, Edge).
2. Avoid loading extremely large documents, as they may cause performance issues.
3. If the application becomes slow, try refreshing the page.

## Security Notes

- Your Gemini API key is stored locally in the `.env.local` file and is not exposed to other users.
- Document content is processed locally in your browser and is not stored on any server.
- API requests to the Gemini service are made directly from your browser using your API key.

## Feedback and Support

For issues, questions, or feedback, please create an issue on the GitHub repository:
https://github.com/Ayan-Nalawade/DocsGPT/issues

## License

This project is licensed under the MIT License - see the LICENSE file for details.
