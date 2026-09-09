import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { Mail, Instagram, Send, CheckCircle2, ArrowUpRight, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Acting & Casting Inquiry');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('submitting');
    // Simulate sending message with smooth response
    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-12 bg-[#0c0c0e] border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase block mb-3">
            06 / Inquiries & Representation
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
            {PORTFOLIO_INFO.contact.title}
          </h2>
          <p className="font-serif-luxury italic text-xl sm:text-2xl text-zinc-300 font-light max-w-3xl leading-relaxed">
            “{PORTFOLIO_INFO.contact.text}”
          </p>
          <div className="w-16 h-[2px] bg-zinc-700 mt-6" />
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Details & Social Links */}
          <div className="lg:col-span-5 space-y-10">
            <div className="p-8 bg-zinc-950 border border-zinc-800">
              <span className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase block mb-3">
                Representation & Inquiries
              </span>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-4">
                Booking Inquiries
              </h3>
              <p className="text-sm text-zinc-400 font-sans-clean leading-relaxed mb-6">
                Open to theatrical casting calls, independent and studio film productions, commercial shoots, and high-fashion editorial assignments worldwide.
              </p>

              <div className="space-y-4 pt-4 border-t border-zinc-800">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${PORTFOLIO_INFO.contact.socials.email}`}
                    className="text-sm font-mono text-zinc-200 hover:text-white transition-colors hover:underline"
                  >
                    {PORTFOLIO_INFO.contact.socials.email}
                  </a>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                    Availability
                  </span>
                  <span className="text-sm font-mono text-emerald-400">
                    Immediate Consideration & International Travel
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels with placeholders */}
            <div className="p-8 bg-zinc-950 border border-zinc-800">
              <span className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase block mb-4">
                Social Profiles
              </span>
              <div className="space-y-3">
                <a
                  href={PORTFOLIO_INFO.contact.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                    <div>
                      <span className="text-xs font-mono font-medium text-white block">Instagram</span>
                      <span className="text-[10px] font-mono text-zinc-400">
                        {PORTFOLIO_INFO.contact.socials.instagramHandle} (Placeholder)
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white" />
                </a>

                <a
                  href={PORTFOLIO_INFO.contact.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                    <div>
                      <span className="text-xs font-mono font-medium text-white block">TikTok</span>
                      <span className="text-[10px] font-mono text-zinc-400">
                        {PORTFOLIO_INFO.contact.socials.tiktokHandle} (Placeholder)
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white" />
                </a>

                <a
                  href={`mailto:${PORTFOLIO_INFO.contact.socials.email}`}
                  className="flex items-center justify-between p-3.5 bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                    <div>
                      <span className="text-xs font-mono font-medium text-white block">Email Direct</span>
                      <span className="text-[10px] font-mono text-zinc-400">
                        {PORTFOLIO_INFO.contact.socials.email}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Contact Form */}
          <div className="lg:col-span-7 bg-zinc-950 border border-zinc-800 p-8 sm:p-12">
            <span className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase block mb-1">
              Direct Contact
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mb-6">
              Send a Message
            </h3>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 bg-emerald-950/50 border border-emerald-800 text-emerald-300 text-sm font-mono flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                <span>
                  Thank you. Your message has been sent. Olatunji’s team will review your inquiry promptly.
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name or agency"
                    className="w-full bg-[#0e0e11] border border-zinc-800 focus:border-white text-white px-4 py-3 text-sm font-sans-clean placeholder:text-zinc-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="casting@agency.com"
                    className="w-full bg-[#0e0e11] border border-zinc-800 focus:border-white text-white px-4 py-3 text-sm font-sans-clean placeholder:text-zinc-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2">
                  Subject *
                </label>
                <select
                  id="contact-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#0e0e11] border border-zinc-800 focus:border-white text-white px-4 py-3 text-sm font-sans-clean focus:outline-none transition-colors"
                >
                  <option value="Acting & Casting Inquiry">Acting & Casting Inquiry</option>
                  <option value="Modeling & Editorial Booking">Modeling & Editorial Booking</option>
                  <option value="Brand Collaboration & Campaign">Brand Collaboration & Campaign</option>
                  <option value="Creative Project & Feature Film">Creative Project & Feature Film</option>
                  <option value="General Representation Inquiry">General Representation Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details regarding the role, dates, location, or creative opportunity..."
                  className="w-full bg-[#0e0e11] border border-zinc-800 focus:border-white text-white px-4 py-3 text-sm font-sans-clean placeholder:text-zinc-600 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-semibold text-xs font-mono uppercase tracking-[0.25em] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <span>SENDING MESSAGE...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
