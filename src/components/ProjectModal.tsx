import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, ArrowUpRight, Film, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export default function ProjectModal({ project, onClose, onNavigateToContact }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-[#0e0e11] border border-zinc-800 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/70 hover:bg-white text-zinc-300 hover:text-black border border-zinc-700 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Media Header */}
          <div className="relative aspect-video w-full overflow-hidden bg-black">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter contrast-[105%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-black/40" />

            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
              <span className="text-[11px] font-mono tracking-widest uppercase bg-black/80 text-zinc-300 px-3 py-1 border border-zinc-700">
                {project.category}
              </span>
              <span className="text-[11px] font-mono text-zinc-300 bg-black/80 px-3 py-1 border border-zinc-700">
                {project.year}
              </span>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                Project Detail
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
                {project.title}
              </h2>
            </div>

            {/* Quick Meta Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-zinc-900/70 p-3.5 border border-zinc-800">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-0.5">
                  Character / Role
                </span>
                <p className="font-display text-sm font-semibold text-white">
                  {project.role}
                </p>
              </div>

              <div className="bg-zinc-900/70 p-3.5 border border-zinc-800">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-0.5">
                  Production / Director
                </span>
                <p className="font-display text-sm font-semibold text-white">
                  {project.director || 'Independent Production'}
                </p>
              </div>
            </div>

            {/* Synopsis */}
            <div>
              <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                Synopsis & Performance Focus
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-sans-clean leading-relaxed">
                {project.fullSynopsis || project.description}
              </p>
            </div>

            {project.isPlaceholder && (
              <div className="p-4 bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-400 flex items-start gap-2.5">
                <Film className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                <span>
                  Notice: This card is currently set as an editable placeholder in <code className="text-white">portfolioData.ts</code>. You can easily insert your real credits, links, and production imagery.
                </span>
              </div>
            )}

            {/* Actions */}
            <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onNavigateToContact();
                }}
                className="flex-1 py-3 px-6 bg-white hover:bg-zinc-200 text-black font-semibold text-xs font-mono uppercase tracking-[0.2em] transition-colors cursor-pointer text-center"
              >
                Inquire About Availability
              </button>
              <button
                onClick={onClose}
                className="py-3 px-6 border border-zinc-700 hover:border-zinc-400 text-zinc-300 hover:text-white text-xs font-mono uppercase tracking-[0.2em] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
