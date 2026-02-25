"use client";

import { motion } from "framer-motion";

const mrrRanges = [
  "$0 - $1K",
  "$1K - $5K",
  "$5K - $10K",
  "$10K - $25K",
  "$25K - $50K",
  "$50K+",
];

const channels = [
  "X (Twitter)",
  "LinkedIn",
  "YouTube",
  "Newsletter",
  "Podcast",
  "Blog",
  "Instagram",
  "TikTok",
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[var(--card)]/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Get Started
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-6">
            Book a Call
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-4">
            20 minutes.
            <br />
            No pitch.
            <br />
            Just clarity.
          </p>
          <p className="text-lg text-[var(--text-secondary)]">
            Tell us a bit about where you are and what you&apos;re building. We&apos;ll tell you exactly whether we can move the needle for you — and how.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          action="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"
          method="POST"
          target="_blank"
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="entry.1234567890"
                placeholder="Jane Smith"
                className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="entry.0987654321"
                placeholder="jane@yourproduct.com"
                className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium mb-2"
            >
              Your Product / Company
            </label>
            <input
              type="text"
              id="company"
              name="entry.1122334455"
              placeholder="What are you building?"
              className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors"
              required
            />
          </div>

          <div>
            <label
              htmlFor="mrr"
              className="block text-sm font-medium mb-2"
            >
              Current MRR
            </label>
            <select
              id="mrr"
              name="entry.5566778899"
              className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none cursor-pointer"
              required
            >
              <option value="">Select a range</option>
              {mrrRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="challenge"
              className="block text-sm font-medium mb-2"
            >
              Your biggest content challenge right now
            </label>
            <textarea
              id="challenge"
              name="entry.6677889900"
              rows={4}
              placeholder="e.g. I post in bursts then go quiet for weeks. I have no system and no time to build one."
              className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">
              Where are you active (or want to be)?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {channels.map((channel) => (
                <label
                  key={channel}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    name="entry.7788990011"
                    value={channel}
                    className="w-4 h-4 rounded border-[var(--border)] text-[var(--accent)] focus:ring-[var(--accent)] focus:ring-offset-0 bg-[var(--background)]"
                  />
                  <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                    {channel}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-4 bg-[var(--accent)] text-[var(--background)] font-semibold rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-300 transform hover:scale-[1.02] text-lg"
            >
              Book My Free Call →
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
