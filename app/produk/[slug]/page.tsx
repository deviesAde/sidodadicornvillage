import { products } from "@/app/data/products";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle, ShieldCheck, Leaf, Recycle } from "lucide-react";
import { notFound } from "next/navigation";

// Generate static params for static export
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const whatsappNumber = "6283846588978";
  const handleOrderLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Halo, saya tertarik untuk memesan produk *${product.name}*. Apakah barangnya tersedia?`)}`;

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link 
          href="/produk"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-lime-600 transition-colors mb-10 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Katalog
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Product Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
            <div className="absolute inset-0 bg-yellow-50/50 flex items-center justify-center" />
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-100 text-lime-800 text-sm font-semibold w-max mb-6">
              <Leaf className="w-4 h-4" />
              Bahan Dasar: {product.material}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-2xl font-bold text-lime-700 mb-8">
              {product.price}
            </p>

            <div className="prose prose-lime max-w-none mb-10">
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <ShieldCheck className="w-8 h-8 text-lime-600" />
                <span className="font-medium text-gray-900">Kualitas Terjamin</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <Recycle className="w-8 h-8 text-lime-600" />
                <span className="font-medium text-gray-900">Ramah Lingkungan</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <div className="mt-auto">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Tertarik dengan produk ini?</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Pemesanan saat ini dilakukan secara langsung melalui WhatsApp untuk memastikan ketersediaan dan diskusi pengiriman.
                </p>
                <a
                  href={handleOrderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-colors text-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  Beli via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
