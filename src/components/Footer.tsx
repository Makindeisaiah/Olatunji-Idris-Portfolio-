import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'acting', label: 'Acting' },
    { id: 'modeling', label: 'Modeling' },
    { id: 'ambition', label: 'Ambition' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#070709] border-t border-zinc-900 pt-20 pb-12 px-6 sm:px-12 text-zinc-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-[0.15em] uppercase">
              {PORTFOLIO_INFO.name}
            </h2>
            <p className="text-xs font-mono tracking-[0.25em] text-zinc-400 uppercase">
              Actor • Model • Creative
            </p>
            <p className="font-serif-luxury italic text-base text-zinc-400 max-w-md pt-2">
              “{PORTFOLIO_INFO.tagline}”
            </p>
          </div>

          {/* Links Col */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono tracking-[0.2em] text-zinc-500 uppercase block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-xs font-mono tracking-wider text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Col */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-zinc-500 uppercase block mb-4">
                Connect
              </span>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={PORTFOLIO_INFO.contact.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono tracking-wider text-zinc-400 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={PORTFOLIO_INFO.contact.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono tracking-wider text-zinc-400 hover:text-white transition-colors"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${PORTFOLIO_INFO.contact.socials.email}`}
                    className="text-xs font-mono tracking-wider text-zinc-400 hover:text-white transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 self-start p-2.5 border border-zinc-800 hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2 text-xs font-mono uppercase tracking-wider"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <p>{PORTFOLIO_INFO.copyright}</p>
          <p className="text-[11px] tracking-widest uppercase">
            Official Representation & Casting Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}
