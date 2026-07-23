"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, TreeDeciduous } from "lucide-react";

export default function VillageKnowledgeSection() {
  return (
    <section className="py-24 bg-lime-900 text-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-lime-800 opacity-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-lime-950 opacity-50 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Mengenal Desa Sidodadi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lime-100 text-lg"
          >
            Lebih dari sekadar penghasil jagung, Desa Sidodadi adalah pionir pemberdayaan masyarakat pedesaan berbasis pelestarian lingkungan hidup dan agrikultur sirkular.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-lime-800/50 backdrop-blur-sm p-8 rounded-2xl border border-lime-700 hover:bg-lime-800 transition-colors"
          >
            <TreeDeciduous className="w-10 h-10 text-lime-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">Agrikultur Subur</h3>
            <p className="text-lime-200 leading-relaxed">
              Dikaruniai dengan tanah yang gembur dan curah hujan yang mendukung, Sidodadi menjadi salah satu sentra jagung terbaik di Tempurejo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-lime-800/50 backdrop-blur-sm p-8 rounded-2xl border border-lime-700 hover:bg-lime-800 transition-colors"
          >
            <Users className="w-10 h-10 text-lime-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">Masyarakat Inovatif</h3>
            <p className="text-lime-200 leading-relaxed">
              Warga desa dilatih menjadi ecopreneur handal, mengubah limbah yang tadinya dibakar menjadi produk kriya dan pertanian yang berharga.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-lime-800/50 backdrop-blur-sm p-8 rounded-2xl border border-lime-700 hover:bg-lime-800 transition-colors"
          >
            <BookOpen className="w-10 h-10 text-lime-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">Pusat Edukasi</h3>
            <p className="text-lime-200 leading-relaxed">
              Kini Sidodadi tidak hanya berjualan, tetapi juga membuka diri sebagai destinasi edukasi wisata bagi pelajar maupun mahasiswa.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
