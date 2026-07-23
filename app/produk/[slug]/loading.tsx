export default function Loading() {
  return (
    <main className="min-h-screen bg-white py-12 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-6 bg-gray-200 rounded w-32 mb-10"></div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="relative aspect-square rounded-3xl bg-gray-200"></div>

          <div className="flex flex-col">
            <div className="h-8 bg-gray-200 rounded-full w-48 mb-6"></div>
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>

            <div className="space-y-3 mb-10">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-11/12"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="h-20 bg-gray-200 rounded-xl"></div>
              <div className="h-20 bg-gray-200 rounded-xl"></div>
            </div>

            <div className="mt-auto">
              <div className="h-32 bg-gray-200 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
