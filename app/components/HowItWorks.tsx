"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Kickoff Call",
    description:
      "We hop on a call to understand your voice, goals, and vision. You tell us who you are — we figure out how to amplify it.",
  },
  {
    number: "02",
    title: "Strategy Blueprint",
    description:
      "Within 48 hours, we deliver your Authority Blueprint — 90 days of content strategy, pillar topics, and execution plan.",
  },
  {
    number: "03",
    title: "Profile Setup",
    description:
      "We optimize your X and LinkedIn profiles — bio, header, pinned content — everything aligned for authority.",
  },
  {
    number: "04",
    title: "Go Live",
    description:
      "By day 7, you&apos;re live. Content is flowing. Engagement is happening. Your presence is building — while you focus on building.",
  },
];

const inclusions = [
  {
    title: "Content Calendar",
    description: "90-day planned content calendar with themes, topics, and posting schedule",
  },
  {
    title: "Profile Optimization",
    description: "Complete bio, banner, and pinned content setup for both X and LinkedIn",
  },
  {
    title: "Brand Guidelines",
    description: "Visual and tonal guidelines ensuring consistent brand voice across all channels",
  },
  {
    title: "Analytics Setup",
    description: "Track engagement, follower growth, and content performance from day one",
  },
  {
    title: "Engagement System",
    description: "Automated outreach and response templates to build community",
  },
  {
    title: "Ongoing Support",
    description: "Weekly check-ins and unlimited Slack support during execution",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-6">
            Live in one week.
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            We move fast. From onboarding to active execution — everything
            happens inside the first week.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--accent)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                <span className="text-[var(--accent)] font-[family-name:var(--font-display)] font-bold">
                  {step.number}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold">
            What&apos;s Included
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inclusions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 hover:border-[var(--accent)]/50 transition-all duration-300"
            >
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                {item.title}
              </h4>
              <p className="text-[var(--text-secondary)] text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
