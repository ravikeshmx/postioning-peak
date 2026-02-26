"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CALENDLY_URL } from "../constants";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const channels = formData.getAll("channels");

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      website: formData.get("website"),
      mrr: formData.get("mrr"),
      challenge: formData.get("challenge"),
      channels,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      window.location.href = CALENDLY_URL;
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-16 px-6 bg-[var(--card)]/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="text-[var(--accent)] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              Get Started
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95] tracking-tight">
              Book a<br />
              <span className="text-[var(--accent)]">Call</span>
            </h2>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-[var(--text-primary)] font-light leading-snug">
                20 minutes.
                <br />
                <span className="text-[var(--text-secondary)]">No pitch.</span>
                <br />
                <span className="italic">Just clarity.</span>
              </p>
              <p className="text-base text-[var(--text-secondary)] max-w-md leading-relaxed">
                Tell us a bit about where you are and what you&apos;re building.
                We&apos;ll tell you exactly whether we can move the needle for
                you and how.
              </p>
            </div>
            <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/30 to-transparent hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-4">Let&apos;s talk</h3>
              <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jane Smith"
                      className="w-full px-3 py-2.5 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@yourproduct.com"
                      className="w-full px-3 py-2.5 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Your Product / Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="What are you building?"
                    className="w-full px-3 py-2.5 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Your Website
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    placeholder="example.com"
                    className="w-full px-3 py-2.5 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="mrr"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Current MRR
                  </label>
                  <select
                    id="mrr"
                    name="mrr"
                    className="w-full px-3 py-2.5 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none cursor-pointer text-sm"
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
                    className="block text-sm font-medium mb-1.5"
                  >
                    Your biggest content challenge right now
                  </label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    rows={3}
                    placeholder="e.g. I post in bursts then go quiet for weeks. I have no system and no time to build one."
                    className="w-full px-3 py-2.5 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] transition-colors resize-none text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Where are you active (or want to be)?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {channels.map((channel) => (
                      <label
                        key={channel}
                        className="flex items-center gap-1.5 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          name="channels"
                          value={channel}
                          className="w-3.5 h-3.5 rounded border-[var(--border)] text-[var(--accent)] focus:ring-[var(--accent)] focus:ring-offset-0 bg-[var(--background)]"
                        />
                        <span className="text-xs text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                          {channel}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  {error && (
                    <p className="text-red-500 text-sm mb-3">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[var(--accent)] text-[var(--background)] font-semibold rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-300 transform hover:scale-[1.02] text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Book My Free Call →"}
                  </button>
                </div>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
