'use client';

import { useState } from "react";
import { motion } from "framer-motion";


export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");



  return (
    <section id="contact" className="relative py-32 px-5 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            Let’s <span className="text-[rgb(112,66,248)]">Work Together</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Have an idea, a project, or need a frontend engineer?  
            Send a message — I actually reply.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[rgba(3,0,20,0.65)] backdrop-blur-2xl border border-[rgba(112,66,248,0.35)] rounded-2xl p-10 shadow-xl shadow-[#2A0E61]/60"
        >
         <form
  action="https://formspree.io/f/mwvpdvor"
  method="POST"
  className="grid gap-6"
>
  <input
    type="text"
    name="name"
    required
    placeholder="Your Name"
    className="glass-input"
  />

  <input
    type="email"
    name="email"
    required
    placeholder="Your Email"
    className="glass-input"
  />

  <textarea
    name="message"
    rows={5}
    required
    placeholder="Tell me about your project..."
    className="glass-input resize-none"
  />

  <button
    type="submit"
    className="mt-4 bg-[rgb(112,66,248)] hover:bg-[rgb(92,46,228)] transition text-white font-semibold py-3 rounded-xl"
  >
    Send Message
  </button>
</form>

        </motion.div>
      </div>
    </section>
  );
};
