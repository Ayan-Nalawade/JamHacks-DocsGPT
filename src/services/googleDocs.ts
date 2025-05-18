import axios from 'axios';

// Interface for document metadata
export interface GoogleDocMetadata {
  id: string;
  name: string;
  lastModified: Date;
}

// Interface for document content
export interface GoogleDocContent {
  id: string;
  content: string;
  rawContent?: string;
}

/**
 * Extracts the document ID from a Google Docs URL of the form:
 * https://docs.google.com/document/d/<docId>/edit?tab=t.0
 */
export function extractGoogleDocId(url: string): string | null {
  const match = url.match(/^https:\/\/docs\.google\.com\/document\/d\/([a-zA-Z0-9_-]+)\/edit/);
  return match ? match[1] : null;
}

/**
 * Fetches text content from a Google Doc using the provided document URL
 * This uses the public export URL which doesn't require authentication for publicly accessible documents
 */
export async function getGoogleDocText(docUrl: string): Promise<string> {
  try {
    const docId = extractGoogleDocId(docUrl);
    if (!docId) {
      throw new Error('Invalid Google Doc URL format.');
    }
    const exportUrl = `https://docs.google.com/document/d/${docId}/export?format=txt`;
    const response = await axios.get(exportUrl);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch document: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching Google Doc:', error);
    throw new Error('Could not retrieve the document. Please check the document URL and ensure it is publicly accessible.');
  }
}

/**
 * Parses the raw text content into a more structured format
 */
export function parseDocContent(rawContent: string): GoogleDocContent {
  return {
    id: Date.now().toString(),
    content: rawContent,
    rawContent: rawContent
  };
}

/**
 * Mock function to simulate fetching a list of user's Google Docs
 */
export async function getUserDocuments(): Promise<GoogleDocMetadata[]> {
  return [
    {
      id: 'example1',
      name: 'Sample Document 1',
      lastModified: new Date()
    },
    {
      id: 'example2',
      name: 'Sample Document 2',
      lastModified: new Date(Date.now() - 86400000)
    }
  ];
}

/**
 * Validates a Google Doc URL format
 */
export function isValidGoogleDocUrl(url: string): boolean {
  // Checks if the input is a valid Google Docs edit link
  const regex = /^https:\/\/docs\.google\.com\/document\/d\/[a-zA-Z0-9_-]+\/edit(\?.*)?$/;
  return regex.test(url);
}
