import { motion } from 'motion/react';
import { PORTFOLIO_INFO, ASSETS } from '../data/portfolioData';
import { Check, Sparkles, User, Film, Camera } from 'lucide-react';

interface AboutProps {
  onOpenImage: (image: string, title: string, caption?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export default function About({ onOpenImage, onNavigate }: AboutProps) {
  return (
    <section id="about" className="relative py-28 px-6 sm:px-12 bg-[#09090b] border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase block mb-3">
            01 / Identity & Philosophy
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
            {PORTFOLIO_INFO.about.title}
          </h2>
          <div className="w-16 h-[2px] bg-zinc-700 mt-4" />
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Column 1: Large Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div
              onClick={() =>
                onOpenImage(
                  ASSETS.aboutPortrait,
                  'Olatunji Idris',
                  'Editorial portrait study — authentic presence and dramatic focus.'
                )
              }
              className="group cursor-pointer relative overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={ASSETS.aboutPortrait}
                  alt="Olatunji Idris Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[105%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Minimal caption tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-sm border border-zinc-800/80 p-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-display font-medium text-white tracking-wide">
                    Olatunji Idris
                  </p>
                  <p className="text-[10px] text-zinc-400 font-mono tracking-wider">
                    Actor • Model • Creative
                  </p>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  PORTRAIT
                </span>
              </div>
            </div>

            {/* Subtle aesthetic backdrop border */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-zinc-800 -z-10 pointer-events-none" />
          </motion.div>

          {/* Column 2: Biography & Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-10"
          >
            {/* Biography Text Paragraphs */}
            <div className="space-y-6 text-zinc-300 font-sans-clean leading-relaxed text-base sm:text-lg">
              <p className="text-xl sm:text-2xl text-white font-serif-luxury italic leading-relaxed">
                “{PORTFOLIO_INFO.about.paragraphs[0]}”
              </p>

              <p className="text-zinc-300 font-normal">
                {PORTFOLIO_INFO.about.paragraphs[1]}
              </p>

              <p className="text-zinc-400 font-light">
                {PORTFOLIO_INFO.about.paragraphs[2]}
              </p>
            </div>

            {/* Quick Facts Section */}
            <div className="p-6 sm:p-8 bg-[#0e0e11] border border-zinc-800/90 relative">
              <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-3">
                <span className="text-xs font-mono tracking-[0.25em] text-zinc-400 uppercase font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
                  QUICK FACTS
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  PROFILE OVERVIEW
                </span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {PORTFOLIO_INFO.about.quickFacts.map((fact, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-zinc-200 font-medium tracking-wide bg-zinc-900/60 p-2.5 border border-zinc-800/60"
                  >
                    <span className="w-5 h-5 rounded-none bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 flex-shrink-0 text-xs">
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="about-cta-acting"
                onClick={() => onNavigate('acting')}
                className="px-6 py-3 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                Explore Acting Work
              </button>
              <button
                id="about-cta-modeling"
                onClick={() => onNavigate('modeling')}
                className="px-6 py-3 border border-zinc-700 hover:border-zinc-400 text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors hover:bg-zinc-900 cursor-pointer"
              >
                View Modeling
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
