import { products } from "@/app/data/products";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function ProdukPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Produk Karya Warga Sidodadi</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Eksplorasi dan beli berbagai produk olahan jagung dan hasil zero-waste agriculture langsung dari Desa Sidodadi.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <Link href={`/produk/${product.slug}`} className="block flex-grow flex flex-col">
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-yellow-50 flex items-center justify-center" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-lime-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">
                    {product.material}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-lime-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {product.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-lg font-bold text-lime-700">{product.price}</span>
                    <span className="text-sm font-medium text-gray-400 group-hover:text-lime-600 transition-colors flex items-center gap-1">
                      Detail <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
