import { motion } from 'motion/react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { Compass, Flame, Sparkles } from 'lucide-react';

export default function Ambition() {
  const visionPillars = [
    {
      num: '01',
      title: 'Diverse & Challenging Roles',
      desc: 'Stepping fearlessly into characters with psychological friction, deep stakes, and human contradictions.'
    },
    {
      num: '02',
      title: 'Collaborating With Visionary Creatives',
      desc: 'Partnering with bold directors, writers, and artists who value honest expression and fearless storytelling.'
    },
    {
      num: '03',
      title: 'Continuous Performer Evolution',
      desc: 'Constantly training voice, body, emotional availability, and presence with uncompromising discipline.'
    },
    {
      num: '04',
      title: 'A Recognizable Personal Identity',
      desc: 'Carving a distinct signature that merges cinematic poise, cultural authenticity, and magnetic individuality.'
    },
    {
      num: '05',
      title: 'Creating Meaningful Work',
      desc: 'Prioritizing projects that provoke conversation, resonate deeply, and withstand the test of time.'
    },
    {
      num: '06',
      title: 'Inspiring Through the Journey',
      desc: 'Showing what is possible when relentless ambition meets grounded purpose, resilience, and heart.'
    },
    {
      num: '07',
      title: 'Leaving a Lasting Mark',
      desc: 'Shaping a profound legacy across global entertainment and culture that echoes far into the future.'
    }
  ];

  return (
    <section id="ambition" className="relative py-32 px-6 sm:px-12 bg-[#0b0b0e] border-t border-zinc-900 overflow-hidden">
      {/* Subtle architectural background line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-zinc-900/60 hidden lg:block -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-[0.3em] text-zinc-500 uppercase block mb-3">
            04 / Purpose & Trajectory
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white mb-6">
            {PORTFOLIO_INFO.ambition.title}
          </h2>
          <div className="w-20 h-[2px] bg-zinc-700 mx-auto" />
        </div>

        {/* Main Inspirational Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="bg-black/60 border border-zinc-800/90 p-8 sm:p-14 lg:p-16 mb-24 relative backdrop-blur-sm"
        >
          <div className="absolute top-0 left-8 -translate-y-1/2 px-4 py-1 bg-zinc-900 border border-zinc-700 text-[10px] font-mono tracking-[0.25em] text-zinc-300 uppercase">
            Core Ambition
          </div>
          <p className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-100 italic leading-[1.3] text-center font-light tracking-wide max-w-4xl mx-auto">
            “{PORTFOLIO_INFO.ambition.mainStatement}”
          </p>
        </motion.div>

        {/* Vision Pillars Grid */}
        <div className="mb-28">
          <div className="flex items-center justify-between mb-12 border-b border-zinc-800 pb-4">
            <span className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase">
              The Path Forward • Seven Commitments
            </span>
            <span className="text-xs font-mono text-zinc-500">
              Focus & Standards
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visionPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-500 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-zinc-500 font-bold group-hover:text-white transition-colors">
                      {pillar.num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-white transition-colors" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-white mb-3 group-hover:text-zinc-200 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans-clean">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ending Strong Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center py-16 px-6 border-t border-b border-zinc-800 bg-[#09090b]"
        >
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-zinc-500 block mb-4">
            The Philosophy
          </span>
          <h3 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white max-w-4xl mx-auto leading-tight">
            “{PORTFOLIO_INFO.ambition.endingStatement}”
          </h3>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 tracking-[0.2em] uppercase mt-6">
            Olatunji Idris
          </p>
        </motion.div>
      </div>
    </section>
  );
}
