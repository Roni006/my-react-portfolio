import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { SOCIALS } from "../constants";

import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add real submission logic or toast notification here
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-primary-500 font-bold mb-4">
              Contact
            </h2>
            <h3 className="text-4xl lg:text-6xl font-display font-bold mb-8 italic">
              Let's <span className="text-white">Collaborate.</span>
            </h3>
            <p className="text-zinc-400 text-lg mb-12 max-w-md">
              Have a project in mind or just want to chat about development?
              Feel free to reach out. I'm always open to discussing new
              opportunities and challenges.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-500 font-bold mb-1">
                    Email Me
                  </div>
                  <a
                    href="mailto:anik54908@gmail.com"
                    className="text-lg font-medium text-white hover:text-primary-400 transition-colors"
                  >
                    anik54908@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-500 font-bold mb-1">
                    Call Me
                  </div>
                  <a
                    href="tel:01774952114"
                    className="text-lg font-medium text-white hover:text-primary-400 transition-colors"
                  >
                    01774952114
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-500 font-bold mb-1">
                    Location
                  </div>
                  <div className="text-lg font-medium text-white">
                    34, West Nakhal Para,
                    <br /> Tejgaon Dhaka-1215
                  </div>
                </div>
              </div>
            </div>

            {/*icons */}
            <div className="flex gap-4">
              {/* item 1 */}
              <div className="group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all text-[20px]">
                  <a
                    href="https://www.facebook.com/anik.islam.roni.06"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SlSocialFacebook />
                  </a>
                </div>
              </div>

              {/* item 2 */}
              <div className="group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all text-[20px]">
                  <a
                    href="https://github.com/Roni006"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <VscGithubAlt />
                  </a>
                </div>
              </div>

              {/* item 3 */}
              <div className="group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group group-hover:bg-primary-500 group-hover:text-white transition-all text-[20px]">
                  <a href="https://www.linkedin.com/in/anik-islam-293414306/" target="_blank" rel="noopener noreferrer">
                    <SlSocialLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right:   */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary-600/10 blur-[100px] -z-10 rounded-full" />

            <form
              onSubmit={handleSubmit}
              className="glass-card p-5 md:p-10 lg:p-12 space-y-8 lg:space-y-10"
            >
              <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1 block mb-2">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full px-5 py-3 lg:px-6 lg:py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none transition-colors text-white placeholder:text-zinc-600"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1 block mb-2">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full px-5 py-3 lg:px-6 lg:py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none transition-colors text-white placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1 block mb-2">
                  Subject
                </label>
                <input
                  required
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Project Inquiry"
                  className="w-full px-5 py-3 lg:px-6 lg:py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none transition-colors text-white placeholder:text-zinc-600"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1 block mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-3 lg:px-6 lg:py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none transition-colors text-white placeholder:text-zinc-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all shadow-xl cursor-pointer"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
