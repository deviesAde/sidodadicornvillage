"use client";

import { motion } from "framer-motion";
import { products } from "@/app/data/products";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ProductSection() {
  return (
    <section id="produk" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-50 border border-lime-100 text-lime-700 text-sm font-bold tracking-wide uppercase mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Produk Lokal
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
            >
              Katalog <span className="text-lime-600">Produk</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Produk berbahan dasar jagung dan olahan limbah pertanian hasil karya warga Desa Sidodadi.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Link 
              href="/produk"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 text-lime-700 font-bold rounded-full hover:bg-lime-50 hover:text-lime-800 transition-colors border border-gray-100"
            >
              Lihat Semua Produk <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
            >
              <Link href={`/produk/${product.slug}`} className="block flex-grow flex flex-col">
                <div className="relative h-72 overflow-hidden bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 flex flex-col flex-grow relative bg-white">
                  <div className="absolute -top-6 left-8 bg-amber-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-md shadow-amber-500/20">
                    {product.material}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-lime-600 transition-colors mt-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{product.description}</p>
                  <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xl font-extrabold text-lime-700">{product.price}</span>
                    <span className="w-10 h-10 rounded-full bg-lime-50 text-lime-600 flex items-center justify-center group-hover:bg-lime-600 group-hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
