"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { personalData } from "@/data/personal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botcheck: "", // Honeypot field
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    if (formData.botcheck) {
      // Bot trapped in honeypot
      setStatus("success");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", botcheck: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to deliver message. Please email directly.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please try again or reach out via email directly.");
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-space-2xl px-margin-mobile md:px-margin lg:px-margin-desktop relative"
    >
      <SectionHeading
        badge="❖ 08 / CONTACT"
        title="Initiate Dialogue & Collaboration"
        subtitle="Available for full-time engineering roles, technical internships, and selective contract consultations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Left Column: Direct Contact Info & Telemetry (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <GlassCard tier={2} className="border-gold/25 p-6 space-y-6">
            <div>
              <div className="text-code-tech-xs text-primary font-bold uppercase tracking-widest mb-1">
                LOCATION &amp; BASE
              </div>
              <h3 className="font-headline-md text-xl md:text-2xl text-on-surface font-bold">
                Jaipur, Rajasthan
              </h3>
              <p className="text-xs text-on-surface-variant font-code-tech-xs mt-1">
                {personalData.coordinates}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-gold/15">
              {/* Email */}
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-high/40 hover:bg-surface-container-high border border-gold/20 hover:border-primary transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] text-on-surface-variant uppercase font-code-tech-xs">Email</div>
                  <div className="text-xs md:text-sm text-on-surface font-semibold truncate group-hover:text-primary transition-colors">
                    {personalData.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalData.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-high/40 hover:bg-surface-container-high border border-gold/20 hover:border-gold transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-on-surface-variant uppercase font-code-tech-xs">Phone</div>
                  <div className="text-xs md:text-sm text-on-surface font-semibold group-hover:text-gold transition-colors">
                    {personalData.phone}
                  </div>
                </div>
              </a>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-lg glass-tier-1 hover:border-primary transition-all text-xs font-semibold text-on-surface hover:text-primary"
                >
                  <LinkedinIcon className="w-4 h-4 text-primary" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-lg glass-tier-1 hover:border-gold transition-all text-xs font-semibold text-on-surface hover:text-gold"
                >
                  <GithubIcon className="w-4 h-4 text-gold" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Physical Base Station Badge */}
            <div className="p-3.5 rounded-xl bg-surface-container-high/60 border border-outline-variant/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-container shrink-0" />
                <div>
                  <div className="font-code-tech-xs text-[10px] text-outline uppercase font-semibold">
                    Physical Base Station
                  </div>
                  <div className="font-code-tech-sm text-xs text-on-surface font-medium">
                    Pink City Metro Grid • 26.9124° N, 75.7873° E
                  </div>
                </div>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
            </div>

            {/* Availability Pill */}
            <div className="p-3.5 rounded-lg bg-primary/10 border border-primary/30 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <div className="text-xs">
                <span className="font-bold text-primary">Currently Available:</span>{" "}
                <span className="text-on-surface-variant">Summer 2026 internships, full-time engineering &amp; freelance.</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Right Column: Interactive Form (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <GlassCard tier={2} className="border-gold/25 p-6 md:p-8">
            <h3 className="font-headline-md text-xl md:text-2xl text-on-surface font-bold mb-2">
              Send an Encrypted Message
            </h3>
            <p className="text-xs md:text-sm text-on-surface-variant mb-6">
              Inquiries are received directly in my inbox. Typical response window is within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field (hidden from real users) */}
              <input
                type="text"
                name="botcheck"
                value={formData.botcheck}
                onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name & Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-code-tech-xs uppercase tracking-wider text-on-surface-variant mb-1.5 font-bold">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Radhika Sharma"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-high/60 border border-gold/25 text-on-surface placeholder:text-on-surface-variant/40 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-code-tech-xs uppercase tracking-wider text-on-surface-variant mb-1.5 font-bold">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-high/60 border border-gold/25 text-on-surface placeholder:text-on-surface-variant/40 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all min-h-[44px]"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-[11px] font-code-tech-xs uppercase tracking-wider text-on-surface-variant mb-1.5 font-bold">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Internship opportunity / Project consultation"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-high/60 border border-gold/25 text-on-surface placeholder:text-on-surface-variant/40 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all min-h-[44px]"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[11px] font-code-tech-xs uppercase tracking-wider text-on-surface-variant mb-1.5 font-bold">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your requirements, timeline, or engineering opportunity..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-high/60 border border-gold/25 text-on-surface placeholder:text-on-surface-variant/40 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                />
              </div>

              {/* Status alerts */}
              {status === "error" && (
                <div className="p-3 rounded-lg bg-error-container/40 border border-error/40 text-error flex items-center gap-2 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === "success" && (
                <div className="p-3.5 rounded-lg bg-tertiary/15 border border-tertiary/40 text-tertiary flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your message has been received. I will reply promptly.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-primary-container to-on-primary-container text-surface-container-lowest font-label-caps text-label-caps uppercase tracking-wider font-bold shadow-lg diya-glow hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-60 min-h-[48px] focus-saffron"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Transmission...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Dispatch Transmission</span>
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
