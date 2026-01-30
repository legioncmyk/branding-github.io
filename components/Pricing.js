'use client';
import { motion } from 'framer-motion';

export default function Pricing() {
  const packages = [
    {
      name: 'Bronze',
      price: 'Rp 149.000',
      features: ['Ebook 150hlm', '500 Soal', 'PDF Only'],
      href: '#bronze', // Kosong
    },
    {
      name: 'Silver',
      price: 'Rp 349.000',
      features: ['Semua Bronze', '10 Video', 'Group 3 bln', 'Try Out 4x'],
      recommended: true,
      href: '#silver', // Kosong
    },
    {
      name: 'Gold',
      price: 'Rp 649.000',
      features: ['Semua Silver', 'Konsultasi', 'Update 1 thn', 'Priority Sup'],
      href: '#gold', // Kosong
    },
  ];

  return (
    <section id="produk" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 text-navy"
        >
          Pilih Paket Belajar Anda
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ rotateY: 5, scale: 1.05 }}
              className={`p-8 border rounded-lg shadow-lg ${pkg.recommended ? 'border-gold bg-gray-50' : 'border-gray-200'}`}
            >
              {pkg.recommended && <div className="text-gold font-semibold mb-2">RECOMMENDED</div>}
              <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
              <p className="text-3xl font-bold text-navy mb-6">{pkg.price}</p>
              <ul className="mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="mb-2">✓ {feature}</li>
                ))}
              </ul>
              <motion.a
                href={pkg.href}
                whileHover={{ scale: 1.05 }}
                className="block text-center bg-navy text-white py-3 rounded-lg font-semibold"
              >
                Pilih Paket
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
