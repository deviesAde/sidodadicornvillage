export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center animate-pulse">
        <div className="h-12 bg-gray-200 rounded-lg w-1/2 mx-auto mb-6"></div>
        <div className="h-6 bg-gray-200 rounded-md w-3/4 mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full animate-pulse">
              <div className="h-64 bg-gray-200 w-full"></div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="space-y-2 mb-6 flex-grow">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                </div>
                <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
