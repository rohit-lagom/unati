'use client';

import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      "For generations, our land was our legacy — but its value was locked away. With Farmily’s tokenization model, I didn’t have to sell my farm to fund my daughter’s education. I just tokenized a portion of our future yields. For the first time, farmers like me can access real capital without giving up control.",
    name: "Ramesh Verma",
    role: "Fourth-generation Farmer, Punjab",
  },
  {
    quote:
      "Tokenizing carbon credits gave us liquidity and transparency we never had before. With Farmily, we can now trade our environmental impact like an asset — and that’s a game-changer for small sustainability projects like ours.",
    name: "Meera Joshi",
    role: "Agroforestry Entrepreneur, Maharashtra",
  },
  {
    quote:
      "Farmily helped us fractionalize our landholding for collective ownership without legal chaos. This opens a new model for rural co-ops to grow wealth together instead of selling out.",
    name: "Sanjay Kulkarni",
    role: "PACS Chairman, Rajasthan",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#eaf4f1] to-[#f1f8f6] dark:from-zinc-900 dark:to-zinc-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-800 dark:text-white mb-12">
          What People Are Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.2, ease: 'easeOut' }}
              className="backdrop-blur-md bg-white/30 dark:bg-white/10 border border-white/20 dark:border-zinc-700 rounded-2xl shadow-xl p-6 flex flex-col"
            >
              <Quote className="text-green-600 h-6 w-6 mb-4" />
              <p className="text-sm md:text-base text-zinc-800 dark:text-zinc-100 italic flex-grow">
                “{t.quote}”
              </p>
              <div className="mt-6 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                — {t.name}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
