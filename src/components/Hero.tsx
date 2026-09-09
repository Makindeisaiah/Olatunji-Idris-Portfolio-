import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_INFO, ASSETS, HEADSHOTS, MODELING_ITEMS } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenImage: (image: string, title: string, caption?: string) => void;
}

export default function Hero({ onNavigate, onOpenImage }: HeroProps) {
  const featuredSelection = [
    {
      type: 'ACTING',
      title: 'Dramatic Theatrical Study',
      image: ASSETS.actingHeadshotMain,
      aspect: '3/4'
    },
    {
      type: 'MODELING',
      title: 'Architectural Haute Couture',
      image: ASSETS.fashionEditorialMain,
      aspect: '3/4'
    },
    {
      type: 'REEL STILL',
      title: 'Screen Narrative Still',
      image: ASSETS.actingReelCover,
      aspect: '16/9'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-[#09090b] overflow-hidden flex flex-col justify-between">
      {/* Cinematic Hero Top Frame */}
      <div className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 px-6 sm:px-12">
        {/* Background Atmosphere Image with subtle dark gradient vignette */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={ASSETS.hero}
            alt="Olatunji Idris - Actor, Model & Creative"
            referrerPolicy="no-referrer"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.62 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover object-center filter grayscale-[30%] contrast-[105%]"
          />
          {/* Subtle multi-directional cinematic gradient mask - avoids harsh borders */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-[#09090b]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/80 via-transparent to-[#09090b]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,11,0.75)_100%)]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
          {/* Subtitle / Profession */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 sm:mb-6"
          >
            <span className="inline-block px-3.5 py-1 text-[11px] sm:text-xs font-mono font-medium tracking-[0.3em] uppercase text-zinc-300 border border-zinc-700/60 bg-black/40 backdrop-blur-sm">
              Actor • Model • Creative
            </span>
          </motion.div>

          {/* Main Name Heading */}
          <motion.h1
            id="hero-main-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.08em] text-white uppercase leading-[1.02] drop-shadow-sm mb-6"
          >
            {PORTFOLIO_INFO.name}
          </motion.h1>

          {/* Core Philosophy Statement */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.5 }}
            className="font-serif-luxury italic text-xl sm:text-2xl md:text-3xl text-zinc-200 font-light tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow"
          >
            “{PORTFOLIO_INFO.tagline}”
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              id="hero-cta-view-work"
              onClick={() => onNavigate('acting')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold text-xs tracking-[0.22em] uppercase transition-all duration-200 hover:bg-zinc-200 cursor-pointer text-center"
            >
              VIEW MY WORK
            </button>
            <button
              id="hero-cta-contact-me"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-black/50 hover:bg-black/80 text-white font-semibold text-xs tracking-[0.22em] uppercase border border-zinc-600 hover:border-zinc-300 transition-all duration-200 backdrop-blur-sm cursor-pointer text-center"
            >
              CONTACT ME
            </button>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            onClick={() => onNavigate('about')}
            className="mt-16 text-zinc-400 hover:text-white transition-colors flex flex-col items-center gap-2 cursor-pointer group focus:outline-none"
            aria-label="Scroll to introduction"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-mono group-hover:tracking-[0.3em] transition-all">
              Discover
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-4 h-4 text-zinc-400 group-hover:text-white" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Below the Hero: Introduction Section */}
      <div className="relative z-10 border-t border-zinc-900 bg-[#0c0c0e] py-16 sm:py-24 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase block mb-4">
            Introduction
          </span>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl text-zinc-100 font-normal leading-relaxed tracking-tight">
            “{PORTFOLIO_INFO.heroIntro}”
          </p>
        </div>
      </div>

      {/* Featured Work Section */}
      <div className="relative z-10 border-t border-zinc-900 bg-[#09090b] py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase block mb-2">
                Selected Portfolio
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
                Featured Work
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                id="hero-featured-view-acting"
                onClick={() => onNavigate('acting')}
                className="text-xs tracking-[0.16em] uppercase text-zinc-400 hover:text-white font-medium flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Acting Roles</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-zinc-700">•</span>
              <button
                id="hero-featured-view-modeling"
                onClick={() => onNavigate('modeling')}
                className="text-xs tracking-[0.16em] uppercase text-zinc-400 hover:text-white font-medium flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Modeling Editorial</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Featured Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredSelection.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onClick={() => onOpenImage(item.image, item.title, item.type)}
                className="group relative cursor-pointer overflow-hidden bg-zinc-950 border border-zinc-800/80 hover:border-zinc-500 transition-colors"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-black/75 text-zinc-300 border border-zinc-700/60 backdrop-blur-sm">
                      {item.type}
                    </span>
                  </div>

                  {/* Label */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="font-display text-sm font-semibold tracking-wide text-white group-hover:text-zinc-200 transition-colors">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-zinc-400 font-mono tracking-wider mt-0.5">
                        Click to expand
                      </p>
                    </div>
                    <span className="p-1.5 bg-white/10 text-white rounded-none opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
