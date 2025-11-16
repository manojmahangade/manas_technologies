import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          We build modern digital products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg max-w-2xl text-indigo-100"
        >
          Strategy, engineering and design to accelerate your product roadmap.
        </motion.p>
        <div className="mt-8 flex gap-4">
          <a className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-md font-semibold" href="#contact">Contact us</a>
          <a className="inline-block border border-white/30 px-6 py-3 rounded-md" href="#case-studies">Case studies</a>
        </div>
      </div>
    </section>
  );
}