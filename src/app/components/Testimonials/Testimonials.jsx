'use client';

import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="bg-white dark:bg-zinc-900 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Quote className="mx-auto h-10 w-10 text-green-600 mb-4" />
          <p className="text-xl md:text-2xl font-medium text-zinc-800 dark:text-zinc-100 italic">
            “For generations, our land was our legacy — but its value was locked away.
            With Farmily’s tokenization model, I didn’t have to sell my farm to fund my daughter’s education.
            I just tokenized a portion of our future yields.
            For the first time, farmers like me can access real capital without giving up control.”
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 font-semibold">
            — Ramesh Verma, Fourth-generation Farmer, Punjab
          </p>
        </motion.div>
      </div>
    </section>
  );
}
