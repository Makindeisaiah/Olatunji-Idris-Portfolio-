import { motion, AnimatePresence } from 'motion/react';
import { X, HelpCircle, Image, FileEdit, FolderPlus, Sparkles } from 'lucide-react';

interface CustomizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomizeGuideModal({ isOpen, onClose }: CustomizeGuideModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#0e0e11] border border-zinc-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6">
            <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 uppercase block mb-1">
              Owner Documentation
            </span>
            <h2 className="font-display text-2xl font-bold uppercase text-white">
              Updating Your Portfolio
            </h2>
            <p className="text-sm text-zinc-400 font-sans-clean mt-1">
              Everything in this website is centralized in a single clean data file for effortless updates.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-4 bg-zinc-950 border border-zinc-800">
              <div className="flex items-center gap-2 mb-2 text-white font-mono text-xs font-semibold uppercase">
                <Image className="w-4 h-4 text-zinc-300" />
                <span>1. Replacing Photographs</span>
              </div>
              <p className="text-xs text-zinc-400 font-sans-clean leading-relaxed">
                Add your high-resolution images to the project (or host them via Cloud/Drive/CDN) and update the file paths in <code className="text-white bg-zinc-900 px-1 py-0.5">src/data/portfolioData.ts</code>. You can update <code className="text-white bg-zinc-900 px-1 py-0.5">HEADSHOTS</code>, <code className="text-white bg-zinc-900 px-1 py-0.5">MODELING_ITEMS</code>, and <code className="text-white bg-zinc-900 px-1 py-0.5">GALLERY_ITEMS</code>.
              </p>
            </div>

            <div className="p-4 bg-zinc-950 border border-zinc-800">
              <div className="flex items-center gap-2 mb-2 text-white font-mono text-xs font-semibold uppercase">
                <FileEdit className="w-4 h-4 text-zinc-300" />
                <span>2. Updating Modeling Specs</span>
              </div>
              <p className="text-xs text-zinc-400 font-sans-clean leading-relaxed">
                In <code className="text-white bg-zinc-900 px-1 py-0.5">src/data/portfolioData.ts</code>, modify <code className="text-white bg-zinc-900 px-1 py-0.5">MODELING_SPECS</code> with your exact measurements (Height, Chest, Waist, Shoes, Eyes, Hair). The website and Comp Card will update automatically.
              </p>
            </div>

            <div className="p-4 bg-zinc-950 border border-zinc-800">
              <div className="flex items-center gap-2 mb-2 text-white font-mono text-xs font-semibold uppercase">
                <FolderPlus className="w-4 h-4 text-zinc-300" />
                <span>3. Adding Acting Projects</span>
              </div>
              <p className="text-xs text-zinc-400 font-sans-clean leading-relaxed">
                Add new items to <code className="text-white bg-zinc-900 px-1 py-0.5">ACTING_PROJECTS</code> with Title, Role, Year, Category, Synopsis, and Media URL. They render immediately as responsive cards with modal dialogs.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-white text-black text-xs font-mono uppercase tracking-wider font-semibold hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              Got It
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
