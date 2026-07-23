"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Sprout, Info } from "lucide-react";

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-100 text-lime-800 text-sm font-bold tracking-wide uppercase mb-6">
            <Info className="w-4 h-4" />
            Tentang Kami
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Mengenal SidodadiCorn<span className="text-lime-600">Village</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Sebuah perjalanan transformasi dari potensi lokal pedesaan menjadi pelopor inovasi ekologis dan pemberdayaan masyarakat.
          </p>
        </motion.div>

        {/* Artikel Desa Sidodadi */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12"
        >
          <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
            <div className="w-14 h-14 bg-lime-50 rounded-2xl flex items-center justify-center shrink-0">
              <Sprout className="w-7 h-7 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Desa Sidodadi, Tempurejo</h2>
              <p className="text-lime-700 font-medium mt-1">Lumbung Jagung & Pusat Inovasi</p>
            </div>
          </div>
          
          <div className="prose prose-lime max-w-none text-gray-600 leading-loose">
            <p>
              Desa Sidodadi yang terletak di Kecamatan Tempurejo, Kabupaten Jember, telah lama dikenal sebagai salah satu lumbung agrikultur dengan tanah yang sangat subur. Komoditas utama yang menggerakkan roda perekonomian warga di sini adalah <strong>Jagung</strong>. Selama bertahun-tahun, panen jagung yang melimpah memberikan kehidupan bagi masyarakat, namun di sisi lain juga menyisakan masalah berupa menumpuknya limbah pasca-panen seperti batang, daun, bonggol, hingga klobot (kulit jagung).
            </p>
            <p>
              Menyadari potensi besar yang terbuang percuma, masyarakat Sidodadi mulai bergerak. Dengan semangat kebersamaan dan dorongan inovasi, warga desa bertransformasi menjadi komunitas <em>ecopreneur</em>. Limbah yang dulunya dibakar dan mencemari udara, kini diolah melalui metode <em>Zero Waste Agriculture</em> (Pertanian Bebas Limbah). 
            </p>
            <ul className="list-none pl-0 space-y-4 my-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-lime-500 shrink-0 mt-0.5" />
                <span><strong>Bonggol jagung</strong> disulap menjadi loofah eksfoliasi kulit alami dan briket arang ramah lingkungan.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-lime-500 shrink-0 mt-0.5" />
                <span><strong>Klobot (kulit jagung)</strong> diolah menjadi kriya bernilai seni tinggi dan inovasi kuliner abon nabati yang lezat.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-lime-500 shrink-0 mt-0.5" />
                <span><strong>Batang dan Daun</strong> difermentasi menjadi pupuk kompos premium pembawa kesuburan baru bagi tanah.</span>
              </li>
            </ul>
            <p>
              Kini, Desa Sidodadi bukan lagi sekadar desa pertanian biasa, melainkan pusat edukasi pelestarian lingkungan dan percontohan ekonomi sirkular yang mandiri.
            </p>
          </div>
        </motion.article>

        {/* Artikel Tentang Web */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl mb-12 relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-lime-800 opacity-30 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Tentang Platform Ini</h2>
            <div className="prose prose-invert max-w-none text-gray-300 leading-loose">
              <p>
                Platform digital <strong>SidodadiCornVillage</strong> lahir dari sebuah visi besar untuk menjembatani inovasi lokal dengan dunia yang lebih luas. Melalui website ini, kami bertujuan untuk menjadi etalase digital komprehensif yang tidak hanya memamerkan produk, tetapi juga mengedukasi masyarakat luas tentang pentingnya gaya hidup ramah lingkungan.
              </p>
              <p>
                Website ini dirancang secara khusus untuk memenuhi tiga fungsi utama:
              </p>
              <ol className="text-gray-200 mt-4">
                <li className="mb-2"><strong>E-Commerce (Katalog Produk):</strong> Memudahkan masyarakat luas untuk melihat dan membeli karya inovatif dari limbah jagung secara langsung dari para perajin desa.</li>
                <li className="mb-2"><strong>Pusat Edukasi (Pengetahuan):</strong> Menghadirkan informasi dan literatur akurat mengenai pemanfaatan jagung dan praktik <em>ecopreneurship</em>.</li>
                <li className="mb-2"><strong>Jendela Komunikasi:</strong> Menjadi jembatan bagi instansi, pelajar, dan masyarakat yang ingin berkolaborasi, belajar, maupun berkunjung langsung ke Desa Sidodadi.</li>
              </ol>
              <p className="mt-6 text-lime-400 font-medium">
                Bersama platform ini, kami mengundang Anda untuk turut serta mendukung pemberdayaan masyarakat pedesaan dan menjadi bagian dari solusi perubahan iklim.
              </p>
            </div>
          </div>
        </motion.article>

      </div>
    </main>
  );
}
