"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What exactly do you do?",
    answer: "We handle your entire LinkedIn and X (Twitter) presence — writing posts in your voice, managing replies, engaging with your audience daily, and building your authority in the SaaS space. You show up once a week for a quick check-in. We do the rest.",
  },
  {
    question: "How is this different from hiring a social media manager?",
    answer: "A social media manager posts content. We build authority. We do competitor research, define your positioning, map your ICP, and create a 90-day strategy before we write a single post. Everything is built around making you the known voice in your SaaS niche — not just keeping accounts active.",
  },
  {
    question: "I've tried content before and it didn't work. Why would this be different?",
    answer: "Most founder content fails because it's inconsistent, generic, or untargeted. We fix all three — we post daily, we write specifically for your niche, and every piece of content ties back to your authority positioning. We also do 100+ targeted replies per day on X, which is where most of the real growth comes from.",
  },
  {
    question: "Do you write everything or do I have to?",
    answer: "We write everything. You do a monthly strategy call with us to share ideas, opinions, and updates — we turn that into content. You review and approve before anything goes live. That's the only thing we need from you.",
  },
  {
    question: "Will it actually sound like me?",
    answer: "Yes. We spend the first 3 days doing a deep voice audit — going through your existing content, your onboarding answers, and your natural way of speaking. Founders consistently say the content feels like them, just sharper and more consistent.",
  },
  {
    question: "Do I need a big following to start?",
    answer: "No. We've started accounts from zero. The engagement strategy (especially 100+ daily replies on X) builds visibility before you have a large following. You don't need an audience to start — you need a consistent, strategic presence.",
  },
  {
    question: "Is Reddit included?",
    answer: "Reddit is an optional add-on. We build a fresh account to 3,000+ karma within 10 days and then engage daily in your target subreddits. It's not included in the base plan but can be added at any time.",
  },
  {
    question: "What do you need from me to get started?",
    answer: "Access to your LinkedIn and X accounts, 90 minutes for your onboarding deep-dive session, and a willingness to review content once a week. That's it.",
  },
  {
    question: "Do you work with early-stage founders or pre-revenue companies?",
    answer: "We focus specifically on SaaS founders. If you're building in SaaS and struggling to show up online consistently, we're built for you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-[var(--accent)]">Questions</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Everything you need to know about our services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-all duration-300 text-left"
              >
                <span className="font-medium text-lg pr-4">{faq.question}</span>
                <span className="text-[var(--accent)] text-2xl flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
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
                    <p className="p-6 text-[var(--text-secondary)] leading-relaxed">
                      {faq.answer}
                    </p>
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
