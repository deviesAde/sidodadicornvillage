import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SidodadiCornVillage - Inovasi Jagung Desa",
  description: "Platform digital Desa Sidodadi untuk mengenalkan produk olahan jagung dan limbah jagung berbasis ecopreneurship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <div className="pt-20 flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
