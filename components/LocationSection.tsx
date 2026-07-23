"use client";

import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Kunjungi Desa Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Terletak strategis di Tempurejo, Jember. Kami selalu terbuka untuk kolaborasi dan kunjungan edukasi.
          </motion.p>
        </div>

        <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
          {/* Main Map */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="w-full h-[500px] md:h-[600px] relative z-0"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63172.937222383274!2d113.6669!3d-8.3842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd69ba9a1841e21%3A0x8679905d4dfdcf!2sSidodadi%2C%20Tempurejo%2C%20Jember%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi SidodadiCornVillage"
            />
          </motion.div>

          {/* Floating Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute bottom-6 left-6 right-6 md:left-auto md:right-8 md:bottom-8 md:w-80 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 z-10"
          >
            <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
              Pusat Informasi
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Desa Sidodadi, Tempurejo, Jember, Jawa Timur</span>
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-lime-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+62 838-4658-8978</span>
              </p>
            </div>
            <a 
              href="/lokasi"
              className="mt-5 block w-full py-2.5 bg-lime-100 hover:bg-lime-200 text-lime-800 text-center rounded-xl font-semibold transition-colors text-sm"
            >
              Lihat Detail Rute
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
