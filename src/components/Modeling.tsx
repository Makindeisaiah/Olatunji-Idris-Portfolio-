import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_INFO, MODELING_ITEMS, MODELING_SPECS } from '../data/portfolioData';
import { ArrowUpRight, SlidersHorizontal, FileText, Check } from 'lucide-react';
import { ModelingItem } from '../types';

interface ModelingProps {
  onOpenImage: (image: string, title: string, caption?: string) => void;
  onOpenCompCard: () => void;
}

const CATEGORIES = ['ALL', 'EDITORIAL', 'FASHION', 'LIFESTYLE', 'COMMERCIAL'] as const;

export default function Modeling({ onOpenImage, onOpenCompCard }: ModelingProps) {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('ALL');
  const [copiedSpecs, setCopiedSpecs] = useState(false);

  const filteredItems = activeCategory === 'ALL'
    ? MODELING_ITEMS
    : MODELING_ITEMS.filter((item) => item.category === activeCategory);

  const handleCopySpecs = () => {
    const specsText = `Olatunji Idris — Modeling Specs\nHeight: ${MODELING_SPECS.height}\nMeasurements: ${MODELING_SPECS.measurements}\nShoe Size: ${MODELING_SPECS.shoeSize}\nHair: ${MODELING_SPECS.hair}\nEyes: ${MODELING_SPECS.eyes}\nLocation: ${MODELING_SPECS.location}\nAvailability: ${MODELING_SPECS.availability}`;
    navigator.clipboard.writeText(specsText);
    setCopiedSpecs(true);
    setTimeout(() => setCopiedSpecs(false), 2200);
  };

  return (
    <section id="modeling" className="relative py-28 px-6 sm:px-12 bg-[#09090b] border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase block mb-3">
            03 / Editorial & Fashion
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
            {PORTFOLIO_INFO.modeling.title}
          </h2>
          <p className="font-serif-luxury italic text-xl sm:text-2xl text-zinc-300 font-light max-w-2xl">
            “{PORTFOLIO_INFO.modeling.intro}”
          </p>
          <div className="w-16 h-[2px] bg-zinc-700 mt-6" />
        </div>

        {/* Modeling Profile Section (Measurements & Specs) */}
        <div className="mb-20 bg-[#0e0e11] border border-zinc-800 p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-6 mb-8 gap-4">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase block mb-1">
                Measurements & Specs
              </span>
              <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide">
                Modeling Profile
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                id="modeling-copy-specs-btn"
                onClick={handleCopySpecs}
                className="px-4 py-2 text-xs font-mono uppercase tracking-wider bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                {copiedSpecs ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>Copy Specs</span>
                  </>
                )}
              </button>

              <button
                id="modeling-open-comp-card-btn"
                onClick={onOpenCompCard}
                className="px-4 py-2 text-xs font-mono uppercase tracking-wider bg-white text-black hover:bg-zinc-200 font-semibold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Comp Card</span>
              </button>
            </div>
          </div>

          {/* Specs Grid with clear editable placeholders */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-900/60 p-4 border border-zinc-800/80">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                Height
              </span>
              <span className="font-display text-sm sm:text-base font-semibold text-white">
                {MODELING_SPECS.height}
              </span>
            </div>

            <div className="bg-zinc-900/60 p-4 border border-zinc-800/80">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                Measurements
              </span>
              <span className="font-display text-sm sm:text-base font-semibold text-white">
                {MODELING_SPECS.measurements}
              </span>
            </div>

            <div className="bg-zinc-900/60 p-4 border border-zinc-800/80">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                Shoe Size
              </span>
              <span className="font-display text-sm sm:text-base font-semibold text-white">
                {MODELING_SPECS.shoeSize}
              </span>
            </div>

            <div className="bg-zinc-900/60 p-4 border border-zinc-800/80">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                Hair
              </span>
              <span className="font-display text-sm sm:text-base font-semibold text-white">
                {MODELING_SPECS.hair}
              </span>
            </div>

            <div className="bg-zinc-900/60 p-4 border border-zinc-800/80">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                Eyes
              </span>
              <span className="font-display text-sm sm:text-base font-semibold text-white">
                {MODELING_SPECS.eyes}
              </span>
            </div>

            <div className="bg-zinc-900/60 p-4 border border-zinc-800/80">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                Location
              </span>
              <span className="font-display text-sm sm:text-base font-semibold text-white">
                {MODELING_SPECS.location}
              </span>
            </div>

            <div className="bg-zinc-900/60 p-4 border border-zinc-800/80 sm:col-span-2">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                Availability
              </span>
              <span className="font-display text-sm sm:text-base font-semibold text-white">
                {MODELING_SPECS.availability}
              </span>
            </div>
          </div>
          <p className="text-[11px] font-mono text-zinc-500 mt-4">
            Note: Placeholders ready to be populated with your official agency-measured physical specs.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4 border-b border-zinc-800 pb-4">
          <div className="flex items-center flex-wrap gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                id={`modeling-category-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-mono tracking-[0.2em] uppercase transition-all cursor-pointer border ${
                  activeCategory === cat
                    ? 'bg-white text-black border-white font-bold'
                    : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-zinc-500">
            Showing {filteredItems.length} editorials
          </span>
        </div>

        {/* Editorial Masonry / Dynamic Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                onClick={() => onOpenImage(item.image, item.title, item.caption)}
                className="group relative cursor-pointer overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-zinc-400 transition-colors"
              >
                <div className={`overflow-hidden relative ${
                  item.aspect === 'tall' ? 'aspect-[3/4]' : item.aspect === 'wide' ? 'aspect-[16/10]' : 'aspect-square'
                }`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-[108%] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-75 group-hover:opacity-50 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-black/80 text-zinc-300 border border-zinc-700/80 backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Overlay Details */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <h4 className="font-display text-base font-bold text-white group-hover:text-zinc-200 transition-colors">
                        {item.title}
                      </h4>
                      {item.caption && (
                        <p className="text-xs text-zinc-400 font-sans-clean line-clamp-2 mt-1">
                          {item.caption}
                        </p>
                      )}
                    </div>
                    <span className="p-2 bg-white/10 text-white rounded-none opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
