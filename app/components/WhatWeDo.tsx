"use client";

import { motion } from "framer-motion";

export default function WhatWeDo() {
  return (
    <section className="py-32 px-6 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-6">
            You focus on building.
            <br />
            We handle everything else.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
              If you&apos;re a founder struggling to give time to marketing,
              distribution, or showing up online — we&apos;re here for you. We
              take over your Twitter, LinkedIn, and online presence completely,
              so you never have to think about it.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              But we don&apos;t just chase likes and impressions. We build your
              authority — so the right people know who you are, trust what you
              say, and come to you when they&apos;re ready to buy, hire, or
              partner.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[var(--surface-elevated)] rounded-2xl p-8 border border-[var(--border)]"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[var(--accent)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    You focus on creativity and coding
                  </h4>
                  <p className="text-[var(--text-secondary)]">
                    Let us help you build your personal brand.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[var(--accent)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    You focus on building the product
                  </h4>
                  <p className="text-[var(--text-secondary)]">
                    We build the audience that finds it.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
