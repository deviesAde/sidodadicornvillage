"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Sprout } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Sprout className="w-8 h-8 text-lime-600" />,
      title: "Kekayaan Agrikultur Terpendam",
      description: "Desa Sidodadi memiliki potensi alam luar biasa, menghasilkan panen jagung lokal dengan kualitas premium yang menjadi urat nadi perekonomian desa."
    },
    {
      icon: <Recycle className="w-8 h-8 text-lime-600" />,
      title: "Zero Waste Agriculture",
      description: "Tak ada yang terbuang percuma. Kami memastikan setiap helaian klobot hingga kerasnya bonggol jagung memiliki nilai guna dan putaran ekonomi tanpa menyisakan limbah."
    },
    {
      icon: <Leaf className="w-8 h-8 text-lime-600" />,
      title: "Semangat Ecopreneurship",
      description: "Lebih dari sekadar bertani, warga Sidodadi adalah wirausahawan ramah lingkungan yang memadukan kreativitas dengan kepedulian terhadap kelestarian alam sekitar."
    }
  ];

  return (
    <section id="tentang" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold text-amber-600 tracking-widest uppercase mb-3"
          >
            Visi & Misi Kami
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Membentuk Masa Depan dari Sisa Panen
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Melalui gagasan <strong className="text-lime-700 font-semibold">SidodadiCornVillage</strong>, kami mendobrak batas agrikultur tradisional. Kami membuktikan bahwa dengan inovasi yang tepat, keberlanjutan ekosistem dan kesejahteraan ekonomi bisa berjalan seiringan.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 bg-lime-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-lime-100 transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
