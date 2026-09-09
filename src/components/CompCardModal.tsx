import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Share2 } from 'lucide-react';
import { PORTFOLIO_INFO, MODELING_SPECS, ASSETS } from '../data/portfolioData';

interface CompCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CompCardModal({ isOpen, onClose }: CompCardModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto print:p-0 print:bg-white print:static">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#0b0b0e] border border-zinc-800 max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-10 relative print:border-none print:bg-white print:text-black print:max-h-none print:overflow-visible"
        >
          {/* Close & Print Buttons */}
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6 print:hidden">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-[0.25em] text-zinc-400 uppercase">
                Industry Composite Card
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Comp Card Printable Body */}
          <div className="space-y-8 print:space-y-4">
            {/* Header / Brand */}
            <div className="text-center">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-[0.15em] uppercase text-white print:text-black">
                {PORTFOLIO_INFO.name}
              </h2>
              <p className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-400 print:text-zinc-600 mt-1">
                Actor • Model • Creative
              </p>
            </div>

            {/* Layout: Main Large Headshot + 3 Editorial Support Frames */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* Main Theatrical Shot */}
              <div className="md:col-span-7 bg-zinc-950 border border-zinc-800 overflow-hidden print:border-zinc-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={ASSETS.hero}
                    alt="Olatunji Idris Comp Card Main"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-[105%]"
                  />
                </div>
              </div>

              {/* 2 Supporting Editorial Frames */}
              <div className="md:col-span-5 flex flex-col justify-between gap-4">
                <div className="aspect-[4/3] bg-zinc-950 border border-zinc-800 overflow-hidden print:border-zinc-300">
                  <img
                    src={ASSETS.fashionEditorialMain}
                    alt="Fashion Editorial Still"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-[105%]"
                  />
                </div>
                <div className="aspect-[4/3] bg-zinc-950 border border-zinc-800 overflow-hidden print:border-zinc-300">
                  <img
                    src={ASSETS.actingHeadshotMain}
                    alt="Acting Headshot Profile"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-[105%]"
                  />
                </div>
              </div>
            </div>

            {/* Physical Specs & Details */}
            <div className="bg-zinc-900/70 border border-zinc-800 p-6 print:bg-zinc-100 print:border-zinc-300">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest block">
                    Height
                  </span>
                  <span className="font-display text-sm font-semibold text-white print:text-black">
                    {MODELING_SPECS.height}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest block">
                    Measurements
                  </span>
                  <span className="font-display text-sm font-semibold text-white print:text-black">
                    {MODELING_SPECS.measurements}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest block">
                    Shoe
                  </span>
                  <span className="font-display text-sm font-semibold text-white print:text-black">
                    {MODELING_SPECS.shoeSize}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest block">
                    Hair & Eyes
                  </span>
                  <span className="font-display text-sm font-semibold text-white print:text-black">
                    {MODELING_SPECS.hair} / {MODELING_SPECS.eyes}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Contact Footer */}
            <div className="text-center pt-2">
              <p className="text-xs font-mono text-zinc-400 print:text-zinc-700">
                Direct Booking & Agency Representation: <span className="text-white print:text-black font-semibold">{PORTFOLIO_INFO.contact.socials.email}</span>
              </p>
              <p className="text-[10px] font-mono text-zinc-500 print:text-zinc-500 mt-1">
                Portfolio: {window.location.host} • Instagram: {PORTFOLIO_INFO.contact.socials.instagramHandle}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
