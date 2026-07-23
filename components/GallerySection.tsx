"use client";

import { motion } from "framer-motion";

export default function GallerySection() {
  // Using placeholder colors since actual images might not be available
  const items = [
    { id: 1, size: "md:col-span-2 md:row-span-2", bg: "bg-lime-200" },
    { id: 2, size: "md:col-span-1 md:row-span-1", bg: "bg-yellow-200" },
    { id: 3, size: "md:col-span-1 md:row-span-1", bg: "bg-amber-200" },
    { id: 4, size: "md:col-span-2 md:row-span-1", bg: "bg-green-200" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Galeri Kegiatan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Potret aktivitas ecopreneurship dan suasana kehidupan agrikultur di SidodadiCornVillage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[600px]">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`rounded-2xl overflow-hidden relative group ${item.size} ${item.bg}`}
            >
              {/* Fallback pattern / Icon could go here */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="text-black/30 font-bold uppercase tracking-widest text-sm">
                  Foto {item.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
