'use client';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { step: '1', desc: 'Pilih Paket', href: '#step1' }, // Kosong
    { step: '2', desc: 'Bayar', href: '#step2' }, // Kosong
    { step: '3', desc: 'Akses Materi', href: '#step3' }, // Kosong
    { step: '4', desc: 'Gabung Group', href: '#step4' }, // Kosong
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 text-navy"
        >
          Cara Kerja
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
