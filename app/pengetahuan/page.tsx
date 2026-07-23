import ArticleList from "@/components/ArticleList";

async function getArticles() {
  try {
    const res = await fetch(
      "https://id.wikipedia.org/w/api.php?action=query&list=search&srsearch=jagung&utf8=&format=json&origin=*",
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    return data.query.search;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export default async function PengetahuanPage() {
  const articles = await getArticles();

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pusat Pengetahuan Jagung</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kumpulan artikel dan informasi seputar jagung yang diambil langsung dari sumber terpercaya untuk menambah wawasan Anda.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {articles.length > 0 ? (
          <ArticleList articles={articles} />
        ) : (
          <div className="text-center text-gray-500 py-12">
            Gagal memuat artikel atau artikel tidak ditemukan.
          </div>
        )}
      </div>
    </main>
  );
}
