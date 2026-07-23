"use client";

import { motion } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Beranda", href: "/" },
    { name: "Pengetahuan", href: "/pengetahuan" },
    { name: "Lokasi", href: "/lokasi" },
    { name: "Tentang", href: "/tentang" },
    { name: "Produk", href: "/produk" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center overflow-visible">
              <Image 
                src="/logo/logo.png" 
                alt="Logo SidodadiCornVillage" 
                width={48}
                height={48}
                className="object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-gray-900 tracking-tight leading-none hidden sm:block">
                Sidodadi<span className="text-lime-600">Corn</span>
              </span>
              <span className="text-sm font-semibold text-amber-600 tracking-widest hidden sm:block uppercase">
                Village
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-lime-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#produk"
              className="px-6 py-2.5 bg-lime-600 text-white rounded-full font-semibold hover:bg-lime-700 transition-colors"
            >
              Pesan Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-b border-gray-100"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lime-600 hover:bg-lime-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#produk"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-3 py-3 mt-4 text-base font-medium text-white bg-lime-600 hover:bg-lime-700 rounded-md"
            >
              Pesan Sekarang
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
