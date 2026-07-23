import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden p-1">
                <Image 
                  src="/logo/logo.png" 
                  alt="Logo SidodadiCornVillage" 
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Sidodadi<span className="text-lime-500">CornVillage</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Pusat inovasi pengolahan jagung dan edukasi ecopreneurship yang terintegrasi secara digital, memberdayakan masyarakat Desa Sidodadi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-lime-400 transition-colors">Beranda</Link></li>
              <li><Link href="/tentang" className="hover:text-lime-400 transition-colors">Tentang Kami</Link></li>
              <li><Link href="/produk" className="hover:text-lime-400 transition-colors">Katalog Produk</Link></li>
              <li><Link href="/pengetahuan" className="hover:text-lime-400 transition-colors">Pengetahuan</Link></li>
              <li><Link href="/lokasi" className="hover:text-lime-400 transition-colors">Lokasi</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-lime-500 shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Desa Sidodadi, Kec. Tempurejo, Kab. Jember, Jawa Timur
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-lime-500 shrink-0" />
                <span className="text-gray-400">+62 838-4658-8978</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-lime-500 shrink-0" />
                <span className="text-gray-400">info@sidodadicornvillage.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-6">Ikuti Kami</h4>
            <p className="text-sm text-gray-400 mb-4">
              Dapatkan pembaruan terbaru tentang produk inovatif dan kegiatan desa kami.
            </p>
            <div className="flex gap-4">
              <a href="#" className="px-4 py-2 rounded-full bg-gray-800 hover:bg-lime-600 hover:text-white transition-all text-sm font-medium">
                Instagram
              </a>
              <a href="#" className="px-4 py-2 rounded-full bg-gray-800 hover:bg-lime-600 hover:text-white transition-all text-sm font-medium">
                Facebook
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SidodadiCornVillage. Hak Cipta Dilindungi.</p>
          <p className="mt-2 md:mt-0">Dibuat dengan ❤️ untuk kemajuan desa</p>
        </div>
      </div>
    </footer>
  );
}
