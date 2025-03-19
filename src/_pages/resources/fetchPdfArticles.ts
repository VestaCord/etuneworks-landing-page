import fs from 'fs';
import path from 'path';

interface IPdfArticle {
  path: string;
  title: string;
  uploadDate: string;
  description: string;
}

type IFetchPdfArticles = () => Promise<IPdfArticle[]>; // Corrected call signature

const fetchPdfArticles: IFetchPdfArticles = async () => {
  const pdfDirectory = path.join(process.cwd(), 'public', 'assets', 'pdf');
  try {
    const files = fs.readdirSync(pdfDirectory);
    const articles: IPdfArticle[] = files
      .filter((file) => file.endsWith('.pdf'))
      .map((file) => {
        const fileName = file.replace('.pdf', '');
        // You might want to read a metadata file or name the PDFs in a specific way
        // to extract title, upload date, and description.
        // For now, we'll use placeholder values.
        return {
          path: fileName,
          title: fileName.replace(/-/g, ' '), // replace - with space
          uploadDate: new Date().toLocaleDateString(), // Placeholder
          description: `Description of ${fileName}`, // Placeholder
        };
      });
    return articles;
  } catch (error) {
    console.error('Error fetching PDFs:', error);
    return []; // Return an empty array in case of an error
  }
};

export default fetchPdfArticles;
