'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    { name: 'Ahmad', text: 'Lolos CPNS berkat ebook ini!', img: '/user1.jpg', href: '#testi1' }, // Kosong
    { name: 'Siti', text: 'Komunitasnya sangat membantu.', img: '/user2.jpg', href: '#testi2' }, // Kosong
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimoni" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 text-navy"
        >
          Testimoni Pengguna
        </motion.h2>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="text-center"
        >
          <img src={testimonials[current].img} alt={testimonials[current].name} className="w-20 h-20 rounded-full mx-auto mb-4" />
          <p className="text-lg italic mb-4">"{testimonials[current].text}"</p>
          <p className="font-semibold">{testimonials[current].name}</p>
          <a href={testimonials[current].href} className="text-teal">Lihat Video</a>
        </motion.div>
      </div>
    </section>
  );
}
