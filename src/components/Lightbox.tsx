import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  image: string | null;
  title?: string;
  caption?: string;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export default function Lightbox({
  isOpen,
  image,
  title,
  caption,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!isOpen || !image) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2.5 bg-zinc-900/80 hover:bg-white text-zinc-300 hover:text-black border border-zinc-700 transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Previous Button */}
        {hasPrev && onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-6 z-50 p-3 bg-zinc-900/80 hover:bg-white text-zinc-300 hover:text-black border border-zinc-700 transition-colors cursor-pointer hidden sm:block"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {hasNext && onNext && (
          <button
            onClick={onNext}
            className="absolute right-6 z-50 p-3 bg-zinc-900/80 hover:bg-white text-zinc-300 hover:text-black border border-zinc-700 transition-colors cursor-pointer hidden sm:block"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Image Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="max-w-5xl max-h-[90vh] w-full px-4 flex flex-col items-center justify-center select-none"
        >
          <div className="relative max-h-[75vh] overflow-hidden border border-zinc-800 shadow-2xl bg-black">
            <img
              src={image}
              alt={title || 'Photograph Preview'}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] w-auto max-w-full object-contain filter contrast-[105%]"
            />
          </div>

          {(title || caption) && (
            <div className="mt-4 text-center max-w-xl">
              {title && (
                <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                  {title}
                </h3>
              )}
              {caption && (
                <p className="text-xs sm:text-sm text-zinc-400 font-sans-clean mt-1">
                  {caption}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
