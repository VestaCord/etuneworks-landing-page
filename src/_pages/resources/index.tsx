import { useEffect, useState } from 'react';

import fetchPdfArticles from './fetchPdfArticles';

type IPdfArticle = {
  // Include the upload or last mod date, determined by path
  path: string;
  title: string;
  uploadDate: string;
  description: string;
};

// const PdfArticleList: Array<IPdfArticle> = [
//   {
//     path: '/assets/pdf/SAMSUNG-INR21700-50S-Cell-Specification.pdf',
//     title: 'Samsung 50S Datasheet',
//     description: 'Cell Specification for Samsung INR21700 50S',
//   },
// ];

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pdfArticles, setPdfArticles] = useState<IPdfArticle[]>([]);
  const [filteredPdfArticles, setFilteredPdfArticles] = useState<IPdfArticle[]>(
    [],
  );
  useEffect(() => {
    const getArticles = async () => {
      const articles: Array<IPdfArticle> = await fetchPdfArticles();
      if (articles) {
        setPdfArticles(articles);
        setFilteredPdfArticles(articles);
      }
    };
    getArticles();
  }, []);

  useEffect(() => {
    const filtered = pdfArticles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredPdfArticles(filtered);
  }, [searchTerm, pdfArticles]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="mb-8 text-6xl font-bold">Resources</h1>
        <input
          type="text"
          placeholder="Search PDFs..."
          className="mb-8 w-full max-w-md rounded border p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="w-full max-w-2xl">
          {filteredPdfArticles.map((article) => (
            <div key={article.path} className="mb-4 rounded border p-4">
              <h2 className="mb-2 text-2xl font-semibold">{article.title}</h2>
              <p className="mb-2 text-gray-600">
                Uploaded: {article.uploadDate}
              </p>
              <p className="text-gray-700">{article.description}</p>
              <a
                href={`/resources/${article.path}`}
                className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              >
                View PDF
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
