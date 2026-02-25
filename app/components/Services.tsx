"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Authority Blueprint",
    subtitle: "The strategy that everything else is built on",
    features: [
      "Deep-dive into your niche, competitors, and audience landscape",
      "Category mapping — where you fit and how to stand out",
      "ICP refinement for public content — who are you really talking to?",
      "3–5 Authority Pillars defined around your expertise and opinions",
      "Content angle bank — 50+ idea seeds extracted from your experience",
      "90-Day Authority Roadmap — your full plan from day one",
    ],
    deliverable:
      "Full Authority Blueprint document delivered before we go live.",
  },
  {
    number: "02",
    title: "X (Twitter) Authority Engine",
    subtitle: "Your primary growth channel — we go all in here",
    features: [
      "3–4 original threads posted every single day",
      "100+ strategic replies daily — engaging in conversations where your audience actually is",
      "We identify the key accounts, communities, and discussions in your niche and show up there consistently",
      "Short-form posts, hot takes, and public thinking posts that build recognition",
      "Real-time commentary on trending industry discussions",
      "Profile optimisation — bio, header, pinned post — all set up for authority",
    ],
    deliverable: "Goal: get you users and inbound from Twitter in your first month.",
  },
  {
    number: "03",
    title: "LinkedIn Authority Engine",
    subtitle: "Where your professional credibility compounds",
    features: [
      "12–16 strategic posts per month written in your authentic voice",
      "Build-in-public posts, lessons, product decisions, and founder stories",
      "Contrarian industry takes and framework posts that establish expertise",
      "Comment management — we keep conversations alive on your posts",
      "Proactive engagement with target accounts in your space",
      "Profile optimisation — headline, featured section, about section rewrite",
    ],
    deliverable: "Weekly content approval — you review before anything goes live.",
  },
  {
    number: "04",
    title: "Strategic Engagement System",
    subtitle: "Showing up in the right rooms, not just broadcasting",
    features: [
      "Daily engagement in key threads where your buyers and peers hang out",
      "Smart reply drafting — authority-based comments that get noticed",
      "Target mapping — we identify the accounts worth being seen around",
      "Warm inbound nurturing — guiding interested followers toward a conversation",
    ],
    deliverable: "Monthly tracking of inbound DMs, partnership requests, and authority signals.",
  },
  {
    number: "05",
    title: "Authority Metrics & Reporting",
    subtitle: "We track what actually matters",
    features: [
      "Profile view growth and follower quality tracking",
      "Inbound DM volume and quality — are the right people reaching out?",
      "Podcast invites, partnership requests, speaking opportunities",
      "Hiring interest and trust signals in comments",
    ],
    deliverable: "Weekly check-in + monthly 60-min Authority Review Call.",
  },
  {
    number: "06",
    title: "Reddit — Community Authority",
    subtitle: "Optional Add-On",
    features: [
      "Account setup and karma building — from zero to 3,000+ in 10 days",
      "Subreddit mapping — finding exactly where your audience lives",
      "Value-first posting in communities like r/SaaS, r/startups, r/Entrepreneur",
      "Daily comment participation — genuine reputation building over time",
      "No spam, no self-promo dumps — only content communities reward",
    ],
    deliverable: "Monthly report: karma growth, post performance, traffic attribution.",
    isOptional: true,
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 px-6 bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-6">
            What we do for you.
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl">
            Everything is done for you. You show up for a weekly check-in. We
            handle the rest.
          </p>
        </motion.div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`rounded-xl border overflow-hidden transition-colors duration-300 ${
                openIndex === index
                  ? "border-[var(--accent)] bg-[var(--surface-elevated)]"
                  : "border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)]/30"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-6">
                  <span className="text-[var(--accent)] font-[family-name:var(--font-display)] text-xl font-bold">
                    {service.number}
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg">{service.title}</h3>
                      {service.isOptional && (
                        <span className="text-xs px-2 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full font-medium">
                          Optional Add-On
                        </span>
                      )}
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm mt-1">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 text-[var(--text-secondary)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 ml-14">
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-3 text-[var(--text-secondary)]"
                          >
                            <svg
                              className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-[var(--border)]">
                        <span className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider">
                          Deliverable:{" "}
                        </span>
                        <span className="text-sm text-[var(--text-secondary)]">
                          {service.deliverable}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
