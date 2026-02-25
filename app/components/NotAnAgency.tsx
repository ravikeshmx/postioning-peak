"use client";

import { motion } from "framer-motion";

export default function NotAnAgency() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 py-24 relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          We&apos;re not a content agency. We&apos;re a SaaS authority partner so{" "}
          <span className="text-[var(--accent)]">trust compounds before scale does.</span>
        </motion.p>
      </div>
    </section>
  );
}
