'use client';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-navy">LolosKedinasan</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-navy relative">
              Beranda
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </a>
            <a href="#produk" className="text-gray-700 hover:text-navy relative">
              Produk
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </a>
            <a href="#testimoni" className="text-gray-700 hover:text-navy relative">
              Testimoni
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </a>
            <a href="#faq" className="text-gray-700 hover:text-navy relative">
              FAQ
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </a>
            <a href="#login" className="text-navy font-semibold">Login</a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            <a href="#home" className="block px-4 py-2">Beranda</a>
            <a href="#produk" className="block px-4 py-2">Produk</a>
            <a href="#testimoni" className="block px-4 py-2">Testimoni</a>
            <a href="#faq" className="block px-4 py-2">FAQ</a>
            <a href="#login" className="block px-4 py-2">Login</a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
