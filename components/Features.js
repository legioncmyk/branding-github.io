'use client';
import { motion } from 'framer-motion';
import { BookOpen, Users, TrendingUp } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <BookOpen className="w-12 h-12 text-teal" />,
      title: 'Belajar Efektif',
      desc: 'Video interaktif, latihan berkala, pembahasan detail.',
      href: '#belajar', // Kosong
    },
    {
      icon: <Users className="w-12 h-12 text-teal" />,
      title: 'Komunitas Aktif',
      desc: 'Diskusi langsung, sharing pengalaman, motivasi bersama.',
      href: '#komunitas', // Kosong
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-teal" />,
      title: 'Try Out Realistis',
      desc: 'Sistem CAT simulasi, pembahasan instan, progress tracking.',
      href: '#tryout', // Kosong
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 text-navy"
        >
          Keunggulan Kami
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-8 bg-white rounded-lg shadow-lg"
            >
              <motion.div whileHover={{ scale: 1.2 }}>{feature.icon}</motion.div>
              <h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
              <a href={feature.href} className="text-teal mt-4 inline-block">Pelajari Lebih</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
