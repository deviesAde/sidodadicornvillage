"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, X, Loader2 } from "lucide-react";
import { useState } from "react";

type Article = {
  pageid: number;
  title: string;
  snippet: string;
};

export default function ArticleList({ articles }: { articles: Article[] }) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [fullContent, setFullContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleReadMore = async (article: Article) => {
    setSelectedArticle(article);
    setIsLoading(true);
    setFullContent("");

    try {
      const res = await fetch(
        `https://id.wikipedia.org/w/api.php?action=query&prop=extracts&pageids=${article.pageid}&format=json&origin=*`
      );
      const data = await res.json();
      const extract = data.query.pages[article.pageid].extract;
      setFullContent(extract || "Konten tidak ditemukan.");
    } catch (error) {
      console.error("Error fetching full article:", error);
      setFullContent("Terjadi kesalahan saat memuat artikel.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <motion.article
            key={article.pageid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col h-full"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-lime-50 rounded-xl flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6 text-lime-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 line-clamp-2">
                {article.title}
              </h2>
            </div>
            <div 
              className="text-gray-600 leading-relaxed mb-6 flex-grow line-clamp-4"
              dangerouslySetInnerHTML={{ __html: article.snippet + "..." }}
            />
            <button
              onClick={() => handleReadMore(article)}
              className="text-lime-600 font-semibold hover:text-lime-700 transition-colors mt-auto inline-flex items-center gap-2 self-start"
            >
              Baca Selengkapnya
            </button>
          </motion.article>
        ))}
      </div>

      {/* Modal / Popup for Full Article */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white sticky top-0">
                <h2 className="text-2xl font-bold text-gray-900 pr-8">
                  {selectedArticle.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors absolute right-4 top-4"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto bg-gray-50 flex-grow">
                {isLoading ? (
                  <div className="space-y-6 animate-pulse py-4">
                    {/* Skeleton Title/Heading */}
                    <div className="h-8 bg-gray-200 rounded-md w-3/4 mb-8"></div>
                    
                    {/* Skeleton Paragraphs */}
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-11/12"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                    
                    <div className="space-y-3 pt-4">
                      <div className="h-4 bg-gray-200 rounded w-11/12"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                    </div>
                    
                    <div className="space-y-3 pt-4">
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-10/12"></div>
                    </div>
                  </div>
                ) : (
                  <div 
                    className="article-content max-w-none"
                    dangerouslySetInnerHTML={{ __html: fullContent }}
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
