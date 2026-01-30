'use client';
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter'; // Install npm install react-simple-typewriter

export default function Hero() {
  const [text] = useTypewriter({
    words: ['Lolos CPNS 2025', 'Lolos PPPK 2025', 'Lolos Sekolah Kedinasan'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video.mp4" // Ganti dengan URL video Anda
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white z-10 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {text}
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Ebook + Komunitas + Try Out - All in One Platform
        </p>
        <motion.a
          href="#produk" // Kosong, isi nanti
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
        >
          Lihat Paket Belajar
        </motion.a>
      </motion.div>
      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 left-10 text-6xl opacity-20"
      >
        📚
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-20 right-10 text-6xl opacity-20"
      >
        🏆
      </motion.div>
    </section>
  );
}
