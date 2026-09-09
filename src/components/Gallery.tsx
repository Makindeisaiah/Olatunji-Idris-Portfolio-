import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/portfolioData';
import { GalleryItem } from '../types';
import { ArrowUpRight, Camera } from 'lucide-react';

interface GalleryProps {
  onOpenImage: (image: string, title: string, caption?: string) => void;
}

const CATEGORIES = [
  'All',
  'Portraits',
  'Acting',
  'Fashion',
  'Lifestyle',
  'Behind the Scenes',
  'Creative'
] as const;

export default function Gallery({ onOpenImage }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All');

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-28 px-6 sm:px-12 bg-[#09090b] border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase block mb-3">
              05 / Visual Archives
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mb-2">
              GALLERY
            </h2>
            <p className="font-serif-luxury italic text-lg sm:text-xl text-zinc-400 font-light">
              Curated frames, character studies, high-fashion editorials, and behind-the-scenes moments.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Camera className="w-4 h-4 text-zinc-300" />
            <span>Click any photograph to view in high-resolution lightbox</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-3 mb-12 border-b border-zinc-800 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`gallery-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-mono tracking-[0.16em] uppercase transition-all cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-white text-black border-white font-bold'
                  : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                onClick={() => onOpenImage(item.image, item.title, `${item.category} • ${item.caption}`)}
                className="group relative cursor-pointer overflow-hidden bg-zinc-950 border border-zinc-800/90 hover:border-zinc-400 transition-colors"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-[106%] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono tracking-widest uppercase bg-black/85 text-zinc-300 px-2 py-0.5 border border-zinc-700 backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Caption & Title On Hover */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <h4 className="font-display text-sm font-bold text-white group-hover:text-zinc-200 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-zinc-400 font-sans-clean line-clamp-2 mt-0.5">
                        {item.caption}
                      </p>
                    </div>
                    <span className="p-1.5 bg-white/15 text-white opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Easy Update Note */}
        <div className="mt-14 pt-8 border-t border-zinc-900 text-center">
          <p className="text-xs font-mono text-zinc-500">
            Updating Gallery: Simply add or replace objects in <code className="text-zinc-400 bg-zinc-900 px-1 py-0.5">GALLERY_ITEMS</code> in <code className="text-zinc-400 bg-zinc-900 px-1 py-0.5">src/data/portfolioData.ts</code>.
          </p>
        </div>
      </div>
    </section>
  );
}
