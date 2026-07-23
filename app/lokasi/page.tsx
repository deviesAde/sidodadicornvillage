"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function LokasiPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Lokasi Kami</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kunjungi Desa Sidodadi, pusat inovasi pengolahan jagung dan ecopreneurship terpadu.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-lime-50 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-lime-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Alamat</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Desa Sidodadi, Kecamatan Tempurejo, Kabupaten Jember, Jawa Timur, Indonesia
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-lime-50 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-lime-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Kontak Pemesanan</h3>
                <p className="text-gray-600 text-sm">
                  +62 838-4658-8978 (WhatsApp)
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-lime-50 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-lime-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Jam Operasional</h3>
                <p className="text-gray-600 text-sm">
                  Senin - Sabtu: 08:00 - 16:00 WIB<br />
                  Minggu: Tutup
                </p>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 relative group"
          >
            {/* Decorative background behind map */}
            <div className="absolute -inset-4 bg-lime-100 rounded-[2.5rem] transform rotate-1 opacity-50 group-hover:rotate-2 transition-transform duration-500"></div>
            
            <div className="relative bg-white p-3 rounded-[2rem] shadow-xl border border-gray-100 h-[450px] lg:h-full w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63172.937222383274!2d113.6669!3d-8.3842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd69ba9a1841e21%3A0x8679905d4dfdcf!2sSidodadi%2C%20Tempurejo%2C%20Jember%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1.5rem', filter: 'contrast(1.05) saturate(1.1)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Desa Sidodadi Tempurejo"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
