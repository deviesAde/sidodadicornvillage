"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-lime-950">
      {/* Background with a subtle overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/hero/hero-bg.jpg"
          alt="Pesona Ladang Jagung Desa Sidodadi"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Animated Leaves (Abstract representation) */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-20 left-10 z-20 opacity-30 pointer-events-none"
      >
        <div className="w-24 h-24 rounded-full bg-lime-500 blur-3xl" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 z-20 opacity-30 pointer-events-none"
      >
        <div className="w-32 h-32 rounded-full bg-yellow-400 blur-3xl" />
      </motion.div>

      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          Selamat Datang di Pusat Ecopreneurship Desa
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
        >
          SidodadiCorn<span className="text-yellow-400">Village</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl text-lime-100 mb-4 font-light italic"
        >
          "Mengubah Potensi Lokal Menjadi Inovasi Global"
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-gray-200 mb-10 max-w-2xl leading-relaxed"
        >
          Saksikan bagaimana sebuah dedikasi mampu menyulap sisa-sisa hasil panen jagung menjadi jajaran produk ekologis bernilai tinggi. Bersama warga Sidodadi, kami mempelopori ekonomi sirkular untuk masa depan yang lebih hijau.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#produk"
            className="group px-8 py-4 bg-lime-600 hover:bg-lime-700 text-white rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-lime-900/50"
          >
            Temukan Inovasi Kami
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
