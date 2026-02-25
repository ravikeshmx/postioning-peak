"use client";

import { motion } from "framer-motion";

const personas = [
  {
    title: "Building Something Real",
    description:
      "Founders who are building something real and have no time for marketing",
  },
  {
    title: "Knowing They Should",
    description:
      "Know they should be on LinkedIn and X but keep deprioritising it",
  },
  {
    title: "Want Real Authority",
    description:
      "Want their content to build real authority — not just vanity metrics",
  },
  {
    title: "Handing Over Execution",
    description:
      "Are okay handing over execution while staying in control of their voice",
  },
  {
    title: "Thinking Long-Term",
    description:
      "Think long-term — authority compounds, it doesn&apos;t happen overnight",
  },
];

export default function WhoWeWorkWith() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Who We Work With
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-6">
            Built for founders.
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl">
            If you&apos;re a founder struggling with your presence on X or
            LinkedIn, and you&apos;re unable to give time to marketing —
            we&apos;re the team for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--surface)] rounded-xl p-6 border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-[var(--background)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">{persona.title}</h4>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {persona.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
