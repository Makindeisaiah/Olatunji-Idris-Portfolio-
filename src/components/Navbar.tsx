import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const NAV_LINKS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'acting', label: 'ACTING' },
  { id: 'modeling', label: 'MODELING' },
  { id: 'ambition', label: 'AMBITION' },
  { id: 'gallery', label: 'GALLERY' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-[#27272a]/60 py-3 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            id="nav-brand-button"
            onClick={() => handleLinkClick('home')}
            className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            <span className="block font-display font-bold tracking-[0.2em] text-base sm:text-lg text-white group-hover:text-zinc-300 transition-colors uppercase">
              Olatunji Idris
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-zinc-400 uppercase font-sans-clean font-medium">
              Actor • Model • Creative
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-3 py-1.5 text-xs tracking-[0.18em] font-medium transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300 ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-white"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center">
            <button
              id="nav-cta-contact"
              onClick={() => handleLinkClick('contact')}
              className="px-4 py-2 text-xs tracking-[0.15em] uppercase font-semibold text-white border border-zinc-700 hover:border-zinc-400 hover:bg-zinc-900 transition-all rounded-none cursor-pointer flex items-center gap-1.5"
            >
              <span>Bookings</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="nav-mobile-toggle"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 bg-[#09090b]/98 backdrop-blur-xl md:hidden pt-28 px-8 flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[11px] tracking-[0.25em] text-zinc-500 uppercase font-mono">Navigation</span>
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left text-2xl font-display tracking-widest transition-colors py-1 cursor-pointer flex items-center justify-between border-b border-zinc-800/60 pb-3 ${
                    activeSection === link.id ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && (
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="pt-8 border-t border-zinc-800 flex flex-col gap-4">
              <p className="text-xs text-zinc-400 tracking-wider font-sans-clean">
                For casting, representation & bookings:
              </p>
              <button
                id="mobile-nav-cta-contact"
                onClick={() => handleLinkClick('contact')}
                className="w-full py-3.5 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase text-center cursor-pointer"
              >
                Contact Olatunji
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
